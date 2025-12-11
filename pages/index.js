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
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 4rem)",
          color: "white",
          fontWeight: "bold",
          textShadow: "0 3px 10px rgba(0,0,0,0.8)",
        }}
      >
        MC CATERING
      </h1>
    </div>
  );
}
