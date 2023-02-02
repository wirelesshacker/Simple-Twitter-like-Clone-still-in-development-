const form = document.querySelector("#tweet-form");
const input = document.querySelector("#tweet-input");
const tweets = document.querySelector("#tweets");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tweet = input.value;
  input.value = "";

  const tweetElement = document.createElement("div");
  tweetElement.textContent = tweet;

  tweets
