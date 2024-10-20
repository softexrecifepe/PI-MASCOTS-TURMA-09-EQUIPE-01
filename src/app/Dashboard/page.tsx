import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogOutbutton from "../components/LogOutButton";

async function Page(){
    const session = await getServerSession();


    if(!session){
        redirect("/")
    }
    return(
    <div>
    <div>Olá{session?.user?.name}</div>
    <div>Dashboard</div>
    <div> <LogOutbutton/></div>
    </div>
    
    )
}


export default Page