import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const TopCard = ({ cardImg, cardTitle, cardDescription }: any) => {
  return (
    <Card className='w-[90%] max-w-sm shadow-md flex items-center pl-[1%] ml-[1%]'>
      <div className='rounded w-20 h-20 overflow-hidden'>
        <img
          src={cardImg}
          alt='Quant Trader 75'
          className='object-cover w-[100%] h-full'
        />
      </div>
      <CardHeader className='flex flex-col '>
        <CardTitle className='font-bold text-[16px]'>{cardTitle}</CardTitle>
        <CardDescription className='text-[11px] text-gray-500 overflow-hidden text-ellipsis p-0'>
          {cardDescription}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default TopCard;
