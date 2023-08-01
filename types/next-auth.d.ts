import type { Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    image: string | null
    profile: any
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string
      email: string | null | undefined
      image: string | null | undefined
      profile: any
    }
  }
}
