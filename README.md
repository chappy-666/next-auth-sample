# Next.js + NextAuth.js v5 App with TailwindCSS

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-3B82F6?logo=auth0&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

---

## 🚀 Overview

This project showcases a typical structure combining a **public landing page (LP)** with a **protected application area** using modern Next.js features.  
Key highlights include:

- ✅ Auth-protected routes using **NextAuth.js v5**
- 🌐 Public landing page for unauthenticated users
- 🗂️ Clean routing via the `app/` directory and parallel routing
- 🎨 Styling with **Tailwind CSS**
- ⚡ Smart layout separation for public and protected areas

---

## 📂 Project Structure

```txt
src/
├── app/
│   ├── (app)/                    # Protected application area
│   │   ├── layout.tsx            # Shared layout for protected pages
│   │   ├── dashboard/page.tsx    # Example protected page
│   │   └── components/layout/
│   │       ├── header.tsx        # Header for authenticated area
│   │       ├── footer.tsx        # Footer for authenticated area
│   │       └── sign-out.tsx      # Sign-out button
│
│   ├── page.tsx                  # Public landing page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Tailwind base styles
│   ├── components/sign-in.tsx    # Sign-in button
│   └── api/[...nextauth]/route.ts # NextAuth.js API route
│
├── auth.ts                       # NextAuth.js configuration
├── middleware.ts                 # Route protection middleware
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs
├── tsconfig.json
└── public/
    ├── next.svg
    ├── vercel.svg
    └── (other icons)
```

---

## 🔐 Authentication Behavior

- `/` → Public LP (no login required)
- `/dashboard` → Requires authentication  
  Protected via `middleware.ts` using session-based validation

---

## 🎨 Layout Strategy

- Public LP has a clean, minimal layout
- Protected application routes under `(app)/` share a header/footer layout

---

## 🧪 Getting Started

### Setup with Dev Container

```bash
# Clone the repository
git clone <repository-url>
cd <project-directory>

# Open in VS Code
code .

# When prompted, click "Reopen in Container" or
# Use Command Palette: "Dev Containers: Reopen in Container"
```

### Manual Setup (Alternative)

```bash
# Move directory
cd <project-directory>/src

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

### env Setting

```.env
# A random secret string used by NextAuth for signing. You can generate one using:
# openssl rand -base64 32
AUTH_SECRET=

# GitHub OAuth credentials
# You can obtain these from https://github.com/settings/developers
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

# Google OAuth credentials
# You can obtain these from https://console.cloud.google.com/apis/credentials
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

---

## 📄 License

MIT
