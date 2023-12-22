
import ProductsCard from "./ProductsCard";

const ProductsList = ({ data }) => {
  return (
    <div className="row">
      {data?.map((item,index) => (
        <ProductsCard key={index} item={item} />
      ))}
    </div>
  );
}

export default ProductsList;
