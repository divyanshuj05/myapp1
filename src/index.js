import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'tachyons'
import App from './js/App';


const container=document.getElementById('root')
const root = ReactDOM.createRoot(container);


root.render(<App />)

reportWebVitals();
