# Next Todo App ✅

A modern **Todo application** built with **Next.js 15**, featuring authentication, database persistence, and a clean UI with TailwindCSS.

## 🚀 Tech Stack

This project uses the following technologies:

- **[Next.js 15](https://nextjs.org/)** – React framework for building full-stack web apps
- **[React 19](https://react.dev/)** – UI library
- **[TypeScript](https://www.typescriptlang.org/)** – Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Shadcn](https://ui.shadcn.com/)** – Style Components
- **[Radix UI](https://www.radix-ui.com/)** – Accessible UI primitives
- **[Lucide React](https://lucide.dev/)** – Icon set
- **[Clerk](https://clerk.com/)** – Authentication & user management
- **[Prisma](https://www.prisma.io/)** – ORM for database access
- **[React Query (TanStack Query)](https://tanstack.com/query/latest)** – Data fetching & caching
- **[React Hook Form](https://react-hook-form.com/)** – Forms management
- **[Zod](https://zod.dev/)** – Schema validation
- **[Axios](https://axios-http.com/)** – HTTP client
- **[Sonner](https://sonner.emilkowal.ski/)** – Toast notifications
- **[Date-Fns](https://date-fns.org/)** – Date formatting utilities

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/diegocruzmo/next-todo.git
cd next-todo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a .env file in the root directory with the following (example):

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

DATABASE_URL=postgresql:your-database-config

NEXT_PUBLIC_BASE_URL=http://localhost:3000

### 4. Prisma setup

Run the following to generate Prisma client and apply migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run the app

Start the development server with:

```bash
npm run dev
```
