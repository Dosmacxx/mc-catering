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
          zIndex: 20,
        }}
      >
        <img
          src="/mC_cATERING-removebg-preview.png"
          alt="MC Catering"
          style={{
            height: "100px",
            width: "auto",
            filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.6))",
          }}
        />
      </header>

      {/* CUADRADO CENTRADO (MISMO DISEÑO / ESCALADO EN MOBILE) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: isMobile
            ? "translate(-50%, -50%) scale(0.85)"
            : "translate(-50%, -50%)",
          transformOrigin: "center",
          background: "rgba(255, 255, 255, 0.92)",
          borderRadius: "20px",
          padding: "50px 40px",
          maxWidth: "700px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0px 10px 35px rgba(0,0,0,0.4)",
          zIndex: 30,
        }}
      >
        <img
          src="/mC_cATERING-removebg-preview.png"
          alt="MC Catering"
          style={{
            width: "120px",
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
            margin: "0 auto 25px auto",
            borderRadius: "4px",
          }}
        />

        <a
          href="https://wa.me/5491141687448"
          target="_blank"
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
          onMouseEnter={(e) => (e.target.style.background = "#5b0000")}
          onMouseLeave={(e) => (e.target.style.background = "#7a0000")}
        >
          Contactate con nosotros
        </a>
      </div>
    </div>
  );
}
