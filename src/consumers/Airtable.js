const Airtable = require("airtable");

const BASE = process.env.AIR_BASE;
const TABLE = 'Blog Posts';
const VIEW = 'Published';

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

module.exports = async () => {
  return await getData().then(data => processRecords(data))
};

