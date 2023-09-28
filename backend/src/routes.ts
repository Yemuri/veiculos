import { Router } from "express"
import { CriarClienteController } from "./controllers/Clientes/CriarClienteController"
import { ListarClienteController } from "./controllers/Clientes/ListarClienteController"
import { ListarClienteUnicoController } from "./controllers/Clientes/ListarClienteUnicoController"
import { ApagarClienteController } from "./controllers/Clientes/ApagarClienteController"
import { AlterarClienteController } from "./controllers/Clientes/AlterarClienteController"
import { AutenticarClienteController } from "./controllers/Clientes/AutenticarClienteController"
import { CriarFuncionarioController } from "./controllers/Funcionarios/CriarFuncionarioController"
import { AutenticarFuncionarioController } from "./controllers/Funcionarios/AutenticarFuncionarioController"
import { ListarFuncionarioController } from "./controllers/Funcionarios/ListarFuncionarioController"
import { ListarFuncionarioUnicoController } from "./controllers/Funcionarios/ListarFuncionarioUnicoController"
import { AlterarFuncionarioController } from "./controllers/Funcionarios/AlterarFuncionarioController"
import { ApagarFuncionarioController } from "./controllers/Funcionarios/ApagarFuncionarioController"







const roteamento = Router()

//FUNCIONÁRIOS
roteamento.post('/CriarFuncionario', new CriarFuncionarioController().handle)
roteamento.get('/ListarFuncionario', new ListarFuncionarioController().handle)
roteamento.get('/ListarFuncionarioUnico/:id', new ListarFuncionarioUnicoController().handle)
roteamento.put('/AlterarFuncionario', new AlterarFuncionarioController().handle)
roteamento.delete('/ApagarFuncionario', new ApagarFuncionarioController().handle)
roteamento.post('/AutLoginFunc', new AutenticarFuncionarioController().handle)


//CLIENTES
roteamento.post('/CriarCliente', new CriarClienteController().handle)
roteamento.get('/ListarCliente', new ListarClienteController().handle)
roteamento.get('/ListarClienteUnico/:id', new ListarClienteUnicoController().handle)
roteamento.put('/AlterarCliente', new AlterarClienteController().handle)
roteamento.delete('/ApagarCliente', new ApagarClienteController().handle)
roteamento.post('/AutLogin', new AutenticarClienteController().handle)


export { roteamento }