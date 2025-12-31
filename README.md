# Amazon Clone Project

A full-stack Amazon clone built with **MERN stack** (MongoDB, Express.js, React.js, Node.js), featuring user authentication (email & Google login), product listing, cart, checkout, and order management.

---


**Deployed Link:** [ https://amazon-machine.vercel.app]

---

## Features

- User registration and login with **email/password**
- Google OAuth login
- Product listing with categories
- Product details page
- Add to cart and manage cart items
- Checkout process
- Orders page for user order history
- Responsive design with navigation and footer
- Protected routes for authenticated users

---

## Technologies Used

- **Frontend:** React.js, React Router, Context API
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT, Passport.js (Google OAuth)
- **Deployment:** Vercel (Frontend), Render/Railway (Backend)
- **Other Libraries:** Axios, bcryptjs, dotenv

---

## Project Structure
amazon/
├─ server/
│ ├─ controllers/
│ ├─ models/
│ ├─ routes/
│ ├─ config/
│ ├─ utils/
│ └─ server.js
├─ client/
│ ├─ src/
│ │ ├─ api/
│ │ ├─ pages/
│ │ ├─ components/
│ │ ├─ context/
│ │ └─ App.js
├─ .env
├─ package.json
└─ README.md

## Setup Frontend

cd frontend
npm install
npm run dev

## Setup backend

cd backend
npm install
npm run dev

## Deployment

Frontend: Vercel
Backend: Render