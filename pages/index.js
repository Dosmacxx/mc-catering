import { useEffect, useState } from "react";

export default function Home() {
  const imagenes = [
    "/eventos/actualidad.jpg",
    "/eventos/evento10.jpg",
    "/eventos/evento9.jpg",
    "/eventos/actual.jpg",
    "/eventos/actual2.jpg",
    "/eventos/actual3.jpg",
    "/eventos/evento1.jpg",
    "/eventos/evento2.jpg",
    "/eventos/evento3.jpg",
    "/eventos/evento4.jpg",
    "/eventos/evento5.jpg",
    "/eventos/evento6.jpg",
    "/eventos/evento7.jpg",
    "/eventos/evento8.jpg"
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
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "5vw",
  }}
>
  {/* Imagen de fondo controlada */}
  <img
    src={imagenes[index]}
    alt="MC Catering"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "120%",        // ⭐ evita que la foto se vea gigante o pixelada
      height: "120%",       // ⭐ mantiene proporción sin deformar
      objectFit: "cover",   // ⭐ asegura que la foto siempre se vea bien
      objectPosition: "center",
      transform: "translate(-50%, -50%)",
      filter: "brightness(0.65)",  // ⭐ oscurece para que el texto se lea siempre
      transition: "opacity 1s ease-in-out",
      zIndex: -1,
    }}
  />

  <h1
    style={{
      fontSize: "clamp(2rem, 5vw, 4rem)",
      color: "white",
      fontWeight: "900",
      textShadow: "0px 3px 15px rgba(0,0,0,0.9)",
      zIndex: 10,
    }}
  >
    MC CATERING
  </h1>
</div>
