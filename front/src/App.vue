<script setup>
  import { ref, onMounted, onBeforeUnmount, nextTick } from "vue"
  import axios from "axios";

  const showChatPage = ref(false);
  const chatContainer = ref(null); // Ref pour cibler .messages

  const displayChatPage = () => {
    console.log('yoo')
    showChatPage.value = true;
    setTimeout(() => {
      document.querySelector(".chat-page").scrollIntoView({ behavior: "smooth" });
    }, 100); // Permet un scroll fluide
  }

  const messages = ref([
  ]);

  const userInput = ref("");

  const scrollToBottom = () => {
  const container = chatContainer.value;
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};


  const sendMessage = async () => {
    const userMessage = userInput.value.trim();
    if (!userMessage)
      return ;
    messages.value.push({ text: userMessage, sender: "user" });
    userInput.value = ""; // Clear input field

    await nextTick();
    scrollToBottom();
    try {
      // Send message to the backend API
      const response = await axios.post("/api/chat", {
        message: userMessage,
      });
      // Add Neeko's response after a small delay
      const botMessage = response.data.message;
      messages.value.push({ text: botMessage, sender: "neeko" });
      await nextTick();
      scrollToBottom();
    } catch (error) {
      console.error("Error sending message:", error);
      messages.value.push({
        text: "Sorry, something went wrong. Please try again later.",
        sender: "neeko",
      });
    }
  }
  const handleScroll = (event) => {
  const container = chatContainer.value;
  const isScrollingUp = event.deltaY < 0;
  const isScrollingDown = event.deltaY > 0;

  if (
    (isScrollingUp && container.scrollTop === 0) || // En haut
    (isScrollingDown && container.scrollTop + container.clientHeight >= container.scrollHeight) // En bas
  ) {
    event.preventDefault(); // Empêche le scroll global
  }
};

// Ajouter l'écouteur d'événements au montage
onMounted(() => {
  const container = chatContainer.value;
  if (container) {
    container.addEventListener("wheel", handleScroll);
  }
});

// Nettoyer l'écouteur d'événements avant le démontage
onBeforeUnmount(() => {
  const container = chatContainer.value;
  if (container) {
    container.removeEventListener("wheel", handleScroll);
  }
});
</script>

<template>
  <video autoplay loop muted>
    <source src="/Landing_Page_Loop_2.mp4" type="video/mp4" />
    Votre navigateur ne prend pas en charge les vidéos HTML5.
  </video>
  <div class="landing-page">
    <div class="landing-text">
      <p>41°24'12.2"N 2°10'26.5"</p>
      <p><span>BUILT ON A16Z INFRASTRUCTURE</span></p>
      <p>NEKO THE CAT</p>
    </div>
    <button class="btn landing-button" @click="displayChatPage">CLICK TO ENTER</button>
  </div>
  <div class="chat-page" v-if="showChatPage">
    <div class="chatbot">
      <div class="chat-header">
        <div class="token-address">
          <p>NEKO THE CAT</p>
          <div class="token">
            <p><span>5voS9evDjxF589WuEub5i4ti7FWQmZCsAsyD5ucbuRqM</span> </p>
            <img src="/copy.png" class="copy" alt="copy" width="12px" height="14px">
          </div>
        </div>
        <button class="btn connect-button">CONNECT</button>
      </div>
      <div class="messages" ref="chatContainer">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['message', message.sender === 'user' ? 'user-message' : 'neeko-message']"
        >
          <template v-if="message.sender === 'neeko'">
            <img src="/neeko-profile.png" class="neeko-profile" alt="neeko profile" />
            <p class="text neeko-text">{{ message.text }}</p>
          </template>
          <template v-else>
            <p class="text user-text">{{ message.text }}</p>
          </template>
        </div>
      </div>
      <div class="input">
        <input type="text" placeholder="SPEAK WITH NEEKO.." @keydown.enter="sendMessage" v-model="userInput">
        <img src="/send.png" class="send" alt="send" width="22px" height="20px" @click="sendMessage">
      </div>
    </div>
    <div class="social-container">
      <img src="/dex.png" class="social" alt="dex" width="28px" height="34px">
      <img src="/twitter.png" class="social" alt="twitter" width="37px" height="30px">
    </div>
  </div>
</template>

