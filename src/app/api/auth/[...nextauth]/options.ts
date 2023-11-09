import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/db'

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

                const user = await prisma.eventPlannerUser.findUnique({
                    where: { email: credentials?.email },
                })

                if (credentials?.email === user?.email && credentials?.password === user?.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}