# noema
[![Build Status](https://travis-ci.org/pghk/noema.svg?branch=dev)](https://travis-ci.org/pghk/noema)

A personal website.

## Continuous integration & delivery workflow

### Travis CI
* runs unit tests on all pull requests
* runs (Cypress) integration tests against deploy urls, received from Netlify
* updates PRs with unit test results

### Netlify
* builds and deploys (to env corresponding with branch) on merge commits
* receives content update notifications, deploys to preview
* triggers a post-deploy Lambda function, announcing urls to Travis for integration testing

### Example
1. Pull request from `dev` to `master` is opened
2. Travis runs unit tests, then updates PR with results
3. PR is (manually) approved in GitHub, code merges to `master`
4. Netlify builds a static site (using Sapper export) and deploys to a preview environment
5. Netlify calls the Travis API, passing the url of the deploy preview
6. Travis runs integration tests against the deploy preview
7. Deploy preview is (manually) published in Netlify, updating the live site

## Todo
- [ ] Unit tests: right now these are just Cypress, running the same E2E tests against a local node instance that will be run against the static deploy preview
- [ ] Footer
- [ ] Front page content section: Dynamic summary/preview of each section
- [ ] Header: section icons to switch to text on hover (or active path, where applicable)
- [ ] Header: different tagline for each section path?
- [ ] Actual content 😅
