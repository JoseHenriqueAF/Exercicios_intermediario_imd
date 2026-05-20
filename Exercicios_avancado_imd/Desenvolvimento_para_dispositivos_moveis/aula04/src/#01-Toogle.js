import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


const element = <div></div>

function Toggle(props) {

  const [toggle, setToggle] = useState(true) 
  
  return <button onClick={()=> setToggle(!toggle)}>{toggle?'ON':'OFF'}</button>
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Toggle/>
);
