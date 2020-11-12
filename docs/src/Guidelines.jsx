import React from 'react';

function Guidelines() {
  return (
    <section className="banner p6/l primary flow flow--xl">
      <div className="mw8 flow">
        <h1 className="display">Guidelines</h1>
        <p className="m.">
          The following <a className="primary" href="#">guidelines</a> serve as the foundation on which Ancient was
          developed.
        </p>
        <div className="switch _primary">
          <input id="remember1" name="remember1" type="checkbox" />
          <label className="m.s" htmlFor="remember1">
            Remember my information. But what if there is an
            unnecessarily long amount of text here?
          </label>
        </div>
        <button className="button _primary">View Guidelines</button>
        <button className="button _primary ghost ml4">View Guidelines</button>
      </div>

      <div className="grid grid--l/l flow flow-0/l">
        <div className="col col-33/l">
          <div className="box _primary flex-auto p5 flex flex-column h100">
            <div className="flex-auto flow">
              <h2 className="title">Avoid nested selectors and specificity.</h2>
              <p>
                Nesting and specificity add complexity that is often <a href="#">abstracted to the
                person</a> that wrote it.
              </p>

              <div className="switch primary">
                <input id="remember2" name="remember2" type="checkbox" />
                <label htmlFor="remember2">
                  Remember my information. But what if there is an
                  unnecessarily long amount of text here?
                </label>
              </div>
            </div>
            <div className="text-right">
              <button className="button primary ghost">View Specificity</button>
              <button className="button primary ml4">View Specificity</button>
            </div>
          </div>
        </div>
        
        <div className="col col-33/l">
          <div className="box _primary flow flex-auto p5 h100">
            <h2 className="title">Media queries should only be used for layouts.</h2>
            <p>
              Grids, layouts, rows, etc and whitespace-related spacing should be the
              only things that change when the page width changes.
            </p>

            <div className="box primary">
              <div className="switch _primary">
                <input id="remember3" name="remember3" type="checkbox" />
                <label htmlFor="remember3">
                  Remember my information. But what if there is an
                  unnecessarily long amount of text here?
                </label>
              </div>
            </div>

            <button className="button primary block ml-a">View Media Queries</button>
          </div>
        </div>
        
        <div className="col col-33/l">
          <div className="box _primary h100 flow flex-auto p5">
            <h2 className="title">Use build systems only to minify and optimize code.</h2>
            <p>
              Using build systems for variables, mixins, and functions usually
              ends up bloated and non-maintainable.
            </p>
            <div className="switch primary">
              <input id="remember4" name="remember4" type="checkbox" />
              <label htmlFor="remember4">
                Remember my information. But what if there is an
                unnecessarily long amount of text here?
              </label>
            </div>
            <button className="button primary mla block mt6">View System</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guidelines;