## Building the e2e tests for Asos 
[![Build Status](https://travis-ci.org/loadfocusapp/asos-testcafe-e2e.svg?branch=master)](https://travis-ci.org/loadfocusapp/asos-testcafe-e2e)

```npm i```

## Developing tests with TestCafe live

TestCafe Live is one of the tools that continuously monitors the test files and reruns the tests when
something changes in the files.

To start the tests with TestCafe Live you need to run:

``` npm run e2e:dev ```

This will run the tests once, keep the TestCafe interface opened and rerun them each time we modify them
or when Cmd + R is pressed.

## Running the e2e tests against different environments/regions

Asos.com: ``` ENV=AsosCom npm run e2e:firefox ```

Asos.de: ``` ENV=AsosDe npm run e2e:firefox ```

Asos.com/it: ``` ENV=AsosIt npm run e2e:firefox ```

