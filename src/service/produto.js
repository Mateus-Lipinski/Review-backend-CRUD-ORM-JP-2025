import Produto from "../model/produto.js";


class ServiceProduto {
    
    async PegarTodos() {
        return await Produto.findAll()
    }

    async PegarUm(id) {
        const produto = await Produto.findByPk(id)
        return produto
    }
    
    async Criar(nome, disponivel, quantidade) {
        await Produto.create({ nome, disponivel, quantidade })
    }
    
    async Alterar(id, nome, disponivel, quantidade) {}
    
    async Deletar(id) {
        await Produto.destroy(id)
    }
}

export default new ServiceProduto()