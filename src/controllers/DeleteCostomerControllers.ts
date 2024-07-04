import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteCostomerServices } from '../services/DeleteCostomerServices'


class DeleteCostomerControllers {


    async hendle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as { id: string }

        const deleteCostomerServices = new DeleteCostomerServices()

        const dele = await deleteCostomerServices.excute({ id })


        reply.send(dele)

    }
}

export { DeleteCostomerControllers }