
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import './index.css';


const App = () => {
    if (module.hot) {
        module.hot.accept();
      }
  return (
    <div >
      <Button font= {{fontWeight: 'bold'}}  text = 'important'/>
      <button style= {{backgroundColor: 'gold'}}> test </button>
      <Button text = 'not important'/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
