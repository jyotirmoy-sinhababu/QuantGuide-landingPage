import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

import { RxTriangleRight } from 'react-icons/rx';

const PaidPricingCard = () => {
  return (
    <Card className='lg:h-[360px] h-[400px] lg:w-[20%] w-[80%] my-auto flex px-[10px] py-[12px] hover:py-[14px] flex-col  max-w-sm bg-white hover:bg-gray-50 duration-500 border-2 rounded-[1.375rem] border-gray'>
      <CardHeader className='flex flex-row justify-between items-center p-0'>
        <CardTitle className='text-xl font-[600] bg-gradient-to-br from-[#876CF3] to-[#EE7878] bg-clip-text text-transparent'>
          Annual
        </CardTitle>
        <Button className='py-[4px] px-2 rounded-3xl bg-gradient-to-br from-[#876CF3] to-[#EE7878] text-white text-[9px] h-[20px] '>
          Most Popular
        </Button>
      </CardHeader>
      <CardDescription className='pt-3 font-inter text-[#585858] lg:text-[10px] text-[14px]'>
        Save 40% over the monthly plan with our most popular plan.
      </CardDescription>
      <CardContent className='p-0'>
        <p className='pt-2 font-semibold text-[19px]'>$20/month</p>
        <Button className='w-full bg-[#203D74] text-white items-center justify-center py-1 px-3 text-[10px] rounded-lg mt-2 h-[31px]'>
          Get Started
        </Button>
        <div className='flex flex-row w-full justify-start pt-5 px-1 my-auto text-[#585858]'>
          <div>
            <ul className='list-none flex flex-col gap-2 lg:mb-[64px]'>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight />{' '}
                <p className='lg:text-[9px] text-[12px]'>Everything in Basic</p>
              </li>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight />{' '}
                <p className='lg:text-[9px] text-[12px]'>
                  Exclusive access to our library of hundreds of Premium
                  interview questions
                </p>
              </li>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight />{' '}
                <p className='lg:text-[9px] text-[12px]'>
                  Detailed solutions and hints to every question on the platform
                  (1,000+)
                </p>
              </li>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight />{' '}
                <p className='lg:text-[9px] text-[12px]'>
                  Search for questions by the companies that ask them
                </p>
              </li>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight /> <p className='text-[9px]'>Cancel anytime</p>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaidPricingCard;
