import React from "react";
import Button from "@mui/material/Button";

const List = ({ first, second, index, data, setData ,total,setTotal}) => {
  const handleDeleteClick = () => {
    // Copy the data array
    const newData = [...data];
    // Remove the item at the specified index
    newData.splice(index, 1);
    // Update the state with the new data
    setData(newData);
    setTotal(total-data[index].price)
    
  };
 
  
  return (
    <div className="heading">
      <h4 className="first">{first}</h4>
      <h4>{second}</h4>
      <h4>
        <Button variant="contained" color="error" onClick={handleDeleteClick}>
          Del
        </Button>
      </h4>
    </div>
  );
};

export default List;
