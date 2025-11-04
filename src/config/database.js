import { Sequelize } from "sequelize";

class BancoDados {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'estoque',
            host: 'localhost',
            username: 'root', // Usuário
            password: '',
            dialect: 'mysql'
        })
    }
}

export default new BancoDados()