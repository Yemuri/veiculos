import clientePrisma from "../../prisma"

interface AlterarFuncionario {
    id: string
    alteraNome: string
    alteraEmail: string
}

class AlterarFuncionarioServices {
    async execute({ id, alteraNome, alteraEmail }: AlterarFuncionario) {
        const data = new Date(Date.now())
        await clientePrisma.funcionario.update({
            where: {
                id: id
            },
            data: {
                nome: alteraNome,
                email: alteraEmail,
                update_at: data
            }
        })
        return { dados: 'Dados alterados com sucesso' }
    }
}

export { AlterarFuncionarioServices }