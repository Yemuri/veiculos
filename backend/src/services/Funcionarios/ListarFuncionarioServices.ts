import clientePrisma from "../../prisma"


class ListarFuncionarioServices {
    async execute() {
        const listarFuncionarios = await clientePrisma.funcionario.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                create_at: true,
                update_at: true
            }
        })
        return (listarFuncionarios)
    }

}

export { ListarFuncionarioServices }