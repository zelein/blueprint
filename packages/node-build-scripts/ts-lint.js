#!/usr/bin/env node

/**
 * @license Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * @fileoverview Runs ESLint, with support for generating JUnit report
 */

// @ts-check
"use strict";

/* eslint-disable typescript/no-var-requires */
const { spawn } = require("child_process");
const { junitReportPath } = require("./utils");

const args = [...process.argv.slice(2), "{src,test}/**/*.tsx"]
if (process.env.JUNIT_REPORT_PATH != null) {
    const out = junitReportPath("tslint");
    args.unshift("--output-file", out);
    args.unshift("--format", "junit");
    // eslint-disable-next-line no-console
    console.info(`ESLint report will appear in ${out}`);
}

spawn(`eslint`, args, { stdio: "inherit" })
