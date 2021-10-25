const fs = require('fs');
const utils = require('./utils');


fs.readFile('text.txt', (err, data)=> {
  if(err){
    console.log(err);
  }
  else {
    console.log(utils.letterMapCountSpaces(data.toString().trim()));
  }
});
