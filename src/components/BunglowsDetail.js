import React from 'react';
import { useParams } from 'react-router-dom';
import fp from '../img/fp.png'

function BunglowDetail() {
  let { id } = useParams();

  // Conditionally render different content based on the id
  let detailContent = '';
  if (id == '1'){
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
                             <button onClick={()=>{alert("Emaill : fourbunglows@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                        <h3 className="flat-detail-title">2 Oakland Estates</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Devanahalli, Bangalore</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 2.80 Cr - ₹ 3.31 Cr</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://img.staticmb.com/mbimages/project/2023/08/03/Project-Photo-1-2-Oakland-Estates-Bangalore-5416401_475_900.jpg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://img.staticmb.com/mbimages/project/2023/08/03/Project-Photo-4-2-Oakland-Estates-Bangalore-5416401_475_900.jpg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://img.staticmb.com/mbimages/project/2023/08/03/Project-Photo-8-2-Oakland-Estates-Bangalore-5416401_475_900.jpg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">Beautiful homes on individual plots, nestled in the lap of nature, in the quiet and mesmerising environs of the Sadahalli area.It is set across almost 3 acres of land. A quaint stream holding conversations with the majestic peacocks, a flourishing frangipani on the sprawling parks, Modern villas inspiring a break from the humdrum. Winding paths and lush green trees. The life here is sheer poetry, almost hemingway-esque, urging you to take a chance to connect with the silence of the backyard. Appreciate the serenity of this little piece of nature. Alluring homes beckon you.</p>
                             <button onClick={()=>{alert("Emaill : oakland@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                <div className=''>
                                   <img src={fp}></img> 
                                </div>  
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Club House</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Coffee Lounge & Restaurants</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Swimming Pool</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Lift</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Security</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Reserved Parking</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Jogging and Strolling Track</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Outdoor Tennis Courts</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Cycling & Jogging Track</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.098988689174!2d77.6191607!3d13.211157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1f00685b3fc5%3A0x3425c8f3819fc1ca!2sOAKLAND%20ESTATES!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
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
                        <h3 className="flat-detail-title">Trishala The Village</h3>
                        <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                        Survey No 26/P, Satamrai Village, Shamshabad, South Hyderabad, Hyderabad</p>
                    </div>
                    <div>
                        <span className="fd-price">₹ 3.33 Cr - 4.08 Cr</span>
                    </div>
                </div>
                <div class="row">
                   <div class="column">
                      <img className="detail-img" src='https://housing-images.n7net.in/012c1500/95bef8ec6097ecc92183c1f33acfe06f/v0/fs.jpeg' alt="Snow"></img>
                   </div>
                  <div class="column">
                        <img className="detail-img" src='https://housing-images.n7net.in/012c1500/a7b7c9b1324d8d6e2464399aadd0e3b7/v0/fs.jpeg' alt="Forest"></img>
                  </div>
                  <div class="column">
                         <img className="detail-img" src='https://housing-images.n7net.in/012c1500/dbae6b90284228cabef9e5a356e6c51b/v0/fs.jpeg' alt="Mountains"></img>
                  </div>
                  </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <h4>Description</h4>
                            <p align="justify">The Village located in Shamshabad, Hyderabad is one of the most sought after residential project of the recent times. Developed by Trishala Infrastructure, Providing access to basic facilities, this project offers world class residential units with latest specifications that meet the expectations of the urban lifestyle. The lavish yet thoughtfully designed residences potentially marks The Village as one of the most promising residential projects in Shamshabad.</p>
                             <button onClick={()=>{alert("Emaill : trisha@gmailcom \nMobile No:123456789")}}>Contact</button> 
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
                                <div className='vardanfp'>
                                   <img src='https://c.housingcdn.com/demand/s/client/common/assets/requestFloorPlan.f9b9d5bc.jpg'></img> 
                                </div>
 
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
                                    <span>Amphitheater</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Swimming Pool</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Solar Lighting</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Fire Fighting System</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check"></i>
                                    <span>Jogging Track</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>Indoor Games</span>
                                </div>
                                <div className="col-lg-4">
                                    <i className="fa fa-check" ></i>
                                    <span>CCTV</span>
                                </div>
                                <div className="col-lg-4">
                                   <i className="fa fa-check" ></i>
                                    <span>Banquet Hall</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-item">
                            <h4>Maps</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.172211291178!2d78.4135203!3d17.2801959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd6746572cc9%3A0x1768d16c70a9ac52!2sTrishala%20The%20Village!5e0!3m2!1sen!2sin!4v1649954374233" width="100%" height="450" loading="lazy"></iframe>
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

export default BunglowDetail;

