import React from 'react';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>MC CATERING | Eventos Exclusivos</title>
                {/* Enlazar las fuentes para que el diseño se vea bien */}
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* 🌟 BARRA DE NAVEGACIÓN 🌟 */}
            <nav className="navbar">
                <div className="logo">MC CATERING</div>
                <div className="menu">
                    <a href="#servicios">Servicios</a>
                    <a href="#trayectoria">Trayectoria</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </nav>

            {/* 🥇 SECCIÓN HERO (PORTADA GOURMET) 🥇 */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1>EXPERIENCIAS GOURMET <br /> PARA MOMENTOS ÚNICOS</h1>
                    <p>Maître · Camareros · Alta Cocina · Logística Integral</p>
                    <a href="#contacto" className="btn-dorado">SOLICITAR PRESUPUESTO</a>
                </div>
            </header>

            {/* 🛠️ SECCIÓN DE SERVICIOS (TARJETAS ELEGANTES) 🛠️ */}
            <section id="servicios" className="servicios-section">
                <h2>Nuestros Servicios: La Maestría detrás de su Evento</h2>
                <div className="servicios-grid">
                    
                    {/* Tarjeta 1: Maître Profesional */}
                    <article className="servicio-card">
                        <span className="icon-dorado">🤵</span>
                        <h3>Maître Profesional</h3>
                        <p>Liderazgo y dirección de personal. Garantizamos ejecución impecable, protocolo y tiempos precisos.</p>
                    </article>

                    {/* Tarjeta 2: Camareros */}
                    <article className="servicio-card">
                        <span className="icon-dorado">🥂</span>
                        <h3>Camareros para Eventos</h3>
                        <p>Personal seleccionado y uniformado. Atención atenta y discreta para eventos sociales y corporativos.</p>
                    </article>

                    {/* Tarjeta 3: Barman */}
                    <article className="servicio-card">
                        <span className="icon-dorado">🍹</span>
                        <h3>Barman y Barra Móvil</h3>
                        <p>Servicio de coctelería profesional, creación de cartas personalizadas y gestión completa de bebidas.</p>
                    </article>

                    {/* Tarjeta 4: Logística */}
                    <article className="servicio-card">
                        <span className="icon-dorado">📋</span>
                        <h3>Logística y Gestión de Salón</h3>
                        <p>Armado, montaje y atención completa del salón. Coordinación de proveedores y optimización del espacio.</p>
                    </article>
                    
                </div>
                <a href="#contacto" className="btn-dorado">¿NECESITA PERSONAL PROFESIONAL? Contáctenos ahora</a>
            </section>

            {/* 📸 SECCIÓN TRAYECTORIA (POR CONSTRUIR) 📸 */}
            <section id="trayectoria" className="trayectoria-section">
                <h2>Eventos de Alto Nivel: La Confianza de Personalidades Destacadas</h2>
                <p>La discreción y el profesionalismo de nuestro equipo nos convierten en la opción de confianza para eventos y figuras de élite.</p>
                
                <div className="gallery-placeholder">
                    [Aquí irá el código del Carrusel de Famosos en el siguiente paso.]
                </div>
                
            </section>

            {/* 📝 SECCIÓN DE CONTACTO (FORMULARIO) 📝 */}
            <section id="contacto" className="contacto-section">
                <div className="contacto-card">
                    <h2>Solicitud de Presupuesto Rápida</h2>
                    <p>Cuéntenos sobre su evento y le responderemos con una propuesta personalizada en menos de 24 horas.</p>
                    
                    <form>
                        <input type="text" name="nombre" placeholder="Nombre completo" required />
                        <input type="text" name="empresa_salon" placeholder="Empresa / Salón" />
                        <input type="email" name="email" placeholder="Email de contacto" required />
                        <textarea name="descripcion" placeholder="Descripción del evento (Fecha, Cantidad de invitados, Tipo de servicio)" rows="4" required></textarea>
                        <button type="submit" className="btn-dorado">ENVIAR SOLICITUD</button>
                    </form>
                </div>
            </section>

            {/* 💬 BOTÓN FLOTANTE DE WHATSAPP (AQUÍ DEBES PEGAR TU ENLACE) */}
            <a href="URL-A-TU-WHATSAPP" className="whatsapp-float" target="_blank">
                <span style={{ fontSize: '30px' }}>💬</span> 
            </a>

        </>
    );
};

export default Home;
