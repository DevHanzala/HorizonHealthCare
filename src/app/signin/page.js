import { Button } from "@/Components/ui/button";
import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session=await auth();
  if(session){
    redirect('/')
  }
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gray-100">
      <form
        className="p-6 bg-white shadow-lg rounded-md"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Sign In
        </h1>
        <Button
          type="submit"
          className="w-full bg-gray-500 hover:bg-gray-400 text-white font-medium py-2 px-4 rounded-md"
        >
          Sign in with Google
        </Button>
      </form>
    </div>
  );
}
