<script setup>
  import {ref} from "vue"

  const showChatPage = ref(false);

  const displayChatPage = () => {
    console.log('yoo')
    showChatPage.value = true;
    setTimeout(() => {
      document.querySelector(".chat-page").scrollIntoView({ behavior: "smooth" });
    }, 100); // Permet un scroll fluide
  }

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
          <p><span>5voS9evDjxF589WuEub5i4ti7FWQmZCsAsyD5ucbuRqM</span></p>
        </div>
        <button class="btn connect-button">CONNECT</button>
      </div>
      <div class="messages"></div>
      <div class="input">
        <input type="text" placeholder="SPEAK WITH NEEKO..">
        <img src="/send.png" alt="send" width="26px" height="23px">
      </div>
    </div>
    <div class="social-container">
      <img src="/dex.png" alt="dex" width="28px" height="34px">
      <img src="/twitter.png" alt="twitter" width="37px" height="30px">
    </div>
  </div>
</template>

<style scoped>
  .landing-page {
    height: 100vh; /* La hauteur prend toute la page */
    width: 100%;   /* La largeur prend tout l'écran */
    overflow: hidden; /* Empêche tout débordement */
    display: flex; /* Centrage optionnel */
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
    background: linear-gradient(90deg, #8540c1, #313487);
    box-shadow: 0 0 10px rgba(133, 64, 193, 0.6), 0 0 20px rgba(49, 52, 135, 0.6);
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
    width: 300px;
    height: 30px;
  }

  .chat-page{
    height: 100vh;
    width: 100%;
    padding: 8rem;
    position: relative;
  }

  .chatbot{
    height: 100%;
    width: 53rem;
    padding: 20px;
    color: white;
    backdrop-filter: blur(13.15px); /* Applique un flou à l'arrière-plan */
    -webkit-backdrop-filter: blur(13.15px); /* Compatibilité avec Safari */
    background: linear-gradient(142.44deg, rgba(54, 229, 211, 0.38) -12.66%, rgba(49, 52, 135, 0.38) 109.82%);
    box-shadow: 0px 12px 33.6px 1px rgba(54, 229, 211, 0.29);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 40px;
  }

  .chat-header {
    width: 100%;
    height: 7%;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
  }

  .token-address {
    font-size: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .token-address p span {
    font-weight: 500;
  }

  .connect-button {
    width: 100px;
    font-size: 16px;
  }

  .messages {
    height: 84%;
  }

  .input {
    height: 10%;
    border-radius: 30px;
    border: 1.5px solid #36E5D3;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(90deg, #8540c1, #313487);
  }

  .input img {
    margin-right: 2rem;
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
    right: 8rem;
    bottom: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  .social {
  }


</style>
