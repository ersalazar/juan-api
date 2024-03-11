import express from "express";
import ProductByIdAdapter from "./adapters/ProductByIdAdapter";
import NewProductAdapter from "./adapters/NewProductAdapter";
import UpdateProductAdapter from "./adapters/UpdateProductAdapter";
import DeleteProductAdapter from "./adapters/DeleteProductAdapter";
import AllProductsAdapter from "./adapters/AllProductsAdapter";

const productRouter = express.Router();

productRouter.get("/", async (_req, res) => {
    const adapter = new AllProductsAdapter();
    const result = await adapter.execute();
    res.send(result);
})

productRouter.get("/:id",async (req,res) => {
    const adapter = new ProductByIdAdapter();
    const result = await adapter.execute(req.params.id);
    res.send(result);
})
productRouter.post("/",async (req,res) => {
    const adapter = new NewProductAdapter();
    const result = await adapter.execute(req.body);
    res.send(result);
})
productRouter.put("/",async (req,res) => {
    const adapter = new UpdateProductAdapter();
    const result = await adapter.execute(req.body);
    res.send(result);
})
productRouter.delete("/:id",async (req,res) => {
    const adapter = new DeleteProductAdapter();
    const result = await adapter.execute(req.params.id);
    res.send(result);
})

export default productRouter;