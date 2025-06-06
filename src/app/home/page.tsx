import HeroSection from "./HeroSection";
import SelectedProjects from "./SelectedProjects";
import Approach from "./Approach";
import ImageSlider from "@/components/ImageSlider";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Approach />
      <SelectedProjects />
      <ImageSlider/>
    </div>
  );
};

export default HomePage;
