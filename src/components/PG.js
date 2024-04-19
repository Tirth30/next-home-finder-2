import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseHeartFill } from "react-icons/bs";


function PG({ id, image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <Link to={`/PGDetail/${id}`}> {/* Pass the id as a parameter to the detail page route */}
        <button>View Details</button>
      </Link>
      <BsFillHouseHeartFill className='like' onClick={() => { alert("Liked Successfully"); }} />
    </div>
  );
}

function PGs() {
  const products = [
    {
      id: 1,
      image: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Mar/01/full_photo/GR2-426735-2058993.jpg',
      title: 'Vinayak PG',
      price: '₹8,000/month',
    },
    {
      id: 2,
      image: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Jan/24/Photo_h400_w540/GR2-266619-1247699_400_540.jpg',
      title: 'Anil PG',
      price: '₹9,000/month',
    },
    {
      id: 3,
      image: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Dec/22/full_photo/GR2-379959-1983597.jpg',
      title: 'Nehru Place - 50 for Girls',
      price: '₹32,500/month',
    },
    {
      id: 4,
      image: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Apr/07/Photo_h400_w540/GR2-433857-2096375_400_540.jpeg',
      title: 'Mishra PG/Hostels',
      price: '₹6,000/month',
    },
  ];

  return (
    <div className="product-cards">
      {products.map((product, index) => (
        <PG
          key={index}
          id={product.id} 
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default PGs;
