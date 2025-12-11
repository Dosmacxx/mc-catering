export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center py-10">

      {/* LOGO GRANDE */}
      <img
        src="/logo.png"
        alt="Logo"
        className="w-48 md:w-64 lg:w-80 select-none mb-10"
      />

      {/* GALERÍA GRANDE COMO PEDISTE */}
      <div className="flex flex-col items-center gap-10 w-full px-4 max-w-4xl">

        <img src="/eventos/actual2.jpg" className="w-full rounded-xl shadow-lg" />
        <img src="/eventos/actual3.jpg" className="w-full rounded-xl shadow-lg" />

        <img src="/eventos/evento1.jpg" className="w-full rounded-xl shadow-lg" />
        <img src="/eventos/evento2.jpg" className="w-full rounded-xl shadow-lg" />
        <img src="/eventos/evento3.jpg" className="w-full rounded-xl shadow-lg" />
        <img src="/eventos/evento5.jpg" className="w-full rounded-xl shadow-lg" />
        <img src="/eventos/evento6.jpg" className="w-full rounded-xl shadow-lg" />
        <img src="/eventos/evento7.jpg" className="w-full rounded-xl shadow-lg" />
        <img src="/eventos/evento8.jpg" className="w-full rounded-xl shadow-lg" />
        <img src="/eventos/evento9.jpg" className="w-full rounded-xl shadow-lg" />
        <img src="/eventos/evento10.jpg" className="w-full rounded-xl shadow-lg" />

      </div>

    </div>
  );
}

