import clientePrisma from '../../prisma'
import { compare } from 'bcryptjs'

interface AuthLogin {
    email: string
    senha: string
}

class AutenticarClienteServices {
    async execute({ email, senha }: AuthLogin) {

        const usuario = await clientePrisma.cliente.findFirst({
            where: {
                email: email
            }
        })
        if (!usuario) {
            throw new Error('Usuário/Senha Incorretos')
        }
        const autenticado = await compare(senha, usuario.senha)
        if (!autenticado) {
            throw new Error('Usuário/Senha Incorretos')
        }

        return ({ dados: 'Autenticação Com Sucesso' })

    }
}

export { AutenticarClienteServices }