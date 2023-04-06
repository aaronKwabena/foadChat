const emoticons = {
    ':smile:': 'https://cdn.jsdelivr.net/emojione/assets/png/1f60a.png',
    ':sad:': 'https://cdn.jsdelivr.net/emojione/assets/png/1f61e.png',
    ':wink:': 'https://cdn.jsdelivr.net/emojione/assets/png/1f609.png',
    ':heart:': 'https://cdn.jsdelivr.net/emojione/assets/png/2764.png',
    ':laugh:': 'https://cdn.jsdelivr.net/emojione/assets/png/1f602.png'
  };
  // pour appeler les emoticones
  const emoticonsContainer = document.getElementById('emoticons-container');
  for (const [emoticonText, emoticonUrl] of Object.entries(emoticons)) {
    const emoticonImage = document.createElement('img');
    emoticonImage.src = emoticonUrl;
    emoticonImage.alt = emoticonText;
    emoticonImage.addEventListener('click', () => {
      const messageInput = document.getElementById('message-input');
      messageInput.value += emoticonText;
    });
    emoticonsContainer.appendChild(emoticonImage);
  }
  const form = document.getElementById("chat-form");
  const nameInput = document.getElementById("name-input");
  const messageInput = document.getElementById("message-input");
  const chatContainer = document.getElementById("chat-container");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const message = messageInput.value;
    const author = nameInput.value || "Anonymous";
    
    const date = new Date();
    const timestamp = `${date.toLocaleDateString("fr-FR")} ${date.toLocaleTimeString("fr-FR")}`;
    
    const messageText = message.replace(/(:\)|:\(|:D|;\)|:P|<3)/g, (match) => emoticons[match]);
    
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `
      <div class="author">${author}</div>
      <div class="timestamp">${timestamp}</div>
      <div class="text">${messageText}</div>
    `;
    
    chatContainer.appendChild(messageElement);
    
    messageInput.value = "";
  });
  