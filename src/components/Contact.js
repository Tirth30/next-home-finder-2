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
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        if (formData.name && formData.phone && formData.subject && formData.message) {
            alert("Your Feedback Has Been Sent !");
            // You can add your submission logic here
        } else {
            alert("Please Fill in all the Fields..");
        }
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
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <h5>Mail</h5>
                                        <a href="mailto:Nexthomefinder@gmail.com">Nexthomefinder@gmail.com</a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h5>Address</h5>
                                        <a href="https://www.google.com/maps/place/Ahmedabad,Gujrat" target="_blank" rel="noopener noreferrer">Ahmedabad,Gujrat</a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-phone-alt"></i>
                                        <h5>Phone</h5>
                                        <h6>3562452940</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-5">
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
}

export default Contact;
