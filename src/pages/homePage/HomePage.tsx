import FeatureSection from '@/customComponents/featureSection/FeatureSection';
import IntroSection from '@/customComponents/introSection/IntroSection';
import Testimonials from '@/customComponents/testimonials/Testimonials';

const HomePage = () => {
  return (
    <div>
      <IntroSection />
      <FeatureSection />
      <Testimonials />
    </div>
  );
};

export default HomePage;
