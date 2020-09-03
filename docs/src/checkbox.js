import React from 'react';

function Checkbox() {
  const [food, setFood] = React.useState([]);
  
  function handleFood( event ) {
    setFood( food.concat(event.target.value) );
  }

  console.log(food);

  return (
    <div className="container container--small stack stack--large">
      <header className="stack">
        <h1 className="heading heading--title">Checkbox</h1>
        <p>Select your favorite food.</p>
      </header>

      <div className="card">
        <div className="card-section stack">
          <h2 className="heading heading--content">Meal</h2>

          <div className="stack stack--small">
            <div className="checkbox">
              <input id="pizza" name="food" type="checkbox" value="pizza" onChange={handleFood} />
              <label htmlFor="pizza">Pizza</label>
            </div>

            <div className="checkbox">
              <input id="tacos" name="food" type="checkbox" value="tacos" onChange={handleFood} />
              <label htmlFor="tacos">Tacos</label>
            </div>

            <div className="checkbox">
              <input id="sushi" name="food" type="checkbox" value="sushi" onChange={handleFood} />
              <label htmlFor="sushi">Sushi</label>
            </div>
          </div>
        </div>
        <div className="card-divider" />
        <div className="card-section stack">
          <h2 className="heading heading--content">Drink</h2>
          
          <div className="stack stack--small">
            <div className="checkbox">
              <input id="beer" name="food" type="checkbox" value="beer" onChange={handleFood} />
              <label htmlFor="beer">Beer</label>
            </div>
            
            <div className="checkbox">
              <input id="tequila" name="food" type="checkbox" value="tequila" onChange={handleFood} />
              <label htmlFor="tequila">Tequila</label>
            </div>
            
            <div className="checkbox">
              <input id="sake" name="food" type="checkbox" value="sake" onChange={handleFood} />
              <label htmlFor="sake">Sake</label>
            </div>
          </div>
        </div>
        <div className="card-divider" />
        <div className="card-section stack">
          <h2 className="heading heading--content">Dessert</h2>
          
          <div className="stack stack--small">
            <div className="checkbox">
              <input id="cookie" name="food" type="checkbox" value="cookie" onChange={handleFood} />
              <label htmlFor="cookie">Cookie</label>
            </div>
            
            <div className="checkbox">
              <input id="brownie" name="food" type="checkbox" value="brownie" onChange={handleFood} />
              <label htmlFor="brownie">Brownie</label>
            </div>
            
            <div className="checkbox">
              <input id="ice-cream" name="food" type="checkbox" value="ice-cream" onChange={handleFood} />
              <label htmlFor="ice-cream">Ice cream</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
