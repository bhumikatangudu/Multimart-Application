import '../../Styles/Cart.css';
import Helmet from '../../Components/Helmet/Helmet';
import CommonSection from '../../Components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { motion } from 'framer-motion';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    
    dispatch(cartActions.removeItem(itemId));
  };

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>No items added to the current cart</h2>
              ) : (
                <table className='table-bordered'>
                  <thead>
                    <tr>
                      
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} handleRemoveItem={handleRemoveItem} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item, handleRemoveItem }) => (
  <tr>
    <td>
      <img src={item.image} alt='' />
    </td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity} pcs</td>
    <td>
      <motion.i
        whileTap={{ scale: 1.2 }}
        className='ri-delete-bin-line'
        onClick={() => handleRemoveItem(item.id)}
      ></motion.i>
    </td>
  </tr>
);

export default Cart;
