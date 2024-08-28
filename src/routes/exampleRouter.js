import express from "express";
import exampleController from "../controllers/exampleController.js";
import {grantAccessByPermissionMiddleware} from "../middleware/permissionMiddleware.js";
import API_PERMISSIONS from "../config/permissionsConstants.js";

const router = express.Router();


router.route("/:id")
    .get(grantAccessByPermissionMiddleware([API_PERMISSIONS.PUBLIC_ENDPOINT]), exampleController.getById)

export default router;