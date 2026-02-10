# npm install next-auth@beta

# npx auth secret (secret must appear in env.local)

# env.local

AUTH_SECRET="oFQdRb6WSyE2Oz8jgVetLI8+tH1zjGcQJcrIaO1Caug="
ADMIN_EMAIL=vassito@abv.bg
ADMIN_PASSWORD=Myveryverysecret0

# auth.ts in root:

```js
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { signInSchema } from "./app/lib/validators";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        const parsed = signInSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        if (
          email === process.env.ADMIN_EMAIL &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "admin",
            email,
            name: "Admin",
          };
        }

        return null;
      },
    }),
  ],
});
```

# app/api/auth/[...nextauth]/route.ts

```js
import { handlers } from "@/auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
```

# middleware.ts in root

```js
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware(req: NextRequest) {
  const session = await auth();

  if (!session) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};
```

# actions/auth.action.ts

```js
"use server";

import { signIn } from "@/auth";

export async function loginAdmin(data: { email: string; password: string }) {
  // redirect: false → ще получим резултата като обект
  const result = await signIn("credentials", {
    redirect: false,
    email: data.email,
    password: data.password,
  });

  return result; // { ok: boolean, error?: string, url?: string }
}

```

# login/page.tsx

```js
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false, // false → получаваме резултата като обект
      email,
      password,
    });

    if (result?.ok) {
      window.location.href = "/studio"; // успешен login
    } else {
      setError(result?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold text-center">Admin Login</h1>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <label className="flex flex-col text-sm font-medium">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="vassito@abv.bg"
            className="mt-1 p-2 border rounded"
            required
          />
        </label>

        <label className="flex flex-col text-sm font-medium">
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Myveryverysecret0"
            className="mt-1 p-2 border rounded"
            required
          />
        </label>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

```
