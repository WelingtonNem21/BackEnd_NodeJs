import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCostomerServices } from "../services/createcostomerservices";

class CreateCostomerControllers {

    async hendle(request: FastifyRequest, reply: FastifyReply) {

        const customerServices = new CreateCostomerServices();

        const customer = await customerServices.execute()

        reply.send(customer)
    }
}

export { CreateCostomerControllers }