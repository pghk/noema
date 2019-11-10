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
    return JSON.stringify(posts, null, '\t');
};

let getData = function () {
    let base = new Airtable().base(BASE);
    let table = base(TABLE);
    return table.select({view: VIEW}).firstPage()
};

let checkForKey = () => {
    return new Promise((resolve, reject) => {
        if (process.env.AIRTABLE_API_KEY) {
            resolve();
        }
        else if (process.env.NODE_ENV === 'development') {
            keychain(process.env.KC_SERVICE, process.env.KC_ACCOUNT)
                .then(r => {process.env.AIRTABLE_API_KEY = r})
                .then(() => resolve())
                .catch((e) => reject(e))
        }
        else {
            reject('No Key')
        }
    })
};

checkForKey().then(() => getData()
    .then(data => writePosts(processRecords(data)))
    .catch(e => {
        console.error(e);
        process.exitCode = 1;
    }));

