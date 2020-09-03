import React from 'react';

function Input() {
  return (
    <div className="container container--small stack stack--large">
      <h1 className="heading heading--title">Input</h1>

      <div className="card">
        <section className="card-section">
          <h2 className="heading heading--content">Default Inputs</h2>
          <p>Input elements with the default class of <code>button</code>.</p>
        </section>
        <div className="card-divider" />
        <section className="card-section stack">
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" name="email" type="email" />
          </div>
          
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" name="password" type="password" />
          </div>
          
          <div className="notification notification--primary notification--small">
            You can use media queries in your theme to make sure button sizes
            are appropriately sized on smaller devices.
          </div>
        </section>
      </div>
      
      <h1 className="heading heading--title">App Background</h1>
      
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input className="input" id="email" name="email" type="email" />
      </div>
      
      <div>
        <label className="label" htmlFor="password">Password</label>
        <input className="input" id="password" name="password" type="password" />
      </div>
    </div>
  );
}

export default Input;
