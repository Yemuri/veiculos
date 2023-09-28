import { Request, Response } from "express"
import { ApagarClienteServices } from "../../services/Clientes/ApagarClienteServices"


class ApagarClienteController {
    async handle(req: Request, res: Response) {
        const { remover } = req.body
        const apagarClienteServices = new ApagarClienteServices()
        const apagar = await apagarClienteServices.execute({
            remover
        })
        return res.json(apagar)

    }
}

export { ApagarClienteController }