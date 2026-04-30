import { Router, Request, Response } from "express";

const router: Router = Router()

router.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
})

router.get("/plans", (req: Request, res: Response) => {
    res.send("Gym Plans");
})

router.get("/profile", (req: Request, res: Response) => {
    res.send("User Profile");
})

export default router;

