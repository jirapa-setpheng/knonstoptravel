import { useState, useEffect, useRef } from "react";
import imgstart from "./assets/imagestart.png";
import imgend from "./assets/imageend.png";
import img1 from "./assets/image1.png";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";
import img4 from "./assets/image4.png";
import img5 from "./assets/image5.png";
import img6 from "./assets/image6.png";
import img7 from "./assets/image7.png";
import img8 from "./assets/image8.png";

const PHONE_LINK = "tel:063-456-5522";
const EMAIL = "Knon-Stop@gmail.com";
const ADDRESS = "89/14 ถนนศรีอยุธยา แขวงพญาไท เขตราชเทวี กรุงเทพมหานคร 10400";

const kanchaPackage = {
  title: "กาญจนบุรี – สังขละบุรี",
  subtitle: "Kanchanaburi · Sangkhlaburi",
  duration: "3 วัน 2 คืน",
  price: "7,999",
  desc: "สัมผัสประวัติศาสตร์และธรรมชาติกาญจนบุรี ชมสะพานข้ามแม่น้ำแคว ล่องรถไฟมรณะ เที่ยวเมืองมัลลิกา และสักการะเจดีย์พุทธคยาจำลอง",
  highlights: [
    "สะพานแม่น้ำแคว",
    "ทางรถไฟมรณะ",
    "สะพานมาญ",
    "วัดจมน้ำ",
    "เจดีย์พุทธคยาจำลอง",
    "ด่านเจดีย์สามองค์",
    "เมืองมัลลิกา",
    "น้ำตกไทรโยคน้อย",
  ],
  includes: [
    { icon: "🚌", label: "รถตู้ VIP 13 ที่นั่ง" },
    { icon: "🏨", label: "ที่พัก 2 คืน (สังขละบุรี + ตัวเมืองกาญจนบุรี)" },
    { icon: "🍽️", label: "อาหาร 5 มื้อ (รวมมื้อพิเศษอาหารพื้นเมืองมอญ)" },
    { icon: "🚩", label: "ไกด์นำเที่ยวตลอดทริป" },
    { icon: "🛡️", label: "ฟรีประกันค่าเดินทางตลอดทริป" },
  ],
  imgs: [img1, img2, img3, img4, img5, img6, img7, img8],
};

