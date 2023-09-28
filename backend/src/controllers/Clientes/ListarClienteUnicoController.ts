import { Request, Response } from "express"
import { ListarClienteUnicoServices } from "../../services/Clientes/ListarClienteUnicoservices"

class ListarClienteUnicoController {
    async handle(req: Request, res: Response) {

        const { id } = req.params
        const listarClienteUnicoServices = new ListarClienteUnicoServices()
        const resposta = await listarClienteUnicoServices.execute({
            id
        })
        return res.json(resposta)

    }
}

export { ListarClienteUnicoController }