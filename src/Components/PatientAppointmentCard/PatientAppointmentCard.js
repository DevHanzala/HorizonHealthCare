import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/Components/ui/card";
  import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
  import { Badge } from "@/Components/ui/badge";
  import { Calendar, MapPin } from "lucide-react";
  import { FaVenusMars } from "react-icons/fa";

  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  dayjs.extend(relativeTime);
  
  export default function PatientAppointmentCard({ appointment }) {
    console.log("APPPP==> ",appointment)
    return (
      <Card key={appointment._id} className="shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={appointment?.request?.user.picture}
              alt={`${appointment.user.firstName} ${appointment.user.lastName}`}
            />
            <AvatarFallback>
              {appointment?.request?.user.firstName[0]}
              {appointment?.user?.lastName[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>
              {appointment.request?.user?.firstName}{" "}
              {appointment.request?.user?.lastName}
            </CardTitle>
            <Badge
              variant={
                appointment.status === "pending"
                  ? "outline"
                  : appointment.status === "accepted"
                  ? "success"
                  : "destructive"
              }
            >
              {appointment.status.charAt(0).toUpperCase() +
                appointment.status.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {appointment.request.bio}
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>
              {dayjs(new Date(appointment.date)).fromNow() +
                ", " +
                dayjs(new Date(appointment.date)).format("dddd DD MMMM")}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaVenusMars/>
            <span>{appointment.request.gender}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>
              {appointment.request.hospital}, {appointment.request.address}
            </span>
          </div>
          <p className="text-sm font-semibold">
            Specialization: {appointment.request.specialization}
          </p>
          <p className="text-sm font-semibold">
            Fees: ${appointment.request.fees}
          </p>
        </CardContent>
      </Card>
    );
  }