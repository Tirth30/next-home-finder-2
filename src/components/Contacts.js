// import React, { useState } from 'react';

<<<<<<< HEAD
// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         subject: '',
//         message: ''
//     })
//     let  name, value
//     console.log(user)
//     const data = (e) =>
//      {
//         name = e.targer.name;
//         value = e.tareget.value;
//         setUserId({...user, [name]: value});
//     }
=======
function ContactsAdd() {
  const location = useLocation();
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
      image: 'https://housing-images.n7net.in/01c16c28/1711011186949_2ee0a8cb5553f5a5a326f61205052b1a/v0/fs/2_bhk_apartment-for-sale-chhatarpur-New+Delhi-bedroom.jpg',
      title: 'MG Builders Apartments',
      price: '27 Lakhs',
      city: 'Delhi',
      emaill: "Mgbuilders@gmailcom",
      mobileNo: "123456789",
      status: 'sale', 
      time : 'Two Months Ago',
      amenities : 'parking , CCTV',
      rooms : '2 BHK',
      type:'apartment',
      area : '720 sq.ft',
    },
    {
      id: 9,
      image: 'https://housing-images.n7net.in/01c16c28/e2382b8d2109b510664249559307bb05/v0/fs/4_bhk_apartment-for-sale-andheri_west-Mumbai-hall.jpg',
      title: 'Four Bungalows',
      price: '33 Cr',
      city: 'Mumbai',
      emaill: "Fourbunglows@gmailcom",
      mobileNo: "123456789",
      status: 'sale', 
      time : 'Two Months ago',
      amenities : 'Childrens Play Area, parking , CCTV , Solar Lighting',
      rooms : '4 BHK',
      type:'bunglow',
      area : '5000 sq.ft',
    },
    {
      id: 10,
      image: 'https://imagecdn.99acres.com/media1/24288/0/485760994O-1712908750436.jpg',
      title: 'Nandanvan Nature Nest',
      price: '92 Lakhs',
      city: 'Ahmedabad',
      emaill: "Nandannature@gmailcom",
      mobileNo: "123456789",
      status: 'sale', 
      time : 'One Month Ago',
      amenities : 'Childrens Play Area, parking , CCTV , Solar Lighting',
      rooms : '4 BHK',
      type:'farmhouse',
      area : '',
    },
    {
      id: 11,
      image: 'https://housing-images.n7net.in/4f2250e8/cd412475eff8d311de499ebe1a212204/v0/large/corner_house-selaiyur-chennai-ms_builders_chennai.jpeg',
      title: 'Corner House',
      price: '64 Lakhs',
      city: 'Chennai',
      emaill: "cornerhouse@gmailcom",
      mobileNo: "123456789",
      status: 'sale', 
      time : 'Two Months Ago',
      amenities : 'CCTV',
      rooms : '2 BHK',
      type:'flat',
      area : '887.00 sq.ft',
    },
    {
      id: 12,
      image: 'https://housing-images.n7net.in/4f2250e8/286723619df6909c2e95f3a01d316122/v0/large/rr_wishtales-jakkur-bengaluru-msr_infraa.jpeg',
      title: 'RR WishTales',
      price: '1 Cr',
      city: 'Bangalore',
      emaill: "rrwishtales@gmailcom",
      mobileNo: "123456789",
      status: 'sale', 
      time : 'New Launch',
      amenities : 'Childrens Play Area, parking , CCTV',
      rooms : '2 BHK',
      type:'apartment',
      area : '1242.00 sq.ft',
    },
    {
      id: 13,
      image: 'https://housing-images.n7net.in/012c1500/28a26ee2bc0fd863c9dd21f78b30c455/v0/fs.jpeg',
      title: 'Kopren Park View',
      price: '75 Lakhs',
      city: 'Ahmedabad',
      emaill: "kopren@gmailcom",
      mobileNo: "123456789",
      status: 'sale', 
      time : 'New Launch',
      amenities : 'Childrens Play Area, parking , CCTV',
      rooms : '3 BHK',
      type:'apartment',
      area : '1755 sq.ft',
    },
    {
      id: 14,
      image: 'https://housing-images.n7net.in/4f2250e8/f90b5c9e732376493a56947ace9304de/v0/large/risland_sky_mansion-chhatarpur-delhi-risland_sky_mansion.jpeg',
      title: 'Risland Sky Mansion',
      price: '6 Cr',
      city: 'Delhi',
      emaill: "risland@gmailcom",
      mobileNo: "123456789",
      status: 'sale', 
      time : 'One Month Ago',
      amenities : 'Childrens Play Area, parking , CCTV , Solar Lighting',
      rooms : '3 BHK',
      type:'flat',
      area : '3300.00 sq.ft',
    },
    {
      id: 15,
      image: 'https://housing-images.n7net.in/4f2250e8/88a9db77125a0a133730e8c839612b5e/v0/large/simana_the_urban_oasis-parel-mumbai-bhoomi_group.jpg',
      title: 'Simana The Urban Oasis',
      price: '10 Cr',
      city: 'Mumbai',
      emaill: "simana@gmailcom",
      mobileNo: "123456789",
      status: 'sale', 
      time : 'Two Months Ago',
      amenities : 'Childrens Play Area, parking , CCTV',
      rooms : '5 BHK',
      type:'flat',
      area : '2104.00 sq.ft',
    },
    {
      id: 16,
      image: 'https://housing-images.n7net.in/01c16c28/215c7160ea606652cd5218c2e5bf91b0/v0/large/1_bhk_independent_builder_floor-for-rent-keelakattalai-Chennai-bedroom.jpg',
      title: '1 BHK for Rent',
      price: '7000/month',
      city: 'Chennai',
      emaill: "ramesh@gmailcom",
      mobileNo: "123456789",
      status: 'rent', 
      time : 'One Month Ago',
      amenities : 'parking , CCTV',
      rooms : '1 BHK',
      type:'flat',
      area : '600 sq.ft',
    },
  ];
  const [ids, setIds] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const databaseUrl =
          "https://next-home-finder-5de1b-default-rtdb.firebaseio.com/contect.json";
