import React from 'react';

function Card() {
  return (
    <div className="container stack stack--large">
      <h1 className="heading heading--title">Card</h1>

      <div className="stack">
        <h2 className="heading heading--content">Default Card</h2>

        <div style={{ display: 'flex' }}>
          <div className="card" style={{ flex: 1 }}>
            <div className="card-section stack">
              <h2 className="heading heading--content">Card Title</h2>
              <p>This is a card section.</p>
            </div>
            <div className="card-divider"></div>
            <div className="card-section card-section--action">
              <button className="button button--small">
                Card Action
              </button>
            </div>
          </div>

          <div className="card" style={{ flex: 1, marginLeft: '1rem' }}>
            <div className="card-section stack">
              <h2 className="heading heading--content">Card Title</h2>
              <p>This is a card section.</p>
            </div>
            <div className="card-divider"></div>
            <div className="card-section card-section--action">
              <button className="button button--small">
                Card Action
              </button>
            </div>
          </div>

          <div className="card" style={{ flex: 1, marginLeft: '1rem' }}>
            <div className="card-section stack">
              <h2 className="heading heading--content">Card Title</h2>
              <p>This is a card section.</p>
            </div>
            <div className="card-divider"></div>
            <div className="card-section card-section--action">
              <button className="button button--small">
                Card Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
