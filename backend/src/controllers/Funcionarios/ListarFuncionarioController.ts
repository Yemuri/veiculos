import { Request, Response } from "express"
import { ListarFuncionarioServices } from "../../services/Funcionarios/ListarFuncionarioServices"

class ListarFuncionarioController {
    async handle(req: Request, res: Response) {
        const listarFuncionarioServices = new ListarFuncionarioServices()
        const listarFuncionarios = await listarFuncionarioServices.execute()

        return res.json(listarFuncionarios)
    }
}

export { ListarFuncionarioController }