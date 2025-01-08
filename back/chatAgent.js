
const axios = require("axios");

// Initialisation de l'agent Solana
// const agent = new SolanaAgentKit(
//   "your-wallet-private-key-as-base58", 
//   "https://api.mainnet-beta.solana.com",
//   "YOUR_OPENAI_API_KEY"
// );
// Fonction de chat avec OpenAI via l'agent

async function chatWithAgent(userMessage) {
  try {
    // Formater la requête pour l'agent
    const formData = new URLSearchParams();
    formData.append("text", userMessage);
    formData.append("userId", "user2"); // Identifiant utilisateur (peut être dynamique)
    formData.append("roomId", "default-room-5c6863d4-e7b0-02ac-b245-149e5e251c91");

    // Appel à l'agent IA
    const response = await axios.post(
      "http://localhost:3000/5c6863d4-e7b0-02ac-b245-149e5e251c91/message",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // Retourner la réponse de l'IA
    return response.data[0]?.text || "Pas de réponse de l'agent.";
  } catch (error) {
    console.error("Erreur avec l'agent IA :", error.message);
    return "Désolé, une erreur est survenue avec l'agent IA.";
  }
}

module.exports = { chatWithAgent };
