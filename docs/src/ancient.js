import React from 'react';

import Portal from './Portal';
import Guidelines from './Guidelines';

const THEMES = {
  'behelit': 'https://unpkg.com/ancient-theme-behelit@latest/dist/behelit.min.css',
  'civics': 'https://unpkg.com/ancient-theme-civics@latest/dist/civics.min.css',
};

function usePreferredColorScheme() {
  const preferredColorScheme = window.localStorage && window.localStorage.getItem('mode');

  if (typeof preferredColorScheme === 'string') {
    return preferredColorScheme;
  }

  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'night' : 'day';
}

function Ancient() {
  const preferredColorScheme = usePreferredColorScheme();
  const [coords, setCoords] = React.useState({});
  const [dropdownStatus, setDropdownStatus] = React.useState('closed');
  const [modal, setModal] = React.useState(false);
  const [mode, setMode] = React.useState(preferredColorScheme);
  const [privacy, setPrivacy] = React.useState(true);
  const [theme, setTheme] = React.useState('ancient');
  const [autoFontSize, setAutoFontSize] = React.useState(false);
  
  React.useEffect(
    () => {
      if (autoFontSize) {
        document.documentElement.classList.add('font-size-auto');
      } else {
        document.documentElement.classList.remove('font-size-auto');
      }
    },
    [autoFontSize]
  );
  
  React.useEffect(
    () => {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
  
      query.addListener(event => {
        if (window.localStorage && typeof window.localStorage.getItem('mode') !== 'string') {
          setMode(event.matches ? 'night' : 'day');
        }
      });
  
      return () => query.removeListener();
    },
    []
  );
  
  React.useEffect(
    () => {
      console.log(mode);
      if (mode === 'day') {
        document.documentElement.classList.remove('night');
      } else {
        document.documentElement.classList.add('night');
      }
    },
    [mode]
  );
  
  function getScrollbarWidth() {
    return (window.innerWidth - document.documentElement.clientWidth);
  }

  function handleMode(event) {
    const mode = event?.target?.checked ? 'night' : 'day';
    localStorage.setItem('mode', mode)
    setMode(mode);  
  }

  function handlePrivacy(event) {
    setPrivacy(previous => !previous);
  }

  function handleTheme(event) {
    const newTheme = event?.target?.value;

    if (newTheme === 'ancient') {
      document.documentElement.classList.remove(theme);
    } else {
      document.documentElement.classList.add(newTheme);
      document.documentElement.classList.remove(theme);
    }

    setTheme(newTheme);
  }
  
  // React.useEffect(
  //   () => {
  //     const link = document.querySelector('#js-theme');
  //     link.setAttribute('href', THEMES[theme] || '');
  //   },
  //   [theme]
  // );
  
  React.useEffect(
    () => {
      const style = modal
        ? `overflow: hidden; padding-right: ${getScrollbarWidth()}px;`
        : '';

      document.documentElement.style = style;
    },
    [modal]
  )

  return (
    <div className="flex flex-column">
      <div className="nav-bar">
        <nav className="nav">
          <a className="nav-item" href="/"><strong>Ancient</strong></a>
        </nav>
        <nav className="nav overflow-x-auto flex-auto none flex/m">
          <a className="nav-item" href="/">Blog</a>
          <a className="nav-item" href="/">Design Language</a>
          <a className="nav-item active" href="/">Components</a>
          <a className="nav-item" href="/">GitHub</a>
          <a className="nav-item" href="/">React</a>
          <a className="nav-item" href="/">JavaScript</a>
        </nav>
        <nav className="nav none/m">
          <button className="button s" type="button">Menu</button>
        </nav>
        <nav className="nav none flex/m">
          <div className="px4 py3 flex-shrink-0">
            <div className="control s">
              <select className="input icon-right" value={theme} onChange={handleTheme}>
                <option value="ancient">Ancient (Default)</option>
                <option value="behelit">Behelit</option>
                <option value="civics">Civics</option>
                <option value="kitsune">Kitsune</option>
              </select>
              <svg className="icon" viewBox="0 0 16 16">
                <line stroke="currentColor" x1="8" x2="14" y1="11" y2="5" />
                <line stroke="currentColor" x1="2" x2="8" y1="5" y2="11" />
              </svg>
            </div>
          </div>

          <div className="px4 py3 flex-shrink-0">
            <div className="switch s">
              <input
                checked={mode === 'night'}
                id="mode"
                name="mode"
                type="checkbox"
                onChange={handleMode}
              />
              <label htmlFor="mode">Dark Mode</label>
            </div>
          </div>

          <div className="px4 py3 flex-shrink-0">
            <div className="switch s">
              <input
                checked={autoFontSize}
                id="auto-size"
                name="auto-size"
                type="checkbox"
                onChange={event => setAutoFontSize(event.target.checked)}
              />
              <label htmlFor="auto-size">Auto-size</label>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex">
        <div className="sidebar mw2 w25 none block/m py4">
          <nav className="nav flex flex-column align-start sticky" style={{top: '1em'}}>
            <a className="nav-item" href="#buttons">
              Buttons <span className="indicator" />
            </a>
            <a className="nav-item" href="#forms">Forms</a>
            <a className="nav-item" href="#cards">Cards</a>
            <a className="nav-item" href="#banners">Banners</a>
            <a className="nav-item" href="#notifications">Notifications</a>
          </nav>
        </div>
        
        <div className="fixed t0 r0 mt6 mr6 mw2 flow s z1100">
          <div className="notification elevate-s">
            <p><strong>This is a toast!</strong></p>
            <p>We need a bit more text below to describe the problem.</p>
          </div>

          <div className="notification success elevate-s relative pr5">
            <button className="button absolute t0 r0">&times;</button>
            This is a success toast!
          </div>
        </div>

        <main className="flex-auto">
          <Guidelines />

          <a name="buttons" />
          <section className="section p6/l">
            <div className="mw8 flow flow-l flow-xl/l">           
              <h1 className="display">Buttons</h1>

              <div className="grid grid-xl/l flow flow-0/l">
                <div className="col col-33/l flow">
                  <h2 className="title">Brand</h2>
                  <p className="measure measure-s">
                    Default buttons should be used to highlight the most
                    important action on the page or within a block of content.
                  </p>
                </div>
                <div className="col col-66/l">
                  <div className="grid flow flow-0/l">
                    <div className="col col-33/m flow">
                      <h2 className="title">Default</h2>
                      <div className="flow">
                        <button className="button base block w100" type="button">Base</button>
                        <button className="button primary block w100" type="button">Primary</button>
                        <button className="button secondary block w100" type="button">Secondary</button>
                      </div>
                    </div>
                    <div className="col col-33/m flow">
                      <h2 className="title">Alternate</h2>
                      <div className="flow">
                        <button className="button base+ block w100" type="button">Base
                        </button>
                        <button className="button primary+ block w100" type="button">
                          <span className="text primary">Primary</span>
                        </button>
                        <button className="button secondary+ block w100" type="button">
                          <span className="text secondary">Secondary</span>
                        </button>
                      </div>
                    </div>
                    <div className="col col-33/m flow">
                      <h2 className="title">Ghost</h2>
                      <div className="flow">
                        <button className="button ghost base block w100" type="button">Base</button>
                        <button className="button ghost primary block w100" type="button">Primary</button>
                        <button className="button ghost secondary block w100" type="button">Secondary</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-xl/l flow flow-0/l">
                <div className="col col-33/l flow">
                  <h2 className="title">Status</h2>
                  <p>
                    Status buttons should be used sparingly to avoid user
                    confusion.
                  </p>
                </div>
                <div className="col col-66/l flow">
                  <div className="grid flow flow-0/l">
                    <div className="col col-33/m flow">
                      <h2 className="title">Default</h2>
                      <div className="flow">
                        <button className="button info block w100" type="button">Info</button>
                        <button className="button success block w100" type="button">Success</button>
                        <button className="button warning block w100" type="button">Warning</button>
                        <button className="button error block w100" type="button">Error</button>
                      </div>
                    </div>
                    <div className="col col-33/m flow">
                      <h2 className="title">Alternate</h2>
                      <div className="flow">
                        <button className="button info+ block w100" type="button">
                          <span className="text info">Info</span>
                        </button>
                        <button className="button success+ block w100" type="button">
                          <span className="text success">Success</span>
                        </button>
                        <button className="button warning+ block w100" type="button">
                          <span className="text warning">Warning</span>
                        </button>
                        <button className="button error+ block w100" type="button">
                          <span className="text error">Error</span>
                        </button>
                      </div>
                    </div>
                    <div className="col col-33/m flow">
                      <h2 className="title">Ghost</h2>
                      <div className="flow">
                        <button className="button ghost info block w100" type="button">Info</button>
                        <button className="button ghost success block w100" type="button">Success</button>
                        <button className="button ghost warning block w100" type="button">Warning</button>
                        <button className="button ghost error block w100" type="button">Error</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt6 s flow">
                    <p>Alternate text colors must be wrapped in <code className="secondary">.text .color</code> classes to maintain text colors.</p>
                    <p>Alternatively, you can set the alternate color variables to maintain the hue and saturation with a lower lightenss, but it will most likely look bad.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <a name="forms" />
          <section className="section p6/l">
            <div className="mw8 flow flow-xl/l">
              <h1 className="display">Forms</h1>

              <div className="grid grid-xl/l flow flow-0/l">
                <div className="col col-33/l flow">
                  <h2 className="title">Input</h2>
                  <p>Standard input fields.</p>
                </div>
                <div className="col col-66/l flow">
                  <h2 className="title">Register</h2>

                  <div className="flow">
                    <div className="grid flow flow-0/l">
                      <div className="col col-50/m success">
                        <label className="label">Email</label>
                        <input className="input" type="text" />
                        <div className="helper">Your e-mail looks good!</div>
                      </div>

                      <div className="col col-50/m error">
                        <label className="label">Password</label>
                        <div className="control control-group flex">
                          <input className="input" type={privacy ? 'password' : 'text'} />
                          <button className="button tooltip" type="button" onClick={handlePrivacy}>
                            <div className="tooltip-content base">Show password in a secure setting.</div>
                            {
                              privacy
                                ? (
                                  <svg className="icon" viewBox="0 0 16 16">
                                    <path fill="currentColor" d="M15.43,7.74c-0.069-0.112-1.038-1.688-2.589-3.082l-0.66,0.77C13.278,6.417,14.075,7.509,14.41,8c-0.67,0.99-3.24,4.5-6.41,4.5c-0.564,0-1.102-0.122-1.616-0.31l-0.688,0.803C6.413,13.3,7.183,13.5,8,13.5c4.23,0,7.3-5.03,7.43-5.24L15.58,8L15.43,7.74z" />
                                    <path fill="currentColor" d="M10.434,7.465C10.473,7.637,10.5,7.814,10.5,8c0,1.38-1.12,2.5-2.5,2.5c-0.052,0-0.099-0.017-0.15-0.02l-0.763,0.89C7.378,11.451,7.683,11.5,8,11.5c1.93,0,3.5-1.57,3.5-3.5c0-0.504-0.121-0.976-0.318-1.407L10.434,7.465z" />
                                    <path fill="currentColor" d="M14.33,0.62c-0.21-0.18-0.53-0.15-0.71,0.05l-2.395,2.797C10.266,2.899,9.178,2.5,8,2.5c-4.23,0-7.3,5.03-7.43,5.24L0.42,8l0.15,0.26c0.08,0.13,1.36,2.22,3.36,3.72l-2.31,2.69c-0.18,0.21-0.16,0.53,0.05,0.71C1.77,15.46,1.88,15.5,2,15.5c0.14,0,0.28-0.06,0.38-0.17l2.842-3.32l0.218-0.25l5.97-6.97l0.147-0.171L14.38,1.33C14.56,1.12,14.54,0.8,14.33,0.62z M5.5,8c0-1.38,1.12-2.5,2.5-2.5c0.439,0,0.848,0.12,1.208,0.319L6.03,9.529C5.7,9.1,5.5,8.58,5.5,8z M1.6,8C2.26,7.01,4.84,3.5,8,3.5c0.92,0,1.78,0.3,2.56,0.74L9.867,5.049C9.328,4.709,8.689,4.5,8,4.5C6.07,4.5,4.5,6.07,4.5,8c0,0.879,0.34,1.679,0.879,2.289L4.59,11.21C3.09,10.1,2,8.6,1.6,8z" />
                                  </svg>
                                )
                                : (
                                  <svg className="icon" viewBox="0 0 16 16">
                                  	<path fill="none" stroke="currentColor" d="M8,13c-4,0-7-5-7-5s3-5,7-5s7,5,7,5S12,13,8,13z" />
                                  	<circle fill="none" stroke="currentColor" cx="8" cy="8" r="3" />
                                  </svg>
                                )
                            }
                          </button>
                        </div>
                        <div className="helper">This is a password error message.</div>
                      </div>
                    </div>

                    <div className="grid">
                      <div className="col col-50/m">
                        <label className="label label--required">Type</label>
                        <div className="control">
                          <select className="input">
                            <option value="user">User</option>
                            <option value="teacher">Teacher</option>
                          </select>
                          <svg className="icon" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.353,10.475l4.243-4.243c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0L8,9.414L4.111,5.525c-0.195-0.195-0.512-0.195-0.707,0C3.306,5.623,3.258,5.751,3.258,5.879s0.049,0.256,0.146,0.354l4.242,4.243C7.842,10.67,8.158,10.67,8.353,10.475z" />
                          </svg>
                        </div>
                        <div className="helper">This is a subtle text helper.</div>
                      </div>
                    </div>

                    <div className="grid flow flow-0/l">
                      <div className="col col-50/m">
                        <label className="label">Modal</label>
                        <button
                          className="button base+ block w100"
                          type="button"
                          onClick={() => setModal(!modal)}
                        >
                          Open Modal
                        </button>
                        <Portal>
                          <div className={`modal ${modal ? 'visible' : 'hidden'} p6/l`}>
                            <div className="mw4 mxa">
                              <div className="card">
                                <figure className="card-figure ratio-1x1">
                                  <img src={`${process.env.PUBLIC_URL}/blanc.jpg`} />
                                </figure>
                                <section className="p4 flow">
                                  <h1 className="title">Hyperdimension Neptunia Blanc Figure</h1>
                                  <p>From <strong>Broccoli</strong> and sculpted by <strong>Chizuru (Tsuru no Yakata)</strong> comes this 1/8 scale figure of Blanc from Hyperdimension Neptunia. As the third addition to the Wake Up series, Blanc adorably looks a little drowsy still and slightly disheveled from sleeping while she rouses holding a Dogoo plushie in one hand and her beret in the other.</p>
                                  <p>Highlights include the soft coloring of the paintwork which gives it a gentle look and the expert sculpting of the fluffy fur on her arms and ruffle trim on her beret. The gems and golden details of her outfit also shimmer with metallic paint, and her bare shoulders, back, and legs have been carefully shaded for a realistic look. Add this sleepy Blanc to your collection and prepare some breakfast!</p>
                                </section>
                                <hr className="card-divider" />
                                <section className="p4 text-right">
                                  <button
                                    className="button invert"
                                    type="button"
                                    onClick={() => setModal(false)}
                                  >
                                    Maybe Later
                                  </button>
                                  <button
                                    className="button primary ml4"
                                    type="button"
                                    onClick={() => setModal(false)}
                                  >
                                    Pre-order Now
                                  </button>
                                </section>
                              </div>
                            </div>
                          </div>
                        </Portal>
                      </div>
                      <div className="col col-50/l">
                        <label className="label">Dropdown</label>
                        <button
                          className="button primary block w100"
                          type="button"
                          onClick={event => {
                            const rect = event.currentTarget.getClientRects()[0];
                            setCoords({
                              left: rect.left,
                              right: window.innerWidth - rect.right - getScrollbarWidth(),
                              top: rect.top + rect.height + window.scrollY,
                            });
                            setDropdownStatus(dropdownStatus === 'open' ? 'closed' : 'open');
                          }}
                        >
                          Open Dropdown
                          <svg className="icon ml2" viewBox="0 0 16 16">
                            <path d="M8.353,10.475l4.243-4.243c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0L8,9.414L4.111,5.525c-0.195-0.195-0.512-0.195-0.707,0C3.306,5.623,3.258,5.751,3.258,5.879s0.049,0.256,0.146,0.354l4.242,4.243C7.842,10.67,8.158,10.67,8.353,10.475z" />
                          </svg>
                        </button>

                        <Portal>
                          <div
                            className={`dropdown mw2 ${dropdownStatus === 'open' ? 'visible' : 'hidden'}`.trim()}
                            style={{
                              right: coords.right,
                              top: coords.top,
                            }}
                          >
                            <button className="dropdown-item" type="button" onClick={() => setDropdownStatus('closed')}>Dark Souls III</button>
                            <button className="dropdown-item" type="button" onClick={() => setDropdownStatus('closed')}>The Last of Us</button>
                            <hr />
                            <button className="dropdown-item" type="button" onClick={() => setDropdownStatus('closed')}>Destiny II</button>
                            <button className="dropdown-item" type="button" onClick={() => setDropdownStatus('closed')}>Fortnite</button>
                            <button className="dropdown-item" type="button" onClick={() => setDropdownStatus('closed')}>League of Legends</button>
                            <hr />
                            <div className="px4 py3 flow">
                              <p>Just an example of some really long text content inside a dropdown menu.</p>
                              <button className="button _base mla block" type="button">Button</button>
                            </div>
                          </div>
                        </Portal>
                      </div>
                    </div>
                    
                    <div className="grid flow flow-0/l">
                      <div className="col col-50/m flow flow-s flow-xs/m">
                        <label className="label mb3">Favorite Foods</label>

                        <div className="checkbox">
                          <input type="checkbox" name="pizza" id="pizza" />
                          <label htmlFor="pizza">Pizza</label>
                        </div>

                        <div className="checkbox">
                          <input type="checkbox" name="tacos" id="tacos" />
                          <label htmlFor="tacos">Tacos</label>
                        </div>

                        <div className="checkbox">
                          <input type="checkbox" name="sushi" id="sushi" />
                          <label htmlFor="sushi">Sushi</label>
                        </div>

                        <div className="checkbox">
                          <input type="checkbox" name="long" id="long" />
                          <label htmlFor="long">A checkbox option with a rather large amount of text.</label>
                        </div>
                      </div>

                      <div className="col col-50/m flow flow-s flow-xs/m">
                        <label className="label mb3">Favorite Drink</label>

                        <div className="radio">
                          <input type="radio" name="drink" id="beer" />
                          <label htmlFor="beer">Beer</label>
                        </div>

                        <div className="radio">
                          <input type="radio" name="drink" id="tequila" />
                          <label htmlFor="tequila">Tequila</label>
                        </div>

                        <div className="radio">
                          <input type="radio" name="drink" id="sake" />
                          <label htmlFor="sake">Sake</label>
                        </div>
                        
                        <div className="radio">
                          <input type="radio" name="drink" id="longer" />
                          <label htmlFor="longer">
                            This option has a rather large amount of text
                            behind it.
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="switch">
                      <input id="agree" name="agree" type="checkbox" />
                      <label htmlFor="agree">I have read and agree with the Terms and Conditions</label>
                    </div>
                    
                    <div className="box error">
                      <div className="switch _error">
                        <input id="remember" name="remember" type="checkbox" />
                        <label htmlFor="remember">
                          Remember my information. But what if there is an
                          unnecessarily long amount of text here?
                        </label>
                      </div>
                    </div>

                    <div className="flex align-center box warning+">
                      <div className="switch warning">
                        <input id="meow" name="meow" type="checkbox" />
                        <label className="p0" htmlFor="meow" />
                      </div>
                      <p className="ml4 text warning">
                        This is some text outside of the switch and will not
                        toggle it.
                      </p>
                    </div>
                    
                    <p>
                      <a className="link primary" href="#">Here is a simple link to get you started.</a>
                    </p>
                    
                    <button className="button primary" type="button">
                      Register
                    </button>

                    <button className="button base+ ml4" type="button">
                      Not Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <a name="cards" />
          <section className="section p6/l">
            <div className="flow flow-xl/l">
              <h1 className="display">Cards</h1>

              <div className="grid grid-xl/l flow flow-0/l">
                <div className="col col-33/l flow">
                  <h1 className="title">Default</h1>
                  <p>
                    Cards act as a subtle separator of content blocks.
                  </p>
                </div>
                <div className="col col-66/l">
                  <div className="grid flow flow-0/l">
                    <div className="col col-50/l">
                      <div className="card primary xl/l">
                        <figure className="card-figure ratio-1x1 relative">
                          <img alt="Photograph of Cat Maid 1/7 scale figure." src={`${process.env.PUBLIC_URL}/cat-maid.png`} />
                          <figcaption>
                            <h1 className="card-figure-title">Cat Maid</h1>
                            <p className="text--sm">$189.99</p>
                          </figcaption>
                          <span className="tag error absolute t0 r0 mt4 mr4">Hot!</span>
                        </figure>
                        <section className="p4 flow flow-s">
                          <h1 className="title">Card</h1>
                          <p>This is some card content.</p>
                          <div className="switch _primary">
                            <input id="neko" name="neko" type="checkbox" />
                            <label htmlFor="neko">Yes</label>
                          </div>
                        </section>
                        <hr />
                        <section className="p4 flex align-center justify-between">
                          <button className="button _primary" type="button">Like</button>
                          <button className="button _primary" type="button">Fav</button>
                        </section>
                      </div>
                    </div>
                    <div className="col col-50/l">
                      <div className="card base h100 xl/l flex flex-column">
                        <figure className="ratio-1x1 card-figure relative">
                          <img alt="Photograph of Iori Fuyusaka 1/7 scale figure." src={`${process.env.PUBLIC_URL}/iori.png`} />
                          <figcaption className="absolute b-0">
                            <h1 className="card-figure-title">Iori Fuyusaka</h1>
                            <p className="text--sm">$279.99</p>
                          </figcaption>
                          <span className="tag info absolute t0 r0 mt4 mr4">Popular</span>
                        </figure>
                        <section className="p4 flow flex-auto">
                          <h1 className="title">Card</h1>
                          <p>This is some card content.</p>
                        </section>
                        <hr />
                        <section className="p4 flex justify-between align-center">
                          <button className="button :base" type="button">
                            <i className="icon icon--inline">
                              <svg viewBox="0 0 16 16">
                                <path fill="none" stroke="currentColor" d="M13.928,2.983c-1.43-1.43-3.748-1.43-5.178,0L8,3.733l-0.75-0.75c-1.43-1.43-3.748-1.43-5.178,0c-1.43,1.43-1.43,3.748,0,5.178L8,14.089l5.928-5.928C15.357,6.731,15.357,4.413,13.928,2.983z" />
                              </svg>
                            </i>
                          </button>

                          <button className="button :base" type="button">
                            <i className="icon icon--inline">
                              <svg viewBox="0 0 16 16">
                              	<line fill="none" stroke="currentColor" strokeLinecap="round" x1="8" x2="8" y1="1" y2="15" />
                              	<line fill="none" stroke="currentColor" strokeLinecap="round" x1="1" x2="15" y1="8" y2="8" />
                              </svg>
                            </i>
                          </button>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="p6/l">
            <div className="">
              <div className="flow flow-xl/l">
                <h1 className="display">Auto-grid + Cards</h1>

                <div className="auto-grid l/l">
                  <a className="card h100" href="#">
                    <figure className="card-figure ratio-16x9">
                      <img alt="Ahri from League of Legends." src={`${process.env.PUBLIC_URL}/ahri.jpg`} />
                    </figure>
                    <section className="p4 flow flow-s">
                      <div>
                        <span className="tag info">Mage</span>
                      </div>
                      <h1 className="title">Ahri</h1>
                      <p>
                        Innately connected to the latent power of Runeterra,
                        Ahri is a vastaya who can reshape magic into orbs of raw
                        energy.
                      </p>
                    </section>
                  </a>

                  <a className="card h100" href="#">
                    <figure className="card-figure ratio-16x9">
                      <img alt="Akali from League of Legends." src={`${process.env.PUBLIC_URL}/akali.jpg`} />
                    </figure>
                    <section className="p4 flow flow-s">
                      <div>
                        <span className="tag error">Assassin</span>
                      </div>
                      <h1 className="title">Akali</h1>
                      <p>
                        Abandoning the Kinkou Order and her title of the Fist of
                        Shadow, Akali now strikes alone, ready to be the deadly
                        weapon her people need.
                      </p>
                    </section>
                  </a>

                  <a className="card h100" href="#">
                    <figure className="card-figure ratio-16x9">
                      <img alt="Evelynn from League of Legends." src={`${process.env.PUBLIC_URL}/evelynn.jpg`} />
                    </figure>
                    <section className="p4 flow flow-s">
                      <div>
                        <span className="tag error">Assassin</span>
                      </div>
                      <h1 className="title">Evelynn</h1>
                      <p>
                        Within the dark seams of Runeterra, the demon Evelynn
                        searches for her next victim.
                      </p>
                    </section>
                  </a>

                  <a className="card h100" href="#">
                    <figure className="card-figure ratio-16x9">
                      <img alt="Kai'sa from League of Legends." src={`${process.env.PUBLIC_URL}/kaisa.jpg`} />
                    </figure>
                    <section className="p4 flow flow-s">
                      <div>
                        <span className="tag success">Marksman</span>
                      </div>
                      <h1 className="title">Kai'sa</h1>
                      <p>
                        Claimed by the Void when she was only a child, Kai'Sa
                        managed to survive through sheer tenacity and strength
                        of will.
                      </p>
                    </section>
                  </a>

                  <a className="card h100" href="#">
                    <figure className="card-figure ratio-16x9">
                      <img alt="Seraphine from League of Legends." src={`${process.env.PUBLIC_URL}/seraphine.jpg`} />
                    </figure>
                    <section className="p4 flow flow-s">
                      <div>
                        <span className="tag info">Mage</span>
                      </div>
                      <h1 className="title">Seraphine</h1>
                      <p>
                        Born in Piltover to Zaunite parents, Seraphine can hear
                        the souls of others—the world sings to her, and she
                        sings back.
                      </p>
                    </section>
                  </a>
                </div>
              </div>
            </div>
          </section>


          <a name="tabs" />
          <section className="section p6/l">
            <div className="mw8 flow flow-xl/l">
              <h1 className="display flex align-center">
                Tabs
                <span className="tag warning l ml3">New!</span>
              </h1>

              <div className="grid grid-xl/l">
                <div className="col col-33/l">
                  <h2 className="title">Example</h2>
                </div>

                <div className="col col-66/l">
                  <div className="tabs">
                    <button className="tab">
                      Figures
                    </button>
                    <button className="tab primary active">
                      Manga
                    </button>
                    <button className="tab">
                      Videogames
                    </button>
                  </div>
                </div>    
              </div>
            </div>
          </section>


          <a name="banners" />
          <section className="section p6/l">
            <div className="mw8">
              <h1 className="display">Banners</h1>
            </div>
          </section>

          <section className="banner base+ p6/l xl/l">
            <div className="mw8 flow">
              <h2 className="display">Banner</h2>
              <p className="">
                Simply add banner to any container element to apply a variety
                of background colors.
              </p>
              <button className="button base" type="button">Action Button</button>
            </div>
          </section>

          <section className="banner primary p6/l xl/l">
            <div className="mw8 flow">
              <h2 className="display">Primary Banner</h2>
              <p className="">
                Simply add banner to any container element to apply a variety
                of background colors.
              </p>
              <button className="button _primary" type="button">Action Button</button>
            </div>
          </section>

          <section className="banner secondary p8/l xl/l">
            <div className="mw8 flow">
              <h2 className="display">Secondary Banner</h2>
              <p className="">
                Simply add banner to any container element to apply a variety
                of background colors.
              </p>
              <button className="button _secondary" type="button">Action Button</button>
            </div>
          </section>

          <a name="notifications" />
          <section className="section">
            <div className="flow flow-xl/l">
              <h1 className="display">Notifications</h1>

              <div className="grid grid-xl/l flow flow-0/l">
                <div className="col col-33/l flow">
                  <h1 className="title">Status</h1>
                  <p>Notificatons are used to give status hints to the user.</p>
                </div>
                <div className="col col-66/l flow">
                  <div className="flow">
                    <h2 className="title">Examples</h2>
                    
                    <div className="flow">
                      <div className="notification error">
                        <p><strong>An error occurred.</strong></p>
                        <p>
                          This should be an error message. This notification
                          has some extra text.
                        </p>
                      </div>

                      <div className="notification warning+">
                        <p className="text warning"><strong>This is a warning.</strong></p>
                        <p>
                          This should be a warning message. This notification
                          uses the alternate warning colors.
                        </p>
                      </div>

                      <div className="notification success p0">
                        <div className="p4">
                          <p><strong>Success!</strong></p>
                          <p>
                            This should be a success message. This notification
                            has some extra text.
                          </p>
                        </div>
                        <hr />
                        <div className="justify-between flex p4">
                          <button className="button ghost _success" type="button">
                            Cancel Action
                          </button>
                          <button className="button _success" type="button">
                            Accept and Continue
                          </button>
                        </div>
                      </div>

                      <div className="notification success+ p0">
                        <div className="p4">
                          <p><strong>Success!</strong></p>
                          <p>
                            This should be a success message. This notification
                            has some extra text.
                          </p>
                        </div>
                        <hr />
                        <div className="justify-between flex p4">
                          <button className="button ghost success" type="button">
                            Cancel Action
                          </button>
                          <button className="button success" type="button">
                            Accept and Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <a name="tables" />
          <section className="section p6/l">
            <div className="flow flow-xl/l">
              <h1 className="display">Tables</h1>

              <div className="grid grid-xl/l">
                <div className="col col-33/l flow">
                  <h1 className="title">Normal</h1>
                  <p>Notificatons are used to give status hints to the user.</p>
                </div>
                <div className="col col-66/l flow">
                  <div className="flow">
                    <h2 className="title">Examples</h2>
                    
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <div className="checkbox">
                              <input id="all" name="all" type="checkbox" />
                              <label htmlFor="all" />
                            </div>
                          </th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="selected">
                          <td>
                            <div className="checkbox">
                              <input defaultChecked id="vi" name="vi" type="checkbox" />
                              <label htmlFor="vi" />
                            </div>
                          </td>
                          <td>Vi</td>
                          <td>The Piltover Enforcer</td>
                          <td>Jungle</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="checkbox">
                              <input id="caitlyn" name="caitlyn" type="checkbox" />
                              <label htmlFor="caitlyn" />
                            </div>
                          </td>
                          <td>Caitlyn</td>
                          <td>The Sheriff of Piltover</td>
                          <td>Bottom</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="checkbox">
                              <input id="jinx" name="jinx" type="checkbox" />
                              <label htmlFor="jinx" />
                            </div>
                          </td>
                          <td>Jinx</td>
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
          <footer className="p6/l">
            <div className="grid grid-xl/m">
              <div className="col col-50/m">
                <h1 className="title">Ovxrride</h1>
              </div>
              <div className="col col-50/m">
                <div className="grid">
                  <div className="col flex-auto flow flow-s">
                    <div><a className="link primary" href="#">Documentation</a></div>
                    <div><a className="link primary" href="#">GitHub</a></div>
                    <div><a className="link primary" href="#">Blog</a></div>
                  </div>
                  <div className="col flex-auto flow flow-s">
                    <div><a className="link primary" href="#">Banners</a></div>
                    <div><a className="link primary" href="#">Buttons</a></div>
                    <div><a className="link primary" href="#">Cards</a></div>
                    <div><a className="link primary" href="#">Forms</a></div>
                  </div>
                  <div className="col flex-auto flow flow-s">
                    <div><a className="link primary" href="#">CSS</a></div>
                    <div><a className="link primary" href="#">Patterns</a></div>
                    <div><a className="link primary" href="#">Illustrations</a></div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="divider mt5 mb5" />

            <div className="flex justify-between align-center">
              <p>&copy; Mike Barnhardt, 2020</p>
              <a className="link error" href="#">v2.17.38</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Ancient;
