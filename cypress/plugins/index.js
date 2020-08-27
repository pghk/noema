/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// promisified fs module
const fse = require('fs-extra')
const path = require('path')

function getConfigurationFor (env) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${env}.json`)
  return fse.readJson(pathToConfigFile)
}

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  if (process.env.CYPRESS_baseUrl) {
    config = getConfigurationFor('remote');
  } else {
    require('@cypress/code-coverage/task')(on, config)
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
  }
  return config
  // `config` is the resolved Cypress config
}
