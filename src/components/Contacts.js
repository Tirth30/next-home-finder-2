// import React, { useState } from 'react';

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
}

export default Contact;
