# Loose Ends: Task Manager Frontend

A React frontend for the Task Manager REST API, built as part of Phase 2
(Core Concepts and Skills) of the Full Stack Developer internship.

## Features
- Add, complete and delete tasks
- Filter tasks by All, To do and Done
- Progress bar and live task counts
- Error messages from the API shown in the interface
- Responsive layout

## Tech Stack
React, Vite, plain CSS

## Concepts Used
- Components and JSX
- State with `useState`
- Side effects with `useEffect` (loading tasks on page load)
- Fetching data from a REST API with `fetch`
- Derived values (counts and filters) computed from state
- Conditional rendering (empty states, errors, "All clear" stamp)

## Setup
1. Start the backend API (see the `task-manager-api` repository):
   ```
   node src/server.js
   ```
   It runs on http://localhost:3000
2. Install and start this frontend:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:5173

## Project Structure
```
src/
├── App.jsx    # main component: state, API calls, UI
├── App.css    # component styles
├── index.css  # global styles and background
└── main.jsx   # entry point
```