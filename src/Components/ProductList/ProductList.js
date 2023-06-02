import React, { useContext } from 'react';
import CartContext from '../Store/Cart-context';
import { Button } from 'react-bootstrap';

const ProductList = () => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.productStore)

  const cartDataHandler = (name, des, price, large, medium, small) => {
    const cartItem = {
      name: name,
      description: des,
      price: price,
      large: large,
      medium: medium,
      small: small
    };
    cartCtx.addToCart(cartItem);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Large</th>
            <th scope="col">Medium</th>
            <th scope="col">Small</th>
            <th scope="col">Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {cartCtx.productStore.map((product, index) => (
            <tr key={product._id}>
            <th scope="row">{index + 1}</th>
            <td>{product.productName}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.large}</td>
            <td>{product.medium}</td>
            <td>{product.small}</td>
            <td>
                <Button
                   variant="primary"
                   onClick={cartDataHandler.bind(
                     null,
                     product.productName,
                     product.description,
                     product.price,
                     product.large,
                     product.medium,
                     product.small
                    )
                  }
                >
                  Add to Cart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
