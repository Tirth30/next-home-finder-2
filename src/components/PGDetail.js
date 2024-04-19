import React from 'react';
import { useParams } from 'react-router-dom';

function PGDetail() {
  let { id } = useParams();

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
                        <h3 className="flat-detail-title">Vinayak PG</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Vinayak PG, Makarba, Ahmedabad</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 8,000/Month</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Apr/16/full_photo/GR2-426735-2105525.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Apr/16/full_photo/GR2-426735-2105527.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Apr/16/full_photo/GR2-426735-2105523.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align = "justify">Move into Vinayak PG, a professionally managed PG home in the Makarba, Ahmedabad. Located in a safe neighborhood, this female PG offers various modern amenities for your comfort, such as AC, Food, Wi-Fi etc. This PG has two, triple, four, other occupancy types. This PG is nearby major commercial and educational hubs. Please contact the seller to book this fast selling high in demand PG stay.</p>
                              <button onClick={()=>{alert("Emaill : VinayakPG@gmailcom \nMobile No:123456789")}}>Contact</button>  
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Wifi</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Room Cleaning Service</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Fridge</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Laundry</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Water Cooler RO</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Warden</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Meals provided <sub>Veg Only</sub></span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.422627417388!2d72.3713603!3d23.001597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bdb04d1757f%3A0x62d72ba1fc1ac32e!2sVinayak%20pg%20services!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  } 
  else if (id === '2') {
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
                        <h3 className="flat-detail-title">Anil PG</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Anil PG, Powai, Mumbai</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 9,000/Month</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Jan/24/full_photo/GR2-266619-1247713.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Jan/24/full_photo/GR2-266619-1247711.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Jan/24/full_photo/GR2-266619-1247699.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align = "justify">Move into Anil, a professionally managed PG home in Powai, Mumbai. Located in a safe neighborhood, this unisex PG offers various modern amenities for your comfort, such as TV, AC, Food, Power Backup, Wi-Fi etc. This PG has single, double, triple occupancy types. This PG is nearby major commercial and educational hubs. Please contact the seller to book this fast selling high in demand PG stay.</p>
                              <button onClick={()=>{alert("Emaill : AnilPG@gmailcom \nMobile No:123456789")}}>Contact</button>  
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Wifi</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Power Backup</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Room Cleaning Service</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Laundry</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Water Cooler RO</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Warden</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Meals provided <sub>Veg & Non-Veg</sub></span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>TV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Microwave</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.212726991757!2d72.3582841!3d22.9969654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e99dc3fb5e747%3A0xa6d396fb6ec869ec!2sAnil%20PG!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  } 
  else if (id === '3') {
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
                        <h3 className="flat-detail-title">Nehru Place - 50 for Girls</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Nehru Place - 50 for Girls, Nehru Place, New Delhi</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 32,500/Month</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Dec/22/full_photo/GR2-379959-1983585.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Dec/22/full_photo/GR2-379959-1983593.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Dec/22/full_photo/GR2-379959-1983591.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align = "justify">Move into Nehru Place - 50, a professionally managed PG home in Nehru Place, New Delhi. Located in a safe neighborhood, this unisex PG offers various modern amenities for your comfort, such as TV, AC, Food, Power Backup, Wi-Fi, etc. This PG has Single and Double Occupancy types. This PG is near major commercial and educational hubs. Please get in touch with the seller to book this fast selling high in demand PG stay.</p>
                              <button onClick={()=>{alert("Emaill : NehruPG@gmailcom \nMobile No:123456789")}}>Contact</button>  
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Wifi</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Power Backup</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Room Cleaning Service</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Laundry</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lift</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Warden</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Meals provided <sub>Veg Only</sub></span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>TV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Microwave</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.787765670948!2d77.2488515!3d28.5493045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4e1fcd4decd%3A0x4a8f9061cd46d2a7!2sNehru%20Place%20-%2050%20for%20Girls%2C%20Nehru%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
  } else if (id === '4') {
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
                        <h3 className="flat-detail-title">Mishra PG/Hostels</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Mishra PG, J P Nagar, Bangalore</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 6,000/Month</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Apr/07/full_photo/GR2-433857-2096385.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Apr/07/full_photo/GR2-433857-2096371.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Apr/07/full_photo/GR2-433857-2096381.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align = "justify">Move into Mishra PG, a professionally managed PG home in the JP Nagar, Bangalore. Located in a safe neighborhood, this unisex PG offers various modern amenities for your comfort, such as TV, AC, Food, Power Backup, Wi-Fi etc. This PG has single, double, triple occupancy types. This PG is nearby major commercial and educational hubs. Please contact the seller to book this fast selling high in demand PG stay.</p>
                              <button onClick={()=>{alert("Emaill : MishraPG@gmailcom \nMobile No:123456789")}}>Contact</button>  
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Wifi</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Power Backup</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Room Cleaning Service</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Laundry</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lift</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Warden</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Meals provided <sub>Veg Only & Non-Veg</sub></span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>TV</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Microwave</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4215563161966!2d77.5738657!3d12.9045274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156c0a2a5733%3A0x10de94b25cb7e697!2sJP%20Nagar%20PG!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
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

export default PGDetail;

