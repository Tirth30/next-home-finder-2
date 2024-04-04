import React from 'react';
import banner from '../img/banner.jpg';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function Villa({ id, image, title, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/VillaDetail/${id}`}> {/* Pass the id as a parameter to the detail page route */}
        <button>View Details</button>
      </Link>
         <button>Like</button>
    </div>
  );
}

function Villas() {
  const products = [
    {
      id: 1,
      image: '../img/banner.jpg',
      title: 'Villa 1',
      description: '25 Lakhs',
    },
    {
      id: 2,
      image: '../img/banner.jpg',
      title: 'Villa 2',
      description: '35 Lakhs',
    },
    {
      id: 3,
      image: '../img/banner.jpg',
      title: 'Villa 3',
      description: '45 Lakhs',
    },
    // Add other products with unique ids
  ];

  return (
    <div className="product-cards">
      {products.map((product, index) => (
        <Villa
          key={index}
          id={product.id} 
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default Villas;
