export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1>MC-Catering</h1>
        <p>Maître · Camareros · Barman · Logística completa de eventos</p>
        <a className="btn" href="https://wa.me/5491130000000">Contactar por WhatsApp</a>
      </header>

      <section className="services">
        <h2>Servicios</h2>
        <ul>
          <li>Maître profesional</li>
          <li>Camareras/os para eventos sociales y corporativos</li>
          <li>Barman y barra móvil</li>
          <li>Armado y atención completa de salón</li>
        </ul>
      </section>

      <section className="contact">
        <h2>¿Necesitás personal?</h2>
        <p>Completá el formulario y te respondemos al instante.</p>
        <form className="form">
          <input type="text" placeholder="Nombre" required/>
          <input type="text" placeholder="Empresa / Salón"/>
          <input type="email" placeholder="Email" required/>
          <textarea placeholder="Descripción del evento" required></textarea>
          <button className="btn" type="submit">Enviar consulta</button>
        </form>
      </section>
    </main>
  );
}
