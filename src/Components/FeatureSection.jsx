import Image from "next/image";

const FeatureSection = () => {
  const features = [
    {
      title: "Easy Appointment Booking",
      description:
        "Schedule appointments with your preferred doctors quickly and easily. Choose your date, time, and doctor based on availability.",
      iconPath: "M12 8v4l3 3M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z",
      link: "/doctors",
    },
    {
      title: "Manage Medical Records",
      description:
        "Securely store and access your medical history, prescriptions, and lab results in one convenient location.",
      iconPath:
        "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8",
      link: "services",
    },
    {
      title: "24/7 Healthcare Access",
      description:
        "Consult with doctors anytime, anywhere through our telemedicine services. Get expert advice without leaving your home.",
      iconPath:
        "M22 12h-4l-3 9L9 3l-3 9H2",
      link: "/contact",
    },
  ];

  return (
    <section className="text-gray-600 body-font my-2">
        <h1 className="text-center text-black font-bold text-2xl">Your Trusted Healthcare Partner</h1>

      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            alt="Doctor and Patient"
            className="object-cover object-center h-full w-full"
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D"
            width={460}
            height={500}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col mb-10 lg:items-start items-center"
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-300 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d={feature.iconPath}></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  {feature.title}
                </h2>
                <p className="leading-relaxed text-base">{feature.description}</p>
                <a href={feature.link} className="mt-3 text-gray-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
