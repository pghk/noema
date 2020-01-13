exports.handler = async function(event, context) {
    const info = JSON.parse(event.body)
    console.log("TEST: " + info.payload.name + "\n")
    return 'testing'
}
