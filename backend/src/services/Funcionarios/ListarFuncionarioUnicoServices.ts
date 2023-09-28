import clientePrisma from "../../prisma"

interface ListarFuncionario {
    id: string

}

class ListarFuncionarioUnicoServices {
    async execute({ id }: ListarFuncionario) {
        const resposta = await clientePrisma.funcionario.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return resposta

    }
}

export { ListarFuncionarioUnicoServices }