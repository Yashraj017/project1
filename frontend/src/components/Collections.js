import { Link } from 'react-router-dom';

function Collections() {
  return (
    <section className="collections container py-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <Link to="/designs/ring">
            <img src="/images/Ring.png" alt="Rings" width="60%" />
            <h3>Rings</h3>
          </Link>
          <p>Explore our dazzling collection of rings.</p>
        </div>
        <div className="col-md-4 text-center">
          <Link to="/designs/necklace">
            <img src="/images/Necklace.png" alt="Necklaces" width="60%" />
            <h3>Necklaces</h3>
          </Link>
          <p>Elegant necklaces for every occasion.</p>
        </div>
        <div className="col-md-4 text-center">
          <Link to="/designs/earrings">
            <img src="/images/earrings.jpeg" alt="Earrings" width="60%" />
            <h3>Earrings</h3>
          </Link>
          <p>Timeless earrings to complete your look.</p>
        </div>
      </div>
    </section>
  );
}

export default Collections;
