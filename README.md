# 📝 Loose Ends – Full Stack Task Manager

A simple, interactive and aesthetic task management application designed to help users organize their daily tasks, track progress and stay productive.

## ✨ Features

- Add new tasks easily.
- Mark tasks as completed.
- View all, pending and completed tasks.
- Track task completion progress.
- Clean and user-friendly interface.
- REST API for task management.
- Separate frontend and backend architecture.

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- JavaScript
- CSS3

**Backend**
- Node.js
- Express.js
- REST API
- CORS

**Development Tools**
- Visual Studio Code
- Git & GitHub
- REST Client

## 📁 Project Structure

```text
task-manager-fullstack/
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── services/
│   └── package.json
│
├── screenshots/
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sweety-spec/task-manager-fullstack.git
cd task-manager-fullstack
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Start the backend using the start command configured in `backend/package.json`.

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🔗 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /api/tasks | Create a task |
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get a specific task |
| PUT | /api/tasks/:id | Update a task |

## 🎯 Learning Outcomes

Through this project, I gained practical experience in frontend development, backend development, REST API creation, middleware, API testing and Git version control.

## 👩‍💻 Author

**Sweety Gupta**

BCA – Data Science | University of Allahabad

[GitHub](https://github.com/sweety-spec)

---
