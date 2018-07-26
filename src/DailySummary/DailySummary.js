import React from 'react';
import classes from './DailySummary.css';

const dailySummary = (props) => {

    let productList = (
        <div className={ classes.Product_list }>
        {props.DailySummaryList.map((record, index) => {
        return (
          <div key={index}>
            <div className={classes.Id }> 
            {index + 1}.
            </div>
            <div className={ classes.Hour }>
            {record.time}
            </div>
            <div className={ classes.Name }>
            {record.name}
            </div>
            <div className={ classes.Weight }>
            {record.weight}
            </div>
            <div className={ classes.Carbohydrates }>
            </div>
            <div className={ classes.Fat }>
            </div>
            <div className={ classes.Protein }>
            </div>
          </div>
        )})}
        </div>
    );
    
    return (
        <div className={ classes.Container }>

          <h1>{ props.DailySummaryList[0].date }</h1>
          {productList}
        </div>
    );
}

export default dailySummary;