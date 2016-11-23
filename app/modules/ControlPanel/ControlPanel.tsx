import * as React from 'react';
import CPButton from './CPButton/CPButton';

interface ControlPanelProps {

}

class ControlPanel extends React.Component<ControlPanelProps, {}> {
  render() {
    return (
      <div>
      <CPButton/>
      </div>
    );
  }
}

export default ControlPanel;
