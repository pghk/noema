exports.handler = async function(event, context, callback) {
    const eventData = JSON.parse(event.body).payload;
    let logMessage = `
    -- ${eventData.name} ${eventData.context} ${eventData.id} --
    title: ${eventData.title}
    branch: ${eventData.branch}
    commit: ${eventData.commit_ref}
    `;
    console.log(logMessage);

    const NOTIFY_URL = "https://api.travis-ci.com/repo/"
        + process.env.GIT_USER + "%2F" + eventData.name + "/requests";

    const TEST_SITE = "https://"
        + eventData.id + "--" + eventData.name + ".netlify.com";

    await fetch(NOTIFY_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'Travis-API-Version': '3',
            'Authorization': `token ${process.env.TRAVIS_TOKEN}`,
        },
        body: JSON.stringify({
            'request': {
                'branch': eventData.branch,
                'message': `Netlify ${eventData.context}`,
                'config': {
                    'env': { 'CYPRESS_baseUrl': TEST_SITE }

                }
            }
        })
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => {
            console.log(err);
            return callback(err);
        });

    return callback(null, {
        statusCode: 200
    });
};
