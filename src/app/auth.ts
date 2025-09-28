import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { jwtDecode } from "jwt-decode"

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        )

        const payload: {
          message: string
          token: string
          user: { name: string; email: string; role: string }
        } = await response.json()

        if (payload.message === "success" && payload.token) {
          const decoded: { id: string } = jwtDecode(payload.token)
          return {
            id: decoded.id,
            name: payload.user.name,
            email: payload.user.email,
            role: payload.user.role,
            token: payload.token,
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          name: user.name ?? "",
          email: user.email ?? "",
          role: user.role ?? "user",
        }
        token.token = user.token
      }
      return token
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = token.user
      }
      if (token.token) {
        session.token = token.token
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
