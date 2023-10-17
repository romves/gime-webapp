import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          uname: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const { email, password } = credentials;
        const formData = new FormData();

        formData.append("email", email);
        formData.append("pass", password);

        const tokenRes = await fetch(
          "https://valter-production.up.railway.app/login",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!tokenRes.ok) {
          const errorData = await tokenRes.json();
          throw new Error(JSON.stringify(errorData.message));
        }

        const tokenData = await tokenRes.json();

        const userRes = await fetch(
          "https://valter-production.up.railway.app/user-profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${tokenData.data.token}`,
            },
          }
        );

        

        const userData = await userRes.json();

        const user: any = {
          user: { ...userData.data },
          accessToken: tokenData.data.token,
        };

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      session.accessToken = token.accessToken;

      return session;
    },
  },
};
