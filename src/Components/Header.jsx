import Link from "next/link";
import { Button } from "@/Components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { auth,signOut } from "../../auth";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

export default async function Header() {
    const session = await auth()
    console.log("Session in header => ", session)
    return (
        <header className="  bg-gray-400 rounded-sm text-gray-600 body-font flex items-center md:py-0 py-1  justify-center md:px-3 px-2">
            <div className="container  mx-auto flex flex-wrap md:p-2 flex-col md:flex-row md:items-center">
                <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Link href={"admin/request"}>
                    
                    <Avatar className="">
                        <AvatarImage src="data:image/png;base64,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" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>   
                    
                    </Link>
                 
                    <span className="ml-2 text-xl"><Link href={"/"}>Horizon Healthcare</Link></span>
                </p>
            </div>
            <div>
                {
                    session ?
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Image
                                        src={session?.user?.image}
                                        height={40}
                                        width={40}
                                        className="rounded-full cursor-pointer"
                                        alt="User Avatar"
                                    />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <Link href={"/appointments"}>
                                        <Button variant={"outline-none"}>
                                        My Appointments
                                        </Button> 
                                        </Link>
                                       
                                        </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                    <Button variant={"outline-none"}>
                                        <Link href={"/profile"}>
                                        Profile
                                        
                                        </Link>
                                        </Button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                    <form
        action={async () => {
          "use server";
          await signOut("google");
        }}
      >
        <Button
        variant={"outline-none"}
          type="submit"
        >
          Log out
        </Button>
      </form>

                                    </DropdownMenuItem>
                                    
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        :
                        <Link href={"/signin"}>
                            <Button variant={'outline'}>Login</Button>
                        </Link>
                }
            </div>
        </header>
    );
}
