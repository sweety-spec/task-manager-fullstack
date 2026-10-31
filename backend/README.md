# Task Manager REST API

A simple REST API for managing tasks, built with Node.js and Express as part of
Phase 2 (Core Concepts and Skills) of the Full Stack Developer internship.

## Features
- Create, read, update and delete tasks (CRUD)
- Input validation with proper HTTP status codes
- Centralised error handling

## Tech Stack
Node.js, Express

## Project Structure
```
backend/
├── src/
│   ├── server.js          # starts the server
│   ├── app.js             # configures Express and middleware
│   ├── routes/            # maps URLs to controllers
│   ├── controllers/       # handles requests and responses
│   ├── services/          # business logic and data storage
│   └── middleware/        # error handling
├── requests.http          # sample requests for testing
├── package.json
└── README.md
```

## Architecture
The project uses a layered architecture based on separation of concerns:
- **Routes** only map URLs to controller functions.
- **Controllers** handle HTTP details: validation and status codes.
- **Services** contain the business logic and data operations.
- **Middleware** handles errors in one central place.

## Setup
```
npm install
node src/server.js
```
The server runs on http://localhost:3000

## API Endpoints
| Method | Endpoint | Description | Success |
|--------|----------|-------------|---------|
| GET | /api/tasks | Get all tasks | 200 |
| GET | /api/tasks/:id | Get one task | 200 |
| POST | /api/tasks | Create a task | 201 |
| PUT | /api/tasks/:id | Update a task | 200 |
| DELETE | /api/tasks/:id | Delete a task | 204 |

Error responses: 400 (invalid input), 404 (task not found), 500 (server error).

## Testing
Open `requests.http` in VS Code with the REST Client extension and click
"Send Request" above each request.

## Notes
Tasks are stored in memory, so data resets when the server restarts.
