import Exemplo from "./components/exemplo";

function App() {
  
  //Declaração de Variáveis
  let nome = "Fiap";
  let apelido = "Fiapinho";
  let novoNome = nome.toUpperCase();

  //Criando Função
  
  function soma(valor1,valor2){
    return valor1 + valor2
  }

  //Arrow Function
  const desconto = (valor3,valor4)=>{
    return valor3 - valor4
  }
  function enviar(){
    alert(`Seja Bem-Vindo ${apelido}`)
  }

  return (
    <>
      <h1>Seja Bem-Vindo {novoNome} {apelido}</h1>
      <h2>A soma da Função é: {soma(10,8)}</h2>
      <h3>o desconto da Arrow Function é: {desconto(10,8)}%</h3>
      <button onClick={enviar}>Clique Aqui</button>

      <Exemplo/>
    </>
  )
}

export default App
