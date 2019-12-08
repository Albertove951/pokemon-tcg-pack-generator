import React from 'react';
import './App.css';

function App() {
  return (
    <div >
      <div className='jumbotron'>
        <h3 >Sun & Moon Cosmic Eclipse Card Generator</h3>
      <button className='reset'>try again</button>
      </div>
      <div className='center'>
        <div className='row'>
        <button className='card' value='common'></button>
        <button className='card' value='common'></button>
        <button className='card' value='common'></button>
        <button className='card' value='common'></button>
        <button className='card' value='uncommon'></button>
        </div>
        <div className='row'>
        <button className='card' value='uncommon'></button>
        <button className='card' value='foil'></button>
        <button className='card' value='rare'></button>
        <button className='card' value='uncommon'></button>
        <button className='card' value='uncommon'></button>
        </div>
      </div>  
    </div>
  );
}

export default App;
