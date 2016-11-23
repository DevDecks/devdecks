import * as React from 'react';

interface CPButtonProps {
}

class CPButton extends React.Component<CPButtonProps, {}> {

  constructor(props: any){
      super(props);
      this.state = {
        slides: []
      };
      this.handleClick = this.handleClick.bind(this);
    }

  generateSlides() {

    return // array of react compenents
  }
  handleClick() {
    console.log('in the function');
    console.log(this.state);
    // const newSlides = this.state.slides.slice();
    // newSlides.push('im a new slide');
    // this.setState({ slides: newSlides });
  };
  render() {
    return <button type='submit' id='CPButton' onClick={this.handleClick}>+</button>;
  }
}

export default CPButton;
