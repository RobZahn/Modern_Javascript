#!/usr/bin/env node

// ^ The above line instructs the computer to allow node to execute the file.

const fs = require('fs');
const chalk = require('chalk');

// **********************************
// Solution 1 - Callbacks (not ideal)
// **********************************

// fs.readdir(process.cwd(), (err, files) => {
//   if (err) console.log(err);

//   const allStats = Array(files.length).fill(null);

//   for (let file of files) {
//     const idx = files.indexOf(file);

//     fs.lstat(file, (err, stats) => {
//       if (err) console.log(err);

//       allStats[idx] = stats;

//       const ready = allStats.every(stats => {
//         return stats;
//       });

//       if (ready) {
//         allStats.forEach((stats, idx) => {
//           console.log(files[idx], stats.isFile());
//         });
//       }
//     });
//   }
// });

// *********************************
// Solution 2 - Promise (less ideal)
// *********************************

// const { lstat } = fs.promises;

// fs.readdir(process.cwd(), async (err, filenames) => {
//   if (err) console.log(err);

//   for (let filename of filenames) {
//     try {
//       const stats = await lstat(filename);

//       console.log(filename, stats.isFile());
//     } catch (err) {
//       console.log(err);
//     }
//   }
// });

// **************************************
// Solution 3 - Promise.all (best option)
// **************************************

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) console.log(err);

  const statPromises = filenames.map(filename => {
    return lstat(filename);
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const idx = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(filenames[idx]);
    } else {
      console.log(`DIR: ${chalk.bold.blue(filenames[idx])}`);
    }
  }
});
