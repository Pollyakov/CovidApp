// ex1:
// uniq for JS:
// work with DOM
// work with window Object
// work with document Object

// uniq for Node:
// can be used outside of BhxBrowser
// only on V8

//ex2:
console.log("Privet, Lyubimaya!");

const fs = require('fs');
fs.writeFileSync('newFile.txt', 
"Ksusha, Ya v tebya ochen' veryu. Ti ochen'umnaya i ti vsyo smogesh!");
fs.appendFileSync('newFile.txt', 'Vsyo poydyot po planu' );
//rename
fs.renameSync('ex1.js','ex1_2.js');
//copy
fs.createReadStream('test.txt').pipe(fs.createWriteStream('copy.txt'));
//one more copy
fs.createReadStream('test.txt').pipe(fs.createWriteStream('copyOneMore.txt'))
// Node.js program to demonstrate the
// fs.readdir() method
  

// Function to get current filenames
// in directory
fs.readdir(__dirname, (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
    files.forEach(file => {
      console.log(file);
    })
  }
})
//Create a new, empty file using the open() method:
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });


