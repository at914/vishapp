import React from "react";
import { Link } from "react-router-dom";
import "../style/common/Footer.css";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="chat-footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h4>Future Cars</h4>
                    <p>
                        Discover the best cars, compare features,
                        and find the perfect vehicle for your needs.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/manufacturers">Manufacturers</Link>
                        </li>

                        <li>
                            <Link to="/products">Products</Link>
                        </li>

                        <li>
                            <Link to="/reports">Reports</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>📍 Navi Mumbai, Maharashtra</p>
                    <p>📞 +91 90964 99899</p>
                    <p>✉ support@futurecars.com</p>
                </div>

            </div>
            <div className="social-icons">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
            </div>

            <div className="footer-bottom">
                © 2025-2026 Future Cars Services, Inc. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;