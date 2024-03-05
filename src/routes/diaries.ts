import express from "express";

const router = express.Router();
 router.get("/", (_req, res) => {
    res.send("Hello World diaries");
 });

 router.post("/", (_req, res) => {
    res.send(`You sent: the body`);
 });


 export default router;