import React, { Component } from 'react';
import './App.css';
import AddToCalendary from './AddToCalendary/AddToCalendary';
import DailySummary from './DailySummary/DailySummary';

class App extends Component {

  state = {
    foodTable: [
      { id: 1, name: 'Awokado', carbohydrates: 8.53, fat: 14.66, protein: 2},
      { id: 2, name: 'Boczniak', carbohydrates: 5, fat: 0.2, protein: 2.5},
      { id: 3, name: 'Borówka', carbohydrates: 14, fat: 0, protein: 1}
    ],

    foodCalendary: [
      { foodId: 1, name: "Awokado", date: "2018-07-26", time: "14:23", weight: "60" },
      { foodId: 3, name: "Borówka", date: "2018-07-26", time: "10:25", weight: "30" },
      { foodId: 2, name: "Boczniak", date: "2018-06-28", time: "7:23", weight: "40" },
      { foodId: 4, name: "Borówka", date: "2018-09-21", time: "3:23", weight: "70" },
      { foodId: 1, name: "Awokado", date: "2018-01-24", time: "19:23", weight: "15" }
    ],
    countOfDays: 0
  };

  render() {
 
    let dataList = (
      <datalist id="productList">
        {this.state.foodTable.map((food, index) => {
          return <option value={ food.name } key={ food.id }/> 
        })}
      </datalist>
    );

    const comparator = (a, b) => {
      if (a.date > b.date)
        return -1;
      else if (a.date < b.date)
         return 1;
      return 0;
    }
    this.state.foodCalendary.sort(comparator);

    let dailySummaryList = (
      <div className="DailySummaryContainer">
      {this.state.foodCalendary.map((record, index) => {
        if (index > 0 && this.state.foodCalendary[index - 1].date === this.state.foodCalendary[index].date)
          return false;
        else
        return (
          <DailySummary key={this.state.foodCalendary[index].date} DailySummaryList={this.state.foodCalendary.filter((element) => {
            if(element.date === this.state.foodCalendary[index].date)
              return true;
            else 
              return false;
          })} />)
      })}
      </div>
    );

    return (
      <div className="App">
        {dataList}
        <AddToCalendary/>
        {dailySummaryList}
      </div>
    );
  }
}

export default App;
