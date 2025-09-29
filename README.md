🚀 Starter Kit for Hono + Drizzle + Better Auth

A modern starter template for building full-stack web applications with Hono
, Drizzle ORM
, and Better Auth
.
Powered by Bun
 for fast installs and dev server.

✨ Features

⚡ Hono – lightweight, super-fast web framework

🗄 Drizzle ORM – type-safe, SQL-first ORM for your database

🔑 Better Auth – simple & secure authentication setup

🧑‍💻 Bun – ultra-fast JavaScript runtime

📂 Ready-to-use project structure

🛠 Dev-friendly scripts for quick start

📦 Installation

Clone the repository and install dependencies:

bun install

🏃 Running the Project

Start the development server:

bun run dev


By default, the app runs at:

👉 http://localhost:3000

⚙️ Project Structure
├── drizzle/          # Database migrations & schema
├── src/
│   ├── routes/       # Hono routes
│   ├── db.ts         # Drizzle ORM setup
│   ├── auth.ts       # Better Auth config
│   └── index.ts      # App entry
├── .env              # Environment variables
├── package.json
└── README.md

🔧 Environment Variables

Create a .env file in the root directory with your configuration:

DATABASE_URL=postgres://user:password@localhost:5432/dbname
AUTH_SECRET=your-secret-key

🗃 Database Setup

Run Drizzle migrations:

bun run drizzle:push


(Adjust command based on your chosen setup.)

🔒 Authentication

Better Auth is preconfigured.
Update auth.ts to customize providers, session handling, or user model.

📚 Useful Links

Hono Documentation

Drizzle ORM Docs

Better Auth Docs

Bun Documentation

📜 License

MIT – free to use, modify, and share.

Do you want me to also add example code snippets (e.g., sample route.ts with auth middleware + DB query) so the README feels like a mini-guide, not just setup instructions?
