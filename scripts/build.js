const fs = require('fs');
const keychain = require('./keychain.js');
const Airtable = require("airtable");

const BASE = process.env.AIR_BASE;
const TABLE = 'Blog Posts';
const VIEW = 'Published';

const OUT_PATH = 'data';

let writePosts = function (posts) {
    let FILE = 'posts.json';
    fs.mkdir(OUT_PATH, () => {
        fs.writeFile(OUT_PATH + '/' + FILE, posts, error => {
            if (error) {
                console.error(`Error writing ${FILE}: ${error}`);
            } else {
                console.log(`${FILE} written`);
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
    let base = new Airtable().base(BASE);
    let table = base(TABLE);
    table.select({view: VIEW}).firstPage()
        .then(response => processRecords(response))
        .catch(error => {console.log(error)});
};

if (process.env.AIRTABLE_API_KEY) {
    getData();
}
else if (process.env.NODE_ENV === 'development') {
    keychain(process.env.KC_SERVICE, process.env.KC_ACCOUNT)
        .then(r => {process.env.AIRTABLE_API_KEY = r})
            .then(() => getData());
}

