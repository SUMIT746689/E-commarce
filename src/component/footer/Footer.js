import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faEnvelope,faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faWhatsapp,faLinkedinIn,faTwitter,faInstagram,faGit} from '@fortawesome/free-brands-svg-icons';




export default function Footer() {
    return (
        <div className='mt-5'>
        <footer className="text-center text-lg-start bg-light text-muted">
        <section
            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
            
            <div className="me-5 d-none d-lg-block ">
            <span>Get connected with us on social networks:</span>
            </div>
            
            <div>
            <a href="https://www.facebook.com/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebook} />

            </a>
            <a href="https://web.whatsapp.com/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faWhatsapp} />

            </a>
             <a href="https://www.linkedin.com/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedinIn} />

            </a>
            <a href="https://www.instagram.com/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
        
            </a>
            <a href="https://twitter.com/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />

            </a>
            <a href="https://github.com/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGit} />
            </a>
            </div>

        </section>
        
        <section className="">
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>MY Brand
                </h6>
                <p>
                We are trying our best to give our customer better customer service. So,support us and stay with us to make you happy.
                </p>
                </div>
        
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Laravel</a>
                </p>
                </div>
        
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    More Info
                </h6>
                <p>
                    <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Help</a>
                </p>
                </div>
        
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                <p><FontAwesomeIcon icon={faHome} />{`  KILGAON-1214 , DHAKA , BANGLADESH`}</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> mybrand@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhoneAlt} /> +88 01770000000</p>
                <p><FontAwesomeIcon icon={faPhoneAlt} /> +88 01800000000</p>
                </div>
            </div>
            </div>
        </section>
    
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
            © 2021 Copyright:
            <Link className="text-reset fw-bold" to='/'>My-Brand.com</Link>
        </div>
        </footer>
        </div>
    )
}
