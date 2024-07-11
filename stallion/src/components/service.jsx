import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Card } from "flowbite-react";
import Footer from "./footer";

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section>
        <div className="container7">
          <div className="services-page" data-aos="fade-right">
            SERVICES
          </div>
        </div>
        <div className="container8">
          <div className="heading1" data-aos="fade-right">
            Unlocking Boundless Horizons Stallion Immigration Services
          </div>
          <div className="under-heading" data-aos="fade-right">
            Welcome to Stallion Immigration, your passport to a world of opportunities! Our suite of services is designed to make your journey towards global exploration smooth, exciting, and tailored to your unique aspirations.
          </div>
          <div className="service-card">
            <Card className="max-w-sm my-6 mx-3" data-aos="fade-right">
              <img
                loading="lazy"
                src="pexels-alexander-suhorucov-6457521.jpg"
                alt="alternate"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Career Counseling
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Embark on a journey of self-discovery with our expert career counseling services. Our passionate advisors don't just guide; they illuminate the path to a future that aligns with your dreams and ambitions.
              </p>
            </Card>
            <Card className="max-w-sm my-6 mx-3" data-aos="fade-right">
              <img
                loading="lazy"
                src="pexels-gabby-k-6238120.jpg"
                alt="alternate"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Study Visa Consultation
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Elevate your education with Stallion Immigration's study visa consultation services. We specialize in navigating the intricacies of visa applications, ensuring that your academic pursuits are backed by a seamless and stress-free journey.
              </p>
            </Card>
            <Card className="max-w-sm my-6 mx-3" data-aos="fade-right">
              <img
                loading="lazy"
                src="pexels-pavel-danilyuk-8152735.jpg"
                alt="alternate"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Visa Application
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                The paperwork maze is our playground. Let Stallion Immigration handle your visa applications and lodging needs, leaving you free to focus on the excitement of the journey ahead. Your dreams know no borders.
              </p>
            </Card>
            <Card className="max-w-sm my-6 mx-3" data-aos="fade-right">
              <img
                loading="lazy"
                src="pexels-pascalr-1089307.jpg"
                alt="alternate"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Travel Arrangements
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Stallion Immigration takes pride in being the starting point of your international adventure. From flight bookings to accommodation, our travel arrangement services are dedicated to making your transition to a new chapter.
              </p>
            </Card>
            <Card className="max-w-sm my-6 mx-3" data-aos="fade-right">
              <img
                loading="lazy"
                src="pexels-ketut-subiyanto-4246182.jpg"
                alt="alternate"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Spouse Visa
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Love transcends borders, and so should your happiness. Our spouse visa services are designed to facilitate the reunion with your loved ones, ensuring that the journey to togetherness is as smooth as your love story.
              </p>
            </Card>
            <Card className="max-w-sm my-6 mx-3" data-aos="fade-right">
              <img
                loading="lazy"
                src="pexels-ravi-roshan-2875998-8566288.jpg"
                alt="alternate"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Education Loan
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Your dreams should never be bound by financial constraints. Stallion Immigration collaborates with leading financial institutions to secure education loans that pave the way for your academic ambitions. Your future is an investment.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service;
