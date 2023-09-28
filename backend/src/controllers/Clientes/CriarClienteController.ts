import { Request, Response } from "express"
import { CriarClienteServices } from "../../services/Clientes/CriarClienteServices"

class CriarClienteController {
    async handle(req: Request, res: Response) {
        const {
            nome, cpf, nascimento, celular, email, senha } = req.body
        // console.log(req.body)
        const criarClienteServices = new CriarClienteServices()
        const clientes = await criarClienteServices.execute({
            nome, cpf, nascimento, celular, email, senha
        })
        return res.json(clientes)

    }
}

export { CriarClienteController }