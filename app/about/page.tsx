import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Welcome to our website! We are a passionate team dedicated to providing the best products and services to our customers. Established in [year], our mission is to continuously innovate and improve our offerings to meet and exceed customer expectations."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
