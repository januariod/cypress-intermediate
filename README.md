# _Intermediate_ tests with Cypress

Sample project to demonstrate end-to-end (e2e) tests written with Cypress running on a CI service.

## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.26.2` while writing this doc)
- [nodejs](https://nodejs.org/en/) (I've used version `14.17.3` while writing this doc)
- NPM (I've used version `6.14.13` while writing this doc)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (I've used version `92.0.4515.131` while writing this doc)

**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## docker run
docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce

After running the container, set your ssh keys.

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appropriate values for all the variables.

**Note:** `cypress.env.json` file is not tracked by git.

## Running the tests

In this project, you can run tests in interactive and headless modes.
### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode.

### Interactive mode

Run `npm run cy:open` to open the Cypress Test Runner to run tests in interactive mode.

___

Made with ❤️ by [Daniel Januario](https://github.com/januariod).