import React from 'react';
import {createPortal} from 'react-dom';

function Portal({children}) {
  const el = React.useRef();
  
  if (!el.current) {
    el.current = document.createElement('div');
  }

  React.useEffect(() => {
    const mount = document.querySelector('#js-portal');
    mount.appendChild(el.current);
    return () => mount.removeChild(el.current);
  }, []);
  
  return createPortal(children, el.current);
}

export default Portal;