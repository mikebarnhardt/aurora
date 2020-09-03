import React from 'react';

function Button() {
  return (
    <div className="container container--small stack stack--large">
      <h1 className="heading heading--title">Button</h1>
      
      <p>
        The button is the most primitive form of interaction with a page. Each
        button color and size should be carefully crafted to make clear{' '}
        <strong>user choices</strong> and <strong>visual hierarchy</strong>.
      </p>

      <div className="card">
        <section className="card-section">
          <h2 className="heading heading--content">Default Buttons</h2>
          <p>Button elements with the default class of <code>button</code>.</p>
        </section>
        <div className="card-divider" />
        <section className="card-section">
          <button className="button" type="button">Default</button>
          {' '}
          <button className="button button--primary" type="button">Primary</button>
          {' '}
          <button className="button button--error" type="button">Error</button>
          {' '}
          <button className="button button--success" type="button">Success</button>
          {' '}
          <button className="button button--warning" type="button">Warning</button>
        </section>
      </div>

      <div className="card">
        <section className="card-section">
          <h2 className="heading heading--content">Outlined Buttons</h2>
          <p>Button elements with the default class of <code>button</code>.</p>
        </section>
        <div className="card-divider" />
        <section className="card-section">
          <button className="button button--outline" type="button">Default</button>
          {' '}
          <button className="button button--outline button--primary" type="button">Primary</button>
          {' '}
          <button className="button button--outline button--error" type="button">Error</button>
          {' '}
          <button className="button button--outline button--success" type="button">Success</button>
          {' '}
          <button className="button button--outline button--warning" type="button">Warning</button>
        </section>
      </div>
      
      <div className="notification notification--error">
        You can use media queries in your theme to make sure button sizes are
        appropriately sized on smaller devices.
      </div>

      <div className="card">
        <section className="card-section">
          <h2 className="heading heading--content">Small Buttons</h2>
        </section>
        <div className="card-divider" />
        <section className="card-section">
          <button className="button button--small" type="button">Default Button</button>
          {' '}
          <button className="button button--small button--primary" type="button">Subtle Button</button>
        </section>
      </div>

      <div className="card">
        <section className="card-section">
          <h2 className="heading heading--content">Large Buttons</h2>
        </section>
        <div className="card-divider" />
        <section className="card-section">
          <button className="button button--large" type="button">Default Button</button>
          {' '}
          <button className="button button--large button--primary" type="button">Subtle Button</button>
        </section>
      </div>

      <div className="card">
        <section className="card-section">
          <h2 className="heading heading--content">Disabled Buttons</h2>
        </section>
        <div className="card-divider" />
        <section className="card-section">
          <button className="button" disabled type="button">Disabled Button</button>
          {' '}
          <button className="button button--primary" disabled type="button">Disabled Subtle Button</button>
        </section>
      </div>
    </div>
  );
}

export default Button;
