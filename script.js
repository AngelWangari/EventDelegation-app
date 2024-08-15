// Get the tweet form and list elements
var tweetEl = document.getElementById("tweetForm"); // Get the form element with id "tweetForm"
var listEl = document.getElementById("tweets"); // Get the list element with id "tweets"

// Add an event listener to the form to handle submission
tweetEl.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input fields for username and tweet
  const usernameInput = tweetEl.elements.username; // Get the input field with name "username"
  const tweetInput = tweetEl.elements.tweet; // Get the input field with name "tweet"

  // Call the addTweet function to add the new tweet to the list
  addTweet(usernameInput.value, tweetInput.value);

  // Clear the input fields after adding the tweet
  usernameInput.value = "";
  tweetInput.value = "";
});

// Function to add a new tweet to the list
const addTweet = (username, tweet) => {
  // Create a new list item element
  const newTweetEL = document.createElement("li");

  // Create a bold element to hold the username
  const bTag = document.createElement("b");
  bTag.append(username); // Add the username to the bold element

  // Add the bold element and tweet text to the list item
  newTweetEL.append(bTag);
  newTweetEL.append(`-${tweet}`);

  // Add the new list item to the list
  listEl.append(newTweetEL);
};

// Add an event listener to the list to handle clicks
listEl.addEventListener("click", function (e) {
  // Check if the clicked element is a list item (LI)
  if (e.target.nodeName === "LI") {
    // Remove the list item from the list
    e.target.remove();
  }
});