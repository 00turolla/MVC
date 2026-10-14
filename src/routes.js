const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedido = require("./controllers/pedido")

const rotaInicial = (req, res) => {
    res.json("respondendo")
}

router.get('/', rotaInicial)

router.post('/clientes', Cliente.criar)
router.get('/clientes', Cliente.listar)
router.put('/clientes/:id', Cliente.alterar)
router.delete('/clientes/:id', Cliente.excluir)
router.patch('/clientes/:id', Cliente.altparte)

router.post('/pedidos', Pedido.criar)
router.get('/pedidos', Pedido.listar)
router.put('/pedidos/:id', Pedido.alterar)
router.delete('/pedidos/:id', Pedido.excluir)
router.patch('/pedidos/:id', Pedido.altparte)

module.exports = router