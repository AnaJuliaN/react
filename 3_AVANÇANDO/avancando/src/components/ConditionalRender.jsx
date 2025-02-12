import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Kaue");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      
      <h1>If ternário</h1>
      {name === "Naju" ? (
        <div>
          <p>O nome é Naju</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado :c</p>
        </div>
      )}
      <button onClick={() => setName("Naju")}>Clique aqui!</button>
    </div>
  )
}

export default ConditionalRender