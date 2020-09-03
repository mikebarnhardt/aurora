import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div
      className="hide desktop:block padding-top padding-bottom stack"
      style={{
        borderRight: '1px solid var( --ancient-divider-border-color )',
        minWidth: '16rem',
        overflow: 'scroll'
      }}
    >
      <div>
        <h2 className="heading heading--menu">Elements</h2>
        <nav className="menu">
          <li className="menu-item">
            <NavLink
              activeClassName="menu-link--active"
              className="menu-link"
              to="/test"
            >
              Test
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              activeClassName="menu-link--active"
              className="menu-link flex flex--center flex--split"
              style={{ justifyContent: 'space-between' }}
              to="/button"
            >
              <span>Button</span>
              <span className="tag tag--error tag--xs">2</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              activeClassName="menu-link--active"
              className="menu-link"
              to="/card"
            >
              Card
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              activeClassName="menu-link--active"
              className="menu-link"
              to="/checkbox"
            >
              Checkbox
            </NavLink>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Divider</a>
          </li>
          <li className="menu-item">
            <NavLink
              activeClassName="menu-link--active"
              className="menu-link"
              to="/input"
            >
              Input
            </NavLink>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Notification</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Radio</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Select</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Tag</a>
          </li>
        </nav>
      </div>

      <div>
        <h2 className="heading heading--menu">Layouts</h2>
        <nav className="menu">
          <li className="menu-item">
            <a className="menu-link" href="#">Container</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Section</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Space</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Stack</a>
          </li>
        </nav>
      </div>

      <div>
        <h2 className="heading heading--menu">Test</h2>
        <nav className="menu">
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Test</a>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
