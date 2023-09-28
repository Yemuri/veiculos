import { Request, Response } from "express";
import { AutenticarClienteServices } from "../../services/Clientes/AutenticarClienteServices";


class AutenticarClienteController {

    async handle(req: Request, res: Response) {
        const { email, senha } = req.body
        const autenticarClienteServices = new AutenticarClienteServices()
        const resposta = await autenticarClienteServices.execute({
            email, senha
        })
        return res.json(resposta)
    }

}

export { AutenticarClienteController }