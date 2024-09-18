import Navbar from '@/customComponents/nav/Navbar';
import FreePricingCard from '@/customComponents/pricingComp/FreePricingCard';

const PricingPage = () => {
  return (
    <div>
      <div className='bg-[#203D74]'>
        <Navbar />
      </div>
      <div className='flex flex-col justify-center items-center gap-5'>
        <p className='mx-auto md:font-semibold text-5xl mt-12 text-center text-transparent bg-clip-text bg-gradient-to-br from-[#2964FD] to-[#EE7878] my-auto font-[400]'>
          Go Premium
        </p>
        <p className='mx-auto font-normal text-xl mt-4 text-center'>
          Increase your probability of landing an offer in quant
        </p>
      </div>
      <div className='flex flex-col items-center justify-center space-y-8 lg:-mx-12 lg:flex-row lg:space-y-0 lg:space-x-6 xl:space-x-16'>
        <FreePricingCard />
      </div>
    </div>
  );
};

export default PricingPage;
