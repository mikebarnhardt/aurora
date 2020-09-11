import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Ancient from './Ancient';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Ancient />
    </Router>
  </React.StrictMode>,
  document.getElementById('js-react')
);
