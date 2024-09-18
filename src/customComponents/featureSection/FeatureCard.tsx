import { Button } from '@/components/ui/button';

const FeatureCard = ({
  imgIcon,
  altTxt,
  cardHeading,
  cardTxt,
  mainImg,
}: any) => {
  return (
    <div
      className='w-full flex p-8 rounded-lg z-10 bg-[#203D74] text-white md:flex-row flex-col justify-between '
      style={{ boxShadow: 'rgba(32, 61, 116, 0.22) 0px 4px 37px 0px' }}
    >
      <div className='w-full md:w-1/2 py-8 flex flex-col justify-start  gap-2 md:pr-8'>
        <div className='flex md:justify-start justify-center'>
          <img className='md:w-[52px] w-[66px]' src={imgIcon} alt={altTxt} />
        </div>
        <p className='text-lg font-bold text-center md:text-left'>
          {cardHeading}
        </p>
        <p className=' opacity-70 text-base font-normal leading-1 text-center md:text-left'>
          {cardTxt}
        </p>
        <div className='flex md:justify-start justify-center'>
          <Button className='p-0 bg-[#203D74] hover:bg-[#203D74] border-b-2 border-b-black'>
            Get Started
          </Button>
        </div>
      </div>
      <div className=' h-full flex flex-col md:w-1/2 md:py-8 md:pl-1 w-[100%] md:justify-normal justify-center '>
        <div className='bg-white rounded-xl flex justify-center p-3'>
          <img className='w-[100%]' src={mainImg} alt='mainImage' />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
