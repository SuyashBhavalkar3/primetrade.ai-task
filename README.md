# PrimeTrade Task Management System

A scalable, secure, and premium Full-Stack application built for the Primetrade.ai Backend Developer Internship assignment.

## 🚀 Tech Stack

### Backend
- **Node.js & Express**: Core runtime and framework.
- **SQLite & Sequelize**: SQL Database and ORM.
- **JWT (JSON Web Tokens)**: Secure authentication.
- **Bcrypt.js**: Password hashing.
- **Joi**: Input validation.
- **Swagger**: API Documentation.
- **Helmet & Rate Limiting**: Security best practices.

### Frontend
- **Next.js 14+ (App Router)**: React framework.
- **Tailwind CSS**: Modern styling.
- **Framer Motion**: Premium animations.
- **Lucide React**: Icon system.
- **React Toastify**: Notifications.

---

## 🛠️ Features

- ✅ **Authentication**: Secure Register & Login with password hashing.
- ✅ **RBAC**: Role-Based Access Control (Admin vs User).
- ✅ **CRUD Operations**: Full Task management (Create, Read, Update, Delete).
- ✅ **Security**: Protected routes, JWT token handling, and input sanitization.
- ✅ **Premium UI**: Glassmorphism design, dark mode, and smooth transitions.
- ✅ **API Docs**: Integrated Swagger documentation at `/api-docs`.

---

## 🏗️ Getting Started

### Prerequisites
- Node.js installed.
- SQLite3 (Included in the project via dependencies).

### 1. Backend Setup
```bash
cd backend
npm install
# Create a .env file based on the provided values
npm run start # Starts with nodemon
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 📈 Scalability Note

To transform this monolithic architecture into a highly scalable enterprise system, the following strategies would be implemented:

### 1. Microservices Architecture
Break down the application into specialized services:
- **Auth Service**: Dedicated to identity and session management.
- **Task Service**: Handles core business logic.
- **Notification Service**: Manages email/push alerts.
- *Benefit*: Independent scaling and fault isolation.

### 2. Caching with Redis
- Implement Redis to cache frequently accessed tasks and user sessions.
- Reduce database load for high-traffic endpoints (e.g., `GET /tasks`).

### 3. Database Scaling
- **Read Replicas**: Distribute read queries across multiple database nodes.
- **Sharding**: Partition data across different servers based on `userId`.

### 4. Load Balancing
- Use Nginx or cloud-based load balancers (AWS ELB) to distribute traffic across multiple Node.js instances.
- Implement horizontal scaling using Docker and Kubernetes.

### 5. Asynchronous Processing
- Use Message Queues (RabbitMQ/Kafka) for heavy tasks like generating reports or sending bulk emails to prevent blocking the event loop.

---

## 📄 API Documentation
Once the backend is running, visit:
`http://localhost:5000/api-docs`

---

Built with ❤️ for **Primetrade.ai**
