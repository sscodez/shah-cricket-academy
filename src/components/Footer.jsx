import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Academy to enhance your cricket skills
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>

            <a href="https://www.instagram.com/shah_cricket_academy/">
              Instagram
            </a>
            <a href="https://www.facebook.com/Shah-Cricket-Academy-101211551308010">
              Facebook
            </a>
            <a href="https://www.youtube.com/channel/UCkjqmC_Hdjo5aoemqKzaLIQ">
              Youtube
            </a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">SCA © 2021</small>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com/Shah-Cricket-Academy-101211551308010"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/shah_cricket_academy/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link youtube"
              href="https://www.youtube.com/channel/UCkjqmC_Hdjo5aoemqKzaLIQ"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
