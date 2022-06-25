import { Link, useParams } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
  const { productId } = useParams();
  const curProduct = products.find((element) => element.id === productId);
  return (
    <section className="section product">
      <img src={curProduct.image} alt={curProduct.name} />
      <h2>{curProduct.name}</h2>
      <Link to="/products" className="btn">
        Back to Products
      </Link>
    </section>
  );
};

export default SingleProduct;
