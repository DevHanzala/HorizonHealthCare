import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/Components/ui/sheet";
  import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
  import { FaUserMd, FaHospitalAlt, FaRupeeSign, FaUser, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaEnvelope, FaVenusMars } from "react-icons/fa";
import { EyeIcon } from "lucide-react";
  
  export default function DoctorDetailSheet({ Doctor }) {
    return (
      <div>
        <Sheet>
          <SheetTrigger><EyeIcon/></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Doctor Detail</SheetTitle>
              <SheetDescription>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src={Doctor?.user?.picture} alt="Doctor Avatar" />
                    <AvatarFallback>
                      {Doctor?.specialization?.charAt(0) || "?"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center space-x-2">
                      <FaUserMd />
                      <span>
                        {Doctor?.user?.firstName} {Doctor?.user?.lastName}
                      </span>
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center space-x-2">
                      <FaEnvelope /> <span>{Doctor?.user?.email}</span>
                    </p>
                    <p className="text-sm text-gray-500 capitalize flex items-center space-x-2">
                      <FaUser /> <span>Role: {Doctor?.user?.role}</span>
                    </p>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              <p className="flex items-center space-x-2">
                <FaUser /> <span><strong>Status:</strong> {Doctor?.status}</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaHospitalAlt /> <span><strong>Hospital:</strong> {Doctor?.hospital}</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaUser /> <span><strong>Bio:</strong> {Doctor?.bio}</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaRupeeSign /> <span><strong>Fees:</strong> {Doctor?.fees} PKR</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaVenusMars /> <span><strong>Gender:</strong> {Doctor?.gender}</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaGraduationCap /> <span><strong>Degree:</strong> {Doctor?.degree}</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaUserMd /> <span><strong>Specialization:</strong> {Doctor?.specialization}</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaBriefcase /> <span><strong>Experience:</strong> {Doctor?.experience} years</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaPhone /> <span><strong>Contact:</strong> {Doctor?.number}</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaMapMarkerAlt /> <span><strong>Address:</strong> {Doctor?.address}</span>
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
  