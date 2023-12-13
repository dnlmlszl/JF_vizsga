import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const baseUrl =
  'https://raw.githubusercontent.com/mkatay/json_products/main/products';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(baseUrl);
      setGadgets(response.data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const foundProduct = gadgets.find((p) => p.id.toString() === id);
    setProduct(foundProduct);
  }, [id, gadgets]);

  if (!product)
    return <div className="alert alert-warning">No such product</div>;

  return (
    <article className="container product-detail my-5">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="product-image-main mb-3">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="product-images d-flex flex-wrap">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                className="img-thumbnail m-1"
                style={{ width: '100px', height: '100px' }}
              />
            ))}
          </div>
        </div>
        <div className="col-lg-6 col-md-12 product-info">
          <h2>{product.title}</h2>
          <p className="text-muted product-description">
            {product.description}
          </p>
          <p className="price">Price: ${product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p className="rating">Rating: {product.rating} stars</p>
          <p className="stock">On stock: {product.stock} pcs</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    </article>
  );
};

export default SingleProduct;
