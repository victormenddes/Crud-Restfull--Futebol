
import { Router } from "express"

import { TecnicoController } from "../controllers/tecnicoController"
import { TimeController } from "../controllers/timeController"
import { JogadorController } from "../controllers/jogadorController"

export const router = Router()


// Rotas Tabela Tecnico-Relação
router.get('/', TecnicoController.home)
router.post('/tecnicos/:cadastro', TecnicoController.createTecnico)
router.get('/alltecnicos', TecnicoController.getALLTecnicos)
router.get('/tecnicos/:id', TecnicoController.fidById)
router.put('/tecnicos/:id', TecnicoController.update)
router.delete('/tecnicos/:id', TecnicoController.deletar)


// Rotas Tabela Time
router.get('/home', TimeController.home)
router.post('/times/:cadastro', TimeController.create)
router.get('/timess', TimeController.findAll)
router.get('/timess/:id', TimeController.fidById)
router.put('/timess/:id', TimeController.update)
router.delete('/timess/:id', TimeController.deletar)



// Rotas Tabela Jogador
router.get('/home', JogadorController.home)
router.post('/jogadores/:cadastro', JogadorController.create)
router.get('/jogadores', JogadorController.findAll)
router.get('/jogador/:id', JogadorController.fidById)
router.put('/jogador/:id', JogadorController.update)
router.delete('/jogador/:id', JogadorController.deletar)



