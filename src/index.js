import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalProvider } from 'styled-react-modal';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
