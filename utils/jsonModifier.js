import fs from "fs";

const filePath = "./data/chatHistories.json";

export const readChatHistories = () => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  }
  return {};
};

export const writeChatHistories = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
