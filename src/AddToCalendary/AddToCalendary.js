import React from 'react';
import classes from './AddToCalendary.css';

const addToCalendary = (props) => {
    return (
        <div className={ classes.Container }>
          <input id="dat" type="date"/>
          <input id="tim" type="time"/>
          <input type="text" name="poductName" list="productList"/>
          <input type="number" min="0" defaultValue="0"/>gr
          <input type="submit" value="Add"/>
        </div>
    );
}

export default addToCalendary;