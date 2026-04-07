# ProductivityApp

## Stack

- React + TypeScript
- Vite
- HTML / CSS

---

## Setup

```bash
npm create vite@latest hiring-test -- --template react-ts
cd hiring-test
npm install
npm run dev
```

Push to a new GitHub repo and work on a dedicated branch:

```bash
git checkout -b feature/todo-app
```

---

## Features to build

### 1 — GitHub user profile

Fetch your GitHub info from `https://api.github.com/users/{yourusername}` and display at the top of the screen:

- Avatar
- Name
- Any other info you find relevant

States to handle:

- Loading state while the request is in progress
- Error message if the fetch fails

---

### 2 — Todo list

- Add a new todo (input + button)
- Display all todos in a list
- Mark a todo as completed (checkbox or button)
- Delete a todo
- Show total number of todos and number completed

---

### 3 — Filter (bonus)

- Search input that filters todos by name (case-insensitive)
- Display "No items found" when the search has no results
- Display the number of items found

---
