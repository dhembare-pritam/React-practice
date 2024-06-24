import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/Errormessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";

function App() {

 // let foodItems =[];
 
  let [foodItems,setFoodItems ]= useState(['masala papad','chrispy']);

 //ternary operator
// let emptyItems = foodItems.length===0 ? <h3>i am still hungry</h3> : null
const [state,setstate]=useState('')


const handleonkey=(event)=>{
  if(event.key==='Enter'){
     let newFoodItem = event.target.value;
     let newItems=[...foodItems,newFoodItem]
     setFoodItems(newItems);
  }
}

  return (
    <>
     <Container>
    <h1 className="head1">Healthy food</h1>
    <FoodInput onkeydown={handleonkey}></FoodInput>
    <p>{state}</p>
    <FoodItems items={foodItems}></FoodItems>
    <ErrorMessage items={foodItems}></ErrorMessage>
    </Container>
    <Container>
      <p>this the your food material and you used to eat for this </p>
    </Container>
     
    </>
  );
}
export default App;