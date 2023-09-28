import { Request, Response } from "express"
import { AlterarFuncionarioServices } from "../../services/Funcionarios/AlterarFuncionarioServices"

class AlterarFuncionarioController {
    async handle(req: Request, res: Response) {
        const { id, alteraNome, alteraEmail } = req.body
        const alterarFuncionarioServices = new AlterarFuncionarioServices()
        const resposta = await alterarFuncionarioServices.execute({
            id, alteraNome, alteraEmail
        })
        return res.json(resposta)
    }

}

export { AlterarFuncionarioController }