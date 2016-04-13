#!/usr/bin/env node
require('commander')
    .version('1.0.0')
    .usage('<command> [options]')
    .command('init', 'start')
    // .command('clone', 'copy node_modules')
    .parse(process.argv)
