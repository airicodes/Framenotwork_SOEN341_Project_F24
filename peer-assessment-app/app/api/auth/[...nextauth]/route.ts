import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import GetDBSettings from "@lib/db";
import mysql from 'mysql2/promise';


const handler = NextAuth({
    session: {
      strategy: "jwt",
    },
  
    pages: {
      signIn: "/login",
    },
  
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
          userType: { label: "User Type", type: "text" },
        },
        async authorize(credentials) {
          try {
            const db = await mysql.createConnection(GetDBSettings());
            // Execute a query to find the user by email
            const rows = await db.execute('SELECT * FROM users WHERE email = ?', [credentials?.email]);
            const user = rows[0];
  
            if (!user) {
              return null;
            }
  
            // Compare the provided password with the stored hashed password
            const passwordCorrect = await compare(credentials?.password || "", user.password);
  
            if (passwordCorrect) {
              return {
                id: user.id,
                email: user.email,
              };
            }
          } catch (error) {
            console.error('Database error:', error);
          }
  
          return null;
        },
      }),
    ],
  });
  
  export { handler as GET, handler as POST };