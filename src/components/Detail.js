import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  let { id } = useParams();

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
                            <button onClick={()=>{alert("Emaill : VardanSky@gmailcom \nMobile No : 123456789")}}>Contact</button>
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
                             <button onClick={()=>{alert("Emaill : Pacific@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                             <button onClick={()=>{alert("Emaill : bhaktipark@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                             <button onClick={()=>{alert("Emaill : VBHC@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  }else if (id == '8'){
    detailContent = <div className="flat-detail">
    <div className="page-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">DETAIL</h1>
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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
                    <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <div className="fd-top flat-detail-content">
                    <div>
                        <h3 className="flat-detail-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span className="fd-price">$650</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='../img/banner.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='../img/banner.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='../img/banner.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                             <button onClick={()=>{alert("Emaill : NextHomeFinder@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
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
                                    <span>Kitchen:  </span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.136728496143!2d72.5935452689274!3d23.10152285225798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c845233e29%3A0x231201e985a63c9f!2sD-Mart!5e0" width="100%" height="450" loading="lazy"></iframe>
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

