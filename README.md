# 🚀 Starter Kit for Hono + Drizzle + Better Auth

A modern starter template for building full-stack web applications with [Hono](https://hono.dev/), [Drizzle ORM](https://orm.drizzle.team/), and [Better Auth](https://better-auth.com/).  
Powered by [Bun](https://bun.sh/) for fast installs and dev server.  

---

## ✨ Features

- ⚡ **Hono** – lightweight, super-fast web framework
- 🗄 **Drizzle ORM** – type-safe, SQL-first ORM for your database
- 🔑 **Better Auth** – simple & secure authentication setup
- 🧑‍💻 **Bun** – ultra-fast JavaScript runtime
- 📂 Ready-to-use project structure
- 🛠 Dev-friendly scripts for quick start

---

## 📦 Installation

Clone the repository and install dependencies:

```sh
bun install
```

---

## 🏃 Running the Project

Start the development server:

```sh
bun run dev
```

By default, the app runs at:

👉 [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Project Structure

```
├── drizzle/          # Database migrations & schema
├── src/
│   ├── routes/       # Hono routes
│   ├── db/index.ts   # Drizzle ORM setup
│   ├── utils/auth.ts # Better Auth config
│   └── index.ts      # App entry
├── .env              # Environment variables
├── package.json
└── README.md
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory with your configuration:

```ini
DATABASE_URL=postgres://user:password@localhost:5432/dbname
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=your-api-base-url
```

---

## 🗃 Database Setup

Run Drizzle migrations:

```sh
bun run drizzle-kit migrate
```

(Adjust command based on your chosen setup.)

---

## 🔒 Authentication

Better Auth is preconfigured.  
Update `auth.ts` to customize providers, session handling, or user model.

---

## 📚 Useful Links

- [Hono Documentation](https://hono.dev/)
- [Drizzle ORM Docs](https://orm.drizzle.team/)
- [Better Auth Docs](https://better-auth.com/)
- [Bun Documentation](https://bun.sh/docs)

---

## 📜 License

MIT – free to use, modify, and share.  
