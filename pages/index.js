import { useEffect, useState } from "react";

export default function Home() {
  const imagenes = [
    "/eventos/actual.jpg",
    "/eventos/actualidad.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        backgroundImage: `url(${imagenes[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* ================= HEADER ================= */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "110px",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        {/* LOGO HEADER */}
        <img
          src="/mC_cATERING-removebg-preview.png"
          alt="MC Catering"
          style={{
            height: "250px",
            position: "absolute",
            left: "20px",
            top: "-85px",
            pointerEvents: "none",
          }}
        />

        {/* MENU DESKTOP */}
        <nav className="menu-desktop" style={{ marginLeft: "auto" }}>
          {["Eventos", "Clientes", "Cotización"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                marginLeft: "38px",
                textDecoration: "none",
                color: "#7a0000",
                fontWeight: "700",
                fontSize: "20px",
                letterSpacing: "0.5px",
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* MENU MOBILE */}
        <div
          className="menu-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "32px",
            cursor: "pointer",
            display: "none",
          }}
        >
          ☰
        </div>
      </header>

      {/* MENU MOBILE DESPLEGABLE */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "110px",
            right: 0,
            background: "white",
            width: "220px",
            boxShadow: "-4px 10px 20px rgba(0,0,0,0.2)",
            zIndex: 200,
          }}
        >
          {["Eventos", "Clientes", "Cotización"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "18px",
                textDecoration: "none",
                color: "#7a0000",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* ================= HERO ================= */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "110px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.92)",
            borderRadius: "20px",
            padding: "50px 40px",
            maxWidth: "700px",
            width: "90%",
            textAlign: "center",
            boxShadow: "0 10px 35px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src="/mC_cATERING-removebg-preview.png"
            alt="MC Catering"
            style={{
              width: "250px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#7a0000" }}>
            Viandas Corporativas
            <br />
            y Servicios Gastronómicos
          </h2>

          <a
            href="https://wa.me/5491141687448"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "25px",
              display: "inline-block",
              background: "#7a0000",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            Solicitar Cotización
          </a>
        </div>
      </section>

      {/* ================= SECCIONES ================= */}
      <section id="eventos" style={{ padding: "120px 20px" }}>
        <h2 style={{ textAlign: "center", color: "#7a0000" }}>Eventos</h2>
      </section>

      <section id="clientes" style={{ padding: "120px 20px", background: "#f7f7f7" }}>
        <h2 style={{ textAlign: "center", color: "#7a0000" }}>Clientes</h2>
      </section>

      <section id="cotizacion" style={{ padding: "120px 20px" }}>
        <h2 style={{ textAlign: "center", color: "#7a0000" }}>Cotización</h2>
      </section>

      {/* ================= BOTONES FLOTANTES ================= */}
      <a
        href="https://wa.me/5491141687448"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "fixed", bottom: "25px", right: "25px", zIndex: 999 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          style={{ width: "65px", height: "65px" }}
        />
      </a>

      <a
        href="https://www.instagram.com/mcatering__/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "fixed", bottom: "100px", right: "25px", zIndex: 999 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          style={{ width: "65px", height: "65px" }}
        />
      </a>

      {/* ================= RESPONSIVE ================= */}
      <style>{`
        @media (max-width: 768px) {
          .menu-desktop { display: none; }
          .menu-mobile { display: block !important; }
          header img { height: 170px !important; }
        }
      `}</style>
    </div>
  );
}
