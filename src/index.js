import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Weather from './Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <img
className="log"
src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/136/788/original/IMG_1506.jpg?1722561465"
alt="Annie Salis"
/>
      <Weather  defaultCity="Porto" />
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
