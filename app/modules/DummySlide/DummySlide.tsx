import * as React from "react";

interface DummySlideProps {
  slide: any;
  slidesDimension?: any;
}

const DummySlide = ({ slide, slidesDimension }: DummySlideProps) => (
  <div>
    {
      slide.plugins.map((plugin: any, key: number) => {
        //When plugin is deleted from plugins array, their position is not removed rather the value is set to null
        if (!plugin) return null;
        
        const { component: Plugin, state: { width, height, left, top } } = plugin;
        return (
          <div key={ key } style={{ width, height, position: 'absolute', left, top }}>
            <Plugin
              width={ width }
              height={ height }
              pluginNumber={ key }
              pluginState={ slide.plugins[key].state } />
          </div>
        );
      })
    }
  </div>
);

export { DummySlide };
