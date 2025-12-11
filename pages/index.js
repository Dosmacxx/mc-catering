import { useEffect, useState } from "react";

export default function Home() {
  const imagenes = [
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

  const [index, setIndex] = useState(0);

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
        paddingLeft: "5vw",
        paddingRight: "5vw",
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
            height: "80px",
            width: "auto",
            filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.6))",
          }}
        />
      </header>

      {/* TEXTO PRINCIPAL */}
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 4rem)",
          color: "white",
          fontWeight: "bold",
          textShadow: "0px 5px 15px rgba(0,0,0,0.9)",
          zIndex: 10,
          marginLeft: "20px",
        }}
      >
        MC CATERING
      </h1>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/5491141687448"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
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
            boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
            cursor: "pointer",
          }}
        />
      </a>
    </div>
  );
}

