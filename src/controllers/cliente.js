const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1 //autoIncrement
    clientes.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(clientes)
}
const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    clientes.forEach((clientes) => {
        if(clientes.id == id){
            clientes.id = dados.id
            clientes.cpf = dados.cpf
            clientes.nome = dados.nome
        }
    });
    res.send("atualizado")

}

const altparte = (req, res) => {
    const id = req.params.id
    const info = req.body
    
    const busca = clientes.find((cliente) => cliente.id == id)

    Object.keys(info).forEach((i) =>{
        busca[i] = info[i]
    })

    res.send("atualizado").end()
}


const excluir = (req, res) => {
    const id= req.params.id
    
    clientes.forEach((cliente, indice) => {
        if(cliente.id == id){
            clientes.splice(indice, 1)
        }
    })
    res.send("cliente excluido com sucesso")
}

module.exports = {
    criar, listar, alterar, excluir, altparte
}