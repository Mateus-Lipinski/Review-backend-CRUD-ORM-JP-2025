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

        if(!id) {
            throw new Error("Favor informar o ID!")
        }

        const produtoVelho = await Produto.findByPk(id)

        if(!produtoVelho) {
            throw new Error(`Usuário ${id} não foi encontrado!`)
        }
    
        produtoVelho.nome = nome || produtoVelho.nome
        produtoVelho.disponivel = disponivel || produtoVelho.disponivel
        produtoVelho.quantidade = quantidade || produtoVelho.quantidade
        
        await produtoVelho.save()
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