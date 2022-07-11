import { Router } from "express";

import astronautsRoutes from "./astronauts.js"

const router = Router();

router.get('/', (req, res) => {
  res.send("Working");
})

router.use("/", astronautsRoutes)

export default router;