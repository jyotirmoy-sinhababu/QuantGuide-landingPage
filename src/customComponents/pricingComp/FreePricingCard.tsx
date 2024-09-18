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
    <Card className='h-[400px] w-[30%] my-auto flex px-[1.5rem] py-[1.75rem] hover:py-[1.9rem] flex-col  max-w-sm bg-white hover:bg-gray-50 duration-500 border-2 rounded-[1.375rem] border-gray'>
      <CardHeader>
        <CardTitle className='text-xl font-[500]'>Basic</CardTitle>
        <CardDescription className='pt-3 font-inter text-[#585858] text-md'>
          Explore non-premium problems great for casual browsing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className='pt-3 font-semibold text-[1.75rem]'>Free</p>
        <Button className='w-full bg-[#203D74] text-white items-center justify-center py-2 px-3 font-md rounded-lg'>
          Sign Up
        </Button>
        <div className='flex flex-row w-full justify-start pt-5 px-1 my-auto text-[#585858]'>
          <div>
            <ul className='list-none flex flex-col space-y-3 lg:mb-[64px]'>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight />{' '}
                <p className='text-sm'>Non-premium questions</p>
              </li>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight />{' '}
                <p className='text-sm'>Personalized analytics</p>
              </li>
              <li className='flex flex-row'>
                {' '}
                <RxTriangleRight />{' '}
                <p className='text-sm'>Mental math simulator</p>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreePricingCard;
