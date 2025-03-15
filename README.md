# Next.js DJMC Website

This is a **full-stack website** for the **Department of Journalism and Mass Communication (DJMC)** built using [Next.js](https://nextjs.org). The project leverages modern web technologies for a seamless and dynamic user experience.

## 🚀 Features

- ✅ **Next.js 14** – Fast, optimized, and server-side rendering
- 🎨 **Tailwind CSS** – Modern, responsive UI design
- 📡 **API Routes** – Full-stack capabilities for dynamic content
- 🔒 **NextAuth.js** – Secure authentication system
- 🗄️ **MongoDB & Prisma** – Database integration for content management
- 🚀 **Vercel Deployment** – Easy and efficient hosting

## 📦 Getting Started

### 1️⃣ Clone the Repository
<!-- ```bash
git clone https://github.com/your-username/djmc-website.git
cd djmc-website
``` -->

### 2️⃣ Install Dependencies
```bash
npm install  # or yarn install
```

### 3️⃣ Setup Environment Variables
Create a `.env.local` file and add the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### 4️⃣ Run the Development Server
```bash
npm run dev  # or yarn dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

## 🏗️ Project Structure
```
📁 app/                 # Authentication API (NextAuth.js)
 📁 components/         # Reusable UI components
 📁 models/             # Mongoose Models
 📁 lib/                # Database connection & helpers
```

## 🔧 Learn More
- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 🏫 [Learn Next.js](https://nextjs.org/learn)
- 🔗 [Next.js GitHub](https://github.com/vercel/next.js)

## 🚀 Deployment
The easiest way to deploy this app is through **Vercel**:
```bash
vercel
```
Check out the [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---
### 📌 License
This project is licensed under the **MIT License**.

