import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="text-center mb-5">About Us</h2>

        {/* Store Info */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/images/store.jpg" alt="Store" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h4>Our Legacy</h4>
            <p>
              VAIBHAVI JEWELLERS has been serving customers with exquisite and timeless jewelry pieces since 2012. Our commitment to craftsmanship and customer satisfaction has made us a trusted name in the region. We blend tradition with innovation to create jewelry that tells a story.
            </p>
          </div>
        </div>

        {/* Owner Info */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img src="/images/owner.jpg" alt="Owner" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h4>Our Founder & Master Designer</h4>
            <p>
              The store's founder is not only a passionate entrepreneur but also an expert jewelry designer. His innovative designs and deep understanding of customer preferences have shaped VAIBHAVI JEWELLERS into a creative hub for both classic and contemporary jewelry pieces.
            </p>
          </div>
        </div>

        {/* Owner’s Wife Info */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/images/owner-wife.jpg" alt="Owner's Wife" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h4>Our Inspiration</h4>
            <p>
              The owner’s wife is a connoisseur of jewelry aesthetics and trends. With her impeccable taste and expertise, she assists customers in selecting pieces that reflect their personality and preferences, ensuring every piece is a perfect match.
            </p>
          </div>
        </div>

        {/* Craftsman Info */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img src="/images/craftsman.jpg" alt="Craftsman" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h4>Our Skilled Craftsman</h4>
            <p>
              Our full-time craftsman brings designs to life with precision and creativity. Capable of customizing jewelry to meet individual requirements, he ensures that every piece is crafted with passion, attention to detail, and unmatched skill.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
