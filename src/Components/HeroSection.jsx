import Link from "next/link";
import { Button } from "@/Components/ui/button";
import Image from "next/image";
import { auth } from "../../auth";

export default async function HeroSection() {
    const session=await auth() 
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font font-serif text-2xl md:text-3xl mb-4 font-medium text-gray-900">
                        Compassionate Care, Modern Solutions
                        <br className="hidden lg:inline-block" />Your Health, Our Priority
                    </h1>
                    <p className="mb-8 leading-relaxed md:text-[17px] text-[10px]">
                        At Horizon HealthCare, we are dedicated to providing comprehensive and compassionate care for our community. Our team of highly skilled professionals and state-of-the-art facilities ensure that every patient receives top-notch, personalized treatment. From routine check-ups to advanced medical procedures, Horizon HealthCare is here to support your health journey with excellence and empathy.
                    </p>
                    <div className="md:flex justify-center">
                        <Link href={'/doctors'}>
                        <Button className="inline-flex md:mb-0 mb-4 text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
                            Find Doctor You Need
                        </Button>
                        </Link>
                        <Link href={ session ? '/doctors/apply' : '/signin'}>
                        <Button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Join us
                        </Button>
                        </Link>
                        
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image 
                        className="object-cover object-center rounded" 
                        alt="hero" 
                        src="https://plus.unsplash.com/premium_photo-1681966907271-1e350ec3bb95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" 
                        width={720} 
                        height={600} 
                    />
                </div>
            </div>
        </section>
    );
}
