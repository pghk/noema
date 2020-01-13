exports.handler = async function(event, context) {
    const eventData = JSON.parse(event.body).payload
    let logMessage = `
    -- ${eventData.name} ${eventData.context} ${eventData.id} --
    title: ${eventData.title}
    branch: ${eventData.branch}
    commit: ${eventData.commit_ref}
    `;
    console.log(logMessage);
    return 'ok'
};
