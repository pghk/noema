require('dotenv').config();
const keychain = require('keytar');
const {spawn} = require('child_process');

keychain.getPassword(process.env.KC_SERVICE, process.env.KC_ACCOUNT).then(r => {
  process.env.AIRTABLE_API_KEY = r;
  console.log('Airtable key initialized.');
  const subprocess = spawn('npm', ['run', process.argv[2]], {stdio: 'inherit'});
  subprocess.on('error', (err) => {
    console.error('Failed to start subprocess.');
  });
}).catch(e => {
  console.error(e);
  process.exitCode = 1;
});