>>>>>>> 57fe2ee9a37dcb76bd43663333b2707e55e754ed

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const { name, phone, subject, message } = formData;

//     //     try {
//     //         const res = await fetch('https://next-home-finder-5de1b-default-rtdb.firebaseio.com/your_endpoint.json', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json'
//     //             },
//     //             body: JSON.stringify({
//     //                 name,
//     //                 phone,
//     //                 subject,
//     //                 message
//     //             })
//     //         });

//     //         if (res.ok) {
//     //             alert("Message sent successfully");
//     //         } else {
//     //             alert("Error occurred");
//     //         }
//     //     } catch (error) {
//     //         console.error("Error:", error);
//     //         alert("Error occurred");
//     //     }
//     // };

//     return (
//         <section className="contact">
//             <div className="page-top">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <h1 className="page-title">Contact</h1>
//                             <h2 className="page-description">Give us Your Valuable Feedback</h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="page-content">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="row">
//                                 <div className="col-lg-6">
//                                     <label>Name</label>
//                                     <input type="text" className="inp-contact" name="name" value={formData.name} onChange={handleChange} />
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <label>Phone</label>
//                                     <input type="text" className="inp-contact" name="phone" value={formData.phone} onChange={handleChange} />
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <label>Subject</label>
//                                     <input type="text" className="inp-contact" name="subject" value={formData.subject} onChange={handleChange} />
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <label>Message</label>
//                                     <textarea type="text" className="ta-contact" rows="4" name="message" value={formData.message} onChange={handleChange}></textarea>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <button className="btn-contact" onClick={handleSubmit}>Send Feedback</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Contact;







import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(formData); // Log formData whenever it changes
    }

<<<<<<< HEAD
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the form data to Firebase or perform any other actions you need
        console.log("Form submitted:", formData);
    };

    return (
        <section className="contact">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Contact</h1>
                            <h2 className="page-description">Give us Your Valuable Feedback</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Name</label>
                                    <input type="text" className="inp-contact" name="name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="col-lg-6">
                                    <label>Phone</label>
                                    <input type="text" className="inp-contact" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="col-lg-12">
                                    <label>Subject</label>
                                    <input type="text" className="inp-contact" name="subject" value={formData.subject} onChange={handleChange} />
                                </div>
                                <div className="col-lg-12">
                                    <label>Message</label>
                                    <textarea type="text" className="ta-contact" rows="4" name="message" value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn-contact" onClick={handleSubmit}>Send Feedback</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
=======
    fetchMyAPI();
  }, []);
  console.log(filteredProducts);
  const removeData = async (id) => {
    try {
      const databaseUrl =
        "https://next-home-finder-5de1b-default-rtdb.firebaseio.com/contect.json";
      const deleteId = Object.keys(ids).map((key) => {
        if (ids[key] === id) {
          return key;
        }
      });
      const data = await axios.put(databaseUrl, deleteId);
      console.log("deleted successfully", data);
    } catch (erroer) {
      console.log(erroer);
    }
  };
  return (
    <div className="product-cards">
      {filteredProducts.map((product, index) => (
        <div className="product-card">
          <div className="cross">
            {/* <button onClick={() => removeData(product?.id)}>
              <i class="fa fa-remove"></i>
            </button> */}
          </div>
          <img src={product?.image} alt={product?.title} />
          <h2>{product?.title}</h2>
          <p>{product?.price}</p>
          <p>{product?.mobileNo}</p>
          <p>{product?.emaill}</p>
          <Link to={`/Detail/${product?.id}`}>
            {" "}
            {/* Pass the id as a parameter to the detail page route */}
            <button>View Details</button>
            
          </Link>
          <BsFillHouseHeartFill
            className="like"
            onClick={() => {
              alert("Liked Successfully");
            }}
          />
        </div>
      ))}
    </div>
  );
>>>>>>> 57fe2ee9a37dcb76bd43663333b2707e55e754ed
}

export default Contact;
