const fs = require('fs');

const readFileContents = (fileName, cb) => {
   try {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if(err) {
        cb(err, null);
      } else {
        const fileContents = data.split('\n');
        cb(null, fileContents);
      }
    })
   } catch(err) {
    cb(err, null);
   }
}

const filterData = (fileContents, cb) => {
  try{
    const filteredData = fileContents.filter((line) => line.payment_method && line.payment_method.includes('credit'));
    cb(null, filteredData);
  } catch(err) {
    cb(err, null);
  }
}

const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    fs.writeFile('output.txt', filteredData, 'utf-8', (err) => {
      if(err) {
        cb(err, null);
      } else {
        cb(null, "Successfully wrote filtered data to output.txt file..!");
      }
    })
  } catch (err) {
    cb(err, null);
  }
    
}



module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
