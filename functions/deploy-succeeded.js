exports.handler = async function(event, context) {
    const {
        id,
        state,
        name,
        commit_ref,
        branch,
        title,
        context
    } = JSON.parse(event.body).payload
    console.log("\n -- NETLIFY INFO -- \n"
        + "ID: " + id + "\n"
        + "STATE: " + state + "\n"
        + "NAME: " + name + "\n"
        + "COMMIT: " + commit_ref + "\n"
        + "BRANCH: " + branch + "\n"
        + "TITLE: " + title + "\n"
        + "CONTEXT: " + context + "\n"
    )
    return 'ok'
}
