const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Функция отправки сообщения
function sendMessage() {
  const message = userInput.value.trim();

  if (message !== "") {
    appendMessage('user', message);
    userInput.value = '';
    botReply(message);
  }
}

// Функция добавления сообщения в чат
function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', `${sender}-message`);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;  // Прокрутка вниз
}

// Функция для реакции бота на сообщение
function botReply(userMessage) {
  let botMessage = "Извините, я вас не понял.";

  if (userMessage.toLowerCase().includes("привет")) {
    botMessage = "Привет! Как я могу помочь?";
  } else if (userMessage.toLowerCase().includes("как тебя зовут")) {
    botMessage = "Я - бот, созданный для демонстрации навыков!";
  } else if (userMessage.toLowerCase().includes("что ты умеешь")) {
    botMessage = "Я могу отвечать на простые вопросы и помогать с примерами кода.";
  } else if (userMessage.toLowerCase().includes("пока")) {
    botMessage = "До свидания!";
  }

  setTimeout(() => {
    appendMessage('bot', botMessage);
  }, 1000); // Имитация задержки в ответе
}

// Сохраняем историю чата в LocalStorage
window.addEventListener('load', () => {
  const history = localStorage.getItem('chatHistory');
  if (history) {
    chatBox.innerHTML = history;
  }
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('chatHistory', chatBox.innerHTML);
});
