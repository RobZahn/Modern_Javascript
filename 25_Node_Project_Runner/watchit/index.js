#!/usr/bin/env node
const debounce = require('lodash.debounce');
const chokidar = require('chokidar');

const start = debounce(() => {
  console.log("Starting user's program");
}, 100);

chokidar
  .watch('.')
  .on('add', start)
  .on('change', () => console.log('FILE CHANGED'))
  .on('unlink', () => console.log('FILE UNLINKED'));
