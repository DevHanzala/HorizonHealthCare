"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addRequest } from "@/actions/requests";

const formSchema = z.object({
  hospital: z.string().min(2, { message: "Hospital name must be valid." }),
  bio: z.string().min(2).max(120, { message: "Bio must be 2-120 characters." }),
  fees: z.string().regex(/^\d+$/, "Please enter a valid fee."),
  gender: z.string(),
  degree: z.string().min(2, { message: "Degree must be valid." }),
  specialization: z.string(),
  experience: z.string().regex(/^\d+$/, "Please enter valid years of experience."),
  number: z.string().regex(/^\d+$/, "Please enter a valid phone number."),
  address: z.string().min(2, { message: "Address must be valid." }),
  appointmentsDate:z.string()
});

export default function ApplyAsADoctorForm({session}) {
  const {toast}=useToast()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hospital: "",
      bio: "",
      fees: "",
      gender: "",
      appointmentsDate:"",
      degree: "",
      specialization: "",
      experience: "",
      number: "",
      address: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
    values.user=session.user._id
    const response=await addRequest(values)
    console.log("Response=> ",response)
    if(response.error)
    {
      form.reset()
      toast({
        title: "Sorry Your applocation can not be submiiteed!",
        description: response.msg,
      })
    }else{
      form.reset()
    toast({
      title: "Your application is submitted successfully!",
      description: "Youe will be informed by email with in 3 business days",
    })
    }
    
  }
 
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
            <FormField
              control={form.control}
              name="hospital"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hospital</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your hospital name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        
            <FormField
              control={form.control}
              name="fees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Consultation Fees</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter fees in USD" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree</FormLabel>
                  <FormControl>
                    <Input placeholder="Your medical degree" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specialization</FormLabel>
                  <FormControl>
                    <Input placeholder="Your specialization" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of Experience</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter years of experience" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your contact number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Brief bio about yourself" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <Button
            type="submit"
            className="w-full bg-gray-600 text-white font-semibold py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-200"
          >
            {form.formState.isSubmitting ? "Loading...":"Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
