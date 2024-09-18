import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const PricingTestimonialCard = ({ title, description, img, mt }: any) => {
  return (
    <Card
      className={`min-w-[40%] p-[3%] m-4 flex flex-col drop-shadow-xl rounded h-[210px]  mt-${mt}`}
    >
      <CardHeader className='p-0'>
        <img className='lg:w-[105px] w-[85px]' src={img} alt='logo' />
      </CardHeader>
      <CardContent className='p-0 pt-2 text-[10px] tracking-wide font-light m-[2%]'>
        {description}
      </CardContent>
      <CardTitle className='p-0 flex flex-row w-full pt-2 h-1/5 font-semibold text-md mt-[7%]'>
        {title}
      </CardTitle>
    </Card>
  );
};

export default PricingTestimonialCard;
