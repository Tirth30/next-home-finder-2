import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {
  let { id } = useParams();
  let history = useHistory();
  const redirectData = (data) => {
    history.push("/contactAdd", { state: data });
  };
  const addIdToDatabaseEntry = async (id) => {
    try {
      const databaseUrl =
        "https://next-home-finder-5de1b-default-rtdb.firebaseio.com/contect.json";

      const newId = id;

      // Send PATCH request to update the entry wit the new ID
      await axios.post(databaseUrl, newId);
      history.push("/Contacts");
      console.log("ID added successfully!");
    } catch (error) {
      console.error("Error adding ID:", error);
    }
  };


  // Conditionally render different content based on the id
  let detailContent = '';
  if (id === '1') {
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Vardan Sky</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Madhav Farm Road, Near Shyamaji Farm, SP Ring Road, Vastral, Daskroi, Ahmedabad</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 50.0 L - 62.0 L</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/4f2250e8/258576846739e46f5b8148b2fb314615/v0/large/vardan_sky-vastral-ahmedabad-vardan_developers.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/ae4228df98a1c0101e9ce88af135075d/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/39acce6484cfc2ce64899430faf63da7/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">Vardan Sky is a project by Vardan Developers in Ahmedabad. It is a Under Construction project. Vardan Sky offers some of the most conveniently designed apartments. Located in Vastral, it is a residential project. The project is spread over 1.62 Acres . It has 228 units. here are 6 buildings in this project. Vardan Sky offers some of the most exclusive 2 BHK, 3 BHK. As per the area plan, units are in the size range of 1377.0 - 1782.0 sq.ft.. Launched in April 2022, Vardan Sky is slated for POSSESSION AUGUST, 2024. The address of Vardan Sky is Madhav Farm Road, Near Shyamaji Farm, SP Ring Road, Vastral.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(1);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>3</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>2</span>
                                </div>
                                <pre>   </pre>
                                <h4>Floor Plan</h4>
                                <div className='vardanfp'><img src="https://thumb.cadbull.com/img/product_img/original/30x30Feet2BHKHousePlanAutoCADLayoutFriNov2021123129.jpg"></img></div> 
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Children's Play Area</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>24X7 Water Supply</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Security Cabin</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Car Parking</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Solar Lighting</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Internal Roads</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Fire Sprinklers</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lifts</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105200.564429!2d72.6757444!3d23.0032427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87e125bda0bd%3A0xfc517cbc789c3ce5!2sVardan%20Sky!5e0!3m2!1sen!2sin!4v1630158674074!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  } 
  else if (id == '2'){
    detailContent =  detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Pacifica Aurum Villas Phase 2</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Padur, Chennai south, Chennai</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 1.59 Cr - 3.36 Cr</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/012c1500/7f1ddba716839ae61298897cb0b6de33/v0/fs.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/4033ec308d397369dd3c6886f31083d6/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/052bc6e900134c1f11728634440946fe/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align = "justify">Looking for Villa in Pudupakkam, Chennai?. Pacifica Aurum Villas Phase 2 is a project by Pacifica Companies. The project is offering 4 BHK, 5 BHK. It is set in 140 Acres . Pacifica Aurum Villas Phase 2 is a Under Construction residential project. There is 1 building in this project. As per the area plan, units are in the size range of 2185.0 - 3812.0 sq.ft.. Pacifica Aurum Villas Phase 2 is located in Pudupakkam. Pacifica Aurum Villas Phase 2 was launched in Jan 2022.Pacifica Aurum Villas Phase 2 offers a host of facilities for residents. This includes Reserved Parking, Gymnasium, RO Water System, Power Backup. For families with kids, there is Children's Play Area, nearby apart from Swimming Pool. Sportsies can use Cricket Pitch, Squash Court, Skating Rink, Basketball Court, Badminton Court, Cycling & Jogging Track. All residents have access to Library, Internet / Wi-Fi, Conference Room, provisions in the project. Other provisions include access to Business Center, Banquet Hall, Party Hall, Landscaping & Tree Planting, Sewage Treatment Plant, Water Storage, Multipurpose Room, Maintenance Staff, The property is has Fire Sprinklers. There is 24x7 Security. It is a Gated Community. There is provision for Visitor Parking. These amenities in Pacifica Aurum Villas Phase 2 are those that every homebuyer aspires for!.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(2);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Terrace: </span>
                                    <span>2</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>6</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>4</span>
                                </div>
                                <pre>     </pre>
                                <h4>Floor Plan</h4>
                                <div className='vardanfp'><img src="https://housing-images.n7net.in/91aba65c/6476ce59876b0f97d041a8d816a6d47e/v0/fs.jpg"></img></div> 
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Amphitheater</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Cricket Pitch</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Fire Sprinklers</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Party Hall</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>24x7 Security</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Medical Facilities</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Swimming Pool</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Power Backup</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105200.564429!2d80.2125948!3d12.8035488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525181ea57915f%3A0xdd57cb899b26ecea!2sPacifica%20Aurum%20Villas%20Phase%202%2C%20Padur%2C%20Chennai%20south%2C%20Chennai!5e0!3m2!1sen!2sin!4v1630158674074!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '3'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">3 BHK Flat for Rent</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Ajmera Julian Alps, Bhakti Park, Wadala East, Mumbai</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 18000/month</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/01c16c28/603de6e7ae6d534161ae00e1dcf98743/v0/fs/3_bhk_apartment-for-rent-wadala_east-Mumbai-kitchen.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/01c16c28/e2d09d5de45a0cc034b3c054449ffde0/v0/fs/3_bhk_apartment-for-rent-wadala_east-Mumbai-bedroom_one.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/989ba416cd9d90c3a96ea0fda04dc2a3/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">Available residential Flay fot Rent in a prime location of wadala east.Wadala road railway station & monorail rail way station is just few minutes away.This complex is blessed with cold breeze, Natural sunlight, Greenery etc. This complex is designed by well renowned architects around the world. This complex has good connectivity with shops, Markets, Hospitals, Schools and Colleges etc. If interested contact us for more details.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(3);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>4</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Intercom</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lifts</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Power Backup</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Garden</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Kids Area</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Water Supply</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Pet Allowed</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Security cabin</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.8798483!3d19.0272118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfc6eb4f11b7%3A0xae1a54cffdde9dfe!2sJulian%20Alps!5e0" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '4'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">VBHC Springwater</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Plot No.223/7 At Devkhop, Palghar, Mira Road and Beyond, Mumbai</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 19.99 L - 39.99 L</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/012c1500/7d4156dfa060bfdd3fd3dca0d1681a09/v0/fs.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/a692e26aee71e5cf7345ef4113f3cfb5/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/ec13136eea34029fef22c9f294f50331/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">VBHC Springwater is an exclusive community in Palghar, with an exquisite 1&2 BHK Waterview Residences with large balconies offers you comfort. Get access to Palghar’s largest clubhouse that will help you recharge and feel right at home from Day 1, at an unmatched location that invites you to make it your own dream home.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(4);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>2</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>1</span>
                                </div>
                                <pre>  </pre>
                                <h4>Floor Plan</h4>
                                <div className='vardanfp'><img src="https://housing-images.n7net.in/91aba65c/c03c9e90dd4bcf9b6e14fd91123d023a/v0/fs.jpg"></img></div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Water Conservation</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Internal Roads</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Multipurpose Hall</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Energy management</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>24x7 Security</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Maintenance Staff</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Solid Waste Management</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Closed Car Parking</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11372.532180104876!2d72.8032942!3d19.7291275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71c78bdba4663%3A0x2ce43567816781a8!2sVBHC%20Springs!5e0!3m2!1sen!2sin!4v1617566560087!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '5'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                    {/* <h2 className="page-description">Lorem ipsum dolor sit amet</h2> */}
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Krishna Affordable Homes</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Dwarka Mor, South West Delhi, New Delhi</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 27.0 L - 80.0 L</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/012c1500/2f39ad6755971fa6f33c53134741b240/v0/fs.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/df22acbdca3c694fea639ed6fb84e7c4/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/03dcab879283f3974310ba20cf6bbc4a/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">Krishna Affordable Homes is a residential project in Dwarka Mor, New Delhi. Krishna Affordable Homes offers Apartment. Available configurations include 2 BHK, 3 BHK, 4 BHK. Apartment, as per the area plan, are in the size range of 550.0 - 1500.0 sq.ft.. The property is Ready to Move. Krishna Affordable Homes is located in Dwarka Mor. The project is developed by Krishna Associates.Krishna Affordable Homes is equipped with various resident-centric amenities that includes Power Backup. It is an Earthquake Resistant Structure. Enjoy a class-apart lifestyle at Krishna Affordable Homes.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(5);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>5</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>4</span>
                                </div>
                                <pre>   </pre>
                                <h4>Floor Plan</h4>
                                <div className='vardanfp'><img src="https://www.sobhaneopolis.net.in/images/sobha/sobha-neopolis-4-bhk-apartment-floor-plan.webp"></img></div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>CCTV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>24X7 Water Supply</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Power Backup</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Earthquake Resistant</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Security</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Fire Sprinklers</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d77.031328!3d28.6116181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d053b912d5421%3A0xd6b365d5a98aad14!2sKrishna%20Residency!5e0" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '6'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">JRC Sanzio</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Near Indus International School, Sarjapur, South Bangalore, Bangalore</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 1.6 Cr - 1.87 Cr</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/012c1500/7617242f5b4bfe1e7fa1e27d90958f71/v0/fs.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/d52e2c8c08183f265da975b4336e9e41/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/887babdbd5ff2bbc75a8584cbc9dafd7/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">Welcome to Sanzio, where lush greenery meets luxurious living. Enjoy peace in our elegant homes amidst the city's bustle. Find daily serenity in our modern, stylish living spaces that blend your soul with with Sanzio's style.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(6);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>4</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>3</span>
                                </div>
                                <pre>   </pre>
                                <h4>Floor Plan</h4>
                                <div><img src="https://housing-images.n7net.in/91aba65c/4c0203c5dc71ab526117581326a7e2c6/v0/fs.jpeg"></img></div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Children's Play Area</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Entrance Lobby</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Parking</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Cricket Pitch</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Amphitheater</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Jogging Track</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Solar Lighting</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Swimming Pool</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.437143392698!2d77.7729517!3d12.8298405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae724a1f3f40f7%3A0xd7e84082421a4418!2sJRC%20Palladio!5e0" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '7'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Bakeri Sarvesh</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Bakeri Sarvesh, Anand Nagar, Ranip, Ahmedabad</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 11,500/month</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/01c16c28/925192858c5078888c2f9cd319c1284d/v0/fs/2_bhk_apartment-for-rent-ranip-Ahmedabad-living_room.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/01c16c28/c7d663f6037c898310f8002ec45ca1b5/v0/fs/2_bhk_apartment-for-rent-ranip-Ahmedabad-living_room.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/01c16c28/7eb797c4d7b85d8d02dc86c5dd417b97/v0/fs/2_bhk_apartment-for-rent-ranip-Ahmedabad-bedroom_two.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align ="justify">If you are looking for a modern house on rent in Ahmedabad, this Flat in Ranip can be your perfect home. It is a 2 BHK Flat designed to meet your space and lifestyle needs. The 2 BHK unit is semi furnished. This rented 2 BHK property is spacious and well-designed, with access to all the conveniences for any modern home seeker. It is located on floor 13 out of a total 14 floors. The Flat has 2 bedrooms and 2 bathroom. It also has 1 balcony, giving uninterrupted views of the surroundings. There is lush greenery around this Flat. It is a East facing Flat designed as per Vastu principles. The carpet area of this unit is 1062.0 square_feet. The built-up area is 1100 square_feet. The monthly rent payable for this Flat is Rs 11500. The security deposit is Rs 23000.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(7);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>3</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Furnishings</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>AC</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Intercom</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Geyser</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Gym</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lift</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Power Backup</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Pet Allowed</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Garden</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Water Supply</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Security</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Gas Pipeline</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Kids Area</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.837480942749!2d72.5706888!3d23.0848616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e839e56928c03%3A0x34c0756e8cc0f3b7!2sBakeri%20Sarvesh!5e0" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  }else if (id == '8'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">MG Builders Apartments</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        MG Builders Chhatarpur JVTS Apartments, Chhattarpur Extension, Chhattarpur, New Delhi</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 27.0 L</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="mg" src='https://housing-images.n7net.in/01c16c28/91b63b1b9e252fef3aa67359bcda000d/v0/fs/2_bhk_apartment-for-sale-chhatarpur-New+Delhi-hall.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="mg" src='https://housing-images.n7net.in/01c16c28/c6a71a14df42bcf94002d967f9317f10/v0/fs/2_bhk_apartment-for-sale-chhatarpur-New+Delhi-kitchen.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="mg" src='https://housing-images.n7net.in/01c16c28/1711011135663_19ed16eb3c93cfe1f6ae5c76b8ed9e18/v0/fs/2_bhk_apartment-for-sale-chhatarpur-New+Delhi-living_room.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align ="justify">Looking for a 2 BHK Flat for sale in Delhi? Your search ends here. Buy this 2 BHK property in Delhi's finest location, Chhatarpur. It is on floor 1 out of 5 floors. This Flat is available at a reasonable price of Rs 27.0 L. The built up area of this property is 720 Square feet. It is spacious for a family and this property has a carpet area of 710 Square feet. There are 2 bedrooms and 2 bathroom.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(8);
                      }}
                    >
                      Contact
                    </button> 
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>3</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>2</span>
                                </div>
                            </div> 
                            <pre>   </pre>
                                <h4>Floor Plan</h4>
                                <div className='vardanfp'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/2_bhk_Bungalow_floor_plan.jpg/800px-2_bhk_Bungalow_floor_plan.jpg"></img></div>                       
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>24X7 Water Supply</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Closed Car Parking</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Power Backup</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lifts</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Fire Sprinklers</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14027.66242967575!2d77.1771178!3d28.491691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fcee1c1b4e7%3A0x9f9a93aa9ca60235!2sMG%20Builders%20Chhatarpur%20JVTS%20Apartments%2C%20Chhattarpur%20Extension%2C%20Chhattarpur%2C%20New%20Delhi!5e0" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '9'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Four Bungalows</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Four Bungalows, Andheri West, Mumbai</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 33.0 Cr</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="fb" src='https://housing-images.n7net.in/01c16c28/f8a2db5f4de8d7eb71d02fa4566387ac/v0/fs/4_bhk_apartment-for-sale-andheri_west-Mumbai-bedroom.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="fb" src='https://housing-images.n7net.in/01c16c28/e2382b8d2109b510664249559307bb05/v0/fs/4_bhk_apartment-for-sale-andheri_west-Mumbai-hall.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="fb" src='https://housing-images.n7net.in/01c16c28/6af54817084172794826c4b053a29430/v0/fs/4_bhk_apartment-for-sale-andheri_west-Mumbai-balcony.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">A 4 BHK Flat for sale in Andheri West, Mumbai. This beautifully designed 4 BHK unit with all the modern-day comforts is one of Andheri West's most desired properties. Contact now for more information. This 4 BHK unit is on floor 22. There are 22 floors in this property. The price of this Flat is Rs 33.0 Cr. Each unit has a built-up area of 5000 square_feet. The carpet area is 3800 square_feet. This West-facing property has an excellent view. There are 4 bedrooms. There is provision for 4 bathroom. This property is also equipped with a servant room. The Flat in Andheri West, Mumbai has lift facility. It is a thoroughly secure premise with cctv facility. Other facilities include provisions for Gym, Garden, Sports facility, Swimming pool, Intercom, Community hall. This property also enjoys power backup facility. Regular water supply is available in this property. Kids have access to a dedicated kids area. This is a gated community. It is also close to RichFeel Trichology Center, Dr. Pareek's Deafness clinic and ENT Centre, Health Reactive I Cancer care treatment I Immunity booster</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(9);
                      }}
                    >
                      Contact
                    </button> 
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>5</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>4</span>
                                </div>
                            </div>
                            <pre>   </pre>
                                <h4>Floor Plan</h4>
                                <div className='fbfp'>
                                   <pre><img src="https://live.staticflickr.com/5087/5298854266_55ae1ddcc2_z.jpg"></img><img src="https://live.staticflickr.com/5044/5298259411_93ac98ae9e_z.jpg"></img></pre> 
                                </div>                       
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Garden</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Car Parking</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Gas Pipeline</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Pool</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Sports Facility</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Water Supply</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Community Hall</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Gymnasium</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.174279901534!2d72.8264378!3d19.1247347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e02e2fcfb3%3A0x1c206d4076de21ea!2sFour%20Bungalows%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '10'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Nandanvan Nature Nest</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Nandanvan Nature Nest , Bhavda, Ahmedabad East</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 92.0 L</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://imagecdn.99acres.com/media1/24288/0/485760994O-1712908750436.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://imagecdn.99acres.com/media1/24288/1/485761006O-1712908751080.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://imagecdn.99acres.com/media1/24288/1/485761012O-1712908754540.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">Fully developed lush green lawn and garden in our compound. Semi furnished. Modular kitchen, two beds, a/c. 24 hours water availability. It is a weekend villa, very well developed community. Very well managed. Have club house, gym, open air theater, swimming pool, mini theater, indoor games, 3 gardens, on the banks of mashwo river, have river front developed. Lots of trees, full of nature, rcc roads inside, lights, full time watchmen and night patrolling, lots of birds and animals.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(10);
                      }}
                    >
                      Contact
                    </button> 
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>5</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom  </span>
                                    <span>4</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Swimming Pool</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Garden</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Fire Sprinklers</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Water Supply</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Security</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Power Backup</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Parking</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Maintenance Staff</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.777135033962!2d72.7737184!3d22.9711762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e633de91336b1%3A0x94ccbf5f52a8a331!2sNandanvan%20Nature%20Nest!5e0!3m2!1sen!2sus!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '11'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Corner House</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        No 14 vidhyalakshmi street, Rajeswari Nagar, Selaiyur, Chennai south, Chennai.</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 64.31 L - 71.85 L</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/012c1500/b228c331a5dafe34282ccf1ebf480ca0/v0/fs.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/b378bffe5a946092b2a2fc4ad012bfac/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/fa82639ca193f521d0b3ba5b19843f6c/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">MS Builders Chennai has lauched MS Corner House in Selaiyur, Chennai. The address of MS MS Corner House is Tambaram, Chennai South.Own a home in MS MS Corner House today!.This project has been developed by MS Builders Chennai.Selaiyur is well-connected to other parts of city by road, which passes through the heart of this suburb. Prominent shopping malls, movie theatres, school, and hospitals are present in proximity of this residential project.</p>
                        <button
                      onClick={() => {
                        addIdToDatabaseEntry(11);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>3</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>2</span>
                                </div>
                                <pre>   </pre>
                                <h4>Floor Plan</h4>
                                <div className='vardanfp'><img src="https://housing-images.n7net.in/91aba65c/c1c71447c19fa228c0466ef22adca786/v0/fs.jpeg"></img></div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lift</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Water Supply</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Security</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Power Backup</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Maintenance Staff</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Fire Sprinklers</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Gas Pipeline</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Community Hall</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.224854680869!2d80.1374179!3d12.9247258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1c35a4128b%3A0x271a161833cc9cf2!2s10%2F12%2C%20Varalakshmi%20St%2C%20Rajeshwari%20Nagar%2C%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600059!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '12'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">RR WishTales</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Sy No. 108/2 ,Jakkur Road Village, Jakkur, North Bangalore, Bangalore</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 1 Cr - 1.3 Cr</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/012c1500/6ce369b7c90cb89d3994948e51ba180d/v0/fs.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/92813d9b990c6586583e72a6b02440ef/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/b3ecc9c9634476aeed94dc5931523ee7/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">RR WishTales: 2,3,4 BHK boutique luxury homes for your dream! Where hearts & beauty unite. Here, you experience a home immersed in a world of innovative design and meticulous planning. As privacy and Vaastu as our core priorities we strive to provide you with an uncompromised living experience. Every detail is thoughtfully curated to harmonize aesthetics, functionality, and comfortable living. Here you will discover a home built with precision and passion, where every aspect of it holds a promise of lasting strength and unwavering durability. Located in prime of North Bengaluru Get ready to experience a lifestyle beyond compare, where comfort and sophistication intertwine to create an unparalleled haven of luxe. Our team believes in abundant spaces and uncompromised aesthetics, thereby delivering you a home of ample space. Enjoy your everyday adorned with premium specifications resulting in a life of unparalleled comfort. A home is where every moment unfolds into a symphony of happiness. WishTales is a haven of joy and opulence! Here the art of living finds its truest form. It is a carefully curated masterpiece where finesse and perfection converge in harmony.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(12);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>3</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>2</span>
                                </div>
                            </div>
                            <pre>   </pre>
                                <h4>Floor Plan</h4>
                                <div className='vardanfp'><img src="https://housing-images.n7net.in/91aba65c/5f9c3301c114501f24b5f75ee5c6b90c/v0/fs.jpeg"></img></div>   
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Children's Play Area</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Multipurpose Hall</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Swimming Pool</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Indoor Games</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Library</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Gymnasium</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Kid's Pool</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Club House</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2434868933993!2d77.5295007!3d13.1300548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae184ae1a4275b%3A0x9d7387a249ea12b8!2sJakkur%20Rd%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '13'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Kopren Park View</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Science City Approach Road,Ognaj Bypass Road, Ahmedabad</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 55.01 L - 75.01 L</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/4f2250e8/795f503c42a906d3464387f930f624fb/v0/large/kopren_park_view-ognaj-ahmedabad-shoolin_developers.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/2b37847948d56e75f02ebab0e4f71676/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/83e79012bbcb788606ad25dd6dbd3f3c/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">Kopren Park View is a project by Shoolin Developers in Ahmedabad. It is a Under Construction project. Kopren Park View offers some of the most conveniently designed Apartment. Located in Ognaj, it is a residential project. The project is spread over 0.92 Acres . It has 136 units. There are 4 buildings in this project. Kopren Park View offers some of the most exclusive 2 BHK, 3 BHK. As per the area plan, units are in the size range of 142.0 - 195.0 sq.yd.. Launched in October 2022, Kopren Park View is slated for possession in Dec, 2024. The address of Kopren Park View is Science City Approach Road,Ognaj Bypass Road.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(13);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>4</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>3</span>
                                </div>
                            </div>
                            <pre>   </pre>
                                <h4>Floor Plan</h4>
                                <div className='vardanfp'><img src="https://housing-images.n7net.in/91aba65c/26160d049cd46799d36cf8a207e312be/v0/fs.jpeg"></img></div>
                            </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Swimming Pool</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>24X7 Water Supply</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Community Hall</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Gymnasium</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>24x7 Security</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>CCTV</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Cycling & Jogging Track</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Indoor Games</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Fire Fighting System</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6881447577517!2d72.508079!3d23.1150293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d670a2585d3%3A0x3543f7423d1fe031!2sKopren%20Park%20View!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '14'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Risland Sky Mansion</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Chhatarpur, South Delhi, New Delhi</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 6 Cr</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/012c1500/fdb9aeb2cfc02e8428f8285e07dd8d0c/v0/fs-large.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/180860feed71158c637e515d0a4984bf/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/57e6f1fb0067368a7d4e0b600d2a8c2c/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">Sky Mansion, an exemplary benchmark of Luxury Living in the heart of South Delhi, stands as the first 100 meter sky scrapper in the area. One of India’s most Premium Projects with beautifully crafted 3 & 4 Bedrooms and Exclusive Penthouses having uninterrupted view of Chattarpur & Aravalli Greens.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(14);
                      }}
                    >
                      Contact
                    </button> 
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>4</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>3</span>
                                </div>
                            </div>
                            <pre>   </pre>
                                <h4>Floor Plan</h4>
                                <div className='vardanfp'><img src="https://housing-images.n7net.in/91aba65c/2c8529ac4424a9e549c68b6ac324110f/v0/fs.jpeg"></img></div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Gymnasium</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>24X7 Water Supply</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Cycling & Jogging Track</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Car Parking</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Open Air Theatre</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Security Cabin</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Water Sports</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Badminton Court</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.244570560423!2d77.1845999!3d28.4691088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fda4863e723%3A0x9721ad1c1c35790f!2sRISLAND%20INDIA!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '15'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Simana The Urban Oasis</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Western India Mills Compound, G D Ambekar Marg, Parel, Central Mumbai Suburbs, Mumbai</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 3.99 Cr - 10.15 Cr</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/012c1500/85799608f0aab6de5d81115599f3941d/v0/fs.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/57b2a61a7b8f5f82516122062f7acb06/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/a1c7c3b5b914e248ec512f61b30c0404/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align = "justify">Property for sale in Parel, Mumbai. This project, that is, Simana The Urban Oasis is a well designed project by Bhoomi Group. It is offering Under Construction units. If you are looking at Apartment, you should check out Simana The Urban Oasis. Set in an expanse of 5.38 Acres , the property offers a remarkable lifestyle. Available configurations include 2 BHK, 3 BHK. As per the area plan, units are in the size range of 826.0 - 1133.0 sq.ft.. Project possession is slated for Dec, 2025. There is 2 building in this project. Total number of flats at Simana The Urban Oasis is Tower A -246 Units and Tower B-302 Units. Simana The Urban Oasis is located in Western India Mills Compound, G D Ambekar Marg, Parel, Mumbai</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(15);
                      }}
                    >
                      Contact
                    </button>
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>6</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>5</span>
                                </div>
                            </div>  
                            <pre>   </pre>
                                <h4>Floor Plan</h4>
                                <div className='simanafp'><img src="https://housing-images.n7net.in/91aba65c/5ff564a254d907c7313dbe5ea77b25fc/v0/fs.jpeg"></img></div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Swimming Pool</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Waiting Lounge</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Car Parking</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Multipurpose Room</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Gymnasium</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>24x7 Security</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Solid Waste Management</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Children's Play Area</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3125135678775!2d72.8384746!3d18.9892304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdba2885c0d%3A0xd56d5d9b844e7dbd!2sSIM%C4%80NA-+The+Urban+Oasis!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '16'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">1 BHK Independent Builder Floor for Rent</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        keelkakttalai, Rajamanickam Nagar, Keelakattalai, Chennai</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 7000/month</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/01c16c28/9a705bf847f622ed611600177e73f63f/v0/fs/1_bhk_independent_builder_floor-for-rent-keelakattalai-Chennai-bedroom.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/01c16c28/ce16179da8f35b33d940712950021de8/v0/fs/1_bhk_independent_builder_floor-for-rent-keelakattalai-Chennai-bedroom.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/01c16c28/267351de7db181e1bfea791f4c4899e5/v0/fs/1_bhk_independent_builder_floor-for-rent-keelakattalai-Chennai-kitchen.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">Your search for a spacious home at affordable rent in Chennai ends here. The 1 BHK property offers a serene environment with excellent views of the city. This Independent Floor is equipped with the latest lifestyle amenities and all the conveniences at the doorstep. It is semi furnished Independent Floor. This unit is built on floor 1 out of a total 2 floors. The Independent Floor has been thoughtfully designed to meet a family’s space needs, with 1 bedroom. It includes 1 bathroom. There are 1 balcony that lets you enjoy scenic views. The built-up area of this Independent Floor is 600 square feet. The carpet area is 600 square feet. Residents need to pay a monthly rent of Rs 7000. The security deposit payable is Rs 35000.</p>
                            <button
                      onClick={() => {
                        addIdToDatabaseEntry(16);
                      }}
                    >
                      Contact
                    </button>     <button onClick={()=>{alert("Emaill : Nimmadhipropertymanagement@gmailcom \nMobile No:123456789")}}>Contact</button> 
                        </div>
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <span>Kitchen: </span>
                                    <span>1</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>All Rooms: </span>
                                    <span>2</span>
                                </div>
                                <div className="col-lg-4">
                                    <span>Bathroom:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Water Supply</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Parking</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Security</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Gas Pipeline</span>
                                </div> 
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.746364868752!2d80.1814161!3d12.9580139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e766abc394b%3A0xf3e778beb973b018!2sRajamanickam%20Nagar%2C%20Keelkattalai%2C%20Chennai%2C%20Tamil%20Nadu%20600117!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }

  return (
    <div>
      {detailContent}
    </div>
  );
}

export default Detail;

