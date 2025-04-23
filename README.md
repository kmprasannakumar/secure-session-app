<div align="center">
  <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="120"/>
  <h1>Secure Session Management App</h1>
  <p>🔐 A simple Express.js app demonstrating secure session and cookie handling</p>

  <p>
    <img src="https://img.shields.io/badge/Node.js-18.x-brightgreen" alt="Node.js">
    <img src="https://img.shields.io/badge/Express.js-4.x-blue" alt="Express.js">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License">
  </p>
</div>

---

## 🔐 Features

- Secure session management using `express-session`
- Environment-based session secrets via `.env`
- Cookie settings: `httpOnly`, `secure`, `sameSite`, `maxAge`
- Route protection using middleware
- Logout and session destruction
- Uses `helmet` for HTTP header security

---

## 🚀 Technologies Used

- Node.js
- Express.js
- express-session
- dotenv
- helmet

---

## 📁 Project Structure




## ⚙️ Installation & Setup

1. Clone the repo:


git clone https://github.com/your-username/secure-session-app.git
cd secure-session-app

Install dependencies:


npm install
Create a .env file:

SESSION_SECRET=your_strong_secret_key
NODE_ENV=development
PORT=3000
Run the app:


node app.js
Visit in browser:

http://localhost:3000
🧪 Test Routes
/ – Home Page

/login – Sets a session

/dashboard – Protected route (only accessible after login)

/logout – Destroys session

🛡️ Security Tips for Production
Set NODE_ENV=production

Use HTTPS (so cookies are secure)

Store sessions in a DB (MongoDB/Redis) using connect-mongo or connect-redis

Use a strong SESSION_SECRET

📄 License
This project is licensed under the MIT License.


