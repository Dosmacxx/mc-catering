import { useEffect, useState } from "react";

export default function Home() {
  const imagenes = [
    "/eventos/actualidad.jpg",
    "/eventos/actual.jpg",
  ];

  const [index, setIndex] = useState(0);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundImage: `url(${imagenes[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* LOGO ARRIBA IZQUIERDA */}
      <header
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 50,
        }}
      >
        <img
          src="/mC_cATERING-removebg-preview.png"
          alt="MC Catering"
          style={{
            height: "200px",
            width: "auto",
            filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.6))",
          }}
        />
      </header>

      {/* CUADRADO */}
      <div
        style={{
          position: "relative", // 👈 CLAVE
          background: "rgba(255, 255, 255, 0.92)",
          borderRadius: "20px",
          padding: isMobile ? "40px 40px 45px" : "60px 40px 50px",
          maxWidth: "700px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0px 10px 35px rgba(0,0,0,0.4)",
          zIndex: 30,
        }}
      >
        {/* LOGO CENTRAL ABSOLUTO (NO EMPUJA EL CUADRADO) */}
        <img
          src="/mC_cATERING-removebg-preview.png"
          alt="MC Catering"
          style={{
            position: "absolute",
            top: isMobile ? "-55px" : "-75px",
            left: "50%",
            transform: "translateX(-50%)",
            width: isMobile ? "180px" : "280px", // 🔥 grande sin romper
            zIndex: 40,
          }}
        />

        {/* ESPACIADOR CONTROLADO */}
        <div style={{ height: isMobile ? "90px" : "120px" }} />

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#7a0000",
            marginBottom: "15px",
            fontWeight: "600",
          }}
        >
          Viandas Corporativas
          <br />
          y Servicios Gastronómicos
        </h2>

        <div
          style={{
            width: "60px",
            height: "4px",
            background: "#7a0000",
            margin: "0 auto 25px auto",
            borderRadius: "4px",
          }}
        />

        <a
          href="https://wa.me/5491141687448"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#7a0000",
            color: "white",
            padding: "15px 30px",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "500",
            display: "inline-block",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
            transition: "0.3s",
          }}
        >
          Contactate con nosotros
        </a>
      </div>

{/* INSTAGRAM FLOTANTE */}
<a
  href="https://www.instagram.com/mcatering__/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "110px", // ⬅️ arriba del WhatsApp
    right: "25px",
    zIndex: 9999,
  }}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
    alt="Instagram"
    style={{
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
      cursor: "pointer",
      background: "white",
      padding: "6px",
    }}
  />
</a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5491141687448"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 9999,
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
          }}
        />
      </a>
    </div>
  );
}
