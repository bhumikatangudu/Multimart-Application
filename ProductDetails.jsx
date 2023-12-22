
import { useParams } from 'react-router-dom';
import products from '../../assets/Data/products';
import '../../Styles/products-details.css';
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;

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
    <div className="product-details-container">
      <div className="product-image">
        <img src={imgUrl} alt={productName} />
      </div>
      <div className="product-info">
        <h1>{productName}</h1>
        <p>Price: {price}</p>
        <div>
          <p>Average Rating: {renderRatingStars(avgRating)}</p>
        </div>
        <p>Reviews: {review}</p>
        <p>{shortDesc}</p>
        <p>{description}</p>
        <input type='button'>Add to cart/</input>
      </div>
    </div>
  );
};

export default ProductDetails;
