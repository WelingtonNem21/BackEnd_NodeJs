import Fastifay from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'


const app = Fastifay({ logger: true })

app.setErrorHandler((error, request, reply) => {

    reply.code(400).send({ Messagem: error.message })
})


const start = async () => {

    await app.register(cors)
    await app.register(routes)

    try {
        await app.listen({ port: 3333 })

    } catch (error) {

        process.exit(1)
    }
}

start()