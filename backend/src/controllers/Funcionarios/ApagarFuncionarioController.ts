import { Request, Response } from "express"
import { ApagarFuncionarioServices } from "../../services/Funcionarios/ApagarFuncionarioServices"

class ApagarFuncionarioController {
    async handle(req: Request, res: Response) {
        const { remover } = req.body
        const apagarFuncionarioServices = new ApagarFuncionarioServices()
        const apagar = await apagarFuncionarioServices.execute({
            remover
        })
        return res.json(apagar)
    }
}

export { ApagarFuncionarioController }