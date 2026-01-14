import React, { useState } from 'react';
import './App.css';

function Mipagina() {
  const [nombre, setNombre] = useState("Usuario");
  const [textoUsuario, setTextoUsuario] = useState("");

  const cambiarNombre = () => {
    if (textoUsuario !== "") {
      setNombre(textoUsuario);
      setTextoUsuario("");
    }
  };

  return (
    <div style={{height:"80px", padding: '10%', fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
        <header style={{ backgroundColor: "#DC143C", padding: "20px", color: "white", textAlign: "center", borderRadius: "10px",border: "2px solid black"}}>    
          <h1>Bienvenido {nombre}</h1>
        </header>
        <main style={{ padding: "40px", backgroundColor: "white", textAlign: "center",marginTop: "20px",borderRadius: "10px",boxShadow: "0 4px 8px rgba(0,0,0,0.1)"}}> 
          <h3>Configuración de Perfil</h3>
          <p>Escribe tu nombre profesional abajo para actualizar el encabezado:</p>
          <input 
            type='text'
            placeholder='Ej: Pedro Juan y Diego'
            value={textoUsuario}
            onChange={(e) => setTextoUsuario(e.target.value)}
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc',width: '60%',fontSize: '16px',marginBottom: '20px'}} />
          <br/>
          <button 
            onClick={cambiarNombre}
            style={{ padding: '15px 30px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer',fontWeight: 'bold'}}>
            ACTUALIZAR NOMBRE ARRIBA
          </button>
        </main>
    </div>
  );
}
export default Mipagina;  