# khan-academy-search



This repo contains a couple of end-to-end tests for the search functionality on the Khan Academy website. They are based on the manual test cases outlined in [this google doc](https://docs.google.com/document/d/1mWRZHygbhRfDqgiX1cnhzAfnXw0utdzSyBbDsj7GlZ8/edit)


## Running the Tests

The steps below will take you through running the tests. It is assumed you have nothing installed except for node (version v19.8.1) + git.

### 1. Clone this repo and open Cypress
```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/khan-academy-search.git

## cd into the cloned repo
cd khan-academy-search

## install the node_modules
npm install

## start the test in Cypress
npx cypress open
```

### 2. Run tests

#### In the modal that appears:
a) Click on E2E Testing\
b) Select Chrome, and click 'Start E2E Testing in Chrome'
#### In the browser that opens, click on the file named spec.cy,js

## Watch them run

