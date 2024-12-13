import connectDB from "@/lib/connectDB";
import { AppointmentModal } from "@/lib/models/AppointmentModel";
import { RequestModal } from "@/lib/models/RequestModel";

export async function POST(req) {
  await connectDB(); // Ensure the database connection
  try {
    const obj = await req.json(); // Parse the request body

    // Create a new appointment document using the model
    let newAppointment = new AppointmentModal({ ...obj });
    newAppointment = await newAppointment.save(); // Save it to the database

    return new Response(
      JSON.stringify({
        error: false,
        msg: "Your appointment is booked, You will soon have a confirmation message.",
        appointment: newAppointment,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        error: true,
        msg: "Something went wrong when you booked your appointment",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}


export async function GET(req) {
  await connectDB();
  const query = {};
  const doctor = req?.nextUrl?.searchParams?.get("doctor");
  const user = req?.nextUrl?.searchParams?.get("user");
  const status = req?.nextUrl?.searchParams?.get("status");
  const now = Date.now();
  if (doctor) {
    const doctorRequest = await RequestModal.findOne({ user: doctor });
    query.request = doctorRequest._id;
  }
  if (status && status !== "upcoming" && status !== "past")
    query.status = status;
  if (status && status == "upcoming") {
    query.date = { $gt: now };
    query.status = "accepted";
  }
  if (status && status == "past") {
    query.date = {
      $lt: now,
    };
  }

  if (user) query.user = user;
  const stats = {
    accepted: await AppointmentModal.find({
      status: "accepted",
    }).countDocuments(),
    cancelled: await AppointmentModal.find({
      status: "cancelled",
    }).countDocuments(),
    pending: await AppointmentModal.find({
      status: "pending",
    }).countDocuments(),
  };
console.log(stats)
  const appointments = await AppointmentModal.find(query)
    .populate("user")
    .populate({
      path: "request",
      populate: { path: "user" }, // Populate the user field inside request
    });
  return Response.json(
    {
      error: false,
      msg: "Appointments fetched Successfully",
      appointments,
      stats,
    },
    { status: 200 }
  );
}

export async function PUT(req) {
  await connectDB();
  try {
    const { id, status } = await req.json();
    const update = await AppointmentModal.findOneAndUpdate(
      { _id: id },
      {
        status: status,
      }
    ).exec();
    return Response.json(
      {
        error: false,
        msg: "Appointment updated successfully.",
        appointment: update,
      },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      {
        error: true,
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}

export async function DELETE(req) {}