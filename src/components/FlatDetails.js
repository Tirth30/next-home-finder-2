import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function FlatDetail() {
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
                             <button onClick={()=>{alert("Emaill : CornerHouse@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                             <button onClick={()=>{alert("Emaill : rislandskymansion@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
  }else if (id == '5'){
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
                             <button onClick={()=>{alert("Emaill : simana@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                             <button onClick={()=>{alert("Emaill : Nimmadhipropertymanagement@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                             <button onClick={()=>{alert("Emaill : Mukesh@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
}
  return (
    <div>
      {detailContent}
    </div>
  );
}

export default FlatDetail;

