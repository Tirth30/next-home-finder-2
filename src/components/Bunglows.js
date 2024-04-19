import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseHeartFill } from "react-icons/bs";

function Bunglow({ id, image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <Link to={`/BunglowsDetail/${id}`}> {/* Pass the id as a parameter to the detail page route */}
        <button>View Details</button>
      </Link>
      <BsFillHouseHeartFill className='like' onClick={() => { alert("Liked Successfully"); }} />
    </div>
  );
}

function Bunglows() {
  const products = [
    {
      id: 1,
      image: 'https://housing-images.n7net.in/01c16c28/e2382b8d2109b510664249559307bb05/v0/fs/4_bhk_apartment-for-sale-andheri_west-Mumbai-hall.jpg',
      title: 'Four Bungalows',
      price: '33 Cr',
      city: 'Mumbai',
      status: 'sale', 
      time : 'two Months ago',
      amenities : 'Childrens Play Area, parking , CCTV , Solar Lighting',
      rooms : '4 BHK',
      type:'bunglow',
      area : '5000 sq.ft',
    },
    {
      id: 2,
      image: 'https://img.staticmb.com/mbimages/project/2023/08/03/Project-Photo-5-2-Oakland-Estates-Bangalore-5416401_475_900.jpg',
      title: '2 Oakland Estates',
      price: '3 Cr',
      city: 'Bangalore',
      status: 'sale', 
      time : 'new launch',
      amenities : 'Childrens Play Area, parking , CCTV ',
      rooms : '4 BHK',
      type:'bunglow',
      area : '2800 Sq.ft',
    },
    {
      id: 3,
      image: 'https://housing-images.n7net.in/4f2250e8/4da60c37b19bd39cb04919abea7e34b3/v0/large/trishala_the_village-sathamrai_village-hyderabad-trishala_infrastructure.jpeg',
      title: 'Trishala The Village',
      price: '4 Cr',
      city: 'Hyderabad',
      status: 'sale', 
      time : 'two Months ago',
      amenities : 'Childrens Play Area, parking , CCTV , Solar Lighting',
      rooms : '4 BHK',
      type:'bunglow',
      area : '3140.00 SQ.FT',
    },
  ];

  return (
    <div className="product-cards">
      {products.map((product, index) => (
        <Bunglow
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

export default Bunglows;
