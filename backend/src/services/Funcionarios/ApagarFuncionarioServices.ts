import clientePrisma from "../../prisma"

interface ApagarFuncionario {
    remover: string
}

class ApagarFuncionarioServices {
    async execute({ remover }: ApagarFuncionario) {
        const id_testado = await clientePrisma.funcionario.findFirst({
            where: {
                id: remover
            }
        })
        if (!id_testado) {
            return { info: 'Id não encontrado' }
        }
        await clientePrisma.funcionario.delete({
            where: {
                id: remover
            }
        })
        return { dados: `Funcionário ${remover} apagado com sucesso!` }
    }
}

export { ApagarFuncionarioServices }