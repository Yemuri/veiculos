import { Request, Response } from "express"
import { AutenticarFuncionarioServices } from "../../services/Funcionarios/AutenticarFuncionarioServices"



class AutenticarFuncionarioController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body
        const autenticarFuncionarioServices = new AutenticarFuncionarioServices()
        const resposta = await autenticarFuncionarioServices.execute({
            email, senha
        })
        return res.json(resposta)
    }
}


export { AutenticarFuncionarioController }