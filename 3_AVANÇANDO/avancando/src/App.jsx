import './App.css'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

//importando a imagem
import Cat from './assets/cat2.jpg';
import { useState } from 'react';

function App() {

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src='/cat1.jpg' alt='gatinho branco no pc' />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={Cat} alt='gatinho preto no pc' />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}

      {/* destructuring props */}
      <CarDetails brand="VW" km={100000} color="Azul"  newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="branco" km={0} newCar={false} />
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  )
}

export default App
