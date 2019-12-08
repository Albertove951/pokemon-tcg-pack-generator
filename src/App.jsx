import React from 'react';
import './App.css';
// import data from './data'
import Cards from './components/Cards'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rarity: '',
      id: '',
    }
  }

  render(){
    return (
      <div >
        <div className='jumbotron'>
          <h3>Sun & Moon Cosmic Eclipse Card Generator</h3>
          <p>try again</p>
          <button className='reset'></button>
        </div>
        <div className='center'>
          <div className='row'>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
        <div className='row'>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
        </div>  
      </div>
    );
  }
}


export default App;
