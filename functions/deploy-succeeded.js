const axios = require('axios');

exports.handler = async function(event, context, callback) {
    const eventData = JSON.parse(event.body).payload;
    console.log(`

    -- ${eventData.name} ${eventData.context} ${eventData.id} --
    title: ${eventData.title}
    branch: ${eventData.branch}
    commit: ${eventData.commit_ref}

`);

    const NOTIFY_URL = "https://api.travis-ci.org/repo/"
        + process.env.GIT_USER + "%2F" + eventData.name + "/requests";

    const TEST_SITE = "https://"
        + eventData.id + "--" + eventData.name + ".netlify.com";

    await axios({
        method: 'post',
        url: NOTIFY_URL,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'Travis-API-Version': '3',
            'Authorization': `token ${process.env.TRAVIS_TOKEN}`,
        },
        data: JSON.stringify({
            'request': {
                'branch': 'next/major/release',
                'message': 'Netlify Deploy preview',
                'config': {
                    'env': {
                        'CYPRESS_baseUrl': TEST_SITE,
                        'TEST_TARGET': eventData.context
                    }

                }
            }
        })
    })
        .then(res => {
            console.log(`

    ${res.config.method.toUpperCase()} ${res.config.url} [ ${res.status} ${res.statusText} ]

${JSON.stringify(res.data, null, 4)}

`);
            return callback(null, {statusCode: res.status})
        })
        .catch(err => {
            console.log(err);
            return callback(err);
        });
};
