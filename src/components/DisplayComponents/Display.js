import React from "react";

const Display = (props) => {
  return <div>{/* Display any props data here */}
  <input type="text" value={props.value} maxLength="14" disabled />
  </div>;
};
export default Display;
