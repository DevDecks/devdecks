import * as React from 'react';
import { DummySlide } from 'modules';
import './fullscreen-view.scss';

interface FullScreenViewProps {
  slide: any;
}

const FullScreenView = ({ slide }: FullScreenViewProps) => (
  <div id="fullscreen-view" style={{ backgroundColor: slide.state.backgroundColor }}>
    <DummySlide slide={ slide } />
  </div>
);

export default FullScreenView;
