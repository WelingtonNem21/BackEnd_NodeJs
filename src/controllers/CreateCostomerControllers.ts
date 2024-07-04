import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCostomerServices } from "../services/CreateCostomerServices";

class CreateCostomerControllers {

    async hendle(request: FastifyRequest, reply: FastifyReply) {

        const { nome, email } = request.body as { nome: string, email: string }

        const customerServices = new CreateCostomerServices();

        const customer = await customerServices.execute({ nome, email })

        reply.send(customer)
    }
}

export { CreateCostomerControllers }