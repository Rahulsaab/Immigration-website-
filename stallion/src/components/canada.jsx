import React from "react";
import Footer from "./footer";
import { Card } from "flowbite-react";
const Canada = () => {
  return (
    <>
      <section>
        <div className="container15">
          <div className="h0">Temporary Visa</div>
          <div className="h1">Canada</div>
          <div className="h2">
            "Temporary Visa Magic: Your Gateway to Canadian Splendors with
            Stallion Immigration"
          </div>
          <div className="h3">
            Welcome to Stallion Immigration's Temporary Visa services your
            ticket to a temporary sojourn in the breathtaking landscapes of
            Canada. Whether you're dreaming of a leisurely visit, reuniting with
            loved ones, pursuing studies, or accompanying your spouse to the
            Great White North, our expertise ensures that your temporary
            Canadian experience is nothing short of extraordinary
          </div>
          <div className="h4">
            <Card
              className="max-w-sm my-6 mx-3"
              imgSrc="pexels-karolina-grabowska-4491492.jpg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Visitor / Tourist Visa
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Embark on a Canadian adventure with Stallion Immigration's
                Visitor/Tourist Visa services. Let us be your travel companions
                as you explore the enchanting landscapes, vibrant cities, and
                diverse cultures that Canada has to offer. Your journey begins
                here where every moment is an opportunity for discovery.
              </p>
            </Card>
            <Card
              className="max-w-sm my-6 mx-3"
              imgSrc="pexels-karolina-grabowska-4491492.jpg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Parents Super Visa
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Reunite with your parents on Canadian soil with Stallion
                Immigration's Parents Super Visa services. We specialize in
                crafting seamless pathways for your loved ones, ensuring that
                the moments you share are not just memorable but also filled
                with the warmth of family bonds.
              </p>
            </Card>
            <Card
              className="max-w-sm my-6 mx-3"
              imgSrc="pexels-karolina-grabowska-4491492.jpg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Spouse Open Work Permit
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Love knows no boundaries, and neither should your professional
                aspirations. Stallion Immigration's Spouse Open Work Permit
                services allow you to accompany your spouse to Canada while
                pursuing your career. Let us be the architects of your
                harmonious life in the true north.
              </p>
            </Card>
            <Card
              className="max-w-sm my-6 mx-3"
              imgSrc="pexels-karolina-grabowska-4491492.jpg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Student Visa
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Illuminate your academic journey with Stallion Immigration's
                Student Visa services. Whether you aspire to study in the
                bustling cities or serene campuses of Canada, our expertise
                ensures that your student visa application is a smooth process,
                paving the way for a future filled with knowledge and success.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Canada;
