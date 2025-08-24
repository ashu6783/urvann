# Urvann Plant Store 🌱

**Urvann Plant Store** is a full-stack plant management application where users can browse, search, and filter indoor/outdoor plants. Admins can add and update plant details. Built with **React** for frontend and **Node.js/Express + MongoDB** for backend.  

---

<img width="2873" height="1523" alt="image" src="https://github.com/user-attachments/assets/f84fcad7-557d-43e4-a2ce-80e9911ca8d7" />
<img width="2690" height="1589" alt="image" src="https://github.com/user-attachments/assets/f5cce9b3-67e7-400d-89c2-f04576ce82ee" />
<img width="2838" height="1545" alt="image" src="https://github.com/user-attachments/assets/0e1eff00-53a8-4ce9-84da-65fe17ac3626" />
<img width="2652" height="1570" alt="image" src="https://github.com/user-attachments/assets/861b71b2-1b8c-4552-adc6-f0b05a205a8a" />
<img width="2786" height="1598" alt="image" src="https://github.com/user-attachments/assets/e11d0a41-57d3-4165-9e7a-85a6e6d6b43b" />

## Features

- Browse all plants in a dynamic grid/table  
- Search plants by name  (on frontend to limt hits on server)
- Filter plants by category  (on frontend to limt hits on server)
- Admin functionality to add/update plants  
- User authentication and role-based authorization  
- Responsive design
 **Add plant only on admin login**
---

## Technologies

### Frontend
- React  
- React Router DOM  
- Axios  
- Tailwind CSS  
- React Hook Form + Zod (for forms and validation)  
- Lucide Icons
- Material UI

### Backend
- Node.js + Express  
- MongoDB + Mongoose  
- JWT authentication  
- Bcrypt for password hashing  

---

## Installation

### 1. Clone the repository

    git clone https://github.com/yourusername/urvann-plant-store.git
    cd urvann-plant-store

### 2. Backend Setup

    cd server
    npm install

### 3. Frontend Setup

    cd ../client
    npm install
    npm start

API Endpoints
Plants
GET /api/plants – Get all plants
POST /api/plants – Add new plant (admin only)


Authentication
POST /api/auth/register – Register user
POST /api/auth/login – Login user
##Folder Structure

```bash
client/
  src/
    api/
      plants.js
      auth.js
    components/
      Navbar.jsx
      PlantGrid.jsx
      PlantCard.jsx
      ProtectedRoutes.jsx
    context/
      AuthContext.jsx
    pages/
      Home.jsx
      PlantsPage.jsx
      PlantDetails.jsx
      AddPlant.jsx
      Login.jsx
    App.jsx
server/
  config/
    db.js
    seeding.js
  controllers/
    plantController.js
    authController.js
  middleware/
    authMiddleware.js
  models/
    plant.js
    user.js
  routes/
    plantRoutes.js
    authRoutes.js
  utils/
    seed.js
  index.js




