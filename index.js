


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

let createLoginTracker;

function createLoginTracker() {
  usernames = [ "ahmadnaim@gmail.com" ];
  passwords = [ "password123" ];
  attempts = 0;
   // Arrow function to handle login attempts
  const login = (username, password) => {
    if (usernames.includes(username) && passwords.includes(password)) {
      console.log("Login successful!");
    } else {
      attempts++;
      console.log("Login failed! Attempt number: " + attempts);
    }
  };

  return {
    login: login
  };
}
createLoginTracker = createLoginTracker(username);
let password = 0;

//nested arrow function to handle multiple login attempts
const multipleLoginAttempts = (username, password) => {
  if (password < 3) {
    password++;
    createLoginTracker.login(username, password);
  } else {  
    console.log("Too many login attempts! Please try again later.");
  } 
};
return {
  usernames: "Ahmad ",
  passwords: "12345678",
};
 
const loginTracker = createLoginTracker();

