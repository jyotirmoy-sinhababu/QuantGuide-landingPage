import { Button } from '@/components/ui/button';
import Navbar from '../nav/Navbar';
import RadioGroup from './RadioGroup';

const IntroSection = () => {
  return (
    <div className='bg-[#203D74] bg-opacity-[1]'>
      <Navbar />
      <div className='flex justify-center mt-[5%]'>
        {' '}
        <div className='flex flex-col justify-center'>
          <p className='text-white text-center text-[30px] md:text-[46px] lg:text-[54px] font-normal md:font-semibold leading-[20px] md:leading-[63px]'>
            Prepare for your next
          </p>
          <p className='text-white mb-2 text-center text-[36px] md:text-[55px] lg:text-[70px] font-extrabold leading-[64px] md:leading-[82px]'>
            quant interview
          </p>
          <div className='mt-[2%] flex justify-center'>
            <p className='text-center text-[#E1E1FF] text-wrap sm:text-[20px] opacity-70 leading-7 sm:w-[70%] w-[90%]'>
              QuantGuide is the best platform to enhance your technical skills,
              expand your questions knowledge, and prepare for quant interviews.
            </p>
          </div>

          <div className='flex justify-center mt-[3%]'>
            <Button
              className='px-12 hover:px-14 text-[#E1E1FF] hover:text-[#E1E1FF] hover:bg-[#2964fd] bg-[#2964fd] border-0 rounded-full text-[1rem] z-10 bg-opacity-[1]'
              variant='outline'
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className='flex justify-center p-[3%]'>
        <RadioGroup />
      </div>
    </div>
  );
};

export default IntroSection;
