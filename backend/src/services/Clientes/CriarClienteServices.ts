import clientePrisma from "../../prisma"
import { hash } from 'bcryptjs'


interface CriarClientes {
    nome: string
    cpf: string
    nascimento: string
    celular: string
    email: string
    senha: string
}

class CriarClienteServices {
    async execute({
        nome,
        cpf,
        nascimento,
        celular,
        email,
        senha }: CriarClientes) {
        if (
            !nome || !cpf || !nascimento || !celular || !email || !senha)
            throw new Error('Não são permitidos campos em branco')

        const docCadastrado = await clientePrisma.cliente.findFirst({
            where: {
                cpf: cpf
            }
        })
        if (docCadastrado) {
            throw new Error(`O CPF ${cpf} já está cadastrado!`)
        }

        const senhaCrypt = await hash(senha, 8)


        await clientePrisma.cliente.create({
            data: {
                nome: nome,
                cpf: cpf,
                nascimento: nascimento,
                celular: celular,
                email: email,
                senha: senhaCrypt
            }
        })
        return { data: `Cliente cadastrado com sucesso!` }

    }


}

export { CriarClienteServices }
