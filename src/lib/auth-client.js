import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://category-a8-apple-l35b.vercel.app"
    // baseURL: "http://localhost:3000"
})

export const { signIn, signUp, useSession } = createAuthClient()