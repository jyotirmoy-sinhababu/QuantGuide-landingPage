import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center mx-[4%] h-[51px] bg-[#203D74] bg-opacity-[1]'>
        <div>
          <p className='text-[#E1E1FF]'>QuantGuide</p>
        </div>
        <div>
          <Button
            className='text-[#E1E1FF] hover:text-[#E1E1FF]  hover:bg-[#203D74] opacity-60 font-normal text-[0.8rem]'
            variant='ghost'
          >
            Questions
          </Button>
          <Button
            className='text-[#E1E1FF] hover:text-[#E1E1FF]  hover:bg-[#203D74] opacity-60 font-normal text-[0.8rem]'
            variant='ghost'
          >
            Pricing
          </Button>
        </div>
        <div>
          <Button
            className='text-[#E1E1FF] hover:text-[#E1E1FF] hover:bg-[#203D74] font-normal text-[0.8rem]'
            variant='ghost'
          >
            Log In
          </Button>
          <Button
            className='h-[31px] hover:w-[80px] rounded-[56px] hover:text-[#E1E1FF] bg-gradient-to-r from-blue-500 to-pink-500 text-[#E1E1FF] border-0 text-[0.8rem]'
            variant='outline'
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
