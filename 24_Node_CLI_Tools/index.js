#!/usr/bin/env node

// The above line instructs the computer to allow node to execute the file.

const fs = require('fs');

// Solution 1 - Callbacks (not ideal)

fs.readdir(process.cwd(), (err, files) => {
  if (err) console.log(err);

  const allStats = Array(files.length).fill(null);

  for (let file of files) {
    const idx = files.indexOf(file);

    fs.lstat(file, (err, stats) => {
      if (err) console.log(err);

      allStats[idx] = stats;

      const ready = allStats.every(stats => {
        return stats;
      });

      if (ready) {
        allStats.forEach((stats, idx) => {
          console.log(files[idx], stats.isFile());
        });
      }
    });
  }
});
