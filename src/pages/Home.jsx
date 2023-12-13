import { FeaturedProducts } from '../components/FeaturedProducts';

const Home = () => {
  return (
    <div className="container">
      <header className="text-center">
        <h1 className="light-title">Welcome to our Online Store</h1>
        <p className="para">
          Discover our featured products and find the perfect items for you.
        </p>
      </header>
      <main>
        <h2 className="text-center light-title">Featured Products</h2>
        <FeaturedProducts />
      </main>
      <footer className="d-flex justify-content-center gap-1 align-items-center my-2">
        <p className="para mt-3">&copy;</p>
        <p className="para mt-3">Our Online Store. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
