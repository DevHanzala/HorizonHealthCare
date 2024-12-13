export const doctorCategories = [
    "Allergist/Immunologist",
    "Anesthesiologist",
    "Cardiologist",
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Hematologist",
    "Infectious Disease Specialist",
    "Nephrologist",
    "Neurologist",
    "Obstetrician/Gynecologist",
    "Oncologist",
    "Ophthalmologist",
    "Orthopedic Surgeon",
    "Otolaryngologist (ENT)",
    "Pediatrician",
    "Psychiatrist",
    "Pulmonologist",
    "Radiologist",
    "Rheumatologist",
    "Surgeon",
    "Urologist",
    "Dentist",
    "Chiropractor",
    "Podiatrist",
    "Pathologist",
    "General Practitioner",
    "Emergency Medicine Specialist",
    "Geriatrician",
    "Pain Management Specialist",
    "Plastic Surgeon",
    "Sports Medicine Specialist",
    "Neurosurgeon",
    "Endodontist",
    "Prosthodontist",
    "Periodontist",
    "Oral and Maxillofacial Surgeon",
    "Geneticist",
    "Public Health Specialist"
];

export const doctors = [
    {
        id: 1,
        Name: "Dr. Sarah Johnson",
        AppointmentTime: "10:00 AM - 2:00 PM",
        Fees: "$150",
        Category: "Cardiologist",
        Hospital: "City Heart Clinic",
        Gender: "Female"
    },
    {
        id: 2,
        Name: "Dr. Michael Lee",
        AppointmentTime: "1:00 PM - 5:00 PM",
        Fees: "$200",
        Category: "Neurologist",
        Hospital: "NeuroCare Hospital",
        Gender: "Male"
    },
    {
        id: 3,
        Name: "Dr. Emily Brown",
        AppointmentTime: "9:00 AM - 12:00 PM",
        Fees: "$120",
        Category: "Dermatologist",
        Hospital: "Skin Health Center",
        Gender: "Female"
    },
    {
        id: 4,
        Name: "Dr. James Miller",
        AppointmentTime: "2:00 PM - 6:00 PM",
        Fees: "$180",
        Category: "Orthopedic Surgeon",
        Hospital: "Ortho Clinic",
        Gender: "Male"
    },
    {
        id: 5,
        Name: "Dr. Anna Martinez",
        AppointmentTime: "11:00 AM - 3:00 PM",
        Fees: "$140",
        Category: "Pediatrician",
        Hospital: "Children's Hospital",
        Gender: "Female"
    },
    {
        id: 6,
        Name: "Dr. John Wilson",
        AppointmentTime: "8:00 AM - 12:00 PM",
        Fees: "$100",
        Category: "General Practitioner",
        Hospital: "Health First Clinic",
        Gender: "Male"
    },
    {
        id: 7,
        Name: "Dr. Olivia Kim",
        AppointmentTime: "3:00 PM - 7:00 PM",
        Fees: "$160",
        Category: "Ophthalmologist",
        Hospital: "Vision Center",
        Gender: "Female"
    },
    {
        id: 8,
        Name: "Dr. William Anderson",
        AppointmentTime: "10:00 AM - 4:00 PM",
        Fees: "$220",
        Category: "Oncologist",
        Hospital: "Cancer Care Hospital",
        Gender: "Male"
    },
    {
        id: 9,
        Name: "Dr. Sophia Davis",
        AppointmentTime: "1:00 PM - 5:00 PM",
        Fees: "$130",
        Category: "Psychiatrist",
        Hospital: "Mind Wellness Clinic",
        Gender: "Female"
    },
    {
        id: 10,
        Name: "Dr. Ethan Thomas",
        AppointmentTime: "9:00 AM - 2:00 PM",
        Fees: "$110",
        Category: "Dentist",
        Hospital: "Bright Smile Dental",
        Gender: "Male"
    },
    {
        id: 11,
        Name: "Dr. Mia Garcia",
        AppointmentTime: "10:00 AM - 3:00 PM",
        Fees: "$190",
        Category: "Endocrinologist",
        Hospital: "Hormone Health Clinic",
        Gender: "Female"
    },
    {
        id: 12,
        Name: "Dr. Henry Martinez",
        AppointmentTime: "12:00 PM - 4:00 PM",
        Fees: "$125",
        Category: "Pulmonologist",
        Hospital: "Respiratory Center",
        Gender: "Male"
    },
    {
        id: 13,
        Name: "Dr. Abigail Rodriguez",
        AppointmentTime: "2:00 PM - 6:00 PM",
        Fees: "$170",
        Category: "Gastroenterologist",
        Hospital: "Digestive Health Clinic",
        Gender: "Female"
    },
    {
        id: 14,
        Name: "Dr. Christopher White",
        AppointmentTime: "8:00 AM - 1:00 PM",
        Fees: "$210",
        Category: "Urologist",
        Hospital: "Men's Health Center",
        Gender: "Male"
    },
    {
        id: 15,
        Name: "Dr. Sophia Taylor",
        AppointmentTime: "11:00 AM - 3:00 PM",
        Fees: "$150",
        Category: "Allergist/Immunologist",
        Hospital: "Allergy Relief Clinic",
        Gender: "Female"
    }
];


 export const currentUser={
    name:"Hanzala Ghani",
    email:"hanzala@gmail.com",
    role:"Doctor"
 }


 export const appointments = [
    {
        user: {
            name: "Hanzala Ghani",
            email: "hanzala@gmail.com"
        },
        appointmentTime: "10:00 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-12",
        doctor: {
            name: "Dr. Sarah Johnson",
            hospital: "City Heart Clinic"
        }
    },
    {
        user: {
            name: "Hanzala Ghani",
            email: "hanzala@gmail.com"
        },
        appointmentTime: "1:00 PM",
        status: "Pending",
        appointmentDate: "2024-11-13",
        doctor: {
            name: "Dr. Michael Lee",
            hospital: "NeuroCare Hospital"
        }
    },
    {
        user: {
            name: "Hanzala Ghani",
            email: "hanzala@gmail.com"
        },
        appointmentTime: "9:00 AM",
        status: "Cancelled",
        appointmentDate: "2024-11-14",
        doctor: {
            name: "Dr. Emily Brown",
            hospital: "Skin Health Center"
        }
    },
    {
        user: {
            name: "Hanzala Ghani",
            email: "hanzala@gmail.com"
        },
        appointmentTime: "2:00 PM",
        status: "Confirmed",
        appointmentDate: "2024-11-15",
        doctor: {
            name: "Dr. James Miller",
            hospital: "Ortho Clinic"
        }
    },
    {
        user: {
            name: "Hanzala Ghani",
            email: "hanzala@gmail.com"
        },
        appointmentTime: "11:00 AM",
        status: "Pending",
        appointmentDate: "2024-11-16",
        doctor: {
            name: "Dr. Anna Martinez",
            hospital: "Children's Hospital"
        }
    },
    {
        user: {
            name: "Hanzala Ghani",
            email: "hanzala@gmail.com"
        },
        appointmentTime: "3:00 PM",
        status: "Confirmed",
        appointmentDate: "2024-11-17",
        doctor: {
            name: "Dr. Olivia Kim",
            hospital: "Vision Center"
        }
    },
    {
        user: {
            name: "Hanzala Ghani",
            email: "hanzala@gmail.com"
        },
        appointmentTime: "10:00 AM",
        status: "Cancelled",
        appointmentDate: "2024-11-18",
        doctor: {
            name: "Dr. William Anderson",
            hospital: "Cancer Care Hospital"
        }
    },
    {
        user: {
            name: "Hanzala Ghani",
            email: "hanzala@gmail.com"
        },
        appointmentTime: "1:00 PM",
        status: "Confirmed",
        appointmentDate: "2024-11-19",
        doctor: {
            name: "Dr. Sophia Davis",
            hospital: "Mind Wellness Clinic"
        }
    },
    {
        user: {
            name: "Hanzala Ghani",
            email: "hanzala@gmail.com"
        },
        appointmentTime: "9:00 AM",
        status: "Pending",
        appointmentDate: "2024-11-20",
        doctor: {
            name: "Dr. Ethan Thomas",
            hospital: "Bright Smile Dental"
        }
    },
    {
        user: {
            name: "Hanzala Ghani",
            email: "hanzala@gmail.com"
        },
        appointmentTime: "10:00 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-21",
        doctor: {
            name: "Dr. Mia Garcia",
            hospital: "Hormone Health Clinic"
        }
    }
];
