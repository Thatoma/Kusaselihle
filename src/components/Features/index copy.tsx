import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

const Features = () => {
  return (
    <>
      <section id="features" className="py-5 md:py-5 lg:py-10">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />         
        </div>
        <AboutSectionOne />
      <AboutSectionTwo />
      </section>
    </>
  );
};

export default Features;
