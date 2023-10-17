import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        uname: {
          label: "email",
          uname: "email",
          placeholder: "gime@aitech.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.uname || !credentials?.password) {
          return null;
        }

        const { uname, password } = credentials;
        const formData = new FormData();

        formData.append("uname", uname);
        formData.append("pass", password);

        try {
          const res = await fetch(
            "https://valter-production.up.railway.app/login",
            {
              method: "POST",
              body: formData,
            }
          );

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(JSON.stringify(errorData.message));
          }

          const userData = await res.json();
          console.log(userData.data.token);
          return userData;
        } catch (error: any) {
          console.error("An error occurred:", error.message);
          throw new Error(error.message);
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
