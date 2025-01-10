//arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
  
  return(
    <div>
      {/* Testando comentário */}
      <h1> Meu primeiro componente </h1>
      <p className="teste">Meu texto</p>
      {/*Testando o reaproveitamento*/}
      <MyComponent />
    </div>
  ); 
};

export default FirstComponent;