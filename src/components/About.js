const About = () => {
    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">About</h1>
                            {/* <h2 className="page-description">About</h2> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/product1.jpeg" alt="product" className="w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="title">
                                   Next Home Finder 
                            </div>
                                <div className="about-text">
                                   Next Home Finder : An Innovative New Search Experience

                            </div>
                                <div className="about-features">
                                    {/* <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Find Home by sitting at Home </p>
                                    {/* <p className="about-feature" ><i className="fas fa-long-arrow-alt-right"></i> Lorem ipsum is simply</p>
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Lorem ipsum is simply</p> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About