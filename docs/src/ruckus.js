import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Button from './button';
import Card from './card';
import Checkbox from './checkbox';
import Footer from './footer';
import Sidebar from './sidebar';
import Welcome from './welcome';

function App() {
  const [ theme, setTheme ] = React.useState('ruckus');
  const previousTheme = React.useRef();

  React.useEffect(
    () => {
      // Prevent `theme--undefined` when a previous theme doesn't exist.
      if ( previousTheme.current && previousTheme.current !== 'ruckus' ) {
        document.documentElement.classList.toggle(
          `theme--${previousTheme.current}`
        );
      }

      // Ruckus theme is built-in. Only add the class for extra themes.
      if ( theme !== 'ruckus' ) {
        document.documentElement.classList.toggle(`theme--${theme}`);
      }

      previousTheme.current = theme;
    },
    [ theme ]
  );

  return (
    <div className="layout layout--stretch layout--vertical">
      <section className="section section--large">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 className="heading heading--content">
            <Link to="/">Ruckus</Link>
          </h1>

          <select
            className="select"
            onChange={({ target }) => setTheme( target.value )}
            value={theme}
          >
            <option value="aurora">Aurora</option>
            <option value="dagger">Dagger</option>
            <option value="ruckus">Ruckus (Default)</option>
            <option value="viera">Viera</option>
          </select>
        </div>
      </section>
      <div className="layout" style={{ flex: 1 }}>
        <Sidebar />
        <main className="layout layout--vertical" style={{ flex: 1 }}>
          <div className="section section--large" style={{ flex: 1}}>
            <Switch>
              <Route component={Welcome} exact path="/" />
              <Route component={Button} path="/button" />
              <Route component={Card} path="/card" />
              <Route component={Checkbox} path="/checkbox" />
            </Switch>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
