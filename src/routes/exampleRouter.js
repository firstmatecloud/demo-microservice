import express from "express";
import exampleController from "../controllers/exampleController.js";

const router = express.Router();


router.route("/:id")
    .get(exampleController.getById)

export default router;