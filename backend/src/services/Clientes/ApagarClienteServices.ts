import clientePrisma from "../../prisma"

interface ApagarCliente {
    remover: string
}

class ApagarClienteServices {
    async execute({ remover }: ApagarCliente) {
        const id_testado = await clientePrisma.cliente.findFirst({
            where: {
                id: remover
            }
        })
        if (!id_testado) {
            return { info: `ID ${remover} não encontrado` }
        }
        await clientePrisma.cliente.delete({
            where: {
                id: remover
            }
        })
        return { dados: `Cliente ${remover} apagado com sucesso!` }
    }
}

export { ApagarClienteServices }