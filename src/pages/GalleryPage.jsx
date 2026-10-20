import { Link } from "react-router-dom";
import { GALLERY, waLink } from "../data/venueData";
import { FaWhatsapp } from "react-icons/fa";

export default function GalleryPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="hero-eyebrow">Gallery</p>
          <h1>Dastoor <em>Gallery</em></h1>
          <p>Hall, lawn, decor aur khane ki aik jhalak — apne din ko yahan imagine karein.</p>
        </div>
      </header>
      <section className="section-pad">
        <div className="container">
          <div className="grid-2col">
            {GALLERY.map((g) => (
              <div className="gallery-card" key={g.label}>
                <img src={g.src} alt={g.label} loading="lazy" />
                <div className="cap">{g.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <h2 className="serif" style={{ fontWeight: 700 }}>Pasand aya?</h2>
            <p style={{ color: "var(--muted)" }}>Apni date ki availability abhi check karein — bilkul free.</p>
            <div className="d-flex gap-2 justify-content-center flex-wrap">
              <a className="btn-gold" href={waLink("Assalam-o-Alaikum Dastoor Marquee! Gallery dekh kar bohot pasand aya. I want to check availability for my date.")} target="_blank" rel="noreferrer"><FaWhatsapp className="me-1" /> Check My Date</a>
              <Link className="btn-outline-green" to="/menu">Menus Dekhein</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
