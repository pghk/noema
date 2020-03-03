const svelte = require('svelte/compiler');

const buildInfo = {
    "MONTH": "06",
    "DAY": "18",
    "YEAR": "1982",
    "HASH": "aef3c46023a5da88b112dc9ce1b90dce02d6ecb9"
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


