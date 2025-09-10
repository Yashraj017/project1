import { useParams } from 'react-router-dom';

function Designs() {
  const { category } = useParams();

  return (
    <div className="container py-5">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Collection</h2>
      <p>Here are the beautiful {category} designs.</p>
    </div>
  );
}

export default Designs;
