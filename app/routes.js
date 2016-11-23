import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  ControlPanel
} from './modules';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ControlPanel} />
  </Route>
);
