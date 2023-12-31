
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa'; 

const ProductsCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
        shortDesc: item.shortDesc,
      })
    );
    toast.success('Product added successfully');
  };

  // Function to render star rating based on the average rating of the product
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          {i <= rating ? (
            <FaStar color="gold" />
          ) : (
            <FaStar color="gray" />
          )}
        </span>
      );
    }
    return stars;
  };

  return (
    <Col lg='3' md='4' className='mb-2'>
      <div className='product_item'>
        <div className='product_img'>
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt={item.productName} />
        </div>
        <div className='p-2 product_info'>
          <h3 className='product_name'>
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
          <div className='star-rating'>{renderRatingStars(item.avgRating)}</div>
          <p>{item.description}</p> {/* Display the product description */}
        </div>
        <div className='product_card-botton d-flex align-items-center justify-content-between p-2'>
          <span className='price'>${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className='ri-add-line'></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductsCard;
