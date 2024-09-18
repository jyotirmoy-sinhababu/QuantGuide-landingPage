import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

import { RxTriangleRight } from 'react-icons/rx';

const FreePricingCard = () => {
  return (
    <Card className='lg:h-[298px] h-[320px] lg:w-[20%] w-[80%] my-auto flex px-[10px] py-[12px] hover:py-[15px] flex-col  bg-white hover:bg-gray-50 duration-500 border-2 rounded-[1.375rem] border-gray'>
      <CardHeader className='p-0'>
        <CardTitle className='text-xl font-[500]'>Basic</CardTitle>
        <CardDescription className='pt-3 font-inter text-[#585858] lg:text-[10px] text-[14px]'>
          Explore non-premium problems great for casual browsing.
        </CardDescription>
      </CardHeader>
      <CardContent className='p-0'>
        <p className='pt-2 font-semibold text-[19px]'>Free</p>
        <Button className='w-full bg-[#203D74] text-white items-center justify-center py-1 px-3 font-md text-[10px] rounded-lg mt-2 h-[31px]'>
          Sign Up
        </Button>
        <div className='flex flex-row w-full justify-start pt-5 px-1 my-auto text-[#585858]'>
          <div>
            <ul className='list-none flex flex-col gap-2 lg:mb-[64px]'>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight />{' '}
                <p className='lg:text-[9px] text-[12px]'>
                  Non-premium questions
                </p>
              </li>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight />{' '}
                <p className='lg:text-[9px] text-[12px]'>
                  Personalized analytics
                </p>
              </li>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight />{' '}
                <p className='lg:text-[9px] text-[12px]'>
                  Mental math simulator
                </p>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreePricingCard;
