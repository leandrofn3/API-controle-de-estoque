import { Request, Response } from "express";
import suppliersData from "../data/suppliersData";

class SuppliersController {
    public list(req: Request, res: Response){

        const data = suppliersData.map(item => {
            return item.toJson;
        });

        res.status(200).send({
            ok: true,
            message: "Suppliers listed successfully",
            data: data
        });
    };
}

export default new SuppliersController();