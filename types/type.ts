export interface authSession {
    id:string | null,
    email:string | null,
    accessToken?: string | null,
    expires_at?: string | null,
    image: string | null,
    provider: string | null,
}