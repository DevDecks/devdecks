import * as React from 'react';
import './mini-slide.scss';

interface MiniSlideProps {
  goToSlide: any;
  index: number;
  slide: any;
  slidesDimension: {
    width: number;
    height: number;
  };
  thumbnailsDimension: {
    width: number;
    height: number;
  };
}

const MiniSlide = ({ goToSlide, index, slide, slidesDimension, thumbnailsDimension }: MiniSlideProps) => {
  const scale = Math.min(
    slidesDimension.width / thumbnailsDimension.width,
    slidesDimension.height / thumbnailsDimension.height
  );
  return (
    <div onClick={ goToSlide }>
      <span className="mini-slide-counter">{ index }</span>
      <div className="mini-slide">
        { 
          slide.plugins.map((plugin: any, key: number) => {
            const { component: Plugin, state: { width, height, left, top } } = plugin;
            const pluginPosition = {
              left: left ? (left / scale) - 1 : 0,
              top: top ? (top / scale) - 1 : 0
            };
            return (
              <div key={ key } style={{ position: 'absolute', ...pluginPosition }}>
                <Plugin
                  width={ width / scale }
                  height={ height / scale }
                  pluginNumber={ key }
                  pluginState={ slide.plugins[key].state } />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default MiniSlide;
