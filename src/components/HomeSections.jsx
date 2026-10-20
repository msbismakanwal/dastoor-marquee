import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaUsers, FaStar } from "react-icons/fa";
import { VENUE, HERO_IMAGE, HALLS, PACKAGES, FUNCTIONS, GALLERY, waLink, mapsLink } from "../data/venueData";

export function Hero({ rating, reviewsCount }) {
  return (
    <header className="hero-wrap">
      <img className="hero-bg" src={HERO_IMAGE} alt="Dastoor Marquee Kharian" />
      <div className="hero-shade"></div>
      <div className="hero-content container">
        <p className="hero-eyebrow">Dastoor Marquee · Kharian</p>
        <h1 className="hero-title">Dastoor Marquee<br /><em>Kharian</em></h1>
        <p className="hero-sub">{VENUE.tagline} — jahan aap ki khushi, hamari zimmedari. Barat, Walima, Mehndi aur grand celebrations ke liye mukammal setup, laziz khana aur behtareen khidmat.</p>
        {rating && (
          <div><span className="hero-badge"><span className="stars">{"★".repeat(Math.round(rating))}</span> {rating} rating on Google{reviewsCount ? ` · ${reviewsCount} reviews` : ""}</span></div>
        )}
        <div className="d-flex gap-2 gap-md-3 mt-4 justify-content-center flex-wrap">
          <a className="btn-gold" href={waLink("Assalam-o-Alaikum Dastoor Marquee! I want to check availability for my event date.")} target="_blank" rel="noreferrer"><FaWhatsapp className="me-1" /> Check Date on WhatsApp</a>
          <Link className="btn-outline-light2" to="/menu">Explore Menus</Link>
        </div>
      </div>
    </header>
  );
}

