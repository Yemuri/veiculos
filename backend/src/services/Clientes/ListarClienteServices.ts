import clientePrisma from "../../prisma";

class ListarClienteServices {
    async execute() {
        const clientes = await clientePrisma.cliente.findMany({})
        return (clientes)
    }
}

export { ListarClienteServices }