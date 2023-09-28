import { Request, Response } from "express"
import { AlterarClienteServices } from "../../services/Clientes/AlterarClienteServices"

class AlterarClienteController {
    async handle(req: Request, res: Response) {
        const { id, alteraNome, alteraNascimento, alteraCelular, alteraEmail, alteraSenha } = req.body
        const alterarClienteServices = new AlterarClienteServices()
        const resposta = await alterarClienteServices.execute({
            id, alteraNome, alteraNascimento, alteraCelular, alteraEmail, alteraSenha
        })
        return res.json(resposta)

    }
}
export { AlterarClienteController }