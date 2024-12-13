import connectDB from "@/lib/connectDB";
import { UserModal } from "@/lib/models/UserModel";

export async function POST(request) {
    await connectDB();
    try {
      const obj = await request.json();
      console.log("Received data:", obj); // Log the incoming data
      let newUser = await new UserModal({ ...obj });
      newUser = await newUser.save();
  
      return new Response(
        JSON.stringify({
          error: false,
          msg: "User registered successfully",
          user: newUser,
        }),
        { status: 202 }
      );
    } catch (err) {
      console.error("Error occurred:", err); // Log the error details
      return new Response(
        JSON.stringify({
          error: true,
          msg: "Something went wrong",
          details: err.message, // Include error details
        }),
        { status: 400 }
      );
    }
  }
  
export async function GET(request){
    await connectDB()
    const users=await UserModal.find()

    return Response.json(
        {
        error:false,
        msg:"User fetched successfully",
        users,
    },{status:200});  

}
export async function PUT(request){}
export async function DELETE(request){}

