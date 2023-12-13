import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';

import { NotFound } from './pages/NotFound';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <Router>
      <NavBar />
      <main className="mt-5 " id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
