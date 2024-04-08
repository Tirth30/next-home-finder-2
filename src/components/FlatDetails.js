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
                              <button className=''>Contact</button>  
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105200.564429!2d37.91245092855647!3d38.99130948591772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1630158674074!5m2!1str!2str" width="100%" height="450" loading="lazy"></iframe>
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
                              <button className=''>Contact</button>  
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105200.564429!2d37.91245092855647!3d38.99130948591772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1630158674074!5m2!1str!2str" width="100%" height="450" loading="lazy"></iframe>
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
                              <button className=''>Contact</button>  
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
  }else if (id == '4'){
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
                              <button className=''>Contact</button>  
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
                              <button className=''>Contact</button>  
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
                              <button className=''>Contact</button>  
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
                              <button className=''>Contact</button>  
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
                              <button className=''>Contact</button>  
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

export default FlatDetail;

