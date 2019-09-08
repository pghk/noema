const keychain = require('./keychain.js');
const Airtable = require("airtable");

let writePosts = function (posts) {
    console.log(posts);
};

let processRecords = function (records) {
    let posts = records.map((record) => {
        return record._rawJson;
    });
    writePosts(posts);
};

let getData = function () {
    let base = new Airtable().base(process.env.AIR_BASE);
    let table = base(process.env.AIR_TABLE);
    table.select().firstPage().then(response => processRecords(response));
};

if (process.env.NODE_ENV === 'development') {
    keychain(process.env.KC_SERVICE, process.env.KC_ACCOUNT)
        .then(r => {process.env.AIRTABLE_API_KEY = r})
            .then(() => getData());
}
else if (process.env.AIRTABLE_API_KEY) {
    getData();
}
