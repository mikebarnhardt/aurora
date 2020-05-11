import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="section section--large stack" style={{ minWidth: '16rem' }}>
      <ul className="list list--bare stack stack--small">
        <li><h2 className="heading heading--menu">Elements</h2></li>
        <li className="divider"></li>
        <li><Link to="/button">Button</Link></li>
        <li><Link to="/card">Card</Link></li>
        <li><Link to="/checkbox">Checkbox</Link></li>
        <li><a href="#">Divider</a></li>
        <li><a href="#">Input</a></li>
        <li><a href="#">Notification</a></li>
        <li><a href="#">Radio</a></li>
        <li><a href="#">Select</a></li>
        <li><a href="#">Tag</a></li>
      </ul>
      <ul className="list list--bare stack stack--small">
        <li><h2 className="heading heading--menu">Layouts</h2></li>
        <li className="divider"></li>
        <li><a href="#">Container</a></li>
        <li><a href="#">Section</a></li>
        <li><a href="#">Space</a></li>
        <li><a href="#">Stack</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
