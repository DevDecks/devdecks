import * as React from 'react';

interface CPButtonProps {
}

class CPButton extends React.Component<CPButtonProps, { slides: string[] }> {

  handleClick() {
    console.log('in the function');
    this.setState({slides: ['Hoon']}, function(){
      console.log(this.state);
    })
    console.log(this.state.slides);
    // const newSlides = this.state.slides.slice();
    // newSlides.push('im a new slide');
    // this.setState({ slides: newSlides });
  }
  render() {
    return <button type='submit' id='CPButton' onClick={this.handleClick.bind(this)}>+</button>;
  }
}

export default CPButton;
