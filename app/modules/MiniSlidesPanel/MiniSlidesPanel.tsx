import * as React from 'react';
import { connect } from 'react-redux';
import { DummySlide } from 'modules';
import { Scale } from 'sharedComponents';
import { goToSlide } from 'actions/app.actions';
import './mini-slide-panel.scss';

interface IDimensions {
  width: number;
  height: number;
}

interface MiniSlidesPanelProps {
  currentSlideNumber?: number;
  deviceDimension?: IDimensions;
  goToSlide?: Function;
  slides?: any;
  slidesDimension?: IDimensions;
}

class MiniSlidesPanelComponent extends React.Component<MiniSlidesPanelProps, {}> {
  render() {
    const THUMBNAILS_SCALE = 15;

    const { currentSlideNumber, deviceDimension, goToSlide, slides, slidesDimension } = this.props;

    const thumbnailsDimension = {
      width: deviceDimension.width / THUMBNAILS_SCALE,
      height: deviceDimension.height / THUMBNAILS_SCALE
    };

    const scale = Math.min(
      thumbnailsDimension.width / window.screen.width,
      thumbnailsDimension.height / window.screen.height
    );

    return (
      <ul id="mini-slide-panel" style={{ minWidth: thumbnailsDimension.width + 50 }}>
        { 
          slides.map((slide: any, key: number) => (
            <li
              key={ key }
              className={ currentSlideNumber === key ? "mini-slide-item active" : "mini-slide-item" }
              >
              <span className="mini-slide-counter">{ key }</span>
              <div
                style={{ width: thumbnailsDimension.width, height: thumbnailsDimension.height }}
                className={ currentSlideNumber === key ? "mini-slide-content active" : "mini-slide-content" }
                onClick={ goToSlide.bind(this, key) }>
                <Scale isFullScreen={ false } scale={ scale }>
                  <DummySlide
                    slide={ slide }
                    slidesDimension={ slidesDimension } />
                </Scale>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state: any, props: any) => ({
  currentSlideNumber: state.app.currentSlide,
  deviceDimension: state.app.deviceDimension,
  slides: state.slides,
  slidesDimension: state.app.slidesDimension,
});

const mapDispatchToProps = (dispatch: any) => ({
  goToSlide: (slideNumber: number) => dispatch(goToSlide(slideNumber))
});

const MiniSlidesPanel = connect(mapStateToProps, mapDispatchToProps)(MiniSlidesPanelComponent as any);

export { MiniSlidesPanel };
