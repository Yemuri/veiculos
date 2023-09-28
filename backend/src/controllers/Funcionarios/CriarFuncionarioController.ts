import { Request, Response } from "express"
import { CriarFuncionarioServices } from "../../services/Funcionarios/CriarFuncionarioServices"


class CriarFuncionarioController {
    async handle(req: Request, res: Response) {

        const {
            nome, cpf, nascimento, celular, email, senha } = req.body
        // console.log(req.body)
        const criarFuncionarioServices = new CriarFuncionarioServices()
        const funcionarios = await criarFuncionarioServices.execute({
            nome, cpf, nascimento, celular, email, senha
        })
        return res.json(funcionarios)


    }
}



export { CriarFuncionarioController }