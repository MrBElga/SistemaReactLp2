import {Container, Table, Button } from "react-bootstrap";
import "./tabela.css";
import { useSelector, useDispatch } from "react-redux";
import { remover } from "../../redux/clienteReducer";

export default function TabelaClientes(props) {
  const {status,mensagem,listaClientes} = useSelector(state=>state.cliente);
  const dispatch = useDispatch();
     function excluirCliente(cliente) {
        if (window.confirm('Deseja realmente excluir esse cliente?')) {
          dispatch(remover(cliente));
        }
    }

    function editarCliente(cliente){
      props.setClienteParaEdicao(cliente);
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
            Novo Cliente
          </Button>
          <Table className="table-custom" striped bordered hover>
            <thead>
              <tr>
                <th>CPF</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Endereço/Nº</th>
                <th>Bairro</th>
                <th>Cidade/UF</th>
                <th>CEP</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {listaClientes.map((cliente) => {
                return (
                  <tr key={cliente.cpf}>
                    <td>{cliente.cpf}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.endereco + ", n " + cliente.numero}</td>
                    <td>{cliente.bairro}</td>
                    <td>{cliente.cidade}/{cliente.uf}</td>
                    <td>{cliente.cep}</td>
                    <td>
                      <Button
                        className="btn-excluir"
                        onClick={() => {
                          excluirCliente(cliente);
                        }}
                      >
                        Excluir
                      </Button>
                      <Button className="btn-editar"  onClick={()=>{ editarCliente(cliente)}}>Editar</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      );
}