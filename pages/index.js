import { useEffect, useState } from "react";

export default function Home() {
  const imagenes = ["/eventos/actual.jpg", "/eventos/actualidad.jpg"];
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "15px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <img
            src="/mC_cATERING-removebg-preview.png"
            alt="MC Catering"
            style={{ height: "65px" }}
          />

          {/* MENU DESKTOP */}
          <nav className="menu-desktop">
            {["Eventos", "Clientes", "Cotizacion"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  marginLeft: "30px",
                  textDecoration: "none",
                  color: "#7a0000",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* MENU MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-btn"
            style={{
              fontSize: "30px",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
            }}
          >
            ☰
          </button>
        </div>

        {/* MENU MOBILE DESPLEGADO */}
        {menuOpen && (
          <div
            className="menu-mobile"
            style={{
              background: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {["Eventos", "Clientes", "Cotizacion"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "#7a0000",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section
        style={{
          height: "100vh",
          backgroundImage: `url(${imagenes[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "120px",
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
            style={{ width: "200px", marginBottom: "20px" }}
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

      {/* ================= EVENTOS ================= */}
      <section id="eventos" style={{ padding: "100px 20px" }}>
        <h2 style={{ textAlign: "center", color: "#7a0000" }}>
          Eventos
        </h2>
        <p style={{ textAlign: "center" }}>
          Catering para eventos sociales y corporativos.
        </p>
      </section>

      {/* ================= CLIENTES ================= */}
      <section
        id="clientes"
        style={{ padding: "100px 20px", background: "#f7f7f7" }}
      >
        <h2 style={{ textAlign: "center", color: "#7a0000" }}>
          Clientes & Experiencias
        </h2>
        <p style={{ textAlign: "center" }}>
          Empresas, figuras públicas y eventos destacados.
        </p>
        {/* ACA DESPUÉS VAN LAS FOTOS CON FAMOSOS */}
      </section>

      {/* ================= COTIZACION ================= */}
      <section id="cotizacion" style={{ padding: "100px 20px" }}>
        <h2 style={{ textAlign: "center", color: "#7a0000" }}>
          Cotización
        </h2>
        <p style={{ textAlign: "center" }}>
          Pedinos tu presupuesto personalizado.
        </p>
      </section>

      {/* ================= RESPONSIVE ================= */}
      <style>
        {`
          @media (max-width: 768px) {
            .menu-desktop {
              display: none;
            }
            .menu-btn {
              display: block !important;
            }
          }
          @media (min-width: 769px) {
            .menu-mobile {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
