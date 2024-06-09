import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import { storeRefresh } from "./actions/auth/refreshToken";

export default {
  callbacks: {
    async signIn({ account }) {
      if (account?.access_token && account?.refresh_token) {
        await storeRefresh(account.refresh_token, account.providerAccountId);
      }
      return true;
    },
    async session({ session, token }) {
      if (session && token && session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          response_type: "code",
          scope:
            "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/gmail.readonly",
        },
      },
    }),
    {
      id: "yahoo", // signIn("my-provider") and will be part of the callback URL
      name: "Yahoo", // optional, used on the default login page as the button text.
      type: "oauth", // or "oauth" for OAuth 2 providers
      issuer: "https://api.login.yahoo.com", // to infer the .well-known/openid-configuration URL
      clientId: process.env.AUTH_YAHOO_CLIENT_ID, // from the provider's dashboard
      clientSecret: process.env.AUTH_YAHOO_SECRET, // from the provider's dashboard
      userinfo: "https://api.login.yahoo.com/openid/v1/userinfo", // URL to fetch the user profile
      token: "https://api.login.yahoo.com/oauth2/get_token", // URL to get an access token
    },
  ],
} satisfies NextAuthConfig;
