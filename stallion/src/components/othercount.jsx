import React from "react";
import Footer from "./footer";
import { Card } from "flowbite-react";
const Othercount = () => {
  return (
    <>
      <section>
        <div className="container15">
          <div className="h0">Temporary Visa</div>
          <div className="h1">USA / UK / Australia / NZ</div>
          <div className="h2">
            "Temporary Visa Elegance: Discovering the World with Stallion
            Immigration"
          </div>
          <div className="h3">
            Welcome to Stallion Immigration's Temporary Visa services – your
            gateway to explore the wonders of the USA, UK, Australia, and New
            Zealand. Elevate your travel experience, pursue professional
            opportunities, or reunite with loved ones – our expertise ensures
            that your temporary stay in these captivating destinations is
            seamless, memorable, and filled with endless possibilities.
          </div>
          <div className="h4">
            <Card
              className="max-w-sm my-6 mx-3"
              imgSrc="pexels-spencer-4353813.jpg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Visit Visa
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Dreaming of the dazzling lights of New York, the historic charm
                of London, the natural wonders of Australia, or the breathtaking
                landscapes of New Zealand? Stallion Immigration's Visit Visa
                services are your passport to experiencing these destinations
                firsthand. Let your wanderlust lead the way, and we'll ensure
                every moment is a chapter in your travel diary that you'll
                cherish forever.
              </p>
            </Card>
            <Card
              className="max-w-sm my-6 mx-3"
              imgSrc="pexels-thirdman-7659872.jpg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                UK Tier 2 Visa for Nurses
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Dreaming of the dazzling lights of New York, the historic charm
                of London, the natural wonders of Australia, or the breathtaking
                landscapes of New Zealand? Stallion Immigration's Visit Visa
                services are your passport to experiencing these destinations
                firsthand. Let your wanderlust lead the way, and we'll ensure
                every moment is a chapter in your travel diary that you'll
                cherish forever.
              </p>
            </Card>
            {/* <div className="h5">
        <div className="h6">Visit Visa</div>
        <div className="h7">
          Dreaming of the dazzling lights of New York, the historic charm of
          London, the natural wonders of Australia, or the breathtaking
          landscapes of New Zealand? Stallion Immigration's Visit Visa services
          are your passport to experiencing these destinations firsthand. Let
          your wanderlust lead the way, and we'll ensure every moment is a
          chapter in your travel diary that you'll cherish forever.
        </div>
      </div>
      <div className="h5">
        <div className="h6">UK Tier 2 Visa for Nurses</div>
        <div className="h7">
          For nurses aspiring to elevate their careers, Stallion Immigration
          introduces the UK Tier 2 Visa for Nurses. Immerse yourself in the rich
          healthcare landscape of the United Kingdom, where your skills are not
          just valued but celebrated. Let us be the bridge that connects you to
          a world of professional growth and cultural richness.
        </div>
      </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Othercount;
