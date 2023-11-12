import Produto from '../Modelo/Produtos.js'
import Categoria from '../modelo/Categoria.js';
export default class ProdutoDAO {
  constructor() {}

  async gravar(produto, conexao) {
    if(produto instanceof Produto)
    {  
      const sql =
        "INSERT INTO produtos (nome, descricao, preco, estoque, fornecedor_id) VALUES (?, ?, ?, ?, ?)";
      const valores = [
        produto.nome,
        produto.descricao,
        produto.preco,
        produto.estoque,
        produto.fornecedorId,
      ];
      console.log(valores);
      try {
        const [result] = await conexao.execute(sql, valores);
        return result.insertId;
      } catch (error) {
        throw error;
      }
    }
  }

  async atualizar(produto, conexao) {
    if(produto instanceof Produto)
    {  
      const sql =
        "UPDATE produtos SET nome = ?, descricao = ?, preco = ?, estoque = ?, fornecedor_id = ? WHERE codigo = ?";
      const valores = [
        produto.nome,
        produto.descricao,
        produto.preco,
        produto.estoque,
        produto.fornecedorId,
        produto.codigo,
      ];

      try {
        await conexao.execute(sql, valores);
      } catch (error) {
        throw error;
      }
    }
  }

  async consultar(conexao) {
 
      const sql = "SELECT * FROM produtos";

      try {
        const [rows] = await conexao.query(sql);
        return rows;
      } catch (error) {
        throw error;
      }
    
  }
  async consultarID(id, conexao) {
  
      const sql = "SELECT * FROM produtos WHERE codigo = ?";

      try {
        const [rows] = await conexao.query(sql, [id]);
        return rows[0];
      } catch (error) {
        throw error;
      }
    
  }

  async excluir(produto, conexao) {
    if(produto instanceof Produto)
    {  
      const sql = "DELETE FROM produtos WHERE codigo = ?";

      try {
        await conexao.execute(sql, [produto.codigo]);
      } catch (error) {
        throw error;
      }
    }
  }
}
