import React, { useState } from 'react'
import "./services.css"

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon">
                        <h3 className="services_title">Responsive <br/> Apps</h3>
                    </i>
                </div>

                <span className="services_button" onClick={() => toggleTab(1)}>View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close"
                         onClick={() => toggleTab(0)}></i>

                        <h3 className="services_modal-title">Responsive Apps</h3>
                        <p className="services_modal-description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            io nulla? Perspiciatis accusantium debitis cumque voluptates.
                        </p>

                        <ul className="services_modal-services grid">

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon">
                        <h3 className="services_title">UI/UX <br /> Designer</h3>
                    </i>
                </div>

                <span className="services_button" onClick={() => toggleTab(2)}>View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close"
                         onClick={() => toggleTab(0)}></i>

                        <h3 className="services_modal-title">UI/UX Designer</h3>
                        <p className="services_modal-description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            io nulla? Perspiciatis accusantium debitis cumque voluptates.
                        </p>

                        <ul className="services_modal-services grid">

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-globe services_icon">
                        <h3 className="services_title">Web <br /> Development</h3>
                    </i>
                </div>

                <span className="services_button" onClick={() => toggleTab(3)}>View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close"
                         onClick={() => toggleTab(0)}></i>

                        <h3 className="services_modal-title">Web Development</h3>
                        <p className="services_modal-description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            io nulla? Perspiciatis accusantium debitis cumque voluptates.
                        </p>

                        <ul className="services_modal-services grid">

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web development.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services