/* ─── HOOK: useWindowWidth ─── */
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const h = () => setWidth(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return width;
}

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Noto+Serif+Thai:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
      *{box-sizing:border-box;margin:0;padding:0;}
      ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#0a0a0f}::-webkit-scrollbar-thumb{background:#c9a96e;border-radius:2px}
      .grain{position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:0.02;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
      .fade-up{opacity:0;transform:translateY(32px);transition:opacity 0.75s ease,transform 0.75s ease;}
      .fade-up.visible{opacity:1;transform:translateY(0);}
      .btn-gold{background:linear-gradient(135deg,#c9a96e,#e8c97a,#c9a96e);background-size:200% 200%;border:none;cursor:pointer;transition:background-position 0.5s,transform 0.2s,box-shadow 0.3s;}
      .btn-gold:hover{background-position:right center;transform:translateY(-2px);box-shadow:0 10px 28px rgba(201,169,110,0.45);}
      .nav-link{position:relative;color:rgba(240,237,230,0.65);text-decoration:none;font-family:'DM Sans',sans-serif;font-size:13px;letter-spacing:1px;text-transform:uppercase;transition:color 0.3s;background:none;border:none;cursor:pointer;}
      .nav-link::after{content:'';position:absolute;bottom:-3px;left:0;width:0;height:1px;background:#c9a96e;transition:width 0.3s;}
      .nav-link:hover{color:#c9a96e;}.nav-link:hover::after{width:100%;}
      @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}
      @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
      .orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;animation:float 9s ease-in-out infinite;}
      .shimmer-text{background:linear-gradient(90deg,#c9a96e 0%,#fff8e1 40%,#e8c97a 60%,#c9a96e 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 4s linear infinite;}
      input,textarea{font-family:'DM Sans',sans-serif;color:#f0ede6;}
      a{cursor:pointer;}

      /* ─── RESPONSIVE HELPERS ─── */

      /* NavBar mobile menu */
      .nav-mobile-menu {
        display: none;
        flex-direction: column;
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(10,10,15,0.98);
        z-index: 99;
        align-items: center;
        justify-content: center;
        gap: 32px;
      }
      .nav-mobile-menu.open { display: flex; }
      .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 6px;
        z-index: 101;
      }
      .hamburger span {
        display: block;
        width: 24px;
        height: 2px;
        background: #f0ede6;
        border-radius: 2px;
        transition: all 0.3s;
      }

      /* Package card: stacks on mobile */
      .pkg-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 860px) {
        .pkg-grid { grid-template-columns: 1fr !important; }
        .pkg-img-col { min-height: 300px !important; }
      }

      /* Itinerary day grid */
      .day-grid {
        display: grid;
        grid-template-columns: 120px 1fr;
      }
      @media (max-width: 540px) {
        .day-grid { grid-template-columns: 1fr !important; }
        .day-label-col { text-align: left !important; margin-bottom: 8px; }
        .day-label-col > div:last-child { display: none !important; }
      }

      /* Footer grid */
      .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 50px;
      }
      @media (max-width: 720px) {
        .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      }

      /* Contact grid */
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.15fr;
        gap: 46px;
      }
      @media (max-width: 820px) {
        .contact-grid { grid-template-columns: 1fr !important; }
      }

      /* NavBar links: hide on small screens, show hamburger */
      @media (max-width: 640px) {
        .nav-links { display: none !important; }
        .nav-call-btn { display: none !important; }
        .hamburger { display: flex !important; }
      }

      /* NavBar padding */
      @media (max-width: 640px) {
        .navbar-inner { padding: 14px 20px !important; }
      }

      /* General section padding */
      @media (max-width: 640px) {
        .section-pad { padding: 60px 20px !important; }
        .pkg-info-pad { padding: 28px 22px !important; }
        .contact-page-pad { padding: 100px 20px 60px !important; }
        .privacy-page-pad { padding: 100px 20px 60px !important; }
      }

      /* Hero CTA buttons: stack on mobile */
      .hero-btns {
        display: flex;
        gap: 14px;
        justify-content: center;
        flex-wrap: wrap;
      }
      @media (max-width: 480px) {
        .hero-btns { flex-direction: column; align-items: center; }
        .hero-btns a, .hero-btns button { width: 100%; max-width: 280px; text-align: center; justify-content: center; }
      }

      /* Package bottom buttons: stack on small */
      .pkg-btns { display: flex; gap: 12px; }
      @media (max-width: 400px) {
        .pkg-btns { flex-direction: column; }
        .pkg-btns a { display: flex; align-items: center; justify-content: center; }
      }
    `}</style>
  );
}

/* ─── NAVBAR ─── */
function NavBar({ setPage, scrollY, page }) {
  const solid = scrollY > 60 || page !== "home";
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on page change
  useEffect(() => { setMenuOpen(false); }, [page]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: solid ? "rgba(10,10,15,0.97)" : "transparent",
          backdropFilter: solid ? "blur(20px)" : "none",
          borderBottom: solid ? "1px solid rgba(201,169,110,0.15)" : "none",
          transition: "all 0.4s",
        }}
      >
        <div
          className="navbar-inner"
          style={{
            padding: "18px 50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => setPage("home")}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}
          >
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,#c9a96e,#e8c97a)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
              𝕂
            </div>
            <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: "2px", color: "#f0ede6", fontFamily: "'Playfair Display',serif" }}>
              KNON<span style={{ color: "#c9a96e" }}>STOPTRAVEL</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="nav-links" style={{ display: "flex", gap: "34px" }}>
            {[["แพ็กเกจ", "home"], ["ติดต่อเรา", "contact"], ["นโยบาย", "privacy"]].map(([label, pg]) => (
              <button key={label} onClick={() => setPage(pg)} className="nav-link">{label}</button>
            ))}
          </div>

          {/* Desktop call button */}
          <a
            href={PHONE_LINK}
            className="btn-gold nav-call-btn"
            style={{ padding: "10px 22px", borderRadius: "50px", fontSize: 13, fontFamily: "'DM Sans',sans-serif", letterSpacing: "1px", color: "#0a0a0f", fontWeight: 700, textDecoration: "none" }}
          >
            📞 โทรหาเรา
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="เมนู"
            style={{ zIndex: 101, position: "relative" }}
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {[["แพ็กเกจ", "home"], ["ติดต่อเรา", "contact"], ["นโยบาย", "privacy"]].map(([label, pg]) => (
          <button
            key={label}
            onClick={() => { setPage(pg); setMenuOpen(false); }}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 28, fontWeight: 700, color: "#f0ede6", fontFamily: "'Playfair Display',serif", letterSpacing: "2px" }}
          >
            {label}
          </button>
        ))}
        <a
          href={PHONE_LINK}
          className="btn-gold"
          style={{ padding: "14px 40px", borderRadius: "50px", fontSize: 16, fontFamily: "'DM Sans',sans-serif", color: "#0a0a0f", fontWeight: 700, textDecoration: "none", marginTop: 16 }}
        >
          📞 โทรหาเรา
        </a>
      </div>
    </>
  );
}

/* ─── FOOTER ─── */
function FooterSection({ setPage }) {
  return (
    <footer style={{ background: "#060508", borderTop: "1px solid rgba(201,169,110,0.1)", padding: "52px 24px 26px" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div className="footer-grid" style={{ marginBottom: "40px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#c9a96e,#e8c97a)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>𝕂</div>
              <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "2px", color: "#f0ede6", fontFamily: "'Playfair Display',serif" }}>
                KNON<span style={{ color: "#c9a96e" }}>STOPTRAVEL</span>
              </span>
            </div>
            <p style={{ fontSize: 12, color: "rgba(240,237,230,0.35)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.95, maxWidth: 250, marginBottom: "14px" }}>
              บริษัท นอนสต็อป ทราเวล จำกัด<br />(Knon Stop Travel Co.,Ltd.)<br />{ADDRESS}
            </p>
            <a href={PHONE_LINK} style={{ display: "inline-flex", alignItems: "center", gap: "7px", color: "#c9a96e", fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
              📞 063-456-5522
            </a>
            <div style={{ marginTop: "6px" }}>
              <a href={`mailto:${EMAIL}`} style={{ color: "rgba(240,237,230,0.4)", fontFamily: "'DM Sans',sans-serif", fontSize: 12, textDecoration: "none" }}>{EMAIL}</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px", fontFamily: "'DM Sans',sans-serif" }}>ลิงก์</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[["แพ็กเกจทัวร์", "home"], ["ติดต่อเรา", "contact"], ["นโยบายความเป็นส่วนตัว", "privacy"]].map(([label, pg]) => (
                <li key={label}>
                  <button
                    onClick={() => setPage(pg)}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, color: "rgba(240,237,230,0.4)", fontFamily: "'DM Sans',sans-serif", padding: 0, transition: "color 0.3s" }}
                    onMouseOver={(e) => (e.target.style.color = "#c9a96e")}
                    onMouseOut={(e) => (e.target.style.color = "rgba(240,237,230,0.4)")}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px", fontFamily: "'DM Sans',sans-serif" }}>โซเชียล</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[["📘 Facebook", "Knon-Stop travel"], ["📸 Instagram", "@Knon-Stop travel"], ["💬 LINE", "@Knon-Stop travel"]].map(([icon, val]) => (
                <li key={val} style={{ fontSize: 12, color: "rgba(240,237,230,0.4)", fontFamily: "'DM Sans',sans-serif" }}>
                  {icon}<span style={{ marginLeft: 6 }}>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(201,169,110,0.07)", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontSize: 11, color: "rgba(240,237,230,0.2)", fontFamily: "'DM Sans',sans-serif" }}>© 2025 Knon Stop Travel Co.,Ltd. All rights reserved.</span>
          <span style={{ fontSize: 11, color: "rgba(240,237,230,0.2)", fontFamily: "'DM Sans',sans-serif" }}>โทรสาร: 02-542-7894</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── HOME PAGE ─── */
function HomePage({ setPage }) {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState({});
  const refs = useRef({});
  const [imgIndex, setImgIndex] = useState(0);
  const w = useWindowWidth();
  const isMobile = w < 640;
  const isTablet = w < 860;

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev === kanchaPackage.imgs.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setVisible((v) => ({ ...v, [e.target.dataset.id]: true })); }),
      { threshold: 0.12 }
    );
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const r = (id) => (el) => { refs.current[id] = el; };

  return (
    <div style={{ fontFamily: "'Playfair Display','Noto Serif Thai',serif", background: "#0a0a0f", color: "#f0ede6", overflowX: "hidden" }}>
      <GlobalStyles />
      <div className="grain" />
      <NavBar setPage={setPage} scrollY={scrollY} page="home" />

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src={imgstart}
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${scrollY * 0.28}px)` }}
            alt="กาญจนบุรี"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,rgba(10,10,15,0.82) 0%,rgba(10,10,15,0.4) 100%)" }} />
        </div>
        <div className="orb" style={{ width: 550, height: 550, background: "#c9a96e", opacity: 0.1, top: "0%", left: "-10%", animationDelay: "0s" }} />
        <div className="orb" style={{ width: 350, height: 350, background: "#22c55e", opacity: 0.08, bottom: "0%", right: "0%", animationDelay: "5s" }} />

        <div style={{ position: "relative", textAlign: "center", maxWidth: 840, padding: isMobile ? "0 20px" : "0 36px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.3)", borderRadius: "50px", padding: "7px 18px", marginBottom: "26px" }}>
            <span style={{ width: 6, height: 6, background: "#c9a96e", borderRadius: "50%", display: "inline-block" }} />
            <span style={{ fontSize: 11, fontFamily: "'DM Sans',sans-serif", letterSpacing: "3px", textTransform: "uppercase", color: "#c9a96e" }}>
              Knon Stop Travel · ไม่หยุดเที่ยว
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(38px,8vw,88px)", fontWeight: 900, lineHeight: 1.05, marginBottom: "18px", letterSpacing: "-1px" }}>
            <span className="shimmer-text">สัมผัสธรรมชาติ</span>
            <br />
            <span style={{ fontStyle: "italic" }}>กาญจนบุรี</span>
          </h1>
          <p style={{ fontSize: isMobile ? 15 : 17, color: "rgba(240,237,230,0.6)", fontFamily: "'DM Sans',sans-serif", fontWeight: 300, lineHeight: 1.9, maxWidth: 500, margin: "0 auto 40px" }}>
            ทัวร์ 3 วัน 2 คืน กาญจนบุรี–สังขละบุรี
          </p>
          <div className="hero-btns">
            <button
              className="btn-gold"
              onClick={() => document.getElementById("pkg")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "15px 42px", borderRadius: "50px", fontSize: 16, fontFamily: "'DM Sans',sans-serif", color: "#0a0a0f", fontWeight: 700 }}
            >
              ดูรายละเอียด →
            </button>
            <a
              href={PHONE_LINK}
              style={{ padding: "15px 42px", borderRadius: "50px", fontSize: 15, fontFamily: "'DM Sans',sans-serif", color: "#f0ede6", background: "transparent", border: "1px solid rgba(240,237,230,0.3)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", transition: "all 0.3s" }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "#c9a96e"; e.currentTarget.style.color = "#c9a96e"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(240,237,230,0.3)"; e.currentTarget.style.color = "#f0ede6"; }}
            >
              📞 ติดต่อเรา
            </a>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 34, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "7px" }}>
          <span style={{ fontSize: 10, letterSpacing: "3px", color: "rgba(240,237,230,0.28)", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 46, background: "linear-gradient(to bottom,rgba(201,169,110,0.5),transparent)" }} />
        </div>
      </section>

      {/* ── PACKAGE DETAIL ── */}
      <section id="pkg" className="section-pad" style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={r("pkg-t")} data-id="pkg-t"
          className={`fade-up${visible["pkg-t"] ? " visible" : ""}`}
          style={{ marginBottom: "52px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
            <div style={{ width: 40, height: 1, background: "#c9a96e" }} />
            <span style={{ fontSize: 11, letterSpacing: "4px", color: "#c9a96e", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase" }}>แพ็กเกจทัวร์</span>
          </div>
          <h2 style={{ fontSize: "clamp(26px,5vw,54px)", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.1 }}>
            สัมผัสธรรมชาติกาญจนบุรี<br />
            <span style={{ fontStyle: "italic", color: "#c9a96e" }}>3 วัน 2 คืน</span>
          </h2>
        </div>

        <div
          ref={r("pkg-c")} data-id="pkg-c"
          className={`fade-up pkg-grid${visible["pkg-c"] ? " visible" : ""}`}
          style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(201,169,110,0.15)" }}
        >
          {/* Image column */}
          <div className="pkg-img-col" style={{ position: "relative", overflow: "hidden", minHeight: isTablet ? 300 : 520 }}>
            <img
              src={kanchaPackage.imgs[imgIndex]}
              alt="กาญจนบุรี"
              style={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.6s" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(10,10,15,0) 55%,rgba(10,10,15,0.7) 100%)" }} />
            <div style={{ position: "absolute", top: 22, left: 22, background: "#FF4D4D", color: "#fff", fontSize: 11, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", letterSpacing: "2px", padding: "5px 14px", borderRadius: "50px" }}>
              🔥 จองด่วน!
            </div>
            <div style={{ position: "absolute", bottom: 22, left: 22, right: 22, display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {kanchaPackage.highlights.slice(0, 5).map((t) => (
                <span key={t} style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50px", padding: "4px 12px", fontSize: 11, fontFamily: "'DM Sans',sans-serif", color: "rgba(240,237,230,0.85)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Info column */}
          <div className="pkg-info-pad" style={{ padding: "50px 46px", background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, color: "#c9a96e", fontFamily: "'DM Sans',sans-serif", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>
                {kanchaPackage.subtitle}
              </div>
              <h3 style={{ fontSize: isMobile ? 22 : 30, fontWeight: 900, lineHeight: 1.15, marginBottom: "14px", letterSpacing: "-0.5px" }}>
                {kanchaPackage.title}<br />
                <span style={{ fontSize: 18, fontWeight: 400, fontStyle: "italic", color: "rgba(240,237,230,0.5)" }}>{kanchaPackage.duration}</span>
              </h3>
              <p style={{ fontSize: 14, color: "rgba(240,237,230,0.55)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.9, marginBottom: "26px" }}>
                {kanchaPackage.desc}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: "26px" }}>
                <div style={{ fontSize: 11, color: "rgba(240,237,230,0.35)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>สถานที่ท่องเที่ยว</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {kanchaPackage.highlights.map((h) => (
                    <span key={h} style={{ fontSize: 12, fontFamily: "'DM Sans',sans-serif", color: "rgba(240,237,230,0.65)", background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.15)", borderRadius: "8px", padding: "5px 12px" }}>• {h}</span>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div style={{ marginBottom: "26px" }}>
                <div style={{ fontSize: 11, color: "rgba(240,237,230,0.35)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>สิ่งที่รวมอยู่ในแพ็กเกจ</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  {kanchaPackage.includes.map((inc) => (
                    <div key={inc.label} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", background: "rgba(255,255,255,0.03)", borderRadius: "10px", border: "1px solid rgba(201,169,110,0.08)" }}>
                      <span style={{ fontSize: 18 }}>{inc.icon}</span>
                      <span style={{ fontSize: 12, fontFamily: "'DM Sans',sans-serif", color: "rgba(240,237,230,0.65)" }}>{inc.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div style={{ padding: "18px 22px", background: "rgba(201,169,110,0.08)", borderRadius: "14px", border: "1px solid rgba(201,169,110,0.2)", marginBottom: "22px" }}>
                <div style={{ fontSize: 11, color: "rgba(240,237,230,0.35)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "1px", marginBottom: "4px" }}>🔔 ราคาพิเศษวันนี้</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: isMobile ? 36 : 46, fontWeight: 900, color: "#c9a96e", letterSpacing: "-2px" }}>฿{kanchaPackage.price}</span>
                  <span style={{ fontSize: 15, color: "rgba(240,237,230,0.35)", fontFamily: "'DM Sans',sans-serif" }}>/ ท่าน</span>
                </div>
              </div>
            </div>

            <div className="pkg-btns">
              <button
                className="btn-gold"
                onClick={() => setPage("contact")}
                style={{ flex: 1, padding: "14px", borderRadius: "12px", fontSize: 15, fontFamily: "'DM Sans',sans-serif", color: "#0a0a0f", fontWeight: 700 }}
              >
                จองแพ็กเกจนี้ →
              </button>
              <a
                href={PHONE_LINK}
                style={{ padding: "14px 20px", borderRadius: "12px", background: "transparent", border: "1px solid rgba(201,169,110,0.3)", color: "#c9a96e", fontSize: 22, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}
                title="โทรหาเรา"
                onMouseOver={(e) => (e.currentTarget.style.background = "rgba(201,169,110,0.1)")}
                onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
              >
                📞
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ITINERARY ── */}
      <section style={{ background: "linear-gradient(135deg,#0e0c08,#141210)", padding: isMobile ? "60px 20px" : "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            ref={r("iti-t")} data-id="iti-t"
            className={`fade-up${visible["iti-t"] ? " visible" : ""}`}
            style={{ textAlign: "center", marginBottom: "56px" }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
              <div style={{ width: 36, height: 1, background: "#c9a96e" }} />
              <span style={{ fontSize: 11, letterSpacing: "4px", color: "#c9a96e", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase" }}>กำหนดการ</span>
              <div style={{ width: 36, height: 1, background: "#c9a96e" }} />
            </div>
            <h2 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, letterSpacing: "-1px" }}>
              3 วัน <span style={{ fontStyle: "italic", color: "#c9a96e" }}>เต็มอิ่ม</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { day: "วันที่ 1", title: "กรุงเทพฯ → สังขละบุรี", color: "#c9a96e", items: ["ออกเดินทางจากกรุงเทพฯ", "แวะชมด่านเจดีย์สามองค์", "เข้าที่พักสังขละบุรี"] },
              { day: "วันที่ 2", title: "สังขละบุรี → กาญจนบุรี", color: "#60a5fa", items: ["สะพานมาญ (สะพานไม้ที่ยาวที่สุดในไทย)", "วัดจมน้ำ (วัดวังวิเวการาม)", "ทางรถไฟมรณะ", "เมืองมัลลิกา"] },
              { day: "วันที่ 3", title: "กาญจนบุรี → กรุงเทพฯ", color: "#4ade80", items: ["สะพานข้ามแม่น้ำแคว", "เจดีย์พุทธคยาจำลอง", "น้ำตกไทรโยคน้อย", "เดินทางกลับกรุงเทพฯ"] },
            ].map((d, i) => (
              <div
                key={i}
                ref={r(`d-${i}`)} data-id={`d-${i}`}
                className={`fade-up day-grid${visible[`d-${i}`] ? " visible" : ""}`}
                style={{ gap: "24px", padding: isMobile ? "22px 18px" : "28px 30px", borderRadius: "18px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", transitionDelay: `${i * 0.1}s` }}
              >
                <div className="day-label-col" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: d.color, fontFamily: "'DM Sans',sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>{d.day}</div>
                  <div style={{ width: 2, height: 40, background: `linear-gradient(to bottom,${d.color},transparent)`, margin: "0 auto" }} />
                </div>
                <div>
                  <h4 style={{ fontSize: isMobile ? 15 : 17, fontWeight: 700, marginBottom: "12px", color: d.color }}>{d.title}</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
                    {d.items.map((it) => (
                      <li key={it} style={{ fontSize: 13, color: "rgba(240,237,230,0.55)", fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: d.color, display: "inline-block", flexShrink: 0 }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: "relative", padding: isMobile ? "80px 20px" : "110px 40px", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={imgend} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }} alt="" />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(10,10,15,0.3) 0%,rgba(10,10,15,0.93) 100%)" }} />
        </div>
        <div ref={r("cta")} data-id="cta" className={`fade-up${visible["cta"] ? " visible" : ""}`} style={{ position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px,6vw,68px)", fontWeight: 900, lineHeight: 1.1, marginBottom: "18px", letterSpacing: "-2px" }}>
            พร้อมออกเดินทางแล้วหรือยัง?<br />
            <span className="shimmer-text">จองวันนี้ราคา ฿7,999</span>
          </h2>
          <p style={{ fontSize: isMobile ? 14 : 16, color: "rgba(240,237,230,0.5)", fontFamily: "'DM Sans',sans-serif", marginBottom: "40px" }}>
            ติดต่อเราได้เลยทันที ไม่มีค่าใช้จ่ายในการสอบถาม
          </p>
          <div className="hero-btns">
            <button
              className="btn-gold"
              onClick={() => setPage("contact")}
              style={{ padding: "16px 46px", borderRadius: "50px", fontSize: 16, fontFamily: "'DM Sans',sans-serif", color: "#0a0a0f", fontWeight: 700 }}
            >
              จองเลย →
            </button>
            <a
              href={PHONE_LINK}
              style={{ padding: "16px 46px", borderRadius: "50px", fontSize: 16, fontFamily: "'DM Sans',sans-serif", color: "#f0ede6", background: "transparent", border: "1px solid rgba(240,237,230,0.3)", textDecoration: "none", transition: "all 0.3s" }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "#c9a96e"; e.currentTarget.style.color = "#c9a96e"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(240,237,230,0.3)"; e.currentTarget.style.color = "#f0ede6"; }}
            >
              📞 063-456-5522
            </a>
          </div>
        </div>
      </section>

      <FooterSection setPage={setPage} />
    </div>
  );
}

/* ─── CONTACT PAGE ─── */
function ContactPage({ setPage }) {
  const [scrollY, setScrollY] = useState(0);
  const w = useWindowWidth();
  const isMobile = w < 640;

  useEffect(() => {
    window.scrollTo(0, 0);
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{ fontFamily: "'Playfair Display','Noto Serif Thai',serif", background: "#0a0a0f", color: "#f0ede6", minHeight: "100vh" }}>
      <GlobalStyles />
      <div className="grain" />
      <NavBar setPage={setPage} scrollY={scrollY} page="contact" />
      <div className="contact-page-pad" style={{ maxWidth: 1060, margin: "0 auto", padding: "118px 40px 90px" }}>
        <div style={{ marginBottom: "54px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
            <div style={{ width: 40, height: 1, background: "#c9a96e" }} />
            <span style={{ fontSize: 11, letterSpacing: "4px", color: "#c9a96e", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase" }}>ติดต่อเรา</span>
          </div>
          <h1 style={{ fontSize: "clamp(30px,6vw,66px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05 }}>
            พร้อมช่วยเหลือ<br />
            <span className="shimmer-text">ทุกวันตลอด 24 ชม.</span>
          </h1>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: "22px", color: "#c9a96e" }}>ข้อมูลติดต่อ</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              <a
                href="tel:063-456-5522"
                style={{ display: "flex", alignItems: "center", gap: "18px", padding: "20px 22px", borderRadius: "16px", background: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.25)", textDecoration: "none", color: "#f0ede6", transition: "all 0.3s" }}
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(201,169,110,0.14)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.55)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "rgba(201,169,110,0.07)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)"; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: "12px", background: "linear-gradient(135deg,#c9a96e,#e8c97a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>📞</div>
                <div>
                  <div style={{ fontSize: 10, color: "#c9a96e", fontFamily: "'DM Sans',sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>กดเพื่อโทรได้เลย</div>
                  <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 900 }}>063-456-5522</div>
                  <div style={{ fontSize: 11, color: "rgba(240,237,230,0.38)", fontFamily: "'DM Sans',sans-serif", marginTop: "2px" }}>โทรสาร: 02-542-7894</div>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                style={{ display: "flex", alignItems: "center", gap: "16px", padding: "18px 22px", borderRadius: "14px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none", color: "#f0ede6", transition: "all 0.3s" }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: "11px", background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>✉️</div>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(240,237,230,0.35)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>อีเมล</div>
                  <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 600, wordBreak: "break-all" }}>{EMAIL}</div>
                </div>
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "18px 22px", borderRadius: "14px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ width: 44, height: 44, borderRadius: "11px", background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📍</div>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(240,237,230,0.35)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "5px" }}>ที่อยู่</div>
                  <div style={{ fontSize: 12, lineHeight: 1.95, color: "rgba(240,237,230,0.65)", fontFamily: "'DM Sans',sans-serif" }}>
                    บริษัท นอนสต็อป ทราเวล จำกัด<br />(Knon Stop Travel Co.,Ltd.)<br />{ADDRESS}
                  </div>
                </div>
              </div>
            </div>
            <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: "12px", color: "rgba(240,237,230,0.55)" }}>โซเชียลมีเดีย</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              {[["📘", "Facebook", "Knon-Stop travel"], ["📸", "Instagram", "@Knon-Stop travel"], ["💬", "LINE", "@Knon-Stop travel"]].map(([icon, label, val]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 16px", borderRadius: "11px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontSize: 17 }}>{icon}</span>
                  <span style={{ fontSize: 11, color: "#c9a96e", fontFamily: "'DM Sans',sans-serif", width: 66 }}>{label}</span>
                  <span style={{ fontSize: 12, color: "rgba(240,237,230,0.5)", fontFamily: "'DM Sans',sans-serif" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ padding: isMobile ? "28px 22px" : "38px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,169,110,0.12)", borderRadius: "22px" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: "7px" }}>ส่งข้อความหาเรา</h2>
            <p style={{ fontSize: 12, color: "rgba(240,237,230,0.38)", fontFamily: "'DM Sans',sans-serif", marginBottom: "26px", lineHeight: 1.7 }}>
              กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[["ชื่อ - นามสกุล", "กรุณาระบุชื่อของคุณ", "text"], ["อีเมล", "example@email.com", "email"], ["เบอร์โทรศัพท์", "0XX-XXX-XXXX", "tel"]].map(([label, ph, type]) => (
                <div key={label}>
                  <label style={{ display: "block", fontSize: 10, color: "#c9a96e", fontFamily: "'DM Sans',sans-serif", letterSpacing: "1px", marginBottom: "7px", textTransform: "uppercase" }}>{label}</label>
                  <input
                    type={type}
                    placeholder={ph}
                    style={{ width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", fontSize: 13, outline: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontSize: 10, color: "#c9a96e", fontFamily: "'DM Sans',sans-serif", letterSpacing: "1px", marginBottom: "7px", textTransform: "uppercase" }}>รายละเอียด</label>
                <textarea
                  rows={4}
                  placeholder="เช่น จำนวนผู้ร่วมเดินทาง, วันที่ต้องการ..."
                  style={{ width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", fontSize: 13, outline: "none", resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
              <button className="btn-gold" style={{ padding: "14px", borderRadius: "11px", fontSize: 15, fontFamily: "'DM Sans',sans-serif", color: "#0a0a0f", fontWeight: 700, marginTop: "4px" }}>
                ส่งข้อความ →
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterSection setPage={setPage} />
    </div>
  );
}

/* ─── PRIVACY PAGE ─── */
function PrivacyPage({ setPage }) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{ fontFamily: "'Playfair Display','Noto Serif Thai',serif", background: "#0a0a0f", color: "#f0ede6", minHeight: "100vh" }}>
      <GlobalStyles />
      <div className="grain" />
      <NavBar setPage={setPage} scrollY={scrollY} page="privacy" />
      <div className="privacy-page-pad" style={{ maxWidth: 760, margin: "0 auto", padding: "126px 40px 90px" }}>
        <div style={{ marginBottom: "52px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
            <div style={{ width: 40, height: 1, background: "#c9a96e" }} />
            <span style={{ fontSize: 11, letterSpacing: "4px", color: "#c9a96e", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase" }}>Legal</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,54px)", fontWeight: 900, letterSpacing: "-2px" }}>นโยบายความเป็นส่วนตัว</h1>
          <p style={{ fontSize: 12, color: "rgba(240,237,230,0.3)", fontFamily: "'DM Sans',sans-serif", marginTop: "9px" }}>
            บริษัท นอนสต็อป ทราเวล จำกัด (Knon Stop Travel Co.,Ltd.) · อัปเดตล่าสุด 2025
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            { title: "การเปิดเผยข้อมูลแก่บุคคลที่สาม", body: "เราจะรักษาข้อมูลของคุณเป็นความลับ และจะแชร์ข้อมูลเฉพาะส่วนที่จำเป็นต่อการให้บริการแก่พันธมิตรของเราเท่านั้น ได้แก่ คู่ค้าทางธุรกิจ เช่น สายการบิน โรงแรม และบริษัทประกันภัย" },
            { title: "มาตรฐานการรักษาความปลอดภัย", body: "เราใช้เทคโนโลยีและมาตรการการจัดการที่เป็นสากลเพื่อปกป้องข้อมูลของคุณ ได้แก่ ระบบการเข้ารหัสข้อมูลแบบ SSL ในการรับส่งข้อมูลผ่านเว็บไซต์ จำกัดการเข้าถึงข้อมูลเฉพาะพนักงานที่ได้รับอนุญาต และมีระบบตรวจสอบความปลอดภัยของฐานข้อมูลอย่างสม่ำเสมอ" },
            { title: "สิทธิในข้อมูลส่วนบุคคลของคุณ (PDPA)", body: "คุณมีสิทธิ์เต็มที่ในข้อมูลของคุณตามกฎหมาย PDPA ได้แก่ สิทธิในการเข้าถึง (ขอตรวจสอบและรับสำเนาข้อมูล) สิทธิในการแก้ไข (ขอปรับปรุงข้อมูลให้ถูกต้อง) สิทธิในการลบ (ขอให้ทำลายหรือระงับการใช้ข้อมูล ภายใต้เงื่อนไขที่กฎหมายกำหนด) และสิทธิในการคัดค้านการนำข้อมูลไปใช้เชิงการตลาด" },
            { title: "ช่องทางการติดต่อ", body: "หากคุณมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว หรือต้องการใช้สิทธิ์ในข้อมูลของคุณ โปรดติดต่อเราได้ที่ บริษัท นอนสต็อป ทราเวล จำกัด อีเมล: nonstop-travel@example.com หรือโทร 063-456-5522" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "28px 30px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,169,110,0.09)" }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: "11px", color: "#c9a96e" }}>{i + 1}. {s.title}</h2>
              <p style={{ fontSize: 13, color: "rgba(240,237,230,0.58)", fontFamily: "'DM Sans',sans-serif", lineHeight: 2 }}>{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "36px", padding: "22px 26px", borderRadius: "14px", background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.18)" }}>
          <p style={{ fontSize: 12, color: "rgba(240,237,230,0.45)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.9 }}>
            สอบถามเพิ่มเติม:{" "}
            <a href={`mailto:${EMAIL}`} style={{ color: "#c9a96e" }}>{EMAIL}</a>
            {" · "}
            <a href="tel:063-456-5522" style={{ color: "#c9a96e" }}>063-456-5522</a>
          </p>
        </div>
      </div>
      <FooterSection setPage={setPage} />
    </div>
  );
}

/* ─── ROOT ─── */
export default function App() {
  const [page, setPage] = useState("home");
  if (page === "contact") return <ContactPage setPage={setPage} />;
  if (page === "privacy") return <PrivacyPage setPage={setPage} />;
  return <HomePage setPage={setPage} />;
}