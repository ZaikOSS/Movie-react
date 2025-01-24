import React from "react";
import "./footer.css";

function Footer() {
  const usefulLinks = ["Home", "About Us", "Services", "Contact"]; // Example useful links
  const locations = ["New York", "Los Angeles", "Chicago", "Houston"]; // Example cinema locations

  const FooterNavItem = ({ name }) => (
    <li>
      <a href="#">{name}</a>
    </li>
  );

  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        {" "}
        {/* Wrapper for 50% width */}
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="/" className="logo d-flex align-items-center">
                  <span>CINEMA</span>
                </a>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus.
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a href="#" className="facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="#" className="instagram">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="#" className="youtube">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </div>
              </div>

              {/* Useful Links Section */}
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  {usefulLinks.map((link) => (
                    <FooterNavItem key={link} name={link} />
                  ))}
                </ul>
              </div>

              {/* Our Cinemas Section */}
              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Cinemas</h4>
                <ul>
                  {locations.map((link) => (
                    <FooterNavItem key={link} name={link} />
                  ))}
                </ul>
              </div>

              {/* Contact Section */}
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  Street Name <br />
                  City Name, State 123456
                  <br />
                  Australia <br />
                  <br />
                  <strong>Phone:</strong> +1 2345 6789 00
                  <br />
                  <strong>Email:</strong> info@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>DStudio Technology</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">DStudio Technology</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
