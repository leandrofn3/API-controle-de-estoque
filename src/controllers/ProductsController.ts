import { Request, Response } from "express";
import productsData from "../data/productsData";
import { Products } from "../models/Products";


class ProductsController {
    public list(req: Request, res: Response) {

        const data = productsData.map(item => {
            return item.toJson
        });

        res.status(200).send({
            ok: true,
            message: "products listed successfully",
            data: data
        });
    }

    public create(req: Request, res: Response) {
        const { nameProduct, description, inventoryQuantity, purchasePrice, salePrice } = req.body;

        const newProduct = new Products(nameProduct, description, inventoryQuantity, purchasePrice, salePrice);

        productsData.push(newProduct);

        res.status(200).send({
            ok: true,
            message: "Successfully created product!",
            data: newProduct
        });
    }
}

export default new ProductsController();