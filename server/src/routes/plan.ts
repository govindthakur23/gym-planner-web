import { Router, type Request, type Response } from "express";
import { PresentationIcon } from "lucide-react";
import { error, log, timeStamp } from "node:console";
import { Prisma } from "../../generated/prisma/browser";
import { prisma } from "../lib/prisma";
import { version } from "node:os";
import { create } from "node:domain";

export const planRouter = Router();

planRouter.post("/", async (req: Request, res: Response) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ error: "User id is required" });
        }
        const profile = await prisma.user_profiles.findUnique({
            where: { user_id: userId },
        });
        if (!profile) {
            return res.status(400).json({ error: "User profile   not found. Complete onBorading first" });
        }

        const latestPlan = await prisma.training_plans.findFirst({
            where: { user_id: userId },
            orderBy: { ceated_at: "desc" },
            select: { version: true }, 
            createdat: {create: timeStamp},
        })

    } catch (error) {
        console.log("Error generating plan ", error);
        res.status(500).json({ error: "Failed to generate plan" });
    }
})