import React from 'react';

import pkg from '../package.json';

function Footer() {
  return (
    <footer className="section section--large">
      <div>&copy; {new Date().getFullYear()} Mike Barnhardt</div>
      <div>
        <a href="https://github.com/mikebarnhardt/aurora">
          Version {pkg.version}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
