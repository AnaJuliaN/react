import './App.css'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

//importando a imagem
import Cat from './assets/cat2.jpg';

function App() {
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
    </div>
  )
}

export default App
