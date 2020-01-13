exports.handler = async function(event, context) {
    const eventData = JSON.parse(event.body).payload
    let logMessage = `
        -- NETLIFY INFO --
        ID: ${eventData.id}
        STATE: ${eventData.state}
        NAME: ${eventData.name}
        COMMIT: ${eventData.commit_ref}
        BRANCH: ${eventData.branch}
        TITLE: ${eventData.title}
        CONTEXT: ${eventData.context}
    `;
    console.log(logMessage);
    return 'ok'
};
