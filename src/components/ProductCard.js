import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseHeartFill } from "react-icons/bs";

function ProductCard({ id, image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <Link to={`/Detail/${id}`}> {/* Pass the id as a parameter to the detail page route */}
        <button>View Details</button>
      </Link>
      <BsFillHouseHeartFill className='like' onClick={()=>{alert("Liked Successfully");}}/>
    </div>
  );
}

function ProductCards() {
  const [priceFilter, setPriceFilter] = useState(null);
  const [cityFilter, setCityFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState(''); 
  const [timeFilter, setTimeFilter] = useState(''); // Add this line
  const [inputValue, setInputValue] = useState('');

  const products = [
    {
      id: 1,
      image: '../img/banner.jpg',
      title: 'Home 1',
      price: '25 Lakhs',
      city : 'Ahmedabad',
      status : 'sale',
      time : 'New Launch',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'flat',
      area : '90 sq. feet',
    },
    {
      id: 2,
      image: '../img/banner.jpg',
      title: 'Home 2',
      price: '5 thousand/month',
      city: 'Mumbai',
      status: 'rent',
      time : 'One Month Ago', // Add time here
      amenities : 'garden , clun house',
      rooms : '1bhk',
      type:'apartment',
      area : '50 sq. feet'
    },
    {
      id: 3,
      image: '../img/banner.jpg',
      title: 'Home 3',
      price: '45 Lakhs',
      city: 'Delhi',
      status: 'sale', 
      time : 'Two Months Ago', // Add time here
      type:'farmhouse',
    },
    {
      id: 4,
      image: '../img/banner.jpg',
      title: 'Home 4',
      price: '45 Lakhs',
      city: 'Kolkata',
      status: 'rent', 
      time : 'Three Months Ago', // Add time here
      type:'bunglow',
    },
    // Add the rest of your product data here
  ];

  const handleApplyFilter = () => {
    setPriceFilter(inputValue);
  };

  const handleResetFilter = () => {
    setPriceFilter(null);
    setInputValue('');
    setCityFilter('');
    setStatusFilter(''); 
    setTimeFilter(''); // Add this line
  };

  const filteredProducts = products.filter(product => {
    const priceNumber = Number(product.price.replace(/[^0-9.-]+/g,""));
    const priceUnit = product.price.replace(/[0-9]/g, '').trim();

    let priceCondition = true;
    if (priceFilter) {
      switch(priceUnit) {
        case 'Lakhs':
          priceCondition = priceNumber * 100000 <= priceFilter;
          break;
        case 'thousand/month':
          priceCondition = priceNumber * 1000 <= priceFilter;
          break;
        case 'cr':
          priceCondition = priceNumber * 10000000 <= priceFilter;
          break;
        default:
          priceCondition = true;
      }
    }

    const cityCondition = cityFilter ? product.city.toLowerCase() === cityFilter.toLowerCase() : true;
    const statusCondition = statusFilter ? product.status.toLowerCase() === statusFilter.toLowerCase() : true; 
    const timeCondition = timeFilter ? product.time.toLowerCase() === timeFilter.toLowerCase() : true; // Add this line

    return priceCondition && cityCondition && statusCondition && timeCondition; // Add timeCondition here
  });

  return (
    <>
    <div className="filter-container">
      <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Max price" />
      <input type="text" value={cityFilter} onChange={e => setCityFilter(e.target.value)} placeholder="City" />
      <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}> 
        <option value="">All Status</option>
        <option value="sale">For Sale</option>
        <option value="rent">For Rent</option>
      </select>
      <select value={timeFilter} onChange={e => setTimeFilter(e.target.value)}> {/* Add this line */}
        <option value="">All Times</option>
        <option value="New Launch">New Launch</option>
        <option value="One Month Ago">One Month Ago</option>
        <option value="Two Months Ago">Two Months Ago</option>
        <option value="Three Months Ago">Three Months Ago</option>
    </select> {/* Add this line */}
      <button onClick={handleApplyFilter}>Apply Filter</button>
      <button onClick={handleResetFilter}>Reset Filter</button>
    </div>
    <div className="product-cards">
      {filteredProducts.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id} 
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
    </>
  );
}

export default ProductCards;
