const TemplateExpressions = () => {

  const name = "Naju";
  const data = {
    age: 22,
    job: "Developer",
  };

  return(
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <h2>Você trabalha como {data.job}</h2>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions