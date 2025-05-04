import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const res = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: credentials?.username,
                        password: credentials?.password,
                        expiresInMins: 30
                    })
                });

                const user = await res.json();
                if (res.ok && user) {
                    return user;
                }

                console.log('ssini', user);

                return null;
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }

            return token;
        },
        async session({ session, token }) {
            console.log('ngecek', session);
            session.user.id = token.id as string;
            session.user.email = token.email as string;

            return session;
        }
    },
    pages: {
        signIn: '/auth'
    }
};

export default NextAuth(authOptions);
