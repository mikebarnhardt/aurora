import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Ruckus from './ruckus';

// Import Ruckus main CSS.
import 'ruckus-css/dist/ruckus.css';

// Import additional Ruckus themes for testing.
import 'ruckus-themes/dist/civics.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Ruckus />
    </Router>
  </React.StrictMode>,
  document.getElementById('js-react')
);
