# 🚀 Dockerized Node.js + MongoDB Application

This project demonstrates how to build and run a simple full-stack application using **Node.js, Express, MongoDB, and Docker**. It includes containerization, database integration, and multi-container orchestration using Docker Compose.

---

## 📌 Project Overview

This application allows users to:

* Add user details through a form
* Store data in MongoDB
* Retrieve and display stored users

The main goal of this project is to understand how Docker can be used to containerize applications and manage services efficiently.

---

## 🛠️ Tech Stack

* **Frontend:** HTML, JavaScript
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Containerization:** Docker
* **Orchestration:** Docker Compose

---

## ⚙️ Features

* REST API for adding and fetching users
* MongoDB integration using MongoClient
* Dockerized backend and database
* Multi-container setup using Docker Compose
* Mongo Express UI for database visualization

---

## 📂 Project Structure

```
project-root/
│
├── server/
│   ├── server.js
│   ├── package.json
│
├── client/
│   ├── index.html
│
├── docker-compose.yml
├── Dockerfile
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Run using Docker Compose

```
docker-compose up -d
```

---

### 3️⃣ Access the Application

* 🌐 Frontend: Open your HTML file (Live Server)
* 🖥️ Backend API: http://localhost:3000
* 🗄️ Mongo Express: http://localhost:8081

---

## 🔗 API Endpoints

### ➤ Add User

```
POST /add-user
```

### ➤ Get All Users

```
GET /users
```

---

## 🧠 Key Learnings

* Understanding Docker containers and images
* Managing multi-container applications
* Connecting Node.js with MongoDB inside Docker
* Handling container networking
* Using Docker Compose for service orchestration

---

## 🐳 Docker Concepts Used

* Docker Images & Containers
* Port Mapping
* Docker Networks
* Environment Variables
* Docker Compose

---

## 🤝 Contributing

Feel free to fork this repository and improve the project.

