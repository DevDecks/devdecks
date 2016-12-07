import * as React from 'react';
import { connect } from 'react-redux';
import MiniSlide from './MiniSlide/MiniSlide';
import { goToSlide } from '../../actions/app.actions';
import './mini-slides-panel.scss';

interface MiniSlidesPanelProps {
  goToSlide?: Function;
  slides?: any;
  slidesDimension?: {
    width: number;
    height: number;
  };
  thumbnailsDimension?: {
    width: number;
    height: number;
  };
}

class MiniSlidesPanelComponent extends React.Component<MiniSlidesPanelProps, {}> {
  render() {
    const { goToSlide, slides, slidesDimension, thumbnailsDimension } = this.props;
    return (
      <ul className="mini-slides-panel">
        { 
          slides.map((slide: any, key: number) => (
            <MiniSlide
              key={key}
              index={key}
              goToSlide={ goToSlide.bind(this, key) }
              slide={ slides[key] }
              slidesDimension={ slidesDimension }
              thumbnailsDimension={ thumbnailsDimension } />
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state: any) => ({
  slides: state.slides,
  slidesDimension: state.app.slidesDimension,
  thumbnailsDimension: state.app.thumbnailsDimension,
});

const mapDispatchToProps = (dispatch: any) => ({
  goToSlide: (slideNumber: number) => dispatch(goToSlide(slideNumber))
});

const MiniSlidesPanel = connect(mapStateToProps, mapDispatchToProps)(MiniSlidesPanelComponent as any);

export { MiniSlidesPanel };
