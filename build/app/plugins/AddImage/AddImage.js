"use strict";
const React = require("react");
const app = require('electron').remote;
const dialog = app.dialog;
const fs = require('fs');
const AddImage = ({ height, width, pluginNumber, pluginState, slideNumber, updateCurrentSlide }) => (React.createElement("div", null,
    React.createElement("input", { type: "button", value: "hello chad", onClick: () => {
            let filePath;
            dialog.showOpenDialog((fileNames) => {
                if (fileNames === undefined) {
                    console.log("No file selected");
                }
                else {
                    filePath = fileNames[0];
                    fs.readFile(filePath, function (err, data) {
                        if (err) {
                            alert("An error ocurred reading the file :" + err.message);
                            return;
                        }
                        const imageBufferString = new Buffer(data).toString('base64');
                        updateCurrentSlide(pluginNumber, slideNumber, { imageBufferString });
                    });
                }
            });
        } }),
    React.createElement("img", { width: width, height: height, style: pluginState.imageBufferString ? { display: 'block' } : { display: 'none' }, src: `data:image/jpeg;base64,${pluginState.imageBufferString}` })));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddImage;
