import { useEffect, useState } from "react";

export default function Home() {
  const imagenes = [
    "/eventos/fac39c73-7da3-4944-ad59-d96d6022fbdd.jpg",
    "/eventos/e8773ad5-8767-4ad5-aafd-7d5b61dc755f.jpg",
    "/eventos/actualidad.jpg",
    "/eventos/actual.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        backgroundPosition: isMobile ? "50% 20%" : "50% 30%",
        transition: "background-image 1s ease-in-out",
        position: "relative",
      }}
    >
      {/* LOGO ARRIBA IZQUIERDA */}
      <header
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 20,
        }}
      >
        <img
          src="/mC_cATERING-removebg-preview.png"
          alt="MC Catering"
          style={{
            height: isMobile ? "90px" : "160px",
            filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.6))",
          }}
        />
      </header>

      {/* CUADRADO CENTRADO */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(255,255,255,0.92)",
          borderRadius: "20px",
          padding: "50px 40px",
          maxWidth: "700px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0 10px 35px rgba(0,0,0,0.4)",
          zIndex: 30,
        }}
      >
        {/* LOGO CENTRO */}
        <img
          src="/mC_cATERING-removebg-preview.png"
          alt="MC Catering"
          style={{
            width: isMobile ? "140px" : "220px",
            marginBottom: "20px",
          }}
        />

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
            margin: "0 auto 25px",
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
            display: "inline-block",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          }}
        >
          Contactate con nosotros
        </a>
      </div>

      {/* BOTONES FLOTANTES */}
      <div
        style={{
          position: "absolute",
          bottom: 25,
          right: 25,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 1000,
        }}
      >
        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/mcatering__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            style={{
              width: isMobile ? "48px" : "60px",
              height: isMobile ? "48px" : "60px",
              borderRadius: "50%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
          />
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/5491141687448"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            style={{
              width: isMobile ? "52px" : "65px",
              height: isMobile ? "52px" : "65px",
              borderRadius: "50%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
          />
        </a>
      </div>
    </div>
  );
}
