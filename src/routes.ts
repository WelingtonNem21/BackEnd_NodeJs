import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'
import { CreateCostomerControllers } from './controllers/CreateCostomerControllers'
import { ListeCostomerControllers } from './controllers/ListeCostomerControllers'
import { DeleteCostomerControllers } from './controllers/DeleteCostomerControllers'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {


    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {

        return { ok: true }
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {

        return new CreateCostomerControllers().hendle(request, reply)

    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {

        return new ListeCostomerControllers().hendle(request, reply)

    })
    fastify.delete("/customers", async (request: FastifyRequest, reply: FastifyReply) => {

        return new DeleteCostomerControllers().hendle(request, reply)

    })
}