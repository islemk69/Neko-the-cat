const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { chatWithAgent } = require("./chatAgent");


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint de chat
app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;
  const userId = req.body.userId;
  const roomId = req.body.roomId;
  const botResponse = await chatWithAgent(userMessage, userId, roomId);
  res.status(200).json({ message: botResponse });
});

// Démarrer le serveur
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serveur IA prêt sur http://localhost:${PORT}`);
});
