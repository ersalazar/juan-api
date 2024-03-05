import express from 'express';
import unitTypeAdapter from './adapter/unitTypeAdapter';

const router = express.Router();

router.get("/byId",async (_req,res) => {
    const adapter = new unitTypeAdapter();
    const result = await adapter.execute({id: 1});
    res.send(result);
})

export default router;