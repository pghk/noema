# no·​e·​ma | \ nōˈēmə \
*the objective aspect of, or the content within, an intentional experience (naming things is hard ok)*

[![Travis CI Status](https://img.shields.io/travis/pghk/noema)](https://travis-ci.org/pghk/noema)
[![Netlify Status](https://img.shields.io/netlify/8aa59343-ad8c-458d-9ce8-6d519ce86c33)](https://app.netlify.com/sites/noema)

A personal website, built of [Svelte](https://svelte.dev/) components.

Content is composed locally in markdown and stored in [Airtable](https://airtable.com/). A build process acquires this content before using the [Sapper](https://sapper.svelte.dev/) framework to generate a static site, which is then hosted at [Netlify](https://www.netlify.com/).

## Development
* new work is done in branches based off `master` named `features/*`, `styles/*`, `bugfixes/*` etc
* these branches are then pushed to the remote, and pull requested to `master`
* once their checks pass, PRs are *rebase merged* into `master` and their head branches are deleted

## Automated testing and deployment
The following steps are triggered when a new pull request is opened:
1. Travis CI runs unit tests (with [Mocha](https://mochajs.org/))
2. Netlify gathers content from Airtable and builds the static site with `sapper export`
3. A Lambda function calls the Travis API, passing the url of the Netlify Deploy Preview
4. Travis CI runs integration tests (with [Cypress](https://www.cypress.io/)) against the preview url

- [ ] todo: notifications of content updates in Airtable initiate the process at step 2

Auto publishing of deploys in Netlify is not enabled. This will likely remain a manual step, since I ultimately want to trigger rebuilds on content updates, and it seems sensible. For this to change, build responsibility should probably be shifted to Travis so that publishing could be made contingent on E2E tests passing.

## Todo
- [ ] Meaningful tests
- [ ] Sort out NPM dependencies: Netlify does not need to install Cypress
- [ ] Store Cypress-generated build artifacts somewhere, for better review of E2E test results
- [ ] Front page content section: Dynamic summary/preview of each section
- [ ] Header: section icons to switch to text on hover (or active path, where applicable)
- [ ] Header: different tagline for each section path?
- [ ] Actual content 😅
