import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaHome, FaUtensils, FaImages, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { VENUE, waLink, mapsLink } from "../data/venueData";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function SectionLink({ to, children, className }) {
  const navigate = useNavigate();
  const location = useLocation();
  const go = (e) => {
    e.preventDefault();
    const scroll = () => {
      const el = document.getElementById(to);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 250);
    } else scroll();
  };
  return <a href={`#${to}`} className={className} onClick={go}>{children}</a>;
}

export function Topbar() {
  return (
    <div className="topbar d-none d-md-block">
      <div className="container d-flex justify-content-between">
        <span><FaMapMarkerAlt className="me-1" /> {VENUE.address}</span>
        <span>
          <FaClock className="me-1" /> {VENUE.hours}
          <a href={VENUE.phoneLink} className="ms-3"><FaPhoneAlt className="me-1" /> {VENUE.phoneDisplay}</a>
        </span>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg dastoor-nav sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="brand-mark">D</span>
          <span>
            <span className="brand-name d-block">Dastoor Marquee</span>
            <span className="brand-sub d-block">Kharian</span>
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dmNav" aria-controls="dmNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="dmNav">
          <ul className="navbar-nav mx-auto align-items-lg-center">
            <li className="nav-item"><NavLink className="nav-link" to="/" end>Home</NavLink></li>
            <li className="nav-item"><SectionLink to="halls" className="nav-link">Halls</SectionLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/menu">Menu</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/gallery">Gallery</NavLink></li>
            <li className="nav-item"><SectionLink to="about" className="nav-link">About Us</SectionLink></li>
            <li className="nav-item"><SectionLink to="contact" className="nav-link">Contact Us</SectionLink></li>
          </ul>
          <a className="btn-gold mt-2 mt-lg-0" href={waLink("Assalam-o-Alaikum Dastoor Marquee! I want to check availability for my event date.")} target="_blank" rel="noreferrer">
            <FaWhatsapp className="me-1" /> Book Your Date
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <div className="d-flex align-items-center gap-2">
              <span className="brand-mark">D</span>
              <span>
                <span className="brand-name d-block" style={{ color: "#fff" }}>Dastoor Marquee</span>
                <span className="brand-sub d-block">Kharian</span>
              </span>
            </div>
            <p className="mt-3" style={{ fontSize: ".9rem" }}>{VENUE.tagline}. Barat, Walima, Mehndi aur har khaas taqreeb ke liye Kharian ka pur-aitemaad naam.</p>
          </div>
          <div className="col-md-3">
            <h4>Explore</h4>
            <ul className="list-unstyled mt-3" style={{ fontSize: ".9rem", lineHeight: 2 }}>
              <li><SectionLink to="halls">Our Halls</SectionLink></li>
              <li><Link to="/menu">Menu & Packages</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><SectionLink to="about">About Us</SectionLink></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Visit Us</h4>
            <p className="mt-3" style={{ fontSize: ".9rem" }}>
              {VENUE.address}<br />
              {VENUE.hours}<br />
              <a href={VENUE.phoneLink}>{VENUE.phoneDisplay}</a>
            </p>
            <a className="btn-gold" href={mapsLink} target="_blank" rel="noreferrer"><FaMapMarkerAlt className="me-1" /> Get Directions</a>
          </div>
        </div>
        <hr style={{ borderColor: "rgba(255,255,255,.14)" }} />
        <p className="text-center mb-0" style={{ fontSize: ".8rem" }}>© {new Date().getFullYear()} Dastoor Marquee Kharian. All rights reserved. · Crafted by KoDriftDev</p>
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <Link to="/"><FaHome />Home</Link>
      <Link to="/menu"><FaUtensils />Menu</Link>
      <Link to="/gallery"><FaImages />Gallery</Link>
      <a href={VENUE.phoneLink}><FaPhoneAlt />Call</a>
      <a className="bar-wa" href={waLink("Assalam-o-Alaikum Dastoor Marquee! I want booking information.")} target="_blank" rel="noreferrer"><FaWhatsapp />WhatsApp</a>
    </div>
  );
}
