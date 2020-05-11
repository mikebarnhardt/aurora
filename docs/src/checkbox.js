import React from 'react';

function Checkbox() {
  return (
    <div className="container stack stack--large">
      <h1 className="heading heading--title">Checkbox</h1>

      <div>
        <input
          className="checkbox"
          id="food"
          name="food"
          type="checkbox"
          value="pizza"
        />
        <label htmlFor="food">Pizza</label>
      </div>
    </div>
  );
}

export default Checkbox;
