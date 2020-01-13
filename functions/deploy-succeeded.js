exports.handler = async function(event, context) {
    console.log("EVENT: \n" + JSON.stringify(event.body.payload.name, null, 2))
    return context.logStreamName
}
