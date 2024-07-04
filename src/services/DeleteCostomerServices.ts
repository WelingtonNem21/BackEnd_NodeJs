import prismaclient from "../prisma";

interface DeleteCostomerProps {
    id: string
}

class DeleteCostomerServices {

    async excute({ id }: DeleteCostomerProps) {

        if (!id) {
            throw new Error("serviços espere um id")
        }

        const deleCostomer = await prismaclient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!deleCostomer) {
            throw new Error("serviços espere um id")
        }

        await prismaclient.customer.delete({
            where: {
                id: deleCostomer.id
            }
        })

        return { messagem: "excluido com successo" }

    }
}

export { DeleteCostomerServices }