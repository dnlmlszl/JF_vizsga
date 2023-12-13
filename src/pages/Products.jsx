import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../components/Product';

const baseUrl =
  'https://raw.githubusercontent.com/mkatay/json_products/main/products';

export const Products = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(baseUrl);
      setGadgets(response.data);
    };

    fetchProducts();
  }, []);

  if (!gadgets) return <div className="alert alert-warning">Loading...</div>;

  return (
    <section>
      <h2 className="text-center  my-4">Products</h2>
      <div className="container">
        <div className="row">
          {gadgets &&
            gadgets.map((gadg) => <Product key={gadg.id} {...gadg} />)}
        </div>
      </div>
    </section>
  );
};
