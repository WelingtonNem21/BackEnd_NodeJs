import prismaclient from "../prisma";

interface CreateCostomer {
    nome: string,
    email: string
}

class CreateCostomerServices {

    async execute({ nome, email }: CreateCostomer) {

        if (!nome) {
            throw new Error("Preecha os campos")
        }

        const customer = await prismaclient.customer.create({
            data: {
                nome,
                email,
                status: true
            }
        })

        return customer
    }
}

export { CreateCostomerServices }