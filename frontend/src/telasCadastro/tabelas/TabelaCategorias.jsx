import { Container, Table, Button } from "react-bootstrap";
import "./tabela.css";
import { useSelector, useDispatch } from "react-redux";
import { remover } from "../../redux/categoriaReducer";


export default function TabelaCategorias(props) {
  const { status, mensagem, listaCategorias } = useSelector((state) => state.categoria);
  const dispatch = useDispatch();

  function excluirCategoria(categoria) {
    if (window.confirm("Deseja realmente excluir esse Fornecedor?")) {
      dispatch(remover(categoria));
    }
  }
  function editarCategoria(categoria){
    props.setCategoriaParaEdicao(categoria);
    props.setModoEdicao(true)
    props.exibirFormulario(true);
  }
  return (
    <Container>
      <Button
        type="button"
        onClick={() => {
          props.exibirFormulario(true);
        }}
        variant="primary"
      >
        Nova Categoria
      </Button>
      <Table className="table-custom" striped bordered hover>
        <thead>
          <tr>
            <th>Nome da Categoria</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaCategorias.map((categoria) => {
            return (
              <tr key={categoria.nomeCategoria}>
                <td>{categoria.nomeCategoria}</td>
                <td>{categoria.descricao}</td>
                
                <td>
                  <Button
                    className="btn-excluir"
                    onClick={() => {
                      excluirCategoria(categoria);
                    }}
                  >
                    Excluir
                  </Button>
                  <Button className="btn-editar" onClick={()=>{ editarCategoria(categoria)}} >Editar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
