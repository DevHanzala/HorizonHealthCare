  import { Button } from "@/Components/ui/button";
  import Link from "next/link";
  import DoctorCard from "./DoctorCard";
  import { getRequest } from "@/actions/requests";
  
  export default async function DoctorSection({ isHome }) {
    try {
      const response = await getRequest("accepted");
      const requests = response?.request || []; 
  
      return (
        <div className="container mx-auto my-5">
          <div className="md:flex justify-between mx-4">
            <h1 className="text-3xl md:text-left text-center font-semibold md:mb-0 mb-2">Doctors You Need</h1>
  
            {isHome && (
              <Link href={"/doctors"} >
                <Button className="md:text-left hidden md:block">See All</Button>
              </Link>
            )}
          </div>
  
          <div className="grid my-3 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-3">
            {requests.map((request) => (
              <DoctorCard key={request._id} request={request} isAdmin={false} />
            ))}
          </div>
        </div>
      );
    } catch (error) {
      console.error("Error fetching requests:", error);
      return (
        <div className="container mx-auto my-10">
          <h1 className="text-3xl font-semibold">Doctors You Need</h1>
          <p className="text-red-500 mt-4">Failed to load data. Please try again later.</p>
        </div>
      );
    }
  }
  