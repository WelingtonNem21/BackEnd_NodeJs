import prismaclient from "../prisma";

class CreateCostomerServices {

    async execute() {

        console.log("ROTA FOI CHAMADA")

        return { vida: true }
    }
}

export { CreateCostomerServices }