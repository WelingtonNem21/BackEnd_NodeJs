import { FastifyRequest, FastifyReply } from "fastify";
import { ListeCostomerServices } from '../services/ListeCostomerServices'



class ListeCostomerControllers {

    async hendle(request: FastifyRequest, reply: FastifyReply) {

        const listeCostomerServices = new ListeCostomerServices()

        const costomer = await listeCostomerServices.excute()


        reply.send(costomer)

    }
}

export { ListeCostomerControllers }