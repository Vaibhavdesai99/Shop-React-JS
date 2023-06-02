import React, { useContext, useState } from "react";
import "./FormInput.css";
import CartContext from "../Store/Cart-context";
const FormInput = () => {
  const cartCtx = useContext(CartContext);
  const [ItemName, setItemName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Large, setLarge] = useState("");
  const [Small, setSmall] = useState("");
  const [Medium, setMedium] = useState("");

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    const Products = {
      productName: ItemName,
      description: Description,
      price: Price,
      large: Large,
      small: Small,
      medium: Medium,
    };

    cartCtx.addProduct(Products);
  };

  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const largeSizeHandler = (e) => {
    setLarge(e.target.value);
  };
  const smallSizeHandler = (e) => {
    setSmall(e.target.value);
  };
  const mediumSizeHandler = (e) => {
    setMedium(e.target.value);
  };
  return (
    <div>
      <form onSubmit={FormSubmitHandler}>
        <div className="main_div">
          <div className="ItemName">
            <label>Item-Name</label>
            <input type="text" onChange={itemNameHandler} value={ItemName} />
          </div>
          <div className="Description">
            <label>Description</label>
            <input
              type="text"
              onChange={descriptionHandler}
              value={Description}
            />
          </div>
          <div className="Price">
            <label>Price</label>
            <input type="number" onChange={priceHandler} value={Price} />
          </div>
          <div className="Large">
            <label>Large</label>
            <input type="text" onChange={largeSizeHandler} value={Large} />
          </div>
          <div className="Small">
            <label>Small</label>
            <input type="number" onChange={smallSizeHandler} value={Small} />
          </div>
          <div className="Medium">
            <label>Medium</label>
            <input type="number" onChange={mediumSizeHandler} value={Medium} />
          </div>
          <button type="submit">ADD Product</button>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
