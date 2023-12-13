import bg1 from '../assets/about1.jpg';
import bg2 from '../assets/about2.jpg';

const About = () => {
  return (
    <section className="container my-5">
      <article className="row align-tems-center mb-5">
        <div className="col-md-6">
          <h2 className="underlined-title">Welcome to Our Store!</h2>
          <p>
            We believe in bringing you the finest productsvwith a touch of
            unique property. Our mission is to providing you with main benefits
            or special features.
          </p>
          <h2 className="underlined-title">Our Story</h2>
          <p>
            Founded in 2010, Our Store has been a labor of love. We started with
            a passion for products and a vision to general objective or value.
            Over the years, we have expanded in the world.
          </p>
        </div>
        <div className="col-md-6">
          <img src={bg2} alt="pic2" className="article-image" />
        </div>
      </article>
      <article className="row align-tems-center">
        <div className="col-md-6">
          <img src={bg1} alt="pic1" className="article-image" />
        </div>
        <div className="col-md-6">
          <h2 className="underlined-title">What Sets Us Apart?</h2>
          <ul className="decorated-list">
            <li>
              Quality Craftsmanship: Every product is crafted with precision and
              care to ensure quality and durability.
            </li>
            <li>
              Unique Designs: Discover categoties that stand out with our
              exclusive designs
            </li>
            <li>
              Customer Satisfaction: Your happiness is our priority. We strive
              to provide an exceptional shopping experience and top-notch
              customer service.
            </li>
          </ul>
          <h2 className="underlined-title">Connect With Us</h2>
          <p>
            Join our community on social media to stay updated on the latest
            news and promotions. Thank you for choosing Us.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
