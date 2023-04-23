import {Row, Col} from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { ProductArray } from '../ProductArray';
function Store() {
    return(
       <>
        <h1 align="center" className="p-3">Welcome to the store!</h1>
        <Row xs='1' md={3} className="g-4">
            {ProductArray.map((product, idx)=>(
                <Col align="center">
                <ProductCard product={product} />
            </Col>
            ))}
            
            

        </Row>
        </>
    ); 
}
export default Store;