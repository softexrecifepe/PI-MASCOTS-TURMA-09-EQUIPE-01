import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"

const handler = NextAuth({
    pages:{
        signIn: "/"
    },
    providers: [
        CredentialsProvider ({
          
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "email", placeholder: "email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if (!credentials){
                return null
            }
            if(
                credentials.email === "" && 
                credentials.password === ""
            ){

                return{
                    id:"",
                    name: "",
                    email: "",
                }

            }
          }
        })
      ]
})

export { handler as GET, handler as POST }