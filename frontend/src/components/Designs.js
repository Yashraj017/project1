import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import SocialMedia from "./SocialMedia";

function Designs() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");

  const designs = [
    { id: 1, name: "Elegant Ring", type: "Rings", gender: "Women", material: "Gold", image: "/images/Ring.png", description: "A beautiful gold ring perfect for any occasion." },
    { id: 2, name: "Stylish Earrings", type: "Earrings", gender: "Women", material: "Silver", image: "/images/earrings.jpeg", description: "Modern silver earrings to complement your outfit." },
    { id: 3, name: "Classic Necklace", type: "Necklaces", gender: "Women", material: "Gold", image: "/images/Necklace.png", description: "Timeless gold necklace for special events." },
    { id: 4, name: "Men's Chain", type: "Chains", gender: "Men", material: "Gold", image: "/images/Chain.png", description: "Strong gold chain for a masculine look." },
    { id: 5, name: "Men's Kada", type: "Kadas", gender: "Men", material: "Silver", image: "/images/Kada.png", description: "Silver kada with a sleek design." },
    { id: 6, name: "Bangle Set", type: "Bangles", gender: "Women", material: "Gold", image: "/images/Bangle.png", description: "Set of gold bangles for festive occasions." },
    { id: 7, name: "Nose Pin", type: "Nose Pins", gender: "Women", material: "Gold", image: "/images/Nosepin.png", description: "Elegant nose pin with intricate design." },
    { id: 8, name: "Anklet", type: "Anklets", gender: "Women", material: "Silver", image: "/images/Anklet.png", description: "Delicate silver anklet for daily wear." },
    // Add more as needed
  ];

  const filteredDesigns = designs.filter((design) => 
    (selectedType === "All" || design.type === selectedType) &&
    (selectedGender === "All" || design.gender === selectedGender) &&
    (selectedMaterial === "All" || design.material === selectedMaterial)
  );

  const handleInquire = (design) => {
    alert(`Inquiry sent for ${design.name}!`);
  };

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="text-center mb-4">Our Jewelry Designs</h2>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-md-4 mb-2">
            <select className="form-select" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
              <option value="All">All Types</option>
              <option value="Rings">Rings</option>
              <option value="Earrings">Earrings</option>
              <option value="Necklaces">Necklaces</option>
              <option value="Bangles">Bangles</option>
              <option value="Nose Pins">Nose Pins</option>
              <option value="Anklets">Anklets</option>
              <option value="Chains">Chains</option>
              <option value="Kadas">Kadas</option>
            </select>
          </div>
          <div className="col-md-4 mb-2">
            <select className="form-select" value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
              <option value="All">All Genders</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
            </select>
          </div>
          <div className="col-md-4 mb-2">
            <select className="form-select" value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
              <option value="All">All Materials</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
            </select>
          </div>
        </div>

        {/* Designs Grid */}
        <div className="row">
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map((design) => (
              <div key={design.id} className="col-md-4 mb-4">
                <div className="card h-100 text-center">
                  <img src={design.image} className="card-img-top" alt={design.name} style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{design.name}</h5>
                    <p className="card-text">{design.description}</p>
                    <button className="btn btn-outline-success" onClick={() => handleInquire(design)}>Inquire</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No designs match your filters.</p>
          )}
        </div>
      </div>
{/* <SocialMedia /> */}
 <Footer />
    </>
  );
}

export default Designs;
