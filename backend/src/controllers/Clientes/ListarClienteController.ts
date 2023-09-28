import { Request, Response } from "express"
import { ListarClienteServices } from "../../services/Clientes/ListarClienteServices"

class ListarClienteController {
    async handle(req: Request, res: Response) {
        const listarClientesServices = new ListarClienteServices()
        const clientes = await listarClientesServices.execute()
        return res.json(clientes)
    }
}

export { ListarClienteController }