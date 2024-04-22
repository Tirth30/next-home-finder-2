import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ProductCards from "./ProductCard";

function ContactsAdd() {
  const location = useLocation();
  const [ids, setIds] = useState();
  useEffect(() => {
    const addIdToDatabaseEntry = async () => {
      try {
        const databaseUrl =
          "https://next-home-finder-5de1b-default-rtdb.firebaseio.com/contect.json";

        // Send PATCH request to update the entry wit the new ID
        const data = await axios.get(databaseUrl);
        setIds(data?.data);
        console.log("ID added successfully!");
      } catch (error) {
        console.error("Error adding ID:", error);
      }
    };
  }, []);
  console.log(ids);
  const products = [
    {
      id: 1,
      image:
        "https://housing-images.n7net.in/012c1500/1e4086cf1d69ead051e0b6d2d25277c2/v0/fs.jpeg",
      title: "Vardan Sky",
      price: "50 Lakhs",
      city: "Ahmedabad",
      emaill: "VardanSky@gmailcom",
      mobileNo: "123456789",
      status: "sale",
      time: "New Launch",
      amenities: "Childrens Play Area, parking , CCTV , Solar Lighting",
      rooms: "2 BHK",
      type: "flat",
      area: "1377.00 sq.ft",
    },
    {
      id: 2,
      image:
        "https://housing-images.n7net.in/4f2250e8/43810102fab0e69010c15ff1ef4ea06b/v0/large/pacifica_aurum_villas_phase_2-pudupakkam_tamil_nadu-chennai-pacifica_builders_pvt_ltd.jpeg",
      title: "Pacifica Aurum Villas",
      price: "3 Cr",
      city: "Chennai",

      emaill: "Pacific@gmailcom",
      mobileNo: "123456789",
      status: "sale",
      time: "One Month Ago",
      amenities: "Childrens Play Area , Parking , CCTV",
      rooms: "5 BHK",
      type: "villa",
      area: "3812.00 sq.ft",
    },
    {
      id: 3,
      image:
        "https://housing-images.n7net.in/01c16c28/58f481a0a38b3b0607580af98f0150dd/v0/fs/3_bhk_apartment-for-rent-wadala_east-Mumbai-living_room.jpg",
      title: "Ajmera Julian Alps",
      price: "18000/month",
      city: "Mumbai",
      status: "rent",
      emaill: "bhaktipark@gmailcom",
      mobileNo: "123456789",
      time: "Two Months Ago",
      amenities: "Childrens Play Area",
      rooms: "3 BHK",
      type: "flat",
      area: "1150 sq.ft",
    },
    {
      id: 4,
      image:
        "https://housing-images.n7net.in/4f2250e8/3dcb1d9aa5d845defe649b92dca6fb7e/v0/fs-large/vbhc_springwater-devkhope-mumbai-vbhc_value_homes_pvt_ltd.jpeg",
      title: "VBHC Springwater",
      price: "20 Lakhs",
      city: "Mumbai",
      emaill: "VBHC@gmailcom",
      mobileNo: "123456789",
      status: "Sale",
      time: "New Launch",
      amenities: "parking , CCTV",
      rooms: "1 BHK",
      type: "flat",
      area: "429.00 sq.ft",
    },
    {
      id: 5,
      image:
        "https://housing-images.n7net.in/012c1500/6f5d5e73694537131cd31e9a73c9c6d6/v0/fs.jpeg",
      title: "Krishna Homes",
      price: "65 Lakhs",
      emaill: "Krishnahomes77@gmailcom",
      mobileNo: "123456789",
      city: "Delhi",
      status: "sale",
      time: "One Months Ago",
      amenities: "CCTV",
      rooms: "4 BHK",
      type: "apartment",
      area: "1250.00 sq.ft",
    },
    {
      id: 6,
      image:
        "https://housing-images.n7net.in/4f2250e8/0d7a87bc4f02894063e24cd7441f9aaa/v0/large/jrc_sanzio-sarjapur-bengaluru-jrc_projects_pvt_ltd.png",
      title: "JRC Sanzio",
      price: "2 Cr",
      emaill: "JrcSanzio@gmailcom",
      mobileNo: "123456789",
      city: "Bangalore",
      status: "sale",
      time: "New Launch",
      amenities: "Childrens Play Area, parking , CCTV , Solar Lighting",
      rooms: "3 BHK",
      type: "villa",
      area: "2192.00 sq.ft",
    },
    {
      id: 7,
      image:
        "https://housing-images.n7net.in/012c1500/a5051ba8baa3e022be734cdc37b07b66/v0/fs.jpg",
      title: "Bakeri Sarvesh",
      price: "11500/month",
      city: "Ahmedabad",
      emaill: "Mukesh@gmailcom",
      mobileNo: "123456789",
      status: "Rent",
      time: "One Months Ago",
      amenities: "Childrens Play Area, parking , CCTV",
      rooms: "2 BHK",
      type: "flat",
      area: "1100 sq.ft",
    },
    {
      id: 8,
      image: "../img/banner.jpg",
      title: "Home 8",
      price: "45 Lakhs",
      emaill: "NextHomeFinder@gmailcom",
      mobileNo: "123456789",
      city: "Pune",
      status: "rent",
      time: "Seven Months Ago",
      amenities: "garden , parking , gym",
      rooms: "3bhk",
      type: "bunglow",
      area: "90 sq. feet",
    },
    {
      id: 9,
      image: "../img/banner.jpg",
      title: "Home 9",
      price: "45 Lakhs",
      emaill: "NextHomeFinder@gmailcom",
      mobileNo: "123456789",
      city: "Jaipur",
      status: "sale",
      time: "Eight Months Ago",
      amenities: "garden , parking , gym",
      rooms: "3bhk",
      type: "villa",
      area: "90 sq. feet",
    },
    {
      id: 10,
      image: "../img/banner.jpg",
      title: "Home 10",
      price: "45 Lakhs",
      city: "Lucknow",
      emaill: "NextHomeFinder@gmailcom",
      mobileNo: "123456789",
      status: "rent",
      time: "Nine Months Ago",
      amenities: "garden , parking , gym",
      rooms: "3bhk",
      type: "flat",
      area: "90 sq. feet",
    },
    {
      id: 11,
      image: "../img/banner.jpg",
      title: "Home 11",
      price: "45 Lakhs",
      city: "Kanpur",
      status: "sale",
      emaill: "NextHomeFinder@gmailcom",
      mobileNo: "123456789",
      time: "Ten Months Ago",
      amenities: "garden , parking , gym",
      rooms: "3bhk",
      type: "farmhouse",
      area: "90 sq. feet",
    },
    {
      id: 12,
      image: "../img/banner.jpg",
      title: "Home 12",
      price: "45 Lakhs",
      emaill: "NextHomeFinder@gmailcom",
      mobileNo: "123456789",
      city: "Nagpur",
      status: "rent",
      time: "Eleven Months Ago",
      amenities: "garden , parking , gym",
      rooms: "3bhk",
      type: "bunglow",
      area: "90 sq. feet",
    },
    {
      id: 13,
      image: "../img/banner.jpg",
      title: "Home 13",
      price: "40 Lakhs",
      emaill: "NextHomeFinder@gmailcom",
      mobileNo: "123456789",
      city: "Indore",
      status: "sale",
      time: "One Year Ago",
      amenities: "garden , parking , gym",
      rooms: "3bhk",
      type: "villa",
      area: "90 sq. feet",
    },
    {
      id: 14,
      image: "../img/banner.jpg",
      title: "Home 14",
      price: "27 Lakhs",
      city: "Thane",
      emaill: "NextHomeFinder@gmailcom",
      mobileNo: "123456789",
      status: "rent",
      time: "One Year and One Month Ago",
      amenities: "garden , parking , gym",
      rooms: "3bhk",
      type: "flat",
      area: "90 sq. feet",
    },
    {
      id: 15,
      image: "../img/banner.jpg",
      title: "Home 15",
      price: "35 Lakhs",
      emaill: "NextHomeFinder@gmailcom",
      mobileNo: "123456789",
      city: "Bhopal",
      status: "sale",
      time: "One Year and Two Months Ago",
      amenities: "garden , parking , gym",
      rooms: "3bhk",
      type: "farmhouse",
      area: "90 sq. feet",
    },
    {
      id: 16,
      image: "../img/banner.jpg",
      title: "Home 16",
      price: "45 Lakhs",
      emaill: "NextHomeFinder@gmailcom",
      mobileNo: "123456789",
      city: "Visakhapatnam",
      status: "rent",
      time: "One Year and Three Months Ago",
      amenities: "garden , parking , gym",
      rooms: "3bhk",
      type: "bunglow",
      area: "90 sq. feet",
    },
  ];
  return (
    <div>
      {products.map((product, index) => (
        <ProductCards
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

export default ContactsAdd;
