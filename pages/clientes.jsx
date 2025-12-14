export default function Clientes() {
  const fotos = [
    "/eventos/486639986_2409230922811064_6913951510488065412_n.jpg",
    "/eventos/486644431_2409239572810199_6103544668730927203_n.jpg",
    "/eventos/486674804_2409230929477730_6388328434647548906_n.jpg",
    "/eventos/486715351_2409230886144401_6581670749362074590_n.jpg",
    "/eventos/487019269_2409230806144409_571007062739581750_n.jpg",
    "/eventos/487060662_2409340202800136_7219962016427232909_n.jpg",
    "/eventos/487110101_2409230909477732_5966797614203556914_n.jpg",
    "/eventos/487122351_2409230796144410_2119704554160846939_n.jpg",
    "/eventos/505199156_9833955156713424_2802450864760707918_n.jpg",
    "/eventos/506698945_9875070239268582_8326153832447102609_n.jpg",
    "/eventos/508729865_9888050207970585_1930819407111817128_n.jpg",
    "/eventos/evento1.jpg",
    "/eventos/evento2.jpg",
    "/eventos/evento3.jpg",
    "/eventos/evento5.jpg",
    "/eventos/evento6.jpg",
    "/eventos/evento9.jpg",
    "/eventos/evento10.jpg",
    "/eventos/3df67b37-2873-4b0a-9373-987ed9309d27.jpg",
    "/eventos/67878355_2230042180438131_5081894575522447360_n.jpg",
    "/eventos/78605313_2463309620444718_858487224289722368_n.jpg",
    "/eventos/79161132_2476316449144035_1996761116595716096_n.jpg",
    "/eventos/79219159_2463310270444653_4887827096727977984_n.jpg",
    "/eventos/79227206_2463309823778031_8301562576416800768_n.jpg",
    "/eventos/486327500_2409230852811071_1254837434862832219_n.jpg",
    "/eventos/486356737_2409230816144408_1492552407672470192_n.jpg",
    "/eventos/486498490_2409230869477736_2693140930540061128_n.jpg",
    "/eventos/486512551_2409230926144397_3446241288108723516_n.jpg",
    "/eventos/486574922_2409239816143508_8993328688818785378_n.jpg",
    "/eventos/486601170_2409231429477680_2244331940694224376_n.jpg",
    "/eventos/486602048_2409230786144411_287624676993910607_n.jpg",
    "/eventos/486626399_2409339896133500_5490051898498581316_n.jpg",
  ];

  return (
    <div style={{ padding: "140px 30px" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#7a0000",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          marginBottom: "50px",
        }}
      >
        Clientes Destacados
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {fotos.map((foto, i) => (
          <div
            key={i}
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src={foto}
              alt={`Cliente ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
