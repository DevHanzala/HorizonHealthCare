import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/RequestModel"; 
import { UserModal } from "@/lib/models/UserModel";

export async function POST(request) {
  await connectDB();
  try {
    const obj = await request.json();

    const isUserRequestedBefore = await RequestModal.findOne({ user: obj.user });  //if it's present in our doc so not registered again

    if (isUserRequestedBefore) {
      return new Response(
        JSON.stringify({
          error: true,
          msg: "You had already applied as a doctor",
        }),
        { status: 403 }
      );
    }

    let newRequest = new RequestModal({ ...obj });
    newRequest = await newRequest.save();

    return new Response(
      JSON.stringify({
        error: false,
        msg: "Request Registered successfully",
        request: newRequest,
      }),
      { status: 201 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: true,
        msg: "Something went wrong",
      }),
      { status: 400 }
    );
  }
}

  
export async function GET(request) {
  await connectDB();
  // console.log(request)
  try {
     
    const query={}
        const status = request?.nextUrl?.searchParams?.get("status")
        if(status && status != 'all'){
          query.status=status    ///adding status key in query obj  means if we don't have all so show all and check if we ave so take it accordingly
           
        }
        const requests = await RequestModal.find(query).populate("user");
      console.log("Status in backend=> ",status)
      return new Response(
          JSON.stringify({
              error: false,
              msg: "Request fetched successfully",
              request: requests,
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
      );
  } catch (error) {
      console.error("Error fetching requests:", error);
      return new Response(
          JSON.stringify({ error: true, msg: "Failed to fetch requests" }),
          { status: 500 }
      );
  }
}

export async function PUT(request){
  await connectDB()
  try{
    const obj=await request.json()
  let {id,status}=obj
  const request=await RequestModal.findOne({_id:id})
  await UserModal.findOneAndUpdate({_id:request.user},{role:"doctor"})
  const updated=await RequestModal.findOneAndUpdate({
    _id:id,
  },
  {
    status:status
  }).exec();

  return Response.json({
error:false,
msg:"Requests updated Successfully",
request:updated,
  },
  {
    status:200
  },
)
  }catch(error){
    return Response.json({
      error:true,
      msg:"Something went wrong",
        },
        {
          status:500
        },
      );
  }
}

// export async function DELETE(request){}

