import React from 'react';
import ReactDOM  from 'react-dom/client';
  
  
  // creating nested elements using React
  
  const parent = React.createElement(
      "div",
      {},
      <h1>Hello</h1>
    );
  
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
  