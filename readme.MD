# Chat Application Backend

This is the backend service for the Chat Application, built with Node.js and Express.

## Features

- Handle chat session creation
- Store and retrieve chat messages
- Provide chat history

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/)
- [OpenAI - Signup here](https://platform.openai.com/)
  - [How to get free OpenAI key](https://whatsthebigdata.com/how-to-get-openai-api-key/)

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/iamtemi/accounting-chatbot-api
   cd accounting-chatbot-api
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of the project and add:

   ```env
   PORT=xxxx
   BACKEND_URL=http://localhost
   FRONTEND_URL=http://localhost:5050
   OPENAI_API_KEY=s12345689...
   ```

4. **Run the application:**

   ```sh
   npm run dev
   ```

## Usage

- **Start the server:**

  ```sh
  npm run dev
  ```

- **API Endpoints:**
  - **Start a new chat session:** `POST /api/start`
  - **Send a message:** `POST /api/ask`
  - **Get chat history:** `GET /api/chat-history`

## Connecting to the Frontend

To connect this backend to the Chat Application frontend, ensure the `VITE_BACKEND_URL` in the frontend's `.env` file points to the URL where this backend is running.

You can find the frontend repository [here](https://github.com/iamtemi/accounting-chatbot-app).
