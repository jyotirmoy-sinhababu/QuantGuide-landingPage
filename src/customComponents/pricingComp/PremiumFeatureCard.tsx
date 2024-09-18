import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const PremiumFeatureCard = ({ icon, title, description }: any) => {
  return (
    <Card className='border-0 bg-transparent shadow-none mt-[5%]'>
      <CardHeader className='flex flex-row items-center p-0 ml-[4%] lg:mx-0 mx-[12%]'>
        <img className='w-[15px]' src={icon} alt='icon' />
        <CardTitle className='text-xl mb-2 font-medium p-0'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='leading-relaxed text-[12px] tracking-wider p-0 ml-[4%] lg:mx-0 mx-[12%]'>
        {description}
      </CardContent>
    </Card>
  );
};

export default PremiumFeatureCard;
