import { Router } from "express";
import * as controllers from "../controllers/astronauts.js"

const router = Router();

router.get("/astronauts", controllers.getAstronauts)
// router.get("/astronauts/:id", controllers.getAstronaut)
// router.post("/astronauts", controllers.createAstronaut)
// router.put("/astronauts/:id", controllers.updateAstronaut)
// router.delete("/astronauts/:id", controllers.deleteAstronaut)

export default router;