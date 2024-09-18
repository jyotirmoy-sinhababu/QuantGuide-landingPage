import FeatureSection from '@/customComponents/featureSection/FeatureSection';
import Footer from '@/customComponents/footer/Footer';
import IntroSection from '@/customComponents/introSection/IntroSection';
import Testimonials from '@/customComponents/testimonials/Testimonials';

const HomePage = () => {
  return (
    <div>
      <IntroSection />
      <FeatureSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
