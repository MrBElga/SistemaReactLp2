import React, { useState,useEffect } from "react";
import { Container,Alert } from "react-bootstrap";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedor from "./tabelas/TabelaFornecedores";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function TelaCadastroFornecedor(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [exibirAlert, setExibirAlert] = useState(false);
  const [listaFornecedores, setListaFornecedores] = useState([]);
  const [fornecedorParaEdicao, setFornecedorPAraEdicao] = useState({
    nome:"",
    cnpj: "",
    email: "",
    telefone: "",
    celular: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "SP",
    cep: ""
  });
  const [modoEdicao, setModoEdicao] = useState(false);

  const exibirAlertTemporariamente = () => {
    setExibirAlert(true);
    setTimeout(() => {
      setExibirAlert(false);
    }, 3000);
  };

  useEffect(() => {
    if (exibirAlert) {
      exibirAlertTemporariamente();
    }
  }, [exibirAlert]);

  return (
    <>
      <Pagina>
        <Container className="container-centralizadoTelas">
          {exibirFormulario ? (
            <FormCadFornecedor
              exibirFormulario={setExibirFormulario}
              listaFornecedores={listaFornecedores}
              setListaFornecedores={setListaFornecedores}
              fornecedorParaEdicao={fornecedorParaEdicao}
              setFornecedorPAraEdicao={setFornecedorPAraEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
              exibirAlert={exibirAlert}
              setExibirAlert={setExibirAlert}
            />
          ) : (
            <TabelaFornecedor
              exibirFormulario={setExibirFormulario}
              listaFornecedores={listaFornecedores}
              setListaFornecedores={setListaFornecedores}
              fornecedorParaEdicao={fornecedorParaEdicao}
              setFornecedorPAraEdicao={setFornecedorPAraEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          )}
        </Container>
        {
          exibirAlert&&( <Alert variant="success">
                          Fornecedor cadastrada com sucesso!!
                        </Alert>)
        }
      </Pagina>
    </>
  );
}
