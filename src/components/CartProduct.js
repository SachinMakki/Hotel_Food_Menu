import { Button } from "react-bootstrap";
import { cartContext } from "../CartContext";
import { getProductData } from "../ProductArray";
import { useContext } from "react";
function CartProduct(props){

    const cart=useContext(cartContext);
    const id=props.id;
    const quantity =props.quantity;
    const ProductData=getProductData(id);

    return(
        <>
           <h3>{ProductData.tittle}</h3>
           <p>{quantity} total</p>
           <p>Rs.{(quantity * ProductData.price).toFixed(2)}</p>
           <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
           <hr></hr>
        </>
    )
}

export default CartProduct;