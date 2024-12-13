"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function AppointmentFilterTabs({ status }) {
  const [activeFilter, setActiveFilter] = useState(status);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeFilter) {
      params.set("status", activeFilter);
    } else {
      params.delete("status");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [activeFilter, pathname, replace, searchParams]);

  return (
    <>
      <div className="container grid w-full md:gap-4 gap-1  md:w-1/2 mx-auto md:grid-cols-5 grid-cols-3">
        <div
          className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${
            activeFilter == "pending" && "bg-primary text-center text-white"
          }`}
          onClick={() => setActiveFilter("pending")}
        >
          Pending
        </div>
        <div
          className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${
            activeFilter == "accepted" && "bg-primary text-center text-white"
          }`}
          onClick={() => setActiveFilter("accepted")}
        >
          Accepted
        </div>
        <div
          className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${
            activeFilter == "cancelled" && "bg-primary text-center text-white"
          }`}
          onClick={() => setActiveFilter("cancelled")}
        >
          Rejected
        </div>
        <div
          className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${
            activeFilter == "upcoming" && "bg-primary text-center text-white"
          }`}
          onClick={() => setActiveFilter("upcoming")}
        >
          Upcoming
        </div>
        <div
          className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${
            activeFilter == "past" && "bg-primary text-center text-white"
          }`}
          onClick={() => setActiveFilter("past")}
        >
          Past
        </div>
      </div>
    </>
  );
}
