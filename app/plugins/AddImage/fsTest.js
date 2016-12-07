var fs = require('fs');
// var http = require('http');

var content;
// First I want to read the file
fs.readFile('./cat.jpg', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    // Invoke the next step here however you like
    // console.log(content);   // Put all of the code here (not the best solution)
    processFile();          // Or put the next step in a function and invoke it
});

function processFile() {
    console.log(content);
  fs.writeFile('cat.txt', content, 'utf8', (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('cat saved!');
  })
}

// var content;
// // First I want to read the file
// fs.readFile('./lel.png', function(err, data) {
//   if (err) throw err; // Fail if the file can't be read.
//   http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'image/jpeg'});
//     res.end(data); // Send the file data to the browser.
//   }).listen(3333);
//   console.log('Server running at http://localhost:3333/');
// });


//<img src="data:image/jpeg;base64,new Buffer(data).toString('base64')"/>
