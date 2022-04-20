import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../../lib/prisma'
const bcrypt = require('bcrypt')
// NEXTAUTH_URL = 'http://localhost:3000/Login'

export default NextAuth({
    pages: {
        signIn: '../../Login',
    },
    providers: [
        CredentialsProvider({
            name: 'username',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'johnny appleseed',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log(credentials)

                const user = await prisma.member.findFirst({
                    where: {
                        user_name: credentials.username,
                    },
                    select: {
                        user_id: true,
                        user_name: true,
                        password: true,
                        role: true,
                    },
                })
                console.log(user)
                if (user) {
                    const passwordMatch = bcrypt.compare(
                        credentials.password,
                        user.password
                    )
                    if (passwordMatch) {
                        return user
                    }
                }
                return null
            },
        }),
    ],
    secret: process.env.SECRET,
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.name = user.user_name
                token.role = user.role
            }
            return token
        },
        session: async ({ token, session }) => {
            if (token) {
                session.user.name = token.name
                session.user.role = token.role
            }
            return session
        },
    },
    jwt: {
        secret: 'test',
        encryption: true,
    },
    debug: true,
})
