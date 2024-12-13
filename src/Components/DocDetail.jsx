import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { DatePicker } from "../Components/DatePicker";

const DoctorDetails = ({ doctor }) => {
    return (
        <div className="flex items-center justify-center min-h-screen py-3 px-6 bg-black rounded-md">
            <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg border border-gray-300 text-black p-8 flex flex-col lg:flex-row">
                {/* Left side with doctor details */}
                <div className="flex-1 lg:pr-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">{doctor.Name}</h2>
                    <p className="text-lg text-gray-500 mb-6">{doctor.Category}</p>
                    
                    <div className="text-gray-700 mb-6">
                        <p className="mb-2">
                            <span className="font-semibold text-gray-800">Hospital:</span> {doctor.Hospital}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold text-gray-800">Appointment Time:</span> {doctor.AppointmentTime}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold text-gray-800">Fees:</span> {doctor.Fees}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-800">Gender:</span> {doctor.Gender}
                        </p>
                    </div>
                    
                    <div className="border-t pt-8 mt-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Patient Reviews</h3>
                        <p className="text-gray-600 italic mb-2">Excellent care and very understanding!</p>
                        <p className="text-gray-600 italic mb-2">Highly recommended for anyone with concerns in {doctor.Category}.</p>
                        <p className="text-gray-600 italic">Great experience, very thorough and caring.</p>
                    </div>

                    {/* DatePicker with adjusted styling */}
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Select Appointment Date</h4>
                        <div className="bg-black p-4 rounded-lg shadow-inner">
                            <DatePicker />
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center lg:justify-start">
                        <Button className="bg-black text-white font-semibold py-2 px-6 rounded hover:bg-gray-600">
                            Book Your Appointment
                        </Button>
                    </div>
                </div>

                {/* Right side with doctor image */}
                <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
                    <div className="w-80 h-80 relative">
                        <Image 
                            className="object-cover object-center rounded-full border border-gray-300"
                            alt="Doctor"
                            src="https://images.unsplash.com/photo-1662837625420-2b5fbaacec98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" 
                            layout="fill" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;
