// import React, { useState } from 'react';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         subject: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = () => {
//         if (formData.name && formData.phone && formData.subject && formData.message) {
//             alert("Your Feedback Has Been Sent !");
//             // You can add your submission logic here
//         } else {
//             alert("Please Fill in all the Fields..");
//         }
//     };

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
//                                 <div className="col-lg-4">
//                                     <div className="contact-item">
//                                         <i className="fas fa-envelope"></i>
//                                         <h5>Mail</h5>
//                                         <a href="mailto:Nexthomefinder@gmail.com">Nexthomefinder@gmail.com</a>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4">
//                                     <div className="contact-item">
//                                         <i className="fas fa-map-marker-alt"></i>
//                                         <h5>Address</h5>
//                                         <a href="https://www.google.com/maps/place/Ahmedabad,Gujrat" target="_blank" rel="noopener noreferrer">Ahmedabad,Gujrat</a>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4">
//                                     <div className="contact-item">
//                                         <i className="fas fa-phone-alt"></i>
//                                         <h5>Phone</h5>
//                                         <h6>3562452940</h6>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-12">
//                             <div className="row mt-5">
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






// import React, { useState } from 'react';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         subject: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         console.log(formData); // Log formData whenever it changes
//     }

//     const handleSubmit = (e) =>
//      {
//        const {name ,phone,
//        subject ,
//        message} = formData;
//        e.preventDefault();
//        const options = {
//         method: 'POST' ,
//         Headers:{
//             'Content-Type':'aplication/json'
//         },
//         body: JSON.stringify({
//             name ,phone,
//        subject ,
//        message
//         })
//        }  
//        const res = fetch('https://next-home-finder-5de1b-default-rtdb.firebaseio.com/userData.json',
//        options
//     )
//     if(res)
//     {
//         alert("message sent")
//     }
//     else
//     {
//         alert("Error occured")
//     }
//     };



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

    const [phoneError, setPhoneError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        // Validate phone number to contain only digits and be exactly 10 characters long
        if (name === 'phone') {
            // Remove any non-digit characters
            newValue = value.replace(/\D/g, '');
            // Limit to 10 characters
            newValue = newValue.slice(0, 10);
            // Display error message if non-digit characters are entered
            if (!/^\d+$/.test(newValue)) {
                setPhoneError('Please enter only numbers');
            } else {
                setPhoneError('');
            }
        }
        setFormData({ ...formData, [name]: newValue });
        console.log(formData); // Log formData whenever it changes
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, subject, message } = formData;
        
        // Check if phone number is exactly 10 digits
        if (phone.length !== 10) {
            alert("Phone number must be 10 digits long.");
            return;
        }

        // Proceed with form submission
        const options = {
            method: 'POST',
            Headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, subject, message })
        }
        fetch('https://next-home-finder-5de1b-default-rtdb.firebaseio.com/userData.json', options)
            .then(response => {
                if (response.ok) {
                    alert("Message sent");
                } else {
                    alert("Error occurred");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Error occurred");
            });
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
                                    {phoneError && <small style={{ color: 'red' }}>{phoneError}</small>}
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

