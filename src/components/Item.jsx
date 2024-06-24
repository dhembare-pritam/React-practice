import styles from "./Item.module.css";

const Item = ({foodItems, bought}) =>{
   
   const handlerbutton = (event) =>{
      console.log(event);
      console.log(`${foodItems} being bought`)
   }

   return  <li className={`${styles["kg-item"]} list-group-item`}> <span className={styles["kg-span"] }>{foodItems}</span>
   <button className={`${styles.btn} btn btn-info`}
    onClick={handlerbutton}
   >buy</button>
   </li>
};

export default Item;
