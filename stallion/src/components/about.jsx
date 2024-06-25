import React, { useEffect }  from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import Footer from "./footer";
import { Card } from "flowbite-react";


const About = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <>
      <section>
        <div className="container9">
          <div className="inside-c9">
            <div className="about-page " data-aos="fade-right">
              ABOUT US
            </div>
          </div>
        </div>
        <div className="container10"  >
          <div className="welcome" data-aos="fade-right">
            Welcome to Stallion Immigration Your Gateway to Global Opportunities
          </div>
          <div className="inside-wel" data-aos="fade-right">
            At Stallion Immigration, we believe in transforming dreams into
            reality. Nestled in the vibrant city of Mohali, Punjab, we are more
            than just an immigration company; we are your trusted partners on
            the journey to a world of endless possibilities. At the heart of
            Stallion Immigration is a passionate team dedicated to sculpting
            your path to success. We understand that the decision to move abroad
            is not just a physical journey but an emotional one too. Our
            commitment lies in ensuring that every step you take towards a new
            horizon is seamless and rewarding. From comprehensive career
            counseling that aligns your aspirations with the right path to
            expert guidance on study visa consultations and proficient visa
            application lodging, we're here at every step of your journey.
            Seamlessly managing your travel arrangements, facilitating spouse
            visas, aiding in education loans, and ensuring secure money
            transfers, we pride ourselves on being your all-in-one solution for
            international ventures.
          </div>
          <div className="why-choose1" data-aos="fade-right">
            Here's why Stallion Immigration stands out:
          </div>
          <div className="allcards" >
          <Card
            className="max-w-sm my-6 mx-3 " 
            data-aos="flip-left"
            imgSrc="pexels-karolina-grabowska-4491492.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Comprehensive Career Counseling
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                  Embark on a journey of self-discovery with our expert career
                  counselors. We go beyond mere job placements; we pave the way
                  for fulfilling careers that align with your passion and
                  potential.
            </p>
          </Card>
          <Card
            className="max-w-sm my-6"
            data-aos="flip-left"
            imgSrc="pexels-n-voitkevich-7235902.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Efficient Visa Application
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Navigating the labyrinth of visa applications can be
                  overwhelming. Stallion Immigration simplifies the process,
                  ensuring that your visa application journey is swift,
                  stress-free, and successful.
            </p>
          </Card>
          <Card
            className="max-w-sm my-6"
            data-aos="flip-left"
            imgSrc="pexels-wanderer-731217.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Tailored Travel Arrangements
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Your journey begins with meticulous planning. Stallion
                  Immigration takes care of your travel arrangements, leaving
                  you with the peace of mind to focus on your exciting new
                  adventure.
            </p>
          </Card>
          <Card
            className="max-w-sm my-6"
            data-aos="flip-left"
            imgSrc="pexels-karolina-grabowska-4386408.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Education Loan Support
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Investing in your education is an investment in your future.
                  Stallion Immigration provides support and guidance in securing
                  education loans, turning your academic dreams into a reality.
            </p>
          </Card>
          <Card
            className="max-w-sm my-6"
            data-aos="flip-left"
            imgSrc="pexels-shvetsa-4482900.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Swift and Secure Money Transfer
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Seamless financial transactions are crucial in your global
                  journey. Stallion Immigration ensures swift and secure money
                  transfers, so you can focus on building your new life.
            </p>
          </Card>
          
          </div>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
