import { Request, Response } from "express"
import { ListarFuncionarioUnicoServices } from "../../services/Funcionarios/ListarFuncionarioUnicoServices"

class ListarFuncionarioUnicoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const listarFuncionarioUnicoServices = new ListarFuncionarioUnicoServices()
        const resposta = await listarFuncionarioUnicoServices.execute({
            id
        })
        return res.json(resposta)
    }
}


export { ListarFuncionarioUnicoController }