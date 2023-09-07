import { z } from "zod"

export const profileSchema = z.object({
  username: z
    .string()
    .min(3, "Username is required")
    .max(10, "Max username Length 10"),
  bio: z.string().min(1, "Bio is required").max(1000, "Max bio length 1000"),
  Location: z
    .string()
    .min(1, "Location is required")
    .min(5, "Minimum country name Length 5")
    .max(10, "Maximum country name length 10"),
  fullname: z
    .string()
    .min(3, "Minimum 3 character required")
    .max(20, "Max 20 character in length"),
  portfolioUrl: z.string(),
  stackOverflowProfile: z.string(),
  githubProfile: z.string(),
  LinkedinUrl: z.string(),
})

export const communitySchema = z.object({
  subDomain: z
    .string()
    .min(5, "minimum 5 characters required")
    .max(15, "max 15 characters"),
  communityName: z
    .string()
    .min(5, "minimum 5 characters required")
    .max(15, "max 10 characters"),
})

export const createPost = z.object({
  title: z.string().min(10, "minimum 20 characters required"),
  body: z.any(),
})
