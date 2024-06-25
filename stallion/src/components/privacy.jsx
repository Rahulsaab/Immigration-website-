import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./footer";
const Privacy = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section>
        <div className="container19">
          <div className="h9" data-aos="fade-right">Privacy Policy</div>
          <div className="h8"data-aos="fade-right">Effective Date: 01/01/2024</div>
          <div className="h8"data-aos="fade-right">
            Welcome to Stallion Immigration .This Privacy Policy outlines how we
            collect, use, disclose, and protect your personal information. By
            accessing or using our website, you consent to the terms outlined in
            this policy.
          </div>
          <div className="h10"data-aos="fade-right">1. Information We Collect</div>
          <div className="h11"data-aos="fade-right">
            a. Personal Information: We may collect personal information,
            including but not limited to, your name, contact details, passport
            information, and other details relevant to immigration services.
            <br />
            <br />
            b. Payment Information: When processing payments, we collect payment
            information, including credit card details, to facilitate the
            immigration application process.
            <br />
            <br />
            c. Documents: We may collect and store documents provided by you for
            the purpose of immigration applications.
          </div>
          <div className="h10"data-aos="fade-right">2. How We Use Your Information</div>
          <div className="h11"data-aos="fade-right">
            a. We use your personal information to provide immigration services,
            process applications, and communicate with you throughout the
            immigration process.
            <br />
            <br />
            b. We may use your information for internal purposes such as
            analytics, quality improvement, and marketing of our services.
          </div>
          <div className="h10"data-aos="fade-right">3. Cookies and Tracking Technologies</div>
          <div className="h11"data-aos="fade-right">
            We use cookies and similar technologies to enhance your experience
            on our website. You can manage your cookie preferences through your
            browser settings.
          </div>
          <div className="h10"data-aos="fade-right">4. Third-Party Disclosure</div>
          <div className="h11"data-aos="fade-right">
            We may share your information with third parties, including
            government authorities and service providers, as necessary to
            facilitate immigration processes.
          </div>
          <div className="h10"data-aos="fade-right">5. Data Security</div>
          <div className="h11"data-aos="fade-right">
            a. You have the option to provide or withhold certain information,
            but this may impact our ability to provide immigration services.
            <br />
            <br />
            b. You can opt-out of promotional communications by following the
            instructions provided.
          </div>
          <div className="h10"data-aos="fade-right">7. Children's Privacy</div>
          <div className="h11"data-aos="fade-right">
            Our website is not intended for individuals under the age of 18. We
            do not knowingly collect personal information from minors.
          </div>
          <div className="h10"data-aos="fade-right">8. Changes to This Privacy Policy</div>
          <div className="h11"data-aos="fade-right">
            We may update this Privacy Policy to reflect changes in our
            practices. The effective date will be revised accordingly.
          </div>
          <div className="h10"data-aos="fade-right">9. Contact Us</div>
          <div className="h11"data-aos="fade-right">
            If you have any questions or concerns about this Privacy Policy or
            our practices, please contact us at stallionimmi@gmail.com
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacy;
