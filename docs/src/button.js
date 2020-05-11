import React from 'react';

function Button() {
  return (
    <div className="container container--small stack stack--large">
      <h1 className="heading heading--title">Button</h1>

      <div className="card">
        <section className="card-section">
          <h2 className="heading heading--content">Default Buttons</h2>
          <p>Button elements with the default class of <code>button</code>.</p>
        </section>
        <div className="card-divider" />
        <section className="card-section">
          <button className="button" type="button">Default</button>
          {' '}
          <button className="button button--subtle" type="button">Primary</button>
          {' '}
          <button className="button button--secondary" type="button">Secondary</button>
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
          <h2 className="heading heading--content">Small Buttons</h2>
        </section>
        <div className="card-divider" />
        <section className="card-section">
          <button className="button button--small" type="button">Default Button</button>
          {' '}
          <button className="button button--small button--subtle" type="button">Subtle Button</button>
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
          <button className="button button--large button--subtle" type="button">Subtle Button</button>
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
          <button className="button button--subtle" disabled type="button">Disabled Subtle Button</button>
        </section>
      </div>
    </div>
  );
}

export default Button;
