import connectDB from "@/lib/connectDB"
import { UserModal } from "@/lib/models/UserModel"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

async function handleLogin(obj){
  await connectDB()
  const user=await UserModal.findOne({email: obj.email})
  if(user){
    return user
  }
  else{
    let newUser=await UserModal(obj)
    newUser=await newUser.save()
    return newUser
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        // console.log("Account=> ",account)
        // console.log("Profile=> ",profile)
        let obj={
          firstName:profile.given_name,
          lastName:profile.family_name,
          email:profile.email,
          picture:profile.picture,
        };

        const user=await handleLogin(obj)   //send info into the database
        return user
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },

    async jwt({ token }) {
      const user =await handleLogin({email:token.email})
      console.log("User in JWT=> ",user)
      token.role=user.role
      token._id=user._id
      return token
    },

    session({ session, token }) {     //in this block we update the user object
      session.user._id = token._id
      session.user.role=token.role
      return session
    },
  }
})