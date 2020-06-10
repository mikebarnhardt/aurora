import React from 'react';

function Test( ) {
  const [ agree, setAgree ] = React.useState( true );
  const [ isOpen, setIsOpen ] = React.useState( false );
  const [ roleIsOpen, setRoleIsOpen ] = React.useState( false );

  return (
    <div className="stack stack--large">
      <div className="container container--small stack stack--large">
        <h1 className="heading heading--title">Ruckus Demo</h1>
        <p>
          This is a demonstration page using various elements and layouts from
          Ruckus for easier development. It will probably be removed after
          enough testing and documentation have been written.
        </p>

        <div className="card">
          <figure class="card-figure">
            <img src="cait.png" />
          </figure>
          <div className="card-section">
            <h2 className="heading heading--content">Sign Up <span className="tag tag--sm tag--success">Positive</span></h2>
          </div>
          <div className="card-divider" />
          <div className="card-section stack">
            <div className="notification notification--error">
              Please fix the errors below.
            </div>

            <form className="stack">
              <div className="row">
                <div className="column column--50">
                  <label className="label" htmlFor="first" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                    <span>First Name</span>
                    <span className="tag tag--error tag--xs">required</span>
                  </label>
                  <input className="input" id="first" name="first" type="text" />
                </div>
                
                <div className="column column--50">
                  <label className="label" htmlFor="last" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Last Name</span>
                    <span className="tag tag--error tag--xs">required</span>
                  </label>
                  <input className="input" id="last" name="last" type="text" />
                </div>
              </div>
              
              <div className="row">
                <div className="column column--50">
                  <div className="field field--error" style={{ color: 'hsl(344, 80%, 64%)' }}>
                    <label className="label" htmlFor="email" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                      <span>Email</span>
                      <span className="tag tag--error tag--xs">required</span>
                    </label>
                    <input className="input input--error" id="email" name="email" type="text" />
                    <div style={{ fontSize: '0.75rem' }}>
                      Invalid email address.
                    </div>
                  </div>
                </div>
                <div className="column column--50">
                  <div className="dropdown dropdown--overflow">
                    <button
                      className="button"
                      type="button"
                      onClick={ () => setRoleIsOpen(true) }
                    >
                      Select Role
                    </button>

                    <div className={`
                      dropdown-content
                      dropdown-content--bottom
                      ${ roleIsOpen ? 'dropdown-content--active' : 'dropdown-content--inactive' }
                    `}>
                      <div className="card">
                        <div className="card-menu card-menu--dividers">
                          <a className="card-menu-link" onClick={ () => setRoleIsOpen(false) }>Educator</a>
                          <a className="card-menu-link" onClick={ () => setRoleIsOpen(false) }>Student</a>
                          <a className="card-menu-link" onClick={ () => setRoleIsOpen(false) }>Another dropdown option with some ridiculously long text because people don't know how to use English</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="column column--50">
                  <label className="label" htmlFor="password" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Password</span>
                    <span className="tag tag--error tag--xs">required</span>
                  </label>
                  <input className="input" id="password" name="password" type="password" />
                </div>
              </div>
              
              <div className="checkbox">
                <input checked={agree} id="agree" name="agree" type="checkbox" value={agree} onChange={({target}) => setAgree( target.checked )} />
                <label htmlFor="agree">I agree to the <a class="link" href="#">Terms and Conditions</a> and <a class="link" href="#">Privacy Policy</a>.</label>
              </div>
            </form>
          </div>
          <div className="card-divider" />
          <div className="card-section card-section--action flex desktop:flex--split">
            <button className="button button--primary" disabled={!agree} type="submit">
              <i className="icon">
                <svg id="envelope-open-simple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path class="path--primary" d="M20,8H18.09L10,14,2,8H0V6L10,0,20,6Z"/>
                  <path class="path--secondary" d="M12,20H0V8H2l8,6,8.09-6H20v4H16v4H12v4Z"/>
                  <path class="path--primary" d="M24,20H20v4H18V20H14V18h4V14h2v4h4Z"/>
                </svg>
              </i>
              {' '}
              Sign Up
            </button>
            <button
              className="button button--secondary"
              type="button"
              onClick={ () => setIsOpen(true) }
            >
              Open Modal
            </button>
            
            <Modal isOpen={isOpen} close={ () => setIsOpen(false) } />
          </div>
        </div>
        
        <div className="notification notification--primary">
          This is a notification{' '}
          <i className="icon">
            <svg id="envelope-open-simple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path class="path--primary" d="M20,8H18.09L10,14,2,8H0V6L10,0,20,6Z"/>
              <path class="path--secondary" d="M12,20H0V8H2l8,6,8.09-6H20v4H16v4H12v4Z"/>
              <path class="path--primary" d="M24,20H20v4H18V20H14V18h4V14h2v4h4Z"/>
            </svg>
          </i>
          {' '}with an inline{' '}
          <i className="icon">
            <svg id="envelope-open-simple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g>
                <path class="path--primary" d="M24,9.6H21.71L12,16.8,2.37,9.6H0V7.2L12,0,24,7.2Z"/>
                <path class="path--secondary" d="M24,9.6V24H0V9.6H2.37L12,16.8l9.71-7.2Z"/>
              </g>
            </svg>
          </i>
          {' '}SVG icon!
        </div>
        
        <div className="card">
          <div className="card-section">
            <h2 className="heading heading--content">Sign Up with Social Media</h2>
          </div>
          <div className="card-divider" />
          <div className="card-section">
            <div className="row">
              <div className="column column--50 column--push-25">
                <a
                  className="button button--block"
                  href="/authenticate/facebook"
                  style={{
                    '--ruckus-button-background-color': 'hsl( 216, 48%, 48% )',
                    '--ruckus-button-border-color': 'hsl( 216, 48%, 40% )',
                    '--ruckus-button-color': 'hsl( 216, 48%, 100% )'
                  }}
                >
                  Sign Up Using Facebook
                </a>
              </div>
            </div>
            
            <div className="row row--center">
              <div className="column column--50">
                <a
                  className="button button--block"
                  href="/authenticate/google"
                  style={{
                    '--ruckus-button-background-color': 'hsl( 8, 64%, 56% )',
                    '--ruckus-button-border-color': 'hsl( 8, 64%, 48% )',
                    '--ruckus-button-color': 'hsl( 32, 48%, 100% )'
                  }}
                >
                  Sign Up Using Google
                </a>
              </div>
            </div>
            
            <div className="row row--center">
              <div className="column column--50">
                <a className="button button--block" href="/authenticate/sso">
                  Sign Up Using SSO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container container--large">
        <div className="row">
          <div className="column column--flex">
            <div className="card">
              <div className="card-section stack">
                <h2 className="heading heading--content">Engaged Citizens</h2>
              </div>
              <div className="card-divider" />
              <div className="card-menu card-menu--dividers">
                <a className="card-menu-link" href="#">
                  <div className="row row--small">
                    <div className="column">
                      <span className="tag tag--xs">SS.7.C.2.10</span>
                    </div>
                    <div className="column column--flex">
                      Influencing the Government
                    </div>
                  </div>
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.2.11</span>
                  Bias, Symbolism and Propaganda
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.2.12</span>
                  Public Policy Problem Solving
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.2.13</span>
                  Examining Multiple Perspectives
                </a>
              </div>
            </div>
          </div>
          
          <div className="column column--flex">
            <div className="card">
              <div className="card-section">
                <h2 className="heading heading--content">Federal Government</h2>
              </div>
              <div className="card-divider" />
              <div className="card-menu card-menu--dividers">
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.1.6</span>
                  <span>Preamble of the U.S. Constitution</span>
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.1.7</span>
                  <span>Limits on Government Powers</span>
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.1.8</span>
                  <span>Federalists versus Anti-Federalists</span>
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.3.3</span>
                  <span>Articles I, II, and III</span>
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.3.5</span>
                  <span>The Amendment Process</span>
                </a>
                <a className="card-menu-link" href="#">
                  <div className="row row--small">
                    <div className="column desktop:flex desktop:flex--column">
                      <span className="tag tag--xs desktop:margin-bottom--small">SS.7.C.3.8</span>{' '}
                      <span className="tag tag--xs">SS.7.C.3.9</span>
                    </div>
                    <div className="column column--flex">
                      Structure, Powers, and Processes of Federal Government
                    </div>
                  </div>
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.3.14</span>
                  <span>Federal Government Obligations and Services</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="column column--flex">
            <div className="card">
              <div className="card-section stack">
                <h2 className="heading heading--content">Engaged Citizens</h2>
              </div>
              <div className="card-divider" />
              <div className="card-menu card-menu--dividers">
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.2.10</span>
                  <span>Influencing the Government</span>
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.2.11</span>
                  <span>Bias, Symbolism and Propaganda</span>
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.2.12</span>
                  <span>Public Policy Problem Solving</span>
                </a>
                <a className="card-menu-link" href="#">
                  <span className="tag tag--xs">SS.7.C.2.13</span>
                  <span>Examining Multiple Perspectives</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="card">
          <div className="card-section">
            This is a simple card used to test the margins and padding of the
            above row.
          </div>
        </div>
      </div>
    </div>
  );
}

function Modal({ close, isOpen }) {
  return (
    <div className={`modal ${!isOpen ? 'hide' : ''}`}>
      <div className="container container--small stack">
        <div className="card">
          <div className="card-section">
            <h1 className="heading heading--content">
              This is a  Modal
            </h1>
          </div>

          <div className="card-divider" />

          <div className="card-section">
            This is probably just a paragraph explaining something to the user
            before they click the buttons below.
          </div>

          <div className="card-divider" />

          <div className="card-section card-section--action">
            <button
              className="button button--primary"
              type="button"
              onClick={ () => close() }
            >
              Close Modal
            </button>
          </div>
        </div>
        
        <p>This is an additional paragraph.</p>
      </div>
    </div>
  );
}

export default Test;