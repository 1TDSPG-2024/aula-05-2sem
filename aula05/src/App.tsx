import Cabecalho from "./Cabecalho/Cabecalho";

export default function app() {

  const pagina: string = "Minha Página Principal!";
  const nrPagina: number = 2;
  const status = "loading";
  const aviso = () => alert(pagina);

  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}>

        {/* ul>li*5>a[href=#]{Aluno-$} */}
        <ul>
          <li><a href="#">Aluno-1</a></li>
          <li><a href="#">Aluno-2</a></li>
          <li><a href="#">Aluno-3</a></li>
          <li><a href="#">Aluno-4</a></li>
          <li><a href="#">Aluno-5</a></li>
        </ul>

      </Cabecalho>
    </div>
  );
}

