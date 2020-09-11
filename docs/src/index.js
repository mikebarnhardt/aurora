import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Ancient from './Ancient';

// Import ancient main CSS.
import 'ancient-css/dist/ancient.css';

// Import additional ancient themes for testing.
import 'ancient-theme-behelit/dist/behelit.css';
import 'ancient-theme-civics/dist/civics.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Ancient />
    </Router>
  </React.StrictMode>,
  document.getElementById('js-react')
);
