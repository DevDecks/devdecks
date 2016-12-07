import * as React from 'react';
import { connect } from 'react-redux';

const app = require('electron').remote;
const dialog = app.dialog;
const fs = require('fs');

// const app = require('electron').remote;
// const dialog = app.dialog;
// const fs = require('fs');

// ----------------- COPY PASTA --------------------

// const fs = require('fs');
// var http = require('http');

// let content: any = fs.readFileSync('./app/plugins/AddImage/cat.jpg');
// console.log(content);

// let content: any;
// // First I want to read the file
// fs.readFile('./app/plugins/AddImage/cat.jpg', (err: any, data: any) => {
//   if (err) {
//     throw err;
//   }
//   content = data;
//
//   // Invoke the next step here however you like
//   console.log(content);   // Put all of the code here (not the best solution)
//   // processFile();          // Or put the next step in a function and invoke it
// });

// function processFile() {
//     console.log(content);
//   fs.writeFile('cat.txt', content, 'utf8', (err: any) => {
//     if (err) {
//       return console.error(err);
//     }
//     console.log('cat saved!');
//   })
// }

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
// ----------------- COPY PASTA --------------------

// dialog.showOpenDialog(function (fileNames: any[]) {
//         // fileNames is an array that contains all the selected
//        if(fileNames === undefined) {
//             console.log("No file selected");
//        } else {
//           readFile(fileNames[0]);
//        }
// });
//
// function readFile(filepath){
//     fs.readFile(filepath, 'utf-8', function (err, data) {
//           if(err){
//               alert("An error ocurred reading the file :" + err.message);
//               return;
//           }
//           // Change how to handle the file content
//           console.log("The file content is : " + data);
//     });
// }
//
// // Note that the previous example will handle only 1 file, if you want that the dialog accepts multiple files, then change the settings:
// // And obviously , loop through the fileNames and read every file manually
// dialog.showOpenDialog({ properties: [ 'openFile', 'multiSelections',function(fileNames){
//   console.log(fileNames);
// }]});

interface AddImageProps {
  height: number;
  width: number;
  pluginNumber: number;
  pluginState: any;
  slideNumber: number;
  updateCurrentSlide: Function;
}

const AddImage = ({ height, width, pluginNumber, pluginState, slideNumber, updateCurrentSlide }: AddImageProps) => (
  <div>
    <input
      type="button"
      value="hello chad"
      onClick={
        () => {
          let filePath: string;
          dialog.showOpenDialog((fileNames: any[]) => {
            if (fileNames === undefined) {
              console.log("No file selected");
            } else {
              filePath = fileNames[0];
              fs.readFile(filePath, function (err: any, data: any) {
                if (err) {
                  alert("An error ocurred reading the file :" + err.message);
                  return;
                }
                // console.log(data, typeof data);
                const imageBufferString: string = new Buffer(data).toString('base64');
                // console.log(imageBufferString);
                updateCurrentSlide(pluginNumber, slideNumber, { imageBufferString });
              });
            }
          });
        }
      } />
    <img
      width={width}
      height={height}
      style={pluginState.imageBufferString ? {display: 'block'} : {display: 'none'}}
      src={`data:image/jpeg;base64,${pluginState.imageBufferString}`} />
  </div>
);

// <img src="data:image/jpeg;base64,new Buffer(data).toString('base64')"/>

export default AddImage;
