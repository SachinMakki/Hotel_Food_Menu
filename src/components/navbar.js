import { Button, Modal, Navbar } from "react-bootstrap";
import { useState, useContext } from "react";
import { cartContext } from "../CartContext";
import CartProduct from "./CartProduct";

function NavbarComponent(){
    const cart=useContext(cartContext);
    const [show, setshow]= useState(false);
    const handleclose= ()=>setshow(false);
    const handleshow = ()=>setshow(true);

    const productsCount = cart.items.reduce((sum, product) => sum+product.quantity, 0);
    return(
        <>
        <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleshow}>Cart ({productsCount} Items) </Button>
        </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {productsCount > 0 ?
                <>
                    <p>Items in your cart:</p>
                    {cart.items.map( (currentProduct, idx)=>(
                            <>
                            <h1>{currentProduct.id}</h1>
                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            </>
                        )
                        )
                    }
                    <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                    <Button variant="success">
                        Purchase items!
                    </Button>
                </> 
                :
                <h1>There Are No Products In Your Cart</h1>  
            }
            </Modal.Body>
        </Modal>
        </>
    )
}
export default NavbarComponent;