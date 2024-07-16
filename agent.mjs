import { ChatOpenAI } from "@langchain/openai";

const agent = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-3.5-turbo",
  temperature: 0.7,
});

export async function getResponse(query) {
  try {
    const response = await agent.invoke(query);
    console.log("Full response:", response);

    if (response && response.content) {
      const content = response.content;
      return content;
    } else {
      console.error("Unexpected response structure:", response);
      return "Unexpected response structure";
    }
  } catch (error) {
    console.error("Error generating response:", error);
    return "Error generating response";
  }
}
