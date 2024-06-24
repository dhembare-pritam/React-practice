import React from 'react';
import styles from './FoodInput.module.css'

function FoodInput({onkeydown}) {

 
  return (
    <div>
      <input placeholder='enter food item here'  className={styles.FoodInput} type="text" onKeyDown={onkeydown} />
    </div>
  );
}

export default FoodInput;