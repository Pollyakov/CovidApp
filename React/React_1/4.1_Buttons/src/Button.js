import React from 'react';

const Button = props => {
  return (
    <button style = {props.font} >
        {props.text}
    </button>
    
  )

};

export default Button;