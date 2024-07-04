import prismaclient from "../prisma";

class ListeCostomerServices {


    async excute() {

        const costomer = await prismaclient.customer.findMany()


        return costomer

    }

}

export { ListeCostomerServices }