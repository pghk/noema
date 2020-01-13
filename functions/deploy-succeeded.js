exports.handler = async function(event, context) {
    const eventData = JSON.parse(event.body).payload
    let logMessage = `
    -- BUILD INFO --
    CONTEXT: ${eventData.context}
    ID: ${eventData.id}
    TITLE: ${eventData.title}
    NAME: ${eventData.name}
    BRANCH: ${eventData.branch}
    COMMIT: ${eventData.commit_ref}
    STATE: ${eventData.state}
    `;
    console.log(logMessage);
    return 'ok'
};
