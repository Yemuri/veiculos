import clientePrisma from "../../prisma"

interface AlterarCliente {
    id: string
    alteraNome: string,
    alteraNascimento: string,
    alteraCelular: string,
    alteraEmail: string,
    alteraSenha: string

}

class AlterarClienteServices {
    async execute({ id, alteraNome, alteraNascimento, alteraCelular, alteraEmail, alteraSenha }: AlterarCliente) {
        const data = new Date(Date.now())
        const resposta = await clientePrisma.cliente.update({
            where: {
                id: id
            },
            data: {
                nome: alteraNome,
                nascimento: alteraNascimento,
                celular: alteraCelular,
                email: alteraEmail,
                senha: alteraSenha,
                update_at: data
            }
        })

        return { dados: 'Dados alterados com sucesso' }
    }


}

export { AlterarClienteServices }