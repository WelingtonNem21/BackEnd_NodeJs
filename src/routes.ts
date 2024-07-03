import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'
import { CreateCostomerControllers } from './controllers/CreateCostomerControllers'


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {


    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {

        return { ok: true }
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {

        return new CreateCostomerControllers().hendle(request, reply)

    })
}