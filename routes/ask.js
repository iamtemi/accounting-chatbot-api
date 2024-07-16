import { getResponse } from "../agent.mjs";
import express from "express";

const router = express.Router();
const chatHistories = {};

router.post("/ask", async (req, res) => {
  const { question } = req.body;
  try {
    const answer = await getResponse(question);
    res.json({ answer });
  } catch (error) {
    res.status(500).json({ error: "Error generating response" });
  }
});

export default router;
