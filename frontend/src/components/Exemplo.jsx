import {useState} from "react"

function Exemplo(){
    //Hook - useState - Manipula o estado da variável
    const[mensagem,setMensagem]=useState("Olá mundo");
    const[endpointAtual,setEndPointAtual]=useState("");
    const[status,setStatus]=useState("");

    //Criando a função busca
    const busca= async(api)=>{
        setEndPointAtual(api);//
        setMensagem("Carregando...");//
        setStatus("loading...");//Define status do carregamento

        //Tratamento de erro
        try{
            //Fazendo uma requisição de get no endpoint usando a função fetch
            const resposta = await fetch(`http://localhost:5001/${api}`)
            //Verifica se a resposta está ok.
            if(!resposta.ok){
                console.log(`Erro na requisição ${resposta.status}`)
            }
            const data = await resposta.text();
            setMensagem(data); //Atualiza a mensagem com a resposta do servidor
        }
        catch(error){
            console.log('Erro ao buscar dados');
            setMensagem(`Erro ao conectar ao servidor ${error.mensagem}`);
            setStatus("Error");
        }

    }

    return(
        //Fragment
        <>

            <div>
                <div>
                   <header>
                       <h1>Frontend do Projeto</h1>
                       <p>Acessando o servidor Node</p>
                   </header>
                </div>
                <main>
                    <div>
                        <button onClick={()=>busca("test")}>Acessar Teste</button>
                        <button onClick={()=>busca("system")}>Acessar Sistema</button>
                        <button onClick={()=>busca("about")}>Acessar sobre</button>
                    </div>
                    <div>
                       <h2>Resposta dp servidor:</h2>
                       <p>Endpoint Atual: <span>{endpointAtual || "Nenhum"}</span></p>
                       <p>{mensagem}</p>
                       <p>Status do Servidor: {status}</p>
                   </div>
                </main>

            </div>
        </>
    )
}
export default Exemplo
