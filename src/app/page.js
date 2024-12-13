import DoctorSection from "@/Components/DoctorSection";
import FeatureSection from "@/Components/FeatureSection";
import HeroSection from "@/Components/HeroSection";
import Link from "next/link";
export default function Home() {
  return (
    <div>
<div className="container flex flex-col items-center mx-auto justify-around px-2">
<HeroSection/>
<DoctorSection isHome={true}/>
<FeatureSection/>

<footer className="bg-gray-400 text-white mt-5 pb-3">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 md:py-10 py-4">
          {/* About Section */}
          <div>
            <h2 className="md:text-lg font-bold md:mb-4 md:text-left text-center">About Us</h2>
            <p className="text-sm md:text-left text-center">
              At DoctorCare, we provide top-notch healthcare services and easy
              appointment booking. Your health is our priority!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="md:text-lg font-bold md:mb-4 md:text-left text-center">Quick Links</h2>
            <ul className="md:space-y-2 md:text-left text-center">
              <li>
                <Link href="/doctors/apply" className="hover:text-gray-300">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-gray-300">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="md:text-lg font-bold md:mb-4 md:text-left text-center">Contact Us</h2>
            <ul className="space-y-2 text-sm md:text-left text-center">
              <li>📍 123 Health Street, Cityname, Country</li>
              <li>📞 +123-456-7890</li>
              <li>📧 support@doctorcare.com</li>
            </ul>
            <div className=" flex mt-4 space-x-4 md:ml-0 ml-28 ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300  text-blue-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6c0-1.084.916-2 2-2h2V0h-3C10.935 0 9 2.24 9 5v3z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 text-blue-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.835 9.835 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.389 4.482C7.691 8.094 4.067 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475 4.923 4.923 0 0 0 2.188 4.104 4.903 4.903 0 0 1-2.229-.616v.061a4.926 4.926 0 0 0 3.946 4.827 4.978 4.978 0 0 1-2.224.084 4.937 4.937 0 0 0 4.604 3.417A9.869 9.869 0 0 1 0 21.539a13.932 13.932 0 0 0 7.548 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 text-blue-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C3.33 3.5 2 4.82 2 6.41 2 7.99 3.33 9.32 4.98 9.32c1.66 0 3-1.33 3-2.91C7.98 4.82 6.64 3.5 4.98 3.5zM2.37 20.47h5.22v-10h-5.22v10zM20.45 10.68c-1.4 0-2.37.54-2.84 1.32V10h-5.22c.07 1.1 0 10 0 10h5.22v-5.5c0-.3.02-.6.1-.86.23-.6.76-1.22 1.65-1.22 1.16 0 1.63.91 1.63 2.23v5.35h5.22v-5.74c0-3.12-1.65-4.58-3.65-4.58z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} DoctorCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

</div>
    </div>
  );
}
