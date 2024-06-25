import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./footer";
const Tnc = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
    <section>
  <div className="container19" >
    <div className="h9"  data-aos="fade-right">Terms and Conditions</div>
    <div className="h8"  data-aos="fade-right">Effective Date: 01/01/2024</div>
    <div className="h8"  data-aos="fade-right">
      Welcome to Stallion Immigration ("we," "our," or "us"). These terms and
      conditions govern your use of our website and the immigration services we
      provide. By accessing or using our website and services, you agree to
      comply with and be bound by these terms. If you do not agree with these
      terms, please do not use our website or services.
    </div>
    <div className="h10"  data-aos="fade-right">1. Immigration Services</div>
    <div className="h11"  data-aos="fade-right">
      a. Eligibility: Our immigration services are available to individuals who
      meet the eligibility criteria for the respective immigration programs. b.
      Accuracy of Information: You are responsible for providing accurate and
      up-to-date information required for immigration applications. We are not
      liable for any consequences resulting from inaccurate information provided
      by you.
      <br />
      <br />
      c. Service Fees: Service fees for immigration applications are outlined in
      our fee structure. Payment must be made in accordance with the agreed-upon
      terms.
      <br />
      <br />
    </div>
    <div className="h10" data-aos="fade-right">2. Website Use</div>
    <div className="h11"  data-aos="fade-right">
      a. Intellectual Property: The content on our website, including text,
      graphics, logos, and images, is the property of Stallion Immigration and
      is protected by intellectual property laws.
      <br />
      <br />
      b. Prohibited Activities: You agree not to engage in any activities that
      may harm our website, services, or reputation. Prohibited activities
      include but are not limited to hacking, unauthorized access, and
      distribution of malware
    </div>
    <div className="h10"  data-aos="fade-right">3. Privacy Policy</div>
    <div className="h11"  data-aos="fade-right">4. Limitation of Liability</div>
    <div className="h11"  data-aos="fade-right">
      We are not liable for any direct, indirect, incidental, consequential, or
      punitive damages arising out of your use of our website or immigration
      services.
    </div>
    <div className="h10"  data-aos="fade-right">5. Termination</div>
    <div className="h11"  data-aos="fade-right">
      We reserve the right to terminate or suspend your access to our website or
      services at our discretion, without prior notice, for any reason,
      including but not limited to violation of these terms.
    </div>
    <div className="h10"  data-aos="fade-right">6. Changes to Terms and Conditions</div>
    <div className="h11"  data-aos="fade-right">
      We may update these terms and conditions from time to time. The effective
      date will be revised accordingly. Continued use of our website or services
      after the effective date constitutes acceptance of the updated terms.
    </div>
    <div className="h10 "  data-aos="fade-right">7. Contact Us</div>
    <div className="h11"  data-aos="fade-right">
      If you have any questions or concerns about this terms and conditions,
      please contact us at stallionimmi@gmail.com
    </div>
  </div>
</section>
<Footer/>

    </>
  )
}

export default Tnc
