#!/usr/bin/env node

// The above line instructs the computer to allow node to execute the file.

const fs = require('fs');

fs.readdir(process.cwd(), (err, files) => {
  if (err) console.log(err);

  console.log(files);
});
