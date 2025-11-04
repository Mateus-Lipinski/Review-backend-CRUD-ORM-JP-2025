import Produto from "../model/produto.js";


class ServiceProduto {
    
    async PegarTodos() {
        return await Produto.findAll()
    }

    async PegarUm(id) {
        
        if(!id) {
            throw new Error("Favor informar o ID!")
        }
        const produto = await Produto.findByPk(id)

        if(!produto) {
            throw new Error(`Usuário ${id} não foi encontrado!`)
        }

        return produto
    }
    
    async Criar(nome, disponivel, quantidade) {

        if(!nome || !disponivel || !quantidade) {
            throw new Error("Favor preencher os campos!")
        }

        await Produto.create({ nome, disponivel, quantidade })
    }
    
    async Alterar(id, nome, disponivel, quantidade) {

        if(!id || !nome || !disponivel || !quantidade) {
            throw new Error("Favor preencher os campos!")
        }

        const produto = await Produto.findByPk(id)

        if(!produto) {
            throw new Error(`Usuário ${id} não foi encontrado!`)
        }
    
        produto.nome = nome
        produto.disponivel = disponivel
        produto.quantidade = quantidade
        
        await produto.save()
    }
    
    async Deletar(id) {

        if(!id) {
            throw new Error("Favor informar o ID!")
        }
        const produto = await Produto.findByPk(id)

        if(!produto) {
            throw new Error(`Usuário ${id} não foi encontrado!`)
        }

        await produto.destroy()
    }
}

export default new ServiceProduto()