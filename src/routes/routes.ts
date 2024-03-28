import { Request, Response, Router } from "express";
import productsController from "../controllers/ProductsController";


const routes = Router();

routes.get("/", (req: Request, res: Response)=> {
    res.status(200).send({
        ok: true,
        message: "Bem Vindo a API-Controle-de-Estoque!"
        
    });
})
// 1:38:15
routes.get("/products", productsController.list);
routes.post("/products/create", productsController.create);

export default routes;