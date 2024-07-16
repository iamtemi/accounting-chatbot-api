import { getResponse } from "../agent.mjs";
import express from "express";
import {
  readChatHistories,
  writeChatHistories,
} from "../utils/jsonModifier.js";

const router = express.Router();

router.post("/start", (req, res) => {
  const sessionId = randomUUID();
  const chatHistories = readChatHistories();
  chatHistories[sessionId] = [];
  writeChatHistories(chatHistories);
  res.json({ sessionId });
});

router.post("/ask", async (req, res) => {
  const { sessionId, question } = req.body;

  if (!sessionId || !question) {
    return res.status(400).json({ error: "Missing sessionId or question" });
  }

  const chatHistories = readChatHistories();

  if (!chatHistories[sessionId]) {
    return res.status(404).json({ error: "Session not found" });
  }

  try {
    const answer = await getResponse(question);

    chatHistories[sessionId].push({ question, answer });
    writeChatHistories(chatHistories);

    res.json({ answer, history: chatHistories[sessionId] });
  } catch (error) {
    res.status(500).json({ error: "Error generating response" });
  }
});

export default router;
