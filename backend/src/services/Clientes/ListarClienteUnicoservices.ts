import clientePrisma from "../../prisma"

interface ListarUsuario {
    id: string
}

class ListarClienteUnicoServices {
    async execute({ id }: ListarUsuario) {
        const resposta = await clientePrisma.cliente.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })

        if (!resposta) {
            return (`Cliente ${id} não encontrado`)

        }

        return resposta
    }

}

export { ListarClienteUnicoServices }