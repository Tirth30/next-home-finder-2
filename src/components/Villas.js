import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseHeartFill } from "react-icons/bs";


function Villa({ id, image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <Link to={`/VillaDetail/${id}`}> {/* Pass the id as a parameter to the detail page route */}
        <button>View Details</button>
      </Link>
      <BsFillHouseHeartFill className='like' onClick={() => { alert("Liked Successfully"); }} />
    </div>
  );
}

function Villas() {
  const products = [
    {
      id: 1,
      image: 'https://housing-images.n7net.in/4f2250e8/43810102fab0e69010c15ff1ef4ea06b/v0/large/pacifica_aurum_villas_phase_2-pudupakkam_tamil_nadu-chennai-pacifica_builders_pvt_ltd.jpeg',
      title: 'Pacifica Aurum Villas',
      price: '3 Cr',
      city: 'Chennai',
      status: 'sale',
      time : 'One Month Ago',
      amenities : 'Childrens Play Area , Parking , CCTV',
      rooms : '5 BHK',
      type:'villa',
      area : '3812.00 sq.ft'
    },
    {
      id: 2,
      image: 'https://housing-images.n7net.in/4f2250e8/0d7a87bc4f02894063e24cd7441f9aaa/v0/large/jrc_sanzio-sarjapur-bengaluru-jrc_projects_pvt_ltd.png',
      title: 'JRC Sanzio',
      price: '2 Cr',
      city: 'Bangalore',
      status: 'sale', 
      time : 'New Launch',
      amenities : 'Childrens Play Area, parking , CCTV , Solar Lighting',
      rooms : '3 BHK',
      type: 'villa',
      area : '2192.00 sq.ft',
    },
  ];

  return (
    <div className="product-cards">
      {products.map((product, index) => (
        <Villa
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

export default Villas;
