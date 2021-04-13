import React, { useEffect, useState } from 'react';

 const App = () => {
   const [truth, setTruth] = useState('Ksusha is clever.');
   //
   const [color, setColor] = useState('green');
   const style = {
      backgroundColor: color,
   };
   useEffect(()=> console.log("Ku-ku"));
    const handleClick = ()=> {
      setTruth(truth + "Very!");
      //setShow(!show);
      setColor(color==='red' ? "green": "red");
    }   

  return (
    <div >
       <button onClick = {handleClick}>+</button>
        <h1 style = {style}>{truth}</h1>
    </div>
  );
};
export default App;


