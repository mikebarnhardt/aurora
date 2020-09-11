import React from 'react';
import {Link, NavLink, Route, Switch} from 'react-router-dom';

import Portal from './Portal';

function Ancient() {
  const [coords, setCoords] = React.useState({});
  const [dropdownStatus, setDropdownStatus] = React.useState('closed');
  const [modal, setModal] = React.useState(false);
  const [mode, setMode] = React.useState('light');
  const [privacy, setPrivacy] = React.useState(true);
  const [theme, setTheme] = React.useState('ancient');

  function handleMode(event) {
    const checked = event?.target?.checked;
    document.documentElement.classList.toggle('theme--light');
    document.documentElement.classList.toggle('theme--dark');
    setMode(checked ? 'dark' : 'light');
  }

  function handlePrivacy(event) {
    setPrivacy(previous => !previous);
  }

  function handleTheme(event) {
    const newTheme = event?.target?.value;
    document.documentElement.classList.toggle(`theme--${newTheme}`);
    document.documentElement.classList.toggle(`theme--${theme}`);
    setTheme(newTheme);
  }
  
  React.useEffect(
    () => {
      const style = modal
        ? 'overflow: hidden;'
        : '';

      document.documentElement.style = style;
    },
    [modal]
  )

  return (
    <div className="layout layout--column">
      <div className="nav-bar">
        <nav className="nav">
          <a className="nav-item strong" href="/">Ancient</a>
        </nav>
        <nav className="nav hide flex@tablet">
          <a className="nav-item" href="/">Blog</a>
          <a className="nav-item" href="/">Design Language</a>
          <a className="nav-item" href="/">Components</a>
        </nav>
        <nav className="nav nav--auto" />
        <nav className="nav flex hide@tablet">
          <button className="button button--md button--subtle button--base" type="button">Menu</button>
        </nav>
        <nav className="nav">
          <li className="nav-item">
            <div className="control control--sm">
              <select className="input input--base input--sm" value={theme} onChange={handleTheme}>
                <option value="ancient">Ancient (Default)</option>
                <option value="behelit">Behelit</option>
                <option value="civics">Civics</option>
              </select>
              <i className="icon">
                <svg viewBox="0 0 16 16">
                  <line stroke="currentColor" x1="8" x2="14" y1="11" y2="5" />
                  <line stroke="currentColor" x1="2" x2="8" y1="5" y2="11" />
                </svg>
              </i>
            </div>
          </li>
          <li className="nav-item">
            <label className="toggle" htmlFor="mode">
              <input checked={mode === 'dark'} className="toggle-input" id="mode" name="mode" type="checkbox" onChange={handleMode} />
              <div className="toggle-track">
                <div className="toggle-slider" />
              </div>
            </label>
          </li>
        </nav>
      </div>

      <div className="divider" />

      <div className="layout">
        <div className="layout layout--column hide block@tablet">
          <div className="sidebar section section--md" style={{
            minWidth: '16rem',
            maxWidth: '24rem',
            width: '20%',
            height: '100%',
          }}>
            <nav className="menu">
              <a className="menu-item menu-item--link" href="#buttons">Buttons</a>
              <a className="menu-item menu-item--link" href="#forms">Forms</a>
              <a className="menu-item menu-item--link" href="#cards">Cards</a>
              <a className="menu-item menu-item--link" href="#banners">Banners</a>
              <a className="menu-item menu-item--link" href="#notifications">Notifications</a>
            </nav>
          </div>
        </div>

        <div className="divider divider--vertical" />

        <main className="layout layout--column layout--fill">
          <div className="space space--xl" />
          <a name="buttons" />
          <section className="section section--xl@tablet">
            <div className="container container--md@tablet">
              <h1 className="title title--headline">Buttons</h1>
            </div>
          </section>
          <div className="divider" />
          <section className="section section--lg@tablet section--xl@desktop">
            <div className="container container--md@tablet">
              <div className="grid grid--xl@tablet mobile:stack mobile:stack--lg">
                <div className="column column--33@tablet stack tablet:stack--lg">
                  <h2 className="title title--text">Default</h2>
                  <p>
                    Default buttons should be used to highlight the most
                    important action on the page or within a block of content.
                  </p>
                </div>
                <div className="column column--66@tablet">
                  <div className="grid grid--md@tablet mobile:stack mobile:stack--lg">
                    <div className="column column--33@tablet stack tablet:stack--lg">
                      <h2 className="title title--text">Base</h2>
                      <div className="stack stack--md">
                        <button className="button button--base button--md button--block" type="button">Base</button>
                        <button className="button button--base button--md button--block button--hover" type="button">Hover</button>
                        <button className="button button--base button--md button--block button--active" type="button">Active</button>
                        <button className="button button--base button--md button--block button--focus" type="button">Focus</button>
                      </div>
                    </div>
                    <div className="column column--33@tablet stack tablet:stack--lg">
                      <h2 className="title title--text">Primary</h2>
                      <div className="stack stack--md">
                        <button className="button button--primary button--md button--block" type="button">Primary</button>
                        <button className="button button--primary button--md button--block button--hover" type="button">Hover</button>
                        <button className="button button--primary button--md button--block button--active" type="button">Active</button>
                        <button className="button button--primary button--md button--block button--focus" type="button">Focus</button>
                      </div>
                    </div>
                    <div className="column column--33@tablet stack tablet:stack--lg">
                      <h2 className="title title--text">Secondary</h2>
                      <div className="stack stack--md">
                        <button className="button button--secondary button--md button--block" type="button">Secondary</button>
                        <button className="button button--secondary button--md button--block button--hover" type="button">Hover</button>
                        <button className="button button--secondary button--md button--block button--active" type="button">Active</button>
                        <button className="button button--secondary button--md button--block button--focus" type="button">Focus</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space space--xl" />

              <div className="grid grid--xl@tablet">
                <div className="column column--33@desktop stack stack--lg">
                  <h2 className="title title--text">Status</h2>
                  <p>
                    Status buttons should be used sparingly to avoid user
                    confusion.
                  </p>
                </div>
                <div className="column column--66@desktop">
                  <div className="grid grid--md@tablet">
                    <div className="column column--33@tablet stack stack--lg">
                      <h2 className="title title--text">Error</h2>
                      <div className="stack stack--md">
                        <button className="button button--error button--md button--block" type="button">Error</button>
                        <button className="button button--error button--md button--block button--hover" type="button">Hover</button>
                        <button className="button button--error button--md button--block button--active" type="button">Active</button>
                        <button className="button button--error button--md button--block button--focus" type="button">Focus</button>
                      </div>
                    </div>
                    <div className="column column--33@tablet stack stack--lg">
                      <h2 className="title title--text">Success</h2>
                      <div className="stack stack--md">
                        <button className="button button--success button--md button--block" type="button">Error</button>
                        <button className="button button--success button--md button--block button--hover" type="button">Hover</button>
                        <button className="button button--success button--md button--block button--active" type="button">Active</button>
                        <button className="button button--success button--md button--block button--focus" type="button">Focus</button>
                      </div>
                    </div>
                    <div className="column column--33@tablet stack stack--lg">
                      <h2 className="title title--text">Warning</h2>
                      <div className="stack stack--md">
                        <button className="button button--warning button--md button--block" type="button">Error</button>
                        <button className="button button--warning button--md button--block button--hover" type="button">Hover</button>
                        <button className="button button--warning button--md button--block button--active" type="button">Active</button>
                        <button className="button button--warning button--md button--block button--focus" type="button">Focus</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="space space--lg space--xl@tablet" />

          <a name="forms" />
          <section className="section section--lg@tablet">
            <div className="container container--md@tablet">
              <h1 className="title title--headline">Forms</h1>
            </div>
          </section>
          <div className="divider" />
          <section className="section section--lg@tablet section--xl@desktop">
            <div className="container container--md@tablet">
              <div className="grid grid--xl@tablet">
                <div className="column column--33@tablet stack stack--lg">
                  <h2 className="title title--text">Input</h2>
                  <p>Standard input fields.</p>
                </div>
                <div className="column column--66@tablet stack tablet:stack--lg">
                  <h2 className="title title--text">Register</h2>

                  <div className="stack">
                    <div className="grid grid--md@tablet">
                      <div className="column column--50@tablet">
                        <label className="label">Email</label>
                        <input className="input input--md input--base" type="text" />
                      </div>
                      <div className="column column--50@tablet">
                        <label className="label">Password</label>
                        <div className="control">
                          <input className="input input--error input--md" type={privacy ? 'password' : 'text'} />
                          <button className="button button--link icon" style={{fontSize: '1.25rem'}} type="button" onClick={handlePrivacy}>
                            {
                              privacy
                                ? (
                                  <i className="icon">
                                    <svg viewBox="0 0 16 16">
                                      <path fill="currentColor" d="M15.43,7.74c-0.069-0.112-1.038-1.688-2.589-3.082l-0.66,0.77C13.278,6.417,14.075,7.509,14.41,8c-0.67,0.99-3.24,4.5-6.41,4.5c-0.564,0-1.102-0.122-1.616-0.31l-0.688,0.803C6.413,13.3,7.183,13.5,8,13.5c4.23,0,7.3-5.03,7.43-5.24L15.58,8L15.43,7.74z" />
                                      <path fill="currentColor" d="M10.434,7.465C10.473,7.637,10.5,7.814,10.5,8c0,1.38-1.12,2.5-2.5,2.5c-0.052,0-0.099-0.017-0.15-0.02l-0.763,0.89C7.378,11.451,7.683,11.5,8,11.5c1.93,0,3.5-1.57,3.5-3.5c0-0.504-0.121-0.976-0.318-1.407L10.434,7.465z" />
                                      <path fill="currentColor" d="M14.33,0.62c-0.21-0.18-0.53-0.15-0.71,0.05l-2.395,2.797C10.266,2.899,9.178,2.5,8,2.5c-4.23,0-7.3,5.03-7.43,5.24L0.42,8l0.15,0.26c0.08,0.13,1.36,2.22,3.36,3.72l-2.31,2.69c-0.18,0.21-0.16,0.53,0.05,0.71C1.77,15.46,1.88,15.5,2,15.5c0.14,0,0.28-0.06,0.38-0.17l2.842-3.32l0.218-0.25l5.97-6.97l0.147-0.171L14.38,1.33C14.56,1.12,14.54,0.8,14.33,0.62z M5.5,8c0-1.38,1.12-2.5,2.5-2.5c0.439,0,0.848,0.12,1.208,0.319L6.03,9.529C5.7,9.1,5.5,8.58,5.5,8z M1.6,8C2.26,7.01,4.84,3.5,8,3.5c0.92,0,1.78,0.3,2.56,0.74L9.867,5.049C9.328,4.709,8.689,4.5,8,4.5C6.07,4.5,4.5,6.07,4.5,8c0,0.879,0.34,1.679,0.879,2.289L4.59,11.21C3.09,10.1,2,8.6,1.6,8z" />
                                    </svg>
                                  </i>
                                )
                                : (
                                  <i className="icon">
                                    <svg viewBox="0 0 16 16">
                                    	<path fill="none" stroke="currentColor" d="M8,13c-4,0-7-5-7-5s3-5,7-5s7,5,7,5S12,13,8,13z" />
                                    	<circle fill="none" stroke="currentColor" cx="8" cy="8" r="3" />
                                    </svg>
                                  </i>
                                )
                            }
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid--md@tablet">
                      <div className="column column--50@tablet">
                        <label className="label">Type</label>
                        <div className="control">
                          <select className="input input--md input--base">
                            <option value="user">User</option>
                            <option value="teacher">Teacher</option>
                          </select>
                          <i className="icon">
                            <svg viewBox="0 0 16 16">
                              <line stroke="currentColor" x1="8" x2="14" y1="11" y2="5" />
                              <line stroke="currentColor" x1="2" x2="8" y1="5" y2="11" />
                            </svg>
                          </i>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid--md@tablet">
                      <div className="column column--50@tablet">
                        <label className="label">Modal</label>
                        <button
                          className="button button--md button--block"
                          type="button"
                          onClick={() => setModal(!modal)}
                        >
                          Open Modal
                        </button>
                        <Portal>
                          <div
                            className={`
                              modal
                              ${modal ? 'modal--visible' : 'modal--hidden'}
                            `}
                          >
                            <section className="section section--lg@tablet section--xl@desktop">
                              <div className="container container--sm@tablet">
                                <div className="card animate:fade-down" style={{'--card-border-width': 0}}>
                                  <figure className="card-figure card-figure--1x1">
                                    <img src="/blanc.jpg" />
                                  </figure>
                                  <div className="card-section card-section--md stack stack--sm">
                                    <h1 className="title title--text">Hyperdimension Neptunia Blanc Figure</h1>
                                    <p>From <strong>Broccoli</strong> and sculpted by <strong>Chizuru (Tsuru no Yakata)</strong> comes this 1/8 scale figure of Blanc from Hyperdimension Neptunia. As the third addition to the Wake Up series, Blanc adorably looks a little drowsy still and slightly disheveled from sleeping while she rouses holding a Dogoo plushie in one hand and her beret in the other.</p>
                                    <p>Highlights include the soft coloring of the paintwork which gives it a gentle look and the expert sculpting of the fluffy fur on her arms and ruffle trim on her beret. The gems and golden details of her outfit also shimmer with metallic paint, and her bare shoulders, back, and legs have been carefully shaded for a realistic look. Add this sleepy Blanc to your collection and prepare some breakfast!</p>
                                  </div>
                                  <div className="card-divider" />
                                  <div className="card-section card-section--md">
                                    <div className="flex flex--split">
                                      <button
                                        className="button button--md button--primary"
                                        type="button"
                                        onClick={() => setModal(false)}
                                      >
                                        Pre-order Now
                                      </button>
                                      <button
                                        className="button button--md"
                                        type="button"
                                        onClick={() => setModal(false)}
                                      >
                                        Maybe Later
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </Portal>
                      </div>
                      <div className="column column--50@tablet">
                        <label className="label">Dropdown</label>
                        <div className="control">
                          <button
                            className="button button--md button--block"
                            type="button"
                            onClick={event => {
                              const rect = event.target.getBoundingClientRect();
                              setCoords({
                                left: rect.x,
                                top: rect.y + rect.height + window.scrollY,
                              });
                              setDropdownStatus(dropdownStatus === 'open' ? 'closed' : 'open');
                            }}
                          >
                            Open Dropdown
                          </button>
                          <i className="icon">
                            <svg viewBox="0 0 16 16">
                              <line stroke="currentColor" x1="8" x2="14" y1="11" y2="5" />
                              <line stroke="currentColor" x1="2" x2="8" y1="5" y2="11" />
                            </svg>
                          </i>
                        </div>
                        <Portal>
                          <div
                            className={`
                              animate:fade-down
                              dropdown
                              ${dropdownStatus === 'open' ? 'block' : 'hide'}
                            `}
                            style={{
                              left: coords.left,
                              top: coords.top,
                            }}
                          >
                            <div className="menu">
                              <div className="menu-item">Dark Souls III</div>
                              <div className="menu-item">Destiny II</div>
                              <div className="menu-item">Fortnite</div>
                              <div className="menu-item">League of Legends</div>
                              <div className="menu-item">The Last of Us</div>
                            </div>
                          </div>
                        </Portal>
                      </div>
                    </div>
                    
                    <div className="grid grid--md@tablet">
                      <div className="column column--50@tablet stack stack--sm">
                        <label className="checkbox" htmlFor="pizza">
                          <input type="checkbox" name="pizza" id="pizza" />
                          <div className="checkbox-icon">
                            <svg viewBox="0 0 16 16">
                              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="14.5" y1="3" x2="7.5" y2="13" />
                              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="1.5" y1="8" x2="7.5" y2="13" />
                            </svg>
                          </div>
                          Pizza
                        </label>
                        <label className="checkbox" htmlFor="tacos">
                          <input checked type="checkbox" name="tacos" id="tacos" />
                          <div className="checkbox-icon">
                            <svg viewBox="0 0 16 16">
                              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="14.5" y1="3" x2="7.5" y2="13" />
                              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="1.5" y1="8" x2="7.5" y2="13" />
                            </svg>
                          </div>
                          Tacos
                        </label>
                        <label className="checkbox" htmlFor="sushi">
                          <input type="checkbox" name="sushi" id="sushi" />
                          <div className="checkbox-icon">
                            <svg viewBox="0 0 16 16">
                              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="14.5" y1="3" x2="7.5" y2="13" />
                              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="1.5" y1="8" x2="7.5" y2="13" />
                            </svg>
                          </div>
                          Sushi
                        </label>
                      </div>
                      <div className="column column--50@tablet stack stack--sm">
                        <label className="radio" htmlFor="beer">
                          <input type="radio" name="drink" id="beer" />
                          <div className="radio-circle" />
                          Beer
                        </label>
                        <label className="radio" htmlFor="tequila">
                          <input type="radio" name="drink" id="tequila" />
                          <div className="radio-circle" />
                          Tequila
                        </label>
                        <label className="radio" htmlFor="sake">
                          <input type="radio" name="drink" id="sake" />
                          <div className="radio-circle" />
                          Sake
                        </label>
                      </div>
                    </div>
                    
                    <button className="button button--primary button--md" type="button">Register</button>
                    {' '}
                    <button className="button button--md" type="button">Not Today</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="space space--lg space--xl@tablet" />

          <a name="cards" />
          <section className="section section--lg@tablet">
            <div className="container container--md@tablet">
              <h1 className="title title--headline">Cards</h1>
            </div>
          </section>
          <div className="divider" />
          <section className="section section--lg@tablet section--xl@desktop">
            <div className="container container--md@tablet">
              <div className="grid grid--xl@tablet">
                <div className="column column--33@tablet stack stack--md">
                  <h1 className="title title--text">Default</h1>
                  <p>
                    Cards act as a subtle separator of content blocks.
                  </p>
                </div>
                <div className="column column--66@tablet">
                  <div className="grid grid--md@tablet">
                    <div className="column column--50@tablet">
                      <div className="card">
                        <figure className="card-figure card-figure--1x1">
                          <img src="/cat-maid.png" />
                        </figure>
                        <div className="card-section card-section--md stack stack--sm">
                          <h1 className="title title--text">Card</h1>
                          <p>This is some card content.</p>
                        </div>
                        <div className="card-divider" />
                        <div className="card-section card-section--sm">
                          <div className="grid grid--sm">
                            <div className="column column--50">
                              <button className="button button--sm button--block button--base button--subtle" type="button">Like</button>
                            </div>
                            <div className="column column--50 text-align--right">
                              <button className="button button--sm button--block button--primary" type="button">Fav</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column column--50@tablet">
                      <div className="card">
                        <figure className="card-figure card-figure--1x1">
                          <img src="/iori.png" />
                        </figure>
                        <div className="card-section card-section--md stack stack--sm">
                          <h1 className="title title--text">Card</h1>
                          <p>This is some card content.</p>
                        </div>
                        <div className="card-divider" />
                        <div className="card-section card-section--sm">
                          <div className="grid grid--sm@tablet">
                            <div className="column column--50">
                              <button
                                className="button button--sm button--icon button--base button--subtle"
                                type="button"
                              >
                                <i className="icon">
                                  <svg viewBox="0 0 16 16">
                                    <path fill="none" stroke="currentColor" d="M13.928,2.983c-1.43-1.43-3.748-1.43-5.178,0L8,3.733l-0.75-0.75c-1.43-1.43-3.748-1.43-5.178,0c-1.43,1.43-1.43,3.748,0,5.178L8,14.089l5.928-5.928C15.357,6.731,15.357,4.413,13.928,2.983z" />
                                  </svg>
                                </i>
                              </button>
                            </div>
                            <div className="column column--50 text-align--right">
                              <button 
                                className="button button--icon button--sm button--primary"
                                type="button"
                              >
                                <i className="icon">
                                  <svg viewBox="0 0 16 16">
                                  	<line fill="none" stroke="currentColor" strokeLinecap="round" x1="8" x2="8" y1="1" y2="15" />
                                  	<line fill="none" stroke="currentColor" strokeLinecap="round" x1="1" x2="15" y1="8" y2="8" />
                                  </svg>
                                </i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space space--lg" />
          
              <div className="grid grid--xl@desktop">
                <div className="column column--100@tablet column--33@desktop stack stack--md mb--md mb--none@desktop">
                  <h1 className="title title--text">
                    Hero Cards{' '}
                    <span className="tag tag--warning">New</span>
                  </h1>
                  <p>
                    Hero cards can be used to draw extra attention to a specific
                    card, but should be used sparingly.
                  </p>
                </div>
                <div className="column column--100@tablet column--66@desktop">
                  <div className="grid grid--md@tablet">
                    <div className="column column--50@tablet">
                      <a className="card card--primary" href="#">
                        <figure className="card-figure card-figure--1x1">
                          <img src="/pyra.jpg" />
                        </figure>
                        <div className="card-section card-section--md stack stack--sm">
                          <h1 className="title title--text">Pyra</h1>
                          <div>
                            <span className="tag tag--warning">New</span>
                            {' '}
                            <span className="tag tag--success">Favorite</span>
                            {' '}
                            <span className="tag tag--error">Main Character</span>
                          </div>
                          <p>This is a primary hero card. This card is also a link!</p>
                        </div>
                      </a>
                    </div>
                    <div className="column column--50@tablet">
                      <div className="card card--secondary">
                        <figure className="card-figure card-figure--1x1">
                          <img src="/mythra.jpg" />
                        </figure>
                        <div className="card-section card-section--md stack stack--sm">
                          <h1 className="title title--text">Mythra</h1>
                          <div>
                            <span className="tag tag--primary">New</span>
                            {' '}
                            <span className="tag tag--success">Special</span>
                            {' '}
                            <span className="tag">Rare</span>
                          </div>
                          <p>This is some card content.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="space space--xl" />

          <a name="banners" />
          <section className="section section--lg@tablet">
            <div className="container container--md@tablet">
              <h1 className="title title--headline">Banners</h1>
            </div>
          </section>
          <div className="divider" />

          <div className="space space--lg" />

          <section className="banner section section--lg@tablet section--xl@desktop">
            <div className="container container--md@tablet stack stack--sm">
              <h2 className="title title--text">Banner</h2>
              <p className="measure measure--sm">
                Simply add banner to any container element to apply a variety
                of background colors.
              </p>
            </div>
          </section>

          <div className="space space--lg" />

          <section className="banner banner--primary banner--hero section section--lg@tablet section--xl@desktop">
            <div className="container container--md@tablet stack stack--sm">
              <h2 className="title title--text">Primary Banner</h2>
              <p className="measure measure--sm">
                Simply add banner to any container element to apply a variety
                of background colors.
              </p>
            </div>
          </section>

          <div className="space space--lg" />

          <section className="banner banner--secondary banner--hero section section--lg@tablet section--xl@desktop">
            <div className="container container--md@tablet stack stack--sm">
              <h2 className="title title--text">Secondary Banner</h2>
              <p className="measure measure--sm">
                Simply add banner to any container element to apply a variety
                of background colors.
              </p>
            </div>
          </section>

          <div className="space space--xl" />

          <a name="notifications" />
          <section className="section section--lg@tablet">
            <div className="container container--md@tablet">
              <h1 className="title title--headline">Notifications</h1>
            </div>
          </section>

          <div className="divider" />

          <section className="section section--xl@tablet">
            <div className="container container--md@tablet">
              <div className="grid grid--lg@tablet grid--xl@desktop">
                <div className="column column--33@tablet stack stack--lg">
                  <h1 className="title title--text">Status</h1>
                  <p>Notificatons are used to give status hints to the user.</p>
                </div>
                <div className="column column--66@tablet stack stack--md">
                  <div className="stack stack--lg">
                    <h2 className="title title--text">Examples</h2>
                    
                    <div className="stack stack--md">
                      <div className="notification notification--error notification--md">
                        An error occurred. This should be an error message.
                      </div>
                      <div className="notification notification--success notification--md">
                        An successful action occurred. This should be a success message.
                      </div>
                      <div className="notification notification--warning notification--md">
                        An warning action occurred. This should be a warning message.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="space space--xl" />

          <a name="tables" />
          <section className="section section--lg@tablet">
            <div className="container container--md@tablet">
              <h1 className="title title--headline">Tables</h1>
            </div>
          </section>

          <div className="divider" />

          <section className="section section--xl@tablet">
            <div className="container container--md@tablet">
              <div className="grid grid--lg@tablet grid--xl@desktop">
                <div className="column column--33@tablet stack stack--lg">
                  <h1 className="title title--text">Normal</h1>
                  <p>Notificatons are used to give status hints to the user.</p>
                </div>
                <div className="column column--66@tablet stack stack--md">
                  <div className="stack stack--lg">
                    <h2 className="title title--text">Examples</h2>
                    
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <label className="checkbox">
                              <input type="checkbox" />
                              <div className="checkbox-icon">
                                <svg viewBox="0 0 16 16">
                                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="14.5" y1="3" x2="7.5" y2="13" />
                                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="1.5" y1="8" x2="7.5" y2="13" />
                                </svg>
                              </div>
                            </label>
                          </th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="selected">
                          <td>
                            <label className="checkbox">
                              <input checked type="checkbox" />
                              <div className="checkbox-icon">
                                <svg viewBox="0 0 16 16">
                                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="14.5" y1="3" x2="7.5" y2="13" />
                                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="1.5" y1="8" x2="7.5" y2="13" />
                                </svg>
                              </div>
                            </label>
                          </td>
                          <td>Vi</td>
                          <td>The Piltover Enforcer</td>
                          <td>Jungle</td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox">
                              <input type="checkbox" />
                              <div className="checkbox-icon">
                                <svg viewBox="0 0 16 16">
                                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="14.5" y1="3" x2="7.5" y2="13" />
                                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2px" x1="1.5" y1="8" x2="7.5" y2="13" />
                                </svg>
                              </div>
                            </label>
                          </td>
                          <td>Caitlyn</td>
                          <td>The Sheriff of Piltover</td>
                          <td>Bottom</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Ancient;
