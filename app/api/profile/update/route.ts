import { NextResponse } from "next/server"
import { getserverSession } from "@lib/auth"
import { db } from "@lib/db"
import { profileSchema } from "@schema/zodSchema"
import { z } from "zod"

export async function PATCH(request: Request) {
  try {
    let session = await getserverSession()
    const body = await request.json()

    const {
      username,
      Location,
      LinkedinUrl,
      githubProfile,
      bio,
      fullname,
      portfolioUrl,
      stackOverflowProfile,
    } = profileSchema?.parse(body)

    if (session) {
      // checking username  already Exist in db or not
      const usernameExist = await db?.profile?.findFirst({
        where: {
          username: username,
        },
        select: { id: true },
      })

      if (usernameExist) {
        return new Response("username already taken", { status: 409 })
      }

      // updating the profile if no username already taken
      const updateProfile = await db.profile.update({
        where: {
          userId: session?.user?.id!,
        },
        data: {
          username,
          Location,
          LinkedinUrl,
          githubProfile,
          bio,
          fullname,
          portfolioUrl,
          stackOverflowProfile,
        },
      })
      return NextResponse.json({ data: updateProfile, status: 200 })
    }

    // if no sesssion found
    return new Response("unauthorized", { status: 401 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid data", { status: 400 })
    }
    return new Response("Internal Server Error", { status: 500 })
  }
}
