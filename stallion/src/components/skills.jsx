import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Card } from "flowbite-react";
import Footer from "./footer";
const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section>
        <div className="container13">
          <div className="heading9 " data-aos="fade-right">
            SKILLED
            <br />
            IMMIGRATION
          </div>
        </div>
        <div className="container14">
          <div className="heading10" data-aos="fade-right">Express Entry Excellence</div>
          <div className="heading12" data-aos="fade-right">
            The expressway to turning your Canadian dreams into reality!
          </div>
          <div className="heading11" data-aos="fade-right">
            As your gateway to skilled immigration, we specialize in navigating
            the dynamic landscape of the Federal Skilled Worker, Federal Skilled
            Trade, and Canadian Experience Class programs.
          </div>
          <div>
            <div className="d6" data-aos="fade-right">
               Federal Skilled Worker:
              Unleash Your Professional Potential
            </div>
            <div className="d7" data-aos="fade-right">
              Embark on a journey towards professional excellence with Stallion
              Immigration's Federal Skilled Worker program. Whether you're a
              seasoned professional or a rising star in your field, our
              expertise ensures that your skills are recognized and valued in
              the Canadian job market.
            </div>
            <div className="d6" data-aos="fade-right">
               Federal Skilled Trade:
              Crafting Success, Shaping Futures
            </div>
            <div className="d7" data-aos="fade-right">
              For the artisans, craftsmen, and skilled tradespersons, Stallion
              Immigration's Federal Skilled Trade program opens the doors to a
              thriving career in Canada. Let your expertise be your ticket to a
              country that values and rewards your exceptional skills.
            </div>
            <div className="d6" data-aos="fade-right">
               Canadian Experience
              Class: Your Canadian Journey Starts Here
            </div>
            <div className="d7" data-aos="fade-right">
              Have you already gained valuable Canadian work experience?
              Stallion Immigration's Canadian Experience Class program is
              tailor-made for individuals like you. We specialize in
              transforming your local experience into a seamless path to
              permanent residency, making your journey in Canada a remarkable
              one.
            </div>
          </div>
          <div className="heading13">
            <div className="heading14" data-aos="fade-right">Sponsorship Immigration</div>
            <div className="div2">
              <Card
                className="max-w-sm my-6 mx-3"
                data-aos="flip-left"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="pexels-olly-3775553.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                  For Spouse / Common Law Partner
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Love is boundless, and so should be the journey to
                  togetherness. Stallion Immigration specializes in sponsorship
                  for spouses and common-law partners, ensuring that love
                  transcends borders seamlessly. Let us navigate the
                  complexities, allowing you to focus on building a future
                  together.
                </p>
              </Card>
              <Card
                className="max-w-sm my-6 mx-3"
                data-aos="flip-left"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="pexels-cottonbro-6158658.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                  For Parents/ Grandparents
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  At Stallion Immigration, we understand the importance of
                  family. Our sponsorship services for parents and grandparents
                  are designed to bring generations together under one roof. Let
                  us be the architects of your family's shared dreams, creating
                  a foundation for love, support, and shared success.
                </p>
              </Card>
            </div>
          </div>
          <div className="heading15" data-aos="fade-right">
            Pilot Program Perfection: Soar Beyond Boundaries with Stallion
            Immigration
          </div>
          <div className="heading16" data-aos="fade-right">
            Welcome to Stallion Immigration's Pilot Programs – your passport to
            explore unique pathways to Canadian immigration excellence. As your
            trusted guides in Mohali, Punjab, we are thrilled to introduce you
            to the extraordinary opportunities offered by Atlantic Immigration,
            Rural &amp; Northern Immigration, and the Yukon Community Pilot
            Program.
          </div>
          <div className="div3">
            <Card
              className="max-w-sm my-6 mx-3"
              data-aos="flip-left"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="pexels-gian-luca-schiavoni-871241124-19689333.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                Atlantic Immigration
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Set sail for a new chapter in your life with Atlantic
                Immigration – a program designed for those seeking opportunities
                in Canada's vibrant Atlantic provinces. Let Stallion Immigration
                be your compass, navigating the Atlantic currents to ensure your
                journey is not just a migration but a transformation.
              </p>
            </Card>
            <Card
              className="max-w-sm my-6 mx-3"
              data-aos="flip-left"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="pexels-bravingbird-1063299432-20522435.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                Rural &amp; Northern Immigration
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                For those yearning for the tranquility of rural life or the
                adventure of Canada's northern regions, Stallion Immigration's
                Rural &amp; Northern Immigration program is your key to
                unlocking these extraordinary landscapes. Let us guide you to
                where the pace is serene, and the possibilities are as vast as
                the wilderness itself.
              </p>
            </Card>
            <Card
              className="max-w-sm my-6 mx-3"
              data-aos="flip-left"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="pexels-toulouse-3099037.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                Pilot Program
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Embark on a journey of community and opportunity with the Yukon
                Community Pilot Program. Stallion Immigration specializes in
                connecting you with the vibrant communities of Yukon, ensuring
                that your immigration experience is not just about a place but
                about becoming an integral part of a thriving community.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Skills;
