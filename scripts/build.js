const keychain = require('./keychain.js');
const Airtable = require("airtable");

let getData = function () {
    let base = new Airtable().base(process.env.AIR_BASE);
    let table = base(process.env.AIR_TABLE);
    table.select().firstPage().then(r => console.log(r));
};

if (process.env.NODE_ENV === 'development') {
    keychain(process.env.KC_SERVICE, process.env.KC_ACCOUNT)
        .then(r => {process.env.AIRTABLE_API_KEY = r})
            .then(() => getData());
}
else if (process.env.AIRTABLE_API_KEY) {
    getData();
}
