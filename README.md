# 🛒 E-Commerce Website

An end-to-end modern e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js) and TailwindCSS for styling. This platform allows users to browse products, manage carts, and place orders, with a full admin dashboard for product and order management.

---

## 🚀 Features

### 🧑‍💼 User Side
- 🔍 Browse products by categories
- 🛍️ Add to cart and wishlist
- 🔐 User authentication (Register/Login)
- 🧾 Place orders and track them
- 💳 Payment integration (dummy/payment gateway ready)
- 📱 Responsive mobile-friendly UI

### 🛠 Admin Dashboard
- 📦 Add, edit, delete products
- 📊 View and manage orders
- 👥 Manage users
- 📈 Dashboard analytics

---

## 🛠 Tech Stack

| Tech         | Description                     |
|--------------|---------------------------------|
| **Frontend** | React.js, TailwindCSS, Axios    |
| **Backend**  | Node.js, Express.js             |
| **Database** | MongoDB (Mongoose)              |
| **Auth**     | JWT, bcrypt                     |
| **Build Tool** | Vite                          |

---

## 📂 Folder Structure

/frontend → React app (Vite + TailwindCSS)
/backend → Express server + MongoDB

---

## ⚙️ Setup Instructions

### 📦 1. Clone the repo

```bash
git clone https://github.com/your-username/ecommerce-website.git
cd ecommerce-website
📁 2. Install dependencies
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
🔑 3. Environment Variables
Create a .env file in the /backend directory with:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
▶️ 4. Run the project
bash
Copy
Edit
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
