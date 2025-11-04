import BancoDados from '../config/database.js'

class Produto {

    constructor() {
        this.model = BancoDados.db.define('produtos', {
            id: {
                type: BancoDados.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: BancoDados.db.Sequelize.STRING
            },
            disponivel: {
                type: BancoDados.db.Sequelize.BOOLEAN
            },
            quantidade: {
                type: BancoDados.db.Sequelize.INTEGER
            }
        })
    }
}

export default new Produto().model