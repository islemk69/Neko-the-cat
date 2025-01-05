const { SolanaAgentKit } = require("solana-agent-kit");
const { OpenAI } =  require("openai");
const fs = require("fs");

const openai = new OpenAI({ apiKey: "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" });

// Initialisation de l'agent Solana
// const agent = new SolanaAgentKit(
//   "your-wallet-private-key-as-base58", 
//   "https://api.mainnet-beta.solana.com",
//   "YOUR_OPENAI_API_KEY"
// );
const context = fs.readFileSync("neeko_context.txt", "utf-8");
console.log(context)
// Fonction de chat avec OpenAI via l'agent
async function chatWithAgent(userMessage) {
  try {
    // Appel à l'API OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4", // Remplacez par le modèle souhaité
      messages: [
        {
          role: "system",
          content: 'You are Neeko the Cat, a playful and curious AI who loves helping humans.',
        },
        { role: "user", content: userMessage },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Erreur avec OpenAI :", error);
    return "Désolé, une erreur est survenue.";
  }
}

module.exports = { chatWithAgent };
