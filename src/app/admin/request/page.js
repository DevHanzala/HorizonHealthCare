import { auth } from "../../../../auth";
import { getRequest } from "@/actions/requests";
import DoctorRequests from "@/Components/RequestSection";
import { redirect } from "next/navigation";

export default async function Request({searchParams}) {
  console.log("SearchParams=> ",searchParams)
  const {status}=searchParams
  const session = await auth();

  
  

  const fetchedData = await getRequest(status);
  const requests = fetchedData?.request || []; // Extract the `request` array

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl my-3 text-center">{`Doctor's Request`}</h1>

     
      <DoctorRequests requests={requests} status={status}/>
    </div>
  );
}
