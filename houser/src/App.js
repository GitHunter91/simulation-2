import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import {Header} from './component/Header/Header';
import {House} from './component/House/House';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="heading">
          <div>
            <h2>Houser</h2>
          </div>
       </div>
       <div className ="container">
        <div>
      {routes}
      <Header />
      <House />

          </div>
       </div>
      </div>
    );
  }
}

export default App;
