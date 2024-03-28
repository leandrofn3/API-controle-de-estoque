import { Request, Response } from "express";
import SalesData from "../data/salesData";

class SalesController {
    public list(req: Request, res: Response){
        const data = SalesData.map(item => {
            return item.toJson;
        });

        res.status(200).send({
            ok: true,
            message: "Sales listed successfully",
            data: data
        });
    }
}

export default new SalesController();