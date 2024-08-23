import Cabecalho from "./components/Cabecalho/Cabecalho";
import Exemplo from "./components/Exemplo/Exemplo"
import Exemplo2 from "./components/Exemplo2/Exemplo2"

export default function App() {

  const pagina:string = "Minha página principal!";
  const nrPagina:number = 2;
  const status = "loading";
  const aviso = ()=> alert(pagina);
  
  const foto:string = "https://via.placeholder.com/150"
  const nome =  "João"
  const idade = 20
  const profissao = "Dev" 
  
  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}>
          <ul>
            <li><a href="#">Aluno-1</a></li>
            <li><a href="#">Aluno-2</a></li>
            <li><a href="#">Aluno-3</a></li>
            <li><a href="#">Aluno-4</a></li>
            <li><a href="#">Aluno-5</a></li>
          </ul>
      </Cabecalho>  
      <Exemplo name={"Victor"} outroAlerta={()=> alert("Atenção")}/> 
      <Exemplo2 foto={foto} nome={nome} idade={idade} profissao={profissao} />
    </div>
  );
}