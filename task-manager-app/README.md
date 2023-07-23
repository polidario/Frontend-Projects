# Task Manager App

## Prerequisites
- Node v20.3.0
- Supabase / PostgreSQL

## Setting up
1. Clone the repository or Download the Project as a ZIP file and extract the content somewhere.
2. Open the project and run `npm install`
3. Setup .env file with variables:
   - `JWT_SECRET`
   - `DB_HOST`
   - `DB_PORT`
   - `DB_USER`
   - `DB_PASS`
   - `DB_NAME`
4. In the root directory of the project, run these two commands:
   - `npm run server`
   - `npm run client`

## Description
The Task Manager App is a full-stack web application designed to help users manage their tasks efficiently. It provides a user-friendly interface for creating, updating, and organizing tasks across different categories.

## Features
- User Authentication: Secure user login and registration using JWT authentication.
- Task Creation: Add new tasks with a title, description, and category.
- Task Updates: Update existing tasks with changes to title, description, category.
- Task Deletion: Remove tasks when they are no longer needed.
- Task Categories: Organize tasks into different categories for better organization.
- Search and Filter: Easily find tasks using search and filter options.
- User Profiles: Each user has a personalized profile page with relevant information.

## Technologies Used
- Frontend: React, React Router
- Backend: Node.js, Express, Supabase / PostgreSQL
- Authentication: JSON Web Tokens (JWT)

## Folder Structure
```lua
/
|-- client
| |-- src
| | |-- assets/images
| | |-- components
| | |-- context
| | |-- pages
| | |-- hooks
| | |-- services
| | |-- Main.js
| | |-- index.js
| |-- tailwindcss
| |-- package.json
| |-- ...
|-- server
| |-- .env.example
| |-- config
| |-- utils
| |-- server.js
| |-- package.json
| |-- ...
|-- README.md
|-- package.json
|-- ...
```

## Contact
If you have any questions or suggestions, feel free to reach out to me at bernard@weeklyhow.com.