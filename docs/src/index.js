import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Ancient from './Ancient';

import 'ancient-css/dist/ancient.css';
import 'ancient-theme-behelit/dist/behelit.css';
import 'ancient-theme-civics/dist/civics.css';
import 'ancient-theme-kitsune/dist/kitsune.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Ancient />
    </Router>
  </React.StrictMode>,
  document.getElementById('js-react')
);
