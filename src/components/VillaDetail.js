import React from 'react';
import { useParams } from 'react-router-dom';

function VillaDetail() {
  let { id } = useParams();
  let detailContent = '';
   if (id == '1'){
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
  }else if (id == '2'){
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
                             <button onClick={()=>{alert("Emaill : JrcSanzio@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
  }
 

  return (
    <div>
      {detailContent}
    </div>
  );
}

export default VillaDetail;

