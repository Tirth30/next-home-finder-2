import React from 'react';
import banner from '../img/banner.jpg';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function ProductCard({ id, image, title, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/Detail/${id}`}> {/* Pass the id as a parameter to the detail page route */}
        <button>View Details</button>
      </Link>
         <button>Like</button>
    </div>
  );
}

function ProductCards() {
  const products = [
    {
      id: 1,
      image: '../img/banner.jpg',
      title: 'Home 1',
      description: '25 Lakhs',
    },
    {
      id: 2,
      image: '../img/banner.jpg',
      title: 'Home 2',
      description: '35 Lakhs',
    },
    {
      id: 3,
      image: '../img/banner.jpg',
      title: 'Home 3',
      description: '45 Lakhs',
    },
    {
      id: 4,
      image: '../img/banner.jpg',
      title: 'Home 4',
      description: '45 Lakhs',
    },
    {
      id: 5,
      image: '../img/banner.jpg',
      title: 'Home 5',
      description: '45 Lakhs',
    },
    {
      id: 6,
      image: '../img/banner.jpg',
      title: 'Home 6',
      description: '45 Lakhs',
    },
    {
      id: 7,
      image: '../img/banner.jpg',
      title: 'Home 7',
      description: '45 Lakhs',
    },
    {
      id: 8,
      image: '../img/banner.jpg',
      title: 'Home 8',
      description: '45 Lakhs',
    },
    {
      id: 9,
      image: '../img/banner.jpg',
      title: 'Home 9',
      description: '45 Lakhs',
    },
    {
      id: 10,
      image: '../img/banner.jpg',
      title: 'Home 10',
      description: '45 Lakhs',
    },
    {
      id: 11,
      image: '../img/banner.jpg',
      title: 'Home 11',
      description: '45 Lakhs',
    },
    {
      id: 12,
      image: '../img/banner.jpg',
      title: 'Home 12',
      description: '45 Lakhs',
    },
    {
      id: 13,
      image: '../img/banner.jpg',
      title: 'Home 13',
      description: '45 Lakhs',
    },
    {
      id: 14,
      image: '../img/banner.jpg',
      title: 'Home 14',
      description: '45 Lakhs',
    },
    {
      id: 15,
      image: '../img/banner.jpg',
      title: 'Home 15',
      description: '45 Lakhs',
    },
    {
      id: 16,
      image: '../img/banner.jpg',
      title: 'Home 16',
      description: '45 Lakhs',
    },
    // Add other products with unique ids
  ];

  return (
    <div className="product-cards">
      {products.map((product, index) => (
        <ProductCard
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

export default ProductCards;
