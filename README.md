# 👗 WARDROBE The MERN Fullstack Website 👗

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)


> Manage your Clothing shop, plan your offers and discounts with this modern MERN stack application.

<p align="center">
  <img src="/admin.png" alt="Screenshot of the main interface" width="400">
  <img src="/frontend.png" alt="Screenshot of the admin panel" width="400">
</p>
<p align="center"><em>(preview)</em></p>

## ✨ Key Features

*   **Effortless Management:** Easily add, categorize, and organize your clothing items with detailed descriptions, photos, and tags.
*   **Search and Filter:** Quickly find specific items by category, brand, or other criteria.
*   **Responsive Design:** Access your wardrobe from any device, whether it's a desktop, tablet, or smartphone.
*   **Secure User Authentication:** Protect your data with secure user accounts and authentication.
*   **Admin Panel:** Manage items, categories, and other settings with a dedicated admin interface.

## 💻 Tech Stack

*   **Frontend:** React.js, Tailwind CSS, React
*   **Backend:** Node.js, Express.js, Mongoose
*   **Database:** MongoDB

## 🚀 Getting Started

### Prerequisites

*   Node.js 
*   npm 
*   MongoDB 

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Plymouth-University/coursework-group_03.git
    ```

2.  Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

3.  Create a `.env` file in the `backend` directory and configure:

    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4.  Start the backend:

    ```bash
    npm run server
    ```

5.  Install frontend dependencies:

    ```bash
    cd frontend
    npm install
    ```

6.  Create a `.env` file in the `frontend` directory and configure:

    ```
    REACT_APP_API_URL=http://localhost:5000
    ```

7.  Start the frontend:

    ```bash
    npm run dev 
    ```

8.  Repeat steps 5-7 for the `admin` directory, creating a `.env` file with the same `REACT_APP_API_URL`.

## ⚙️ Usage

*   Access the frontend at `http://localhost:3000`.
*   Access the admin panel at `http://localhost:3001`.

## 🚀 Deployment

*   **Backend:** Deploy to Render, Heroku, or similar platforms.
*   **Frontend & Admin:** Deploy to Netlify, Vercel, or similar platforms.


---

Made with ❤️ by [Group_03/Plymouth Batch 11]
