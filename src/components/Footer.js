import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white mt-5">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h5>About Us</h5>
                            <p>We are a company dedicated to providing the best products and services.</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li>Email: jawadhossainmahi@gmail.com</li>
                                <li>Phone: +8801820245632</li>
                                <li>Address: 70/2 Block B Road 1 Lalpur Powshar Pukurpar, Fatulla, Narayaganj, Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a target='_blank' href="https://facebook.com/jawadhossainmahi" className="text-white">Facebook</a></li>
                                <li><a target='_blank' href="https://twitter.com/jawadhossainmahi" className="text-white">Twitter</a></li>
                                <li><a target='_blank' href="https://instagram.com/jawadhossainmahi" className="text-white">Instagram</a></li>
                                <li><a target='_blank' href="https://linkedin.com/jawadhossainmahi" className="text-white">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center py-3">
                        <p className="mb-0">© 2024 Jawad Hossain Mahi. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
