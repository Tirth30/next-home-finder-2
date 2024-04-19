import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseHeartFill } from "react-icons/bs";

function Flat({ id, image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <Link to={`/FlatDetail/${id}`}> {/* Pass the id as a parameter to the detail page route */}
        <button>View Details</button>
      </Link>
      <BsFillHouseHeartFill className='like' onClick={() => { alert("Liked Successfully"); }} />
    </div>
  );
}

function Flats() {
  const products = [
    {
      id: 1,
      image: 'https://housing-images.n7net.in/012c1500/1e4086cf1d69ead051e0b6d2d25277c2/v0/fs.jpeg',
      title: 'Vardan Sky',
      price: '50 Lakhs',
      city : 'Ahmedabad',
      status : 'sale',
      time : 'New Launch',
      amenities : 'Childrens Play Area, parking , CCTV , Solar Lighting',
      rooms : '2 BHK',
      type:'flat',
      area : '1377.00 sq.ft',
    },
    {
      id: 2,
      image: 'https://housing-images.n7net.in/4f2250e8/3dcb1d9aa5d845defe649b92dca6fb7e/v0/fs-large/vbhc_springwater-devkhope-mumbai-vbhc_value_homes_pvt_ltd.jpeg',
      title: 'VBHC Springwater',
      price: '20 Lakhs',
      city: 'Mumbai',
      status: 'Sale', 
      time : 'New Launch',
      amenities : 'parking , CCTV',
      rooms : '1 BHK',
      type:'flat',
      area : '429.00 sq.ft',
    },
    {
      id: 3,
      image: 'https://housing-images.n7net.in/4f2250e8/cd412475eff8d311de499ebe1a212204/v0/large/corner_house-selaiyur-chennai-ms_builders_chennai.jpeg',
      title: 'Corner House',
      price: '64 Lakhs',
      city: 'Chennai',
      status: 'sale', 
      time : 'two Months Ago',
      amenities : 'CCTV',
      rooms : '2 BHK',
      type:'flat',
      area : '887.00 sq.ft',
    },
    {
      id: 4,
      image: 'https://housing-images.n7net.in/4f2250e8/f90b5c9e732376493a56947ace9304de/v0/large/risland_sky_mansion-chhatarpur-delhi-risland_sky_mansion.jpeg',
      title: 'Risland Sky Mansion',
      price: '6 Cr',
      city: 'Delhi',
      status: 'sale', 
      time : 'One Month Ago',
      amenities : 'Childrens Play Area, parking , CCTV , Solar Lighting',
      rooms : '3 BHK',
      type:'flat',
      area : '3300.00 sq.ft',
    },
    {
      id: 5,
      image: 'https://housing-images.n7net.in/4f2250e8/88a9db77125a0a133730e8c839612b5e/v0/large/simana_the_urban_oasis-parel-mumbai-bhoomi_group.jpg',
      title: 'Simana The Urban Oasis',
      price: '10 Cr',
      city: 'Mumbai',
      status: 'sale', 
      time : 'two Months Ago',
      amenities : 'Childrens Play Area, parking , CCTV',
      rooms : '5 BHK',
      type:'flat',
      area : '2104.00 sq.ft',
    },
    {
      id: 6,
      image: 'https://housing-images.n7net.in/01c16c28/215c7160ea606652cd5218c2e5bf91b0/v0/large/1_bhk_independent_builder_floor-for-rent-keelakattalai-Chennai-bedroom.jpg',
      title: '1 BHK for Rent',
      price: '7000/month',
      city: 'Chennai',
      status: 'rent', 
      time : 'One Month Ago',
      amenities : 'parking , CCTV',
      rooms : '1 BHK',
      type:'flat',
      area : '600 sq.ft',
    },
    {
      id: 7,
      image: 'https://housing-images.n7net.in/01c16c28/58f481a0a38b3b0607580af98f0150dd/v0/fs/3_bhk_apartment-for-rent-wadala_east-Mumbai-living_room.jpg',
      title: 'Ajmera Julian Alps',
      price: '18000/month',
      city: 'Mumbai',
      status: 'rent', 
      time : 'Two Months Ago',
      amenities : 'Childrens Play Area',
      rooms : '3 BHK',
      type:'flat',
      area : '1150 sq.ft',
    },
    {
      id: 8,
      image: 'https://housing-images.n7net.in/012c1500/a5051ba8baa3e022be734cdc37b07b66/v0/fs.jpg',
      title: 'Bakeri Sarvesh',
      price: '11500/month',
      city: 'Ahmedabad',
      status: 'Rent', 
      time : 'One Month Ago',
      amenities : 'Childrens Play Area, parking , CCTV',
      rooms : '2 BHK',
      type:'flat',
      area : '1100 sq.ft',
    },
  ];

  return (
    <div className="product-cards">
      {products.map((product, index) => (
        <Flat
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

export default Flats;
