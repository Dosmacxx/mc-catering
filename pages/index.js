import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "/eventos/actual2.jpg",
    "/eventos/actual3.jpg",
    "/eventos/evento1.jpg",
    "/eventos/evento2.jpg",
    "/eventos/evento3.jpg",
    "/eventos/evento5.jpg",
    "/eventos/evento6.jpg",
    "/eventos/evento7.jpg",
    "/eventos/evento8.jpg",
    "/eventos/evento9.jpg",
    "/eventos/evento10.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* LOGO */}
      <header
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 20,
        }}
      >
        <img
          src="/22ab25c1-d71c-4fe5-bc02-54f5f53c3eb2-removebg-preview.png"
          alt="MC Catering"
          style={{
            height: "70px",
            width: "auto",
            filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.5))",
          }}
        />
      </header>

      {/* SLIDESHOW */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <img
          src={images[currentImage]}
          alt="Background"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "55%", // AJUSTÁ ESTE VALOR SI QUERÉS MÁS GRANDE O MÁS CHICO
            height: "auto",
            transform: "translate(-50%, -50%)",
            objectFit: "contain",
            opacity: 0.9,
            transition: "opacity 0.8s ease",
          }}
        />
      </div>

      {/* TEXTO */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          width: "100%",
          textAlign: "center",
          color: "white",
          textShadow: "0px 0px 10px rgba(0,0,0,0.9)",
        }}
      >
        <h1 style={{ fontSize: "48px", margin: 0 }}>MC CATERING</h1>
        <p style={{ fontSize: "22px", marginTop: "10px" }}>
          Servicios gastronómicos para eventos sociales y corporativos
        </p>
      </div>

      {/* BOTÓN DE WHATSAPP */}
      <a
        href="https://wa.me/5491141687448"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 1000,
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
            cursor: "pointer",
          }}
        />
      </a>
    </div>
  );
}

