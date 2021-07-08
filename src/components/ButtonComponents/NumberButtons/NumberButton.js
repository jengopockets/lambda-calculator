import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button id ={`btn-${props.num}`} onClick={()=> props.clickHandler(props.num)}>{props.num}</button>    
    </>
  );
};
export default NumberButton