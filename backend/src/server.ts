import express, { Response, Request, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { roteamento } from './routes'

const app = express()
app.use(express.json())
app.use(cors())
app.use(roteamento)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'Erro',
        message: 'Erro interno do servidor'
    })

})

app.listen(3333, () => console.log('Servidor rodando na porta 3333'))
