import React from 'react';
import {createPortal} from 'react-dom';

function Portal({children}) {
  const mount = document.querySelector('#js-portal');
  const el = document.createElement('div');

  React.useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);
  
  return createPortal(children, el);
}

export default Portal;