import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
     footTable: [
       { name: 'awokado', carbohydrates: 8.53, fat: 14.66, protein: 2},
       { name: 'boczniak', carbohydrates: 5, fat: 0.2, protein: 2.5},
       { name: 'borówka', carbohydrates: 14, fat: 0, protein: 1}
     ]
  }

  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
