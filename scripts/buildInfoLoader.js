const svelte = require('svelte/compiler');
const { execSync } = require('child_process');

const git = cmd => execSync(`git ${cmd}`).toString().trim();

const commitHash = git('rev-parse HEAD');
const commitDate = new Date(git('log -1 --format="%ci"'));

const format = (date, options) => {
    return date.toLocaleDateString(
        'en-US',
        Object.assign(options, {timeZone: 'America/New_York'})
    );
};

const buildInfo = {
    "MONTH": format(commitDate, {month: '2-digit'}),
    "DAY": format(commitDate, {day: '2-digit'}),
    "YEAR": format(commitDate, {year: 'numeric'}),
    "HASH": commitHash
};
const regex = new RegExp(Object.keys(buildInfo).join('|'), 'g');

module.exports = async (source) => {
    const { code } = await svelte.preprocess(source, {
        markup: ({ content, filename }) => {
            return {
                code: content.replace(regex, matched => buildInfo[matched])
            };
        }
    }, {
        filename: 'Footer.svelte'
    });
    return code;
};


