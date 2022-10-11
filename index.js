// Write your code in this file!
const currentUser = 'Vlad Dracula';

// String concatenation
//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

// String Interpolation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;