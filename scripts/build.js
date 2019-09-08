const fs = require('fs');
const keychain = require('./keychain.js');
const Airtable = require("airtable");

const outputPath = 'data';

let writePosts = function (posts) {
    let file = 'posts.json';
    fs.mkdir(outputPath, () => {
        fs.writeFile(outputPath + '/' + file, posts, error => {
            if (error) {
                console.error(`Error writing ${file}: ${error}`);
            } else {
                console.log(`${file} written`);
            }
        })
    });
};

let processRecords = function (records) {
    let posts = records.map((record) => {
        return record._rawJson;
    });
    writePosts(JSON.stringify(posts, null, '\t'));
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

