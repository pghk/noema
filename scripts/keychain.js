require('dotenv').config();
const keychain = require('keytar');

module.exports = () => {
    return keychain.getPassword(process.env.KC_SERVICE, process.env.KC_ACCOUNT);
};
