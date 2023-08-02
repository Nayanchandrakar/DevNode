import { getserverSession } from "@lib/auth"
import { db } from "@lib/db"
import { communitySchema } from "@schema/zodSchema"
import { NextResponse } from "next/server"
import { z } from "zod"

export async function POST(req: Request) {
  try {
    const session = await getserverSession()
    const body = await req.json()

    const { communityName, subDomain } = communitySchema?.parse(body)

    if (session) {
      // checking is there any community with these name and subdomain exist or not
      const CommunityDomainExist = await db?.community?.findFirst({
        where: {
          subDomain: subDomain,
          communityName: communityName,
        },
      })

      if (CommunityDomainExist) {
        return new Response(
          "Community with these name and domain already Exists",
          { status: 409 }
        )
      }

      const createCommunity = await db?.community?.create({
        data: {
          ownerId: session?.user?.id,
          communityName: communityName,
          subDomain: subDomain,
        },
      })
      return NextResponse.json({ data: createCommunity, status: 200 })
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
