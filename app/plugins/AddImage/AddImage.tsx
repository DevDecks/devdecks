import * as React from 'react';
import { connect } from 'react-redux';

const dialog = require('electron').remote.dialog;
const fs = require('fs');

interface AddImageProps {
  height: number;
  width: number;
  pluginNumber: number;
  pluginState: any;
  slideNumber: number;
  updateCurrentSlide: Function;
}

const AddImage = ({ height, width, pluginNumber, pluginState, slideNumber, updateCurrentSlide }: AddImageProps) => {
  const options: any = {
    filters: [
      {
        name: 'Images',
        extensions: [ 'jpeg', 'jpg', 'gif', 'png' ]
      }
    ]
  };

  const selectImageFile: React.MouseEventHandler<HTMLElement> = () => {
    dialog.showOpenDialog(options, (filePaths: string[]) => {
      if (!filePaths) return;
      fs.readFile(filePaths[0], (err: any, data: any) => {
        if (err) return;
        const imageBufferString: string = new Buffer(data).toString('base64');
        updateCurrentSlide(pluginNumber, slideNumber, { imageBufferString, width: 355 });
      });
    });
  };

  return (
    <div>
      {
        pluginState.imageBufferString ?
          <img
            style={{ width: '100%', height: '100%' }}
            src={ `data:image;base64,${ pluginState.imageBufferString }` }
          /> :
          <span 
            className="pt-icon pt-icon-media"
            style={{ fontSize: 250, opacity: 0.4, margin: '-25px 0' }}
            onClick={ selectImageFile } />
      }
    </div>
  );
}

export default AddImage;