export function Halls() {
  return (
    <section className="section-pad" id="halls">
      <div className="container">
        <p className="eyebrow text-center">Our Halls</p>
        <h2 className="section-title text-center">Har function ke liye <em>perfect space</em></h2>
        <p className="section-sub text-center">Aik hi venue, do khoobsurat options — indoor marquee hall ya open-air garden lawn.</p>
        <div className="mt-4 d-flex flex-column gap-4">
          {HALLS.map((h) => (
            <article className="hall-card" key={h.id}>
              <div className="row g-0">
                <div className="col-md-5" style={{ position: "relative" }}>
                  <img src={h.image} alt={h.name} loading="lazy" />
                  <span className="hall-badge">{h.badge}</span>
                </div>
                <div className="col-md-7 p-4 p-lg-5">
                  <div>{h.tags.map((t) => <span className="tag-pill" key={t}>{t}</span>)}</div>
                  <h3 className="mt-2" style={{ fontSize: "1.55rem", fontWeight: 700 }}>{h.name}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".93rem" }}>{h.desc}</p>
                  <span className="guest-pill"><FaUsers className="me-1" /> {h.guests}</span>
                  <div className="row mt-3">
                    {h.amenities.map((a) => (
                      <div className="col-6 amenity py-1" key={a}><FaCheck />{a}</div>
                    ))}
                  </div>
                  <div className="d-flex gap-2 mt-3 flex-wrap">
                    <a className="btn-green" href={waLink(`Assalam-o-Alaikum Dastoor Marquee! I am interested in ${h.name}. Please share availability and rates.`)} target="_blank" rel="noreferrer">Check Availability</a>
                    <Link className="btn-outline-green" to="/gallery">See Photos</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MenuPreview() {
  return (
    <section className="section-pad" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <p className="eyebrow text-center">Wedding Menus</p>
        <h2 className="section-title text-center">Laziz khana, <em>har budget</em> ke liye</h2>
        <p className="section-sub text-center">Teen curated packages — dishes apni pasand ke mutabiq customize bhi ho sakte hain.</p>
        <div className="row g-3 g-lg-4 mt-3">
          {PACKAGES.map((p) => (
            <div className="col-md-4" key={p.id}>
              <article className="pkg-card">
                <div style={{ position: "relative" }}>
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <span className="pkg-badge">{p.badge}</span>
                </div>
                <div className="p-3 p-lg-4 d-flex flex-column" style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>{p.name}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".87rem" }}>{p.tagline}</p>
                  <ul className="pkg-list">
                    {p.dishes.slice(0, 5).map((d) => <li key={d}><FaCheck />{d}</li>)}
                    {p.dishes.length > 5 && <li style={{ color: "var(--gold-2)", fontWeight: 600 }}>+{p.dishes.length - 5} more dishes</li>}
                  </ul>
                  <Link className="btn-outline-green mt-3 text-center" to="/menu" style={{ marginTop: "auto" }}>Full Menu Dekhein</Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Functions() {
  return (
    <section className="section-pad" style={{ paddingTop: "3rem" }}>
      <div className="container">
        <p className="eyebrow text-center">Every Function</p>
        <h2 className="section-title text-center">Barat se Walima tak, <em>sab yahin</em></h2>
        <div className="grid-2col mt-4" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
          {FUNCTIONS.map((f) => (
            <div className="func-chip" key={f.name}><h3>{f.name}</h3><p>{f.desc}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section-pad" id="about" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <img src={GALLERY[1].src} alt="Inside Dastoor Marquee" style={{ borderRadius: 24, height: "100%", minHeight: 300, width: "100%", objectFit: "cover" }} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <p className="eyebrow">About Us</p>
            <h2 className="section-title">Kharian ka <em>pur-aitemaad</em> naam</h2>
            <p className="mt-3" style={{ color: "var(--muted)" }}>
              Dastoor Marquee Kharian mein families ke sab se khaas din manaye jate hain. Spacious hall,
              khoobsurat decor, trained staff aur woh khana jis ki tareef mehman ghar ja kar bhi karte hain —
              hamari pehchan yahi hai.
            </p>
            <p style={{ color: "var(--muted)" }}>
              Chhoti mehfil ho ya 1,000+ mehmanon ka grand function, har event ko hamari team planning se
              lekar rukhsati tak apna event samajh kar sambhalti hai.
            </p>
            <div className="row g-3 mt-2">
              {[["01", "Transparent Rates", "Koi hidden charges nahi — pehle din se sab wazeh."],
                ["02", "In-house Catering", "Apni kitchen, apna zaiqa — fresh aur garam khana."],
                ["03", "Trained Staff", "Mehman-nawazi hamari pehchan hai."],
                ["04", "Prime Location", "Kharian mein asaan pohanch, wasee parking."]].map(([n, t, d]) => (
                <div className="col-6" key={n}><div className="why-card"><div className="why-num">{n}</div><h3>{t}</h3><p>{d}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section className="section-pad">
      <div className="container">
        <p className="eyebrow text-center">Gallery</p>
        <h2 className="section-title text-center">Jhalak <em>Dastoor</em> ki</h2>
        <div className="grid-2col mt-4">
          {GALLERY.slice(0, 4).map((g) => (
            <div className="gallery-card" key={g.label}><img src={g.src} alt={g.label} loading="lazy" /><div className="cap">{g.label}</div></div>
          ))}
        </div>
        <div className="text-center mt-4"><Link className="btn-green" to="/gallery">Poori Gallery Dekhein</Link></div>
      </div>
    </section>
  );
}

export function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) return null;
  return (
    <section className="section-pad" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <p className="eyebrow text-center">Google Reviews</p>
        <h2 className="section-title text-center">Mehman kya <em>kehte hain</em></h2>
        <div className="row g-3 g-lg-4 mt-3">
          {reviews.map((r, i) => (
            <div className="col-md-4" key={i}>
              <div className="testi-card">
                <div className="stars">{"★".repeat(r.stars || 5)}</div>
                <p className="mt-2">“{r.text}”</p>
                <b style={{ color: "var(--green)" }}>{r.name}</b>
                <div style={{ fontSize: ".78rem", color: "var(--muted)" }}>Google review</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", type: "Barat", date: "", guests: "500" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const msg = `Assalam-o-Alaikum Dastoor Marquee! I want to book my event.\n\nName: ${form.name}\nPhone: ${form.phone}\nEvent: ${form.type}\nDate: ${form.date}\nGuests: ${form.guests}\n\nPlease confirm availability and rates.`;
    window.open(waLink(msg), "_blank");
  };
  return (
    <section className="section-pad" id="contact" style={{ paddingTop: "3rem" }}>
      <div className="container">
        <p className="eyebrow text-center">Contact Us</p>
        <h2 className="section-title text-center">Apni date <em>aaj hi</em> book karein</h2>
        <p className="section-sub text-center">Shadi season ki dates jaldi full ho jati hain — form bharein, details seedha hamare WhatsApp par aa jayengi.</p>
        <div className="row g-4 mt-3">
          <div className="col-lg-5">
            <div className="contact-card h-100">
              <h3 style={{ fontWeight: 700, fontSize: "1.25rem" }}>Venue Information</h3>
              <div className="info-row"><span className="info-ico"><FaMapMarkerAlt /></span><div><b>Address</b><div style={{ color: "var(--muted)", fontSize: ".9rem" }}>{VENUE.address}</div><a href={mapsLink} target="_blank" rel="noreferrer" style={{ fontSize: ".85rem", color: "var(--gold-2)", fontWeight: 600 }}>Open in Google Maps →</a></div></div>
              <div className="info-row"><span className="info-ico"><FaPhoneAlt /></span><div><b>Call / WhatsApp</b><div><a href={VENUE.phoneLink} style={{ color: "var(--muted)", fontSize: ".9rem" }}>{VENUE.phoneDisplay}</a></div></div></div>
              <div className="info-row"><span className="info-ico"><FaClock /></span><div><b>Visiting Hours</b><div style={{ color: "var(--muted)", fontSize: ".9rem" }}>{VENUE.hours}</div></div></div>
              <div className="d-flex gap-2 mt-3">
                <a className="btn-gold" href={VENUE.phoneLink}><FaPhoneAlt className="me-1" /> Call Now</a>
                <a className="btn-green" href={waLink("Assalam-o-Alaikum Dastoor Marquee!")} target="_blank" rel="noreferrer"><FaWhatsapp className="me-1" /> WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-card h-100">
              <h3 style={{ fontWeight: 700, fontSize: "1.25rem" }}>Booking Inquiry</h3>
              <form onSubmit={submit} className="row g-3 mt-1">
                <div className="col-md-6"><label className="form-label">Aap ka Naam</label><input required className="form-control" value={form.name} onChange={set("name")} placeholder="Full name" /></div>
                <div className="col-md-6"><label className="form-label">Phone Number</label><input required className="form-control" value={form.phone} onChange={set("phone")} placeholder="03XX-XXXXXXX" /></div>
                <div className="col-md-6"><label className="form-label">Event Type</label><select className="form-select" value={form.type} onChange={set("type")}>{["Barat", "Walima", "Mehndi", "Nikah", "Reception", "Engagement", "Other"].map(t => <option key={t}>{t}</option>)}</select></div>
                <div className="col-md-6"><label className="form-label">Event Date</label><input required type="date" className="form-control" value={form.date} onChange={set("date")} /></div>
                <div className="col-12"><label className="form-label">Expected Guests</label><input type="number" min="50" step="50" className="form-control" value={form.guests} onChange={set("guests")} /></div>
                <div className="col-12"><button className="btn-gold w-100" type="submit"><FaWhatsapp className="me-1" /> Send Inquiry on WhatsApp</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