<style scoped>
  .landing-page {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  video {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    object-position: center; /* Centre la vidéo */
  }
  .landing-text{
    margin-top: 5rem;
    text-align: center;
  }
  .landing-text p span {
    color: #36E5D3;
  }

  .landing-text p {
    margin: 2rem 0;
  }


  .btn {
    all: unset;
    cursor: pointer;
    color: white;
    border-radius: 1rem;
    padding: 1rem;
    text-align: center;
    transition: transform 0.2s ease;
  }
  
  .btn:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  .landing-button {
    margin-bottom: 5rem;
    font-size: 16px;
    width: 15%;
    height: 30px;
    background: linear-gradient(91.67deg, rgba(133, 64, 193, 0.66) 0.04%, rgba(49, 52, 135, 0.66) 99.96%);
    box-shadow: 0px 0px 28.1px 4px #6212A8;
    backdrop-filter: blur(4.85px);
    padding: 17px 67px;
    white-space: nowrap;
  }

  .landing-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1rem; /* Applique les coins arrondis */
    padding: 2px; /* Épaisseur de la bordure simulée */
    background: linear-gradient(90deg, #D7A8FF 0%, #36E5D3 100%);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; /* Masque la partie intérieure */
    mask-composite: exclude; /* Masque la partie intérieure */
    z-index: -1; /* Place le pseudo-élément derrière le bouton */
}

  .chat-page{
    height: 100vh;
    width: 100%;
    padding: 8rem 5rem;
    position: relative;
  }

  .chatbot{
    height: 100%;
    width: 40vw;
    padding: 2.5rem;
    color: white;
    backdrop-filter: blur(13.15px); /* Applique un flou à l'arrière-plan */
    -webkit-backdrop-filter: blur(13.15px); /* Compatibilité avec Safari */
    background: linear-gradient(142.44deg, rgba(54, 229, 211, 0.38) -12.66%, rgba(49, 52, 135, 0.38) 109.82%);
    box-shadow: 0px 12px 33.6px 1px rgba(54, 229, 211, 0.29);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 40px;
  }

  .chatbot::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 3rem; /* Applique les coins arrondis */
    padding: 2px; /* Épaisseur de la bordure simulée */
    background: linear-gradient(162.96deg, #36E5D3 11.73%, #313487 107.16%);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; /* Masque la partie intérieure */
    mask-composite: exclude; /* Masque la partie intérieure */
    z-index: -1; /* Place le pseudo-élément derrière le bouton */
}

  .chat-header {
    width: 100%;
    height: 7%;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
  }

  .token-address {
    font-size: 12px;
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  .token-address p span {
    font-weight: 500;
    text-transform: uppercase;
  }

  .token {
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
  }

  .copy {
    margin-left: 1.5rem;
    cursor: pointer;
  }
  
  .connect-button {
    width: 27%;
    font-size: clamp(12px, 2.5vw, 16px); /* Taille entre 12px et 16px */
    background: linear-gradient(91.67deg, rgba(133, 64, 193, 0.66) 0.04%, rgba(49, 52, 135, 0.66) 99.96%);
    border: 1px solid #D29FFF;
    backdrop-filter: blur(4.85px);
    box-shadow: 0px 0px 28.1px 4px #8540C1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  .messages {
    height: 84%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .message {
    width: 100%;
    min-height: 10%;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.55);
    margin: 1rem 0;
    padding: 16px 25px;
    text-wrap: wrap;
    overflow-wrap: break-word; /* Compatibilité moderne */
    flex-shrink: 0; /* Empêche le rétrécissement */
  }

  .message:first-child {
    margin-top: 2rem;
  }

  .user-message {
    background: transparent;
    display: flex;
    flex-direction: column;
  }

  .neeko-message {
    background: rgba(0, 0, 0, 0.23);
    align-items: center;
    display: flex;
  }

  .neeko-message img {
    width: 66px;
    height: 66px;
  }

  .text {
    font-weight: 200;
    font-size: 14px;
    line-height: 19px;
    text-transform: uppercase;
    text-wrap: wrap;
  }

  .neeko-text {
    margin-left: 2rem;
  }

  .user-text {
    align-self: flex-end;
  }

  .input {
    height: 10%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(91.67deg, rgba(133, 64, 193, 0.66) 0.04%, rgba(49, 52, 135, 0.66) 99.96%);
    box-shadow: 0px 0px 28.1px 4px rgba(98, 18, 168, 0.49);
    backdrop-filter: blur(4.85px);
  }

  .input::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 3rem; /* Applique les coins arrondis */
    padding: 2px; /* Épaisseur de la bordure simulée */
    background: linear-gradient(90deg, #D7A8FF 0%, #36E5D3 100%);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; /* Masque la partie intérieure */
    mask-composite: exclude; /* Masque la partie intérieure */
    z-index: -1; /* Place le pseudo-élément derrière le bouton */
}

  .input img {
    margin-right: 3rem;
    cursor: pointer;
  }

  .input input {
    height: 100%;
    width: 84%;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 2rem;
    color: white;
  }

  .input input::placeholder {
    color: white;
    font-size: 1.5rem;
    font-weight: 100;
  }

  .social-container {
    position: absolute;
    width: 85px;
    height: 50px;
    right: 10rem;
    bottom: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }
  .social {
    cursor: pointer;
  }



  @media (max-width: 1250px) {
    .social-container {
      bottom: 4vh;
      padding: 0;
      right: 50%;
      transform: translateX(50%);
    }

    .landing-button {
      font-size: 1.2rem;
      margin-bottom: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .chat-page {
      display: flex;
      padding: 0;
      align-items: center;
      justify-content: center;
    }

    .chatbot {
      width: 80vw;
      height: 70vh;
      font-size: 1rem;
    }
  
    .token-address {
      font-size: 10px;
    }

    .copy {
      width: 10px;
      height: 12px;
    }

    .text {
      font-size: 10px;
    }

    .input input {
      font-size: 12px;
    }

    .input input::placeholder {
      font-size: 12px;
    }

    .send {
      width: "2px"; 
      height: "2px";
    }
  }


  @media (max-width: 850px) {
    .token-address {
      font-size: 8px;
      .copy {
        width: 8px;
        height: 10px;
        margin-left: 1rem;
    }
    }
  }

  @media (max-width: 450px) {
    .token-address {
      font-size: 6px;
    }
    .copy {
      width: 6px;
      height: 8px;
      margin-left: 0.2rem;
    }
  }

</style>
