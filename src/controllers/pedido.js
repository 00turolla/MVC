const pedidos = require("../../dados/pedidos.json")

function subotais() {
    pedidos.forEach(p => {
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1
    pedidos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    subotais()
    res.json(pedidos)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    pedidos.forEach((pedidos) => {
        if(pedidos.id == id){
            pedidos.id = dados.id
            pedidos.clientes_id = dados.clientes_id
            pedidos.produto = dados.produto
            pedidos.preco = dados.preco
            pedidos.quantidade = dados.quantidade
        }
    });
    res.send("atualizado")

}
const altparte = (req, res) => {
    const id = req.params.id
    const info = req.body
    
    const busca = pedidos.find((pedido) => pedido.id == id)

    Object.keys(info).forEach((i) =>{
        busca[i] = info[i]
    })

    res.send("atualizado").end()
}
const excluir = (req, res) => {
    const id= req.params.id
    
    pedidos.forEach((pedido, indice) => {
        if(pedido.id == id){
            pedidos.splice(indice, 1)
        }
    })
    res.send("cliente excluido com sucesso")
}

module.exports = {
    criar, listar, alterar, excluir, altparte
}