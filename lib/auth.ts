import GoogleProvider from "next-auth/providers/google"
import { NextAuthOptions, getServerSession } from "next-auth"
import { nanoid } from "nanoid"
import { db } from "@lib/db"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account }) {
      // checking in database that userExist or not
      const userExist = await db.account.findFirst({
        where: {
          email: token?.email!,
        },
        select: {
          image: true,
          provider: true,
          id: true,
          email: true,
          profile: true,
        },
      })

      if (!userExist) {
        const createAccount = await db.account.create({
          data: {
            accessToken: account?.access_token!,
            email: token?.email!,
            expires_at: account?.expires_at!,
            image: token?.picture!,
            provider: account?.provider!,
            profile: {
              create: {
                fullname: token?.name,
                username: nanoid(10),
              },
            },
          },
          select: {
            image: true,
            provider: true,
            id: true,
            email: true,
            profile: true,
          },
        })

        return { ...createAccount }
      }

      return { ...userExist }
    },

    async session({ token, session }) {
      ;(session.user.id = token?.id),
        (session.user.email = token?.email),
        (session.user.image = token?.image),
        (session.user.profile = token?.profile)

      return session
    },

    async redirect() {
      return "/"
    },
  },
}

export const getserverSession = () => getServerSession(authOptions)
