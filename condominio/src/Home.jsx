import React from 'react';
import './Home.css'; // Asegúrate de tener los estilos CSS en un archivo separado

const Home = () => {
  return (
    <div className="home-container">
      {/* Barra superior */}
      <header className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" className="logo-icon" />
          <span>Administrador</span>
        </div>
        <nav className="menu">
          <a href="#pagos">Pagos</a>
          <a href="#multas">Multas</a>
          <a href="#permisos">Permisos</a>
          <a href="#perfiles">Perfiles</a>
          <a href="#configuracion">Configuración</a>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="main-content">
        <h2>🔔 Notificaciones de inquilinos</h2>
        <div className="notifications-box">
          {/* Aquí puedes añadir las notificaciones */}
        </div>
      </main>
    </div>
  );
};

export default Home;
