import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import List from "./List";

const Field = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0); // Initialize total to 0

  const add = (event) => {
    event.preventDefault();
    const newPrice = parseFloat(price); // Convert price to Number if your are not convert this price into number the compiler understand is string and concat them
    if (!name && !price) {
      alert("Enter Item name and price");
    }
    else if(!name){
      alert("Enter name")
    }
    else if(!price){
      alert("Enter price")
    }
     else {
      setData([
        ...data,
        {
          name: name,
          price: newPrice,
        },
      ]);
      setTotal(total + newPrice); // Update total by adding the new price
      setName("");
      setPrice("");
    }
  };

  return (
    <div>
      <div className="input">
        <form onSubmit={add}>
          <Stack direction="row" spacing={3}>
            <TextField
              id="standard-basic"
              type="text"
              label="Item_Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              type="number"
              label="Item_Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              variant="standard"
            />
            <Button variant="outlined" type="submit" color="error">
              Add
            </Button>
          </Stack>
        </form>
        <div className="heading">
          <h3>Item_Name</h3>
          <h3>Item_Price</h3>
          <h3>Action</h3>
        </div>
        {data.map((list, index) => (
          <List
            key={index}
            index={index}
            first={list.name}
            second={list.price}
            data={data}
            setData={setData}
            total={total}
            setTotal={setTotal}
          />
        ))}
        <h2 className="total">Total: {total.toFixed(2)}</h2>{" "}
        {/* Display total */}
      </div>
    </div>
  );
};

export default Field;
