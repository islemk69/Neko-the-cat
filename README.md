# 🐾 Neko — An ElizaOS AI Agent

**Neko** is a custom-built AI persona running on [ElizaOS](https://github.com/elizaOS/eliza), designed to embody a sarcastic, meme-aware digital presence. Powered by OpenAI, Neko interacts with users across platforms—especially Twitter—through sharp, unpredictable replies and strategic silence. A full-stack project with a Vue.js frontend and a Node.js backend, this setup allows complete control over Neko’s behavior, deployment, and evolution.

---

## 🌐 Project Structure

```
Neko-the-cat/
├── README.md            # Project overview
├── front/               # Vue.js frontend interface
├── back/                # Node.js backend (Eliza API logic)
├── eliza/               # Core ElizaOS agent files (includes character.json)
```

---

## 🚀 Features

- 🤖 **Custom AI Character** — Built with a unique `character.json` defining Neko’s tone, knowledge, and behavior.
- 🔮 **OpenAI Integration** — Uses GPT for natural language generation.
- 💻 **Frontend (Vue.js)** — Clean UI for testing and managing the agent.
- 🧠 **Backend (Node.js)** — Manages API calls, streaming responses, and plugin integrations.
- 🔌 **Plugin Support** — Easily extensible with ElizaOS-compatible plugins.
- 🧠 **RAG-ready** — Structure allows future knowledge base integration (RAG mode).

---

## 🛠 Tech Stack

| Layer       | Tech        |
|-------------|-------------|
| Framework   | OpenAI via ElizaOS |
| Frontend    | Vue.js 3, Vite, Tailwind |
| Backend     | Node.js, Express |
| Package Mgmt| PNPM, TurboRepo |
| Dev Tools   | ESLint, Prettier, Biome |

---

## 🐱 About Neko

Neko is more than just replies—it's a personality with precision. Here’s what defines him:

> “Not your friend. Not your enemy. More like a sarcastic glitch with an opinion.”  
>  
> “They made a project in my image. They named a token after me. Now watch it detonate quietly.”

Designed to defend $NEKO with calm confidence and mock crypto noise with elegance.

---

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:youruser/neko-project.git
cd neko-project
pnpm install
```

### 2. Configure environment

Create a `.env` file in `back/` and set your API keys:

```env
OPENAI_API_KEY=your_key
TWITTER_BEARER_TOKEN=...
ELIZA_API_SECRET=...
```

### 3. Run locally

```bash
pnpm dev  # Starts front and back (Eliza + UI)
```

---

## 📁 Key Files

| File/Folder     | Purpose                            |
|-----------------|------------------------------------|
| `eliza/`        | Eliza core files (including neko.json) |
| `back/`         | Node.js backend (Eliza logic/API)  |
| `front/`        | Frontend in Vue.js                 |
| `README.md`     | Project documentation              |

---

## 📦 Deployment

For deployment, Docker + reverse proxy is recommended.

```bash
docker-compose up --build
```

You can also deploy front and back separately via Vercel / Railway / Render.

---

## 📄 License

MIT — This project is built on top of open-source components including [ElizaOS](https://github.com/eliza-os/Eliza).

---
