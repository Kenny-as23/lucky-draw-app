# Lucky Draw Ticket Assignment App

A web application that randomly assigns seats for staff participating in an event.  
The system allows users to input event details, generate random seat numbers, and store the results in a database.  
Users can also view the history of previous lucky draw results.

This project demonstrates a simple full-stack application with a backend API, frontend interface, database integration, and Docker containerization.

---

# Features

- Random seat assignment for event staff
- Prevent duplicate events (same event code and date)
- Store lucky draw results in a database
- View history of previous lucky draw results
- REST API backend
- Dockerized environment for easy setup

---

# Tech Stack

Frontend
- Nuxt 3
- Vue 3
- JavaScript / TypeScript

Backend
- Node.js
- Express.js

Database
- SQLite

Containerization
- Docker
- Docker Compose

---

# Project Structure
<img width="297" height="834" alt="image" src="https://github.com/user-attachments/assets/b7e395e4-3523-411a-b588-f20bfc8d37b7" />

---

# Prerequisites

Before running this project, ensure the following software is installed:

- Node.js (v18 or newer)
- npm
- Docker
- Docker Compose

---

# Running the Project (Recommended: Docker)

Using Docker is the easiest way to run the entire application.

## Step 1 — Clone the repository

```
git clone https://github.com/Kenny-as23/lucky-draw-app.git
```

```bash
cd lucky-draw-app
```

## Step 2 — Start the application with Docker

```bash
docker compose up --build
```

Docker will automatically:

- build the backend container
- build the frontend container
- install all dependencies
- start the application

---

# Access the Application

Frontend

```
http://localhost:3000
```

Backend API

```
http://localhost:5000
```

Lucky Draw History API

```
http://localhost:5000/api/history
```

---

# Running Without Docker (Manual Setup)

If Docker is not available, the project can be run manually.

---

## Step 1 — Install Backend Dependencies

```bash
cd backend
```

```bash
npm install
```

Start backend server:

node server.js

Backend will run at:

```
http://localhost:5000
```

---

## Step 2 — Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:3000
```

---

# Database

This project uses **SQLite**.

If the database file does not exist, it will be automatically created when the backend server starts.

Database file:

luckydraw.db

Database table:

draws

Fields:

- id
- staff_name
- staff_id
- event_code
- event_date
- venue_type
- seat1
- seat2
- seat3
- created_at

---

# API Endpoints

Check existing event

POST /api/check

Draw lucky seats

POST /api/draw

Get history

GET /api/history

---

# .gitignore

The following files and folders are ignored in the repository:

node_modules
.nuxt
.env
*.log
.DS_Store
Thumbs.db

These files are automatically generated during installation.

---

# Example Workflow

1. User opens the application
2. User inputs staff name, staff ID, event code, date, and venue
3. System checks if the event already exists
4. If not, the system generates random seat numbers
5. Results are stored in the database
6. Users can view all previous results on the history page

---

# Author

Kenny Adrian Setiabudi

---

# License

This project is created for educational and portfolio purposes.
