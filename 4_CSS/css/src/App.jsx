import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Naju");
  const redTitle = false;

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", backgroundColor: "orange"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color:"purple"}) : ({color:"pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color:"purple"}) : ({color:"pink"})}>CSS dinâmico</h2>
      <h2 style={name === "Naju" ? ({color:"purple", backgroundColor:"pink"}) : null}>CSS dinâmico</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
    </>
  )
}

export default App
