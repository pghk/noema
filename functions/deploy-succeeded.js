exports.handler = async function(event, context) {
    const {
        id,
        state,
        name,
        commit_ref,
        branch,
        title,
        context
    } = event.payload
    console.log("ID: " + id + "\n"
        + "STATE: " + state + "\n"
        + "NAME: " + name + "\n"
        + "COMMIT: " + commit_ref + "\n"
        + "BRANCH: " + branch + "\n"
        + "TITLE: " + title + "\n"
        + "CONTEXT: " + context + "\n"
    )
    return 'test'
}
