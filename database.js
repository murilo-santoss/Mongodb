/**
 * Modulo de conexão com o banco de dados 
 * Uso do framework mongoose
 */

// importação do mongoose
const mongoose = require('mongoose')

//configuração do banco de dados
//ip/link do servidor, autenticação
const url = 'mongodb+srv://admin:123Senac@cluster0.39dtf.mongodb.net/dbclientes'

// Validação (evitar a abertura de varias conexões)
let conectado = false

// Método para conectar com banco de dados
const conectar = async () => {
    // Se não estiver conectado
    if (!conectado) {
        // Conectado com o banco de dados
        try {
            await mongoose.connect(url) //conectar
            conectado = true //Setar a variável
            console.log("MongoDB Conectado")
        } catch (error) {
            console.log(error)
        }

    }

}

// Método para desconectar do banco de dados
const desconectar = async () => {
    // Se estiver conectado
    if (conectado) {
        // Desconectar
        try {
            await mongoose.disconnect(url) // Desconectar
            conectado = false //Setar a variável
            console.log("MongoDB Desconectado")
        } catch (error) {
            console.log(error)

        }

    }
}

// Exportar para o main os métodos conectar e desconectar
module.exports = { conectar, desconectar }
