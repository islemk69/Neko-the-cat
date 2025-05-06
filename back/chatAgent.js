
const axios = require("axios");

// Initialisation de l'agent Solana
// const agent = new SolanaAgentKit(
//   "your-wallet-private-key-as-base58", 
//   "https://api.mainnet-beta.solana.com",
//   "YOUR_OPENAI_API_KEY"
// );
// Fonction de chat avec OpenAI via l'agent

async function chatWithAgent(userMessage, userId, roomId) {
  try {
    // Formater la requête pour l'agent
    const formData = new URLSearchParams();
    formData.append("text", userMessage);
    formData.append("userId", userId); // Identifiant utilisateur (peut être dynamique)
    formData.append("roomId", roomId);

    // Appel à l'agent IA
    const response = await axios.post(
      "http://localhost:3000/27f69681-9bbf-0dcf-a2ef-6c9bcbff1bc1/message",
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
