import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: "Email" },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                // ADD LOGIC TO FETCH USER
                const user = {
                    id: '653eafef06dd5a489221a85c',
                    email: "hello@gmail.com",
                    password: "HELLOHELLO"
                }
                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}