# PrimeTrade Task Management System

A scalable, secure, and premium Full-Stack application built for the Primetrade.ai Backend Developer Internship assignment.

## Tech Stack

### Backend
- **Node.js & Express**: Core runtime and framework.
- **Supabase (Postgres) & Prisma ORM**: Database and modern ORM.
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

## Features

- **Authentication**: Secure Register & Login with password hashing.
- **RBAC**: Role-Based Access Control (Admin vs User).
- **CRUD Operations**: Full Task management (Create, Read, Update, Delete).
- **Security**: Protected routes, JWT token handling, and input sanitization.
- **Premium UI**: Glassmorphism design, dark mode, and smooth transitions.
- **API Docs**: Integrated Swagger documentation at `/api-docs`.

---

## Getting Started

### Prerequisites
- Node.js installed.
- Supabase account and a Postgres database URI.

### 1. Backend Setup
```bash
cd backend
npm install
# Create a .env file based on the provided values
npx prisma db push # Syncs schema to Supabase
npm run start # Starts with nodemon
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## Scalability Note

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

## API Documentation
Once the backend is running, visit:
`http://localhost:5000/api-docs`

---

## Deployment

### Backend (Railway with Docker)
1. **Connect Repository**: Link your GitHub repo to Railway.
2. **Root Directory**: In Railway settings, set the **Root Directory** to `backend`.
3. **Environment Variables**: Add `JWT_SECRET`, `NODE_ENV=production`, and `PORT=5000`.
4. **Persistency**: Use a Volume or switch to a Managed Postgres if you need to persist SQLite data across restarts.

### Frontend (Railway or Vercel)
1. **Connect Repository**: Link the repo and set the **Root Directory** to `frontend`.
2. **Environment Variables**: Add `NEXT_PUBLIC_API_URL` pointing to your deployed Backend URL.

---

Built with for Primetrade.ai
