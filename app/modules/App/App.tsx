import * as React from 'react';

interface AppProps {

}

class App extends React.Component<AppProps, {}> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default App;
