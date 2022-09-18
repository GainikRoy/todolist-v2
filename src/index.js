import React from 'react';
import ReactDom from 'react-dom/client';
import App from './comp/App.js'


const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(<App />);