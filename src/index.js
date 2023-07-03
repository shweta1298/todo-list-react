import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextWrapper from './context/ContextWrapper';

const some = ReactDOM.createRoot(document.getElementById('root'));
some.render(
  // <React.StrictMode>
  <ContextWrapper>
        <App />
  </ContextWrapper>
  // </React.StrictMode>
);
