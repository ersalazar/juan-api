import express from "express";
import CustomerByIdAdapter from "./adapter/customerByIdAdapter";
import NewCustomerAdapter from "./adapter/newCustomerAdapter";
import UpdateCustomerAdapter from "./adapter/updateCustomerAdapter";
import DeleteCustomerAdapter from "./adapter/DeleteCustomerAdapter";
import AllCustomersAdapter from "./adapter/allCustomersAdapter";



const customerRouter = express.Router();

customerRouter.get("/", async (_req, res) => {
    const adapter = new AllCustomersAdapter();
    const result = await adapter.execute();
    res.send(result);
})

customerRouter.get("/:id",async (req,res) => {
    const adapter = new CustomerByIdAdapter();
    const result = await adapter.execute(req.params.id);
    res.send(result);
})
customerRouter.post("/",async (req,res) => {
    const adapter = new NewCustomerAdapter();
    const result = await adapter.execute(req.body);
    res.send(result);
})
customerRouter.put("/",async (req,res) => {
    const adapter = new UpdateCustomerAdapter();
    const result = await adapter.execute(req.body);
    res.send(result);
})
customerRouter.delete("/:id",async (req,res) => {
    const adapter = new DeleteCustomerAdapter();
    const result = await adapter.execute(req.params.id);
    res.send(result);
})

export default customerRouter;