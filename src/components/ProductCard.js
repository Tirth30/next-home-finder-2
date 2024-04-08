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
      <BsFillHouseHeartFill className='like' onClick={() => { alert("Liked Successfully"); }} />
    </div>
  );
}

function ProductCards() {
  const [priceFilter, setPriceFilter] = useState(null);
  const [cityFilter, setCityFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [amenitiesFilter, setAmenitiesFilter] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [roomsFilter, setRoomsFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [areaFilter, setAreaFilter] = useState('');

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
      time : 'One Month Ago',
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
      time : 'Two Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'farmhouse',
      area : '90 sq. feet',
    },
    {
      id: 4,
      image: '../img/banner.jpg',
      title: 'Home 4',
      price: '45 Lakhs',
      city: 'Kolkata',
      status: 'rent', 
      time : 'Three Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'bunglow',
      area : '90 sq. feet',
    },
    {
      id: 5,
      image: '../img/banner.jpg',
      title: 'Home 5',
      price: '45 Lakhs',
      city: 'Chennai',
      status: 'sale', 
      time : 'Four Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'villa',
      area : '90 sq. feet',
    },
    {
      id: 6,
      image: '../img/banner.jpg',
      title: 'Home 6',
      price: '45 Lakhs',
      city: 'Bangalore',
      status: 'rent', 
      time : 'Five Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'flat',
      area : '90 sq. feet',
    },
    {
      id: 7,
      image: '../img/banner.jpg',
      title: 'Home 7',
      price: '45 Lakhs',
      city: 'Hyderabad',
      status: 'sale', 
      time : 'Six Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'farmhouse',
      area : '90 sq. feet',
    },
    {
      id: 8,
      image: '../img/banner.jpg',
      title: 'Home 8',
      price: '45 Lakhs',
      city: 'Pune',
      status: 'rent', 
      time : 'Seven Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'bunglow',
      area : '90 sq. feet',
    },
    {
      id: 9,
      image: '../img/banner.jpg',
      title: 'Home 9',
      price: '45 Lakhs',
      city: 'Jaipur',
      status: 'sale', 
      time : 'Eight Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'villa',
      area : '90 sq. feet',
    },
    {
      id: 10,
      image: '../img/banner.jpg',
      title: 'Home 10',
      price: '45 Lakhs',
      city: 'Lucknow',
      status: 'rent', 
      time : 'Nine Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'flat',
      area : '90 sq. feet',
    },
    {
      id: 11,
      image: '../img/banner.jpg',
      title: 'Home 11',
      price: '45 Lakhs',
      city: 'Kanpur',
      status: 'sale', 
      time : 'Ten Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'farmhouse',
      area : '90 sq. feet',
    },
    {
      id: 12,
      image: '../img/banner.jpg',
      title: 'Home 12',
      price: '45 Lakhs',
      city: 'Nagpur',
      status: 'rent', 
      time : 'Eleven Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'bunglow',
      area : '90 sq. feet',
    },
    {
      id: 13,
      image: '../img/banner.jpg',
      title: 'Home 13',
      price: '40 Lakhs',
      city: 'Indore',
      status: 'sale', 
      time : 'One Year Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'villa',
      area : '90 sq. feet',
    },
    {
      id: 14,
      image: '../img/banner.jpg',
      title: 'Home 14',
      price: '27 Lakhs',
      city: 'Thane',
      status: 'rent', 
      time : 'One Year and One Month Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'flat',
      area : '90 sq. feet',
    },
    {
      id: 15,
      image: '../img/banner.jpg',
      title: 'Home 15',
      price: '35 Lakhs',
      city: 'Bhopal',
      status: 'sale', 
      time : 'One Year and Two Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'farmhouse',
      area : '90 sq. feet',
    },
    {
      id: 16,
      image: '../img/banner.jpg',
      title: 'Home 16',
      price: '45 Lakhs',
      city: 'Visakhapatnam',
      status: 'rent', 
      time : 'One Year and Three Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'bunglow',
      area : '90 sq. feet',
    },
  ];
  

  const handleApplyFilter = () => {
    setPriceFilter(inputValue);
  };

  const handleResetFilter = () => {
    setPriceFilter(null);
    setInputValue('');
    setCityFilter('');
    setStatusFilter('');
    setTimeFilter('');
    setAmenitiesFilter([]);
    setRoomsFilter('');
    setTypeFilter('');
    setAreaFilter('');
  };

  const filteredProducts = products.filter(product => {
    const priceNumber = Number(product.price.replace(/[^0-9.-]+/g, ""));
    const priceUnit = product.price.replace(/[0-9]/g, '').trim();

    let priceCondition = true;
    if (priceFilter) {
      switch (priceUnit) {
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
    const timeCondition = timeFilter ? product.time.toLowerCase() === timeFilter.toLowerCase() : true;
    const amenitiesCondition = amenitiesFilter.every(amenity => product.amenities.includes(amenity));
    const roomsCondition = roomsFilter ? product.rooms === roomsFilter : true;
    const typeCondition = typeFilter ? product.type === typeFilter : true;
    const areaCondition = areaFilter ? product.area === areaFilter : true;

    return priceCondition && cityCondition && statusCondition && timeCondition && amenitiesCondition && roomsCondition && typeCondition && areaCondition;
  });

  return (
    <>
      <div className="filter-container">
        <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Max price" />
        <select value={cityFilter} onChange={e => setCityFilter(e.target.value)}>
          <option value="">Select City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Mumbai">Mumbai</option>
          {/* Add more cities as needed */}
        </select>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
        <select value={timeFilter} onChange={e => setTimeFilter(e.target.value)}>
          <option value="">All Times</option>
          <option value="New Launch">New Launch</option>
          <option value="One Month Ago">One Month Ago</option>
          {/* Add more time options as needed */}
        </select>
        {/* Checkbox for amenities */}
        <div className="amenities-checkboxes">
          <label>Amenities :</label>
          <label>
            <input type="checkbox" value="garden" checked={amenitiesFilter.includes("garden")} onChange={e => toggleAmenityFilter(e.target.value)} />
             Garden
          </label>
          <label>
            <input type="checkbox" value="parking" checked={amenitiesFilter.includes("parking")} onChange={e => toggleAmenityFilter(e.target.value)} />
             Parking
          </label>
          <label>
            <input type="checkbox" value="gym" checked={amenitiesFilter.includes("gym")} onChange={e => toggleAmenityFilter(e.target.value)} />
             Gym
          </label>
          <label>
            <input type="checkbox" value="club house" checked={amenitiesFilter.includes("club house")} onChange={e => toggleAmenityFilter(e.target.value)} />
             Club House
          </label>
          <select value={roomsFilter} onChange={e => setRoomsFilter(e.target.value)}>
          <option value="">All Rooms</option>
          <option value="1bhk">1 BHK</option>
          <option value="2bhk">2 BHK</option>
          <option value="3bhk">3 BHK</option>
          <option value="4bhk">4 BHK</option>
          {/* Add more room options as needed */}
        </select>
        <div>
        <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="flat">Flat</option>
          <option value="apartment">Apartment</option>
          <option value="farmhouse">Farmhouse</option>
          <option value="bunglow">Bunglow</option>
          <option value="villa">Villa</option>
          {/* Add more type options as needed */}
        </select>
        </div>
        <pre>               </pre>
        <div>
        <select value={areaFilter} onChange={e => setAreaFilter(e.target.value)}>
          <option value="">Select Area</option>
          <option value="50 sq. feet">50 sq. feet</option>
          {/* Add more options as needed */}
        </select>
        </div>
        </div>
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

  function toggleAmenityFilter(amenity) {
    setAmenitiesFilter(prevFilters => {
      if (prevFilters.includes(amenity)) {
        return prevFilters.filter(filter => filter !== amenity);
      } else {
        return [...prevFilters, amenity];
      }
    });
  }
}

export default ProductCards;
