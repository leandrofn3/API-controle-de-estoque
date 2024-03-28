import { Request, Response } from "express";
import shoppingData from "../data/shoppingData";

class ShoppingController {
    public list(req: Request, res: Response) {

        const data = shoppingData.map(item => {
            return item.toJson;
        });

        res.status(200).send({
            ok: true,
            message: "Shoppings listed successfully",
            data: data
        });
    }
}

export default new ShoppingController();