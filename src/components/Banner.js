import banner from "../banner.jpg"
import React  from 'react'



const Banner = () => {

    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>Next Home Finder: An Innovative New Search Experience</p>
                                <h2 className="mt-2 mb-4 banner-title"><strong> Next Home Finder</strong> </h2>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;