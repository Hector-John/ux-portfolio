import Partners from "@/components/Partners";
import HeroSection from "./HeroSection";
import SelectedProjects from "./SelectedProjects";
import Approach from "./Approach";
import {Testimonials} from "@/components/Testimonials";
import ImageSlider from "@/components/ImageSlider";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Approach />
      <Partners />
      <SelectedProjects />
      <ImageSlider/>
      {/* <Testimonials /> */}
    </div>
  );
};

export default HomePage;
