import { useMemo, useState } from "react";
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import { PACKAGES, MENU_CATEGORIES, waLink } from "../data/venueData";

export default function MenuPage() {
  const [cat, setCat] = useState("all");
  const cats = useMemo(() => cat === "all" ? MENU_CATEGORIES : MENU_CATEGORIES.filter(c => c.id === cat), [cat]);
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="hero-eyebrow">Menus & Packages</p>
          <h1>Wedding <em>Menus</em></h1>
          <p>Packages aur à-la-carte dishes — apne function ke hisab se menu customize karein. Rates ke liye WhatsApp par quote lein, koi charges nahi.</p>
        </div>
      </header>

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow text-center">Packages</p>
          <h2 className="section-title text-center">Curated <em>packages</em></h2>
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
                    <p style={{ color: "var(--muted)", fontSize: ".87rem" }}>{p.tagline} · {p.dishes.length} items</p>
                    <ul className="pkg-list">
                      {p.dishes.map((d) => <li key={d}><FaCheck />{d}</li>)}
                    </ul>
                    <a className="btn-green mt-3 text-center" style={{ marginTop: "auto" }} href={waLink(`Assalam-o-Alaikum Dastoor Marquee! I am interested in the ${p.name}. Please share per-head rates and availability.`)} target="_blank" rel="noreferrer">
                      <FaWhatsapp className="me-1" /> Get Quote
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--cream-2)", paddingTop: "3rem" }}>
        <div className="container">
          <p className="eyebrow text-center">À-La-Carte Catalog</p>
          <h2 className="section-title text-center">Dishes, <em>apni pasand</em> se</h2>
          <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">
            <button className={`menu-tab ${cat === "all" ? "active" : ""}`} onClick={() => setCat("all")}>All Dishes</button>
            {MENU_CATEGORIES.map((c) => (
              <button key={c.id} className={`menu-tab ${cat === c.id ? "active" : ""}`} onClick={() => setCat(c.id)}>{c.label}</button>
            ))}
          </div>
          {cats.map((c) => (
            <div key={c.id} className="mt-4">
              <h3 className="serif" style={{ fontWeight: 700, fontSize: "1.35rem" }}>{c.label}</h3>
              <div className="grid-2col mt-2">
                {c.items.map((item) => (
                  <div className="dish-card" key={item.name}>
                    <div className="pad"><h3>{item.name}</h3><p>{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center mt-5">
            <p style={{ color: "var(--muted)" }}>Apna menu finalize karne ke liye hamari team se baat karein — tasting aur rates WhatsApp par.</p>
            <a className="btn-gold" href={waLink("Assalam-o-Alaikum Dastoor Marquee! I want to discuss the menu for my event.")} target="_blank" rel="noreferrer"><FaWhatsapp className="me-1" /> Discuss My Menu</a>
          </div>
        </div>
      </section>
    </>
  );
}
