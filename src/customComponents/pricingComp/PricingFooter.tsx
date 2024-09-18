import { Button } from '@/components/ui/button';

const PricingFooter = () => {
  return (
    <div className='flex justify-between items-center px-[1%] h-[41px] mt-[4%] border-2'>
      <p className='ml-8 text-[5px] min-[375px]:text-[6px] md:text-sm'>
        Copyright © 2024 QuantGuide
      </p>
      <div className='flex flex-row justify-center'>
        <Button variant={'ghost'} className='text-[9px] p-1'>
          Contact
        </Button>
        <Button variant={'ghost'} className='text-[9px] p-1'>
          Feedback
        </Button>
        <Button variant={'ghost'} className='text-[9px] p-1'>
          Question Contribution
        </Button>
        <Button variant={'ghost'} className='text-[9px] p-1'>
          Terms of Use
        </Button>
        <Button variant={'ghost'} className='text-[9px] p-1'>
          Privacy Policy
        </Button>
      </div>
    </div>
  );
};

export default PricingFooter;
