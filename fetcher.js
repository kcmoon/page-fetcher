const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);



const fetcher = function () {
  request(args[0], (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    
    writeContent(body)
  });

};

const writeContent = function (data) {
fs.writeFile(args[1], data, err => {
      if (err) {
        console.error(err);
      }
      let bytes = data.length;
      console.log(`Downloaded and saved ${bytes} bytes to ${args[1]}`)
    });
}

fetcher()