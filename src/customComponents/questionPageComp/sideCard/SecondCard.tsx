import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import { RxTriangleLeft, RxTriangleRight } from 'react-icons/rx';

const SecondCard = () => {
  return (
    <Card className='mt-[5%] w-[80%] p-0'>
      <CardHeader className='flex flex-row items-center gap-4'>
        <CardTitle className='text-[14px]'>Progress</CardTitle>
        <div className='p-1 px-1 xl:px-4 bg-[#f2f2f2] flex flex-row rounded-lg items-center gap-2'>
          <Button className='flex bg-[#203D74] h-[27px] text-[10px]'>
            Skills
          </Button>
          <p className='text-[10px]'>Difficulties</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className='h-10 flex flex-col'>
          <div className='flex flex-row h-6'>
            <p className='text-[10px] ml-0 mr-auto mt-0'>Probability</p>
            <p className='text-xs mr-0 ml-auto mb-0 mt-0'>0/7</p>
          </div>
          <div className='w-full h-2 bg-gray-300 rounded-full'>
            <div className='duration-1000 h-2 bg-gradient-to-l opacity-80 from-[#2964FD] to-[#EE7878] rounded-full'></div>
          </div>
        </div>
        <div className='h-10 flex flex-col'>
          <div className='flex flex-row h-6'>
            <p className='text-[10px] ml-0 mr-auto mt-0'>Brainteasers</p>
            <p className='text-xs mr-0 ml-auto mb-0 mt-0'>0/246</p>
          </div>
          <div className='w-full h-2 bg-gray-300 rounded-full'>
            <div className='duration-1000 h-2 bg-gradient-to-l opacity-80 from-[#2964FD] to-[#EE7878] rounded-full'></div>
          </div>
        </div>{' '}
        <div className='h-10 flex flex-col'>
          <div className='flex flex-row h-6'>
            <p className='text-[10px] ml-0 mr-auto mt-0'>Statistics</p>
            <p className='text-xs mr-0 ml-auto mb-0 mt-0'>0/76</p>
          </div>
          <div className='w-full h-2 bg-gray-300 rounded-full'>
            <div className='duration-1000 h-2 bg-gradient-to-l opacity-80 from-[#2964FD] to-[#EE7878] rounded-full'></div>
          </div>
        </div>
        <div className='h-10 flex flex-col'>
          <div className='flex flex-row h-6'>
            <p className='text-[10px] ml-0 mr-auto mt-0'>Pure Math</p>
            <p className='text-xs mr-0 ml-auto mb-0 mt-0'>0/60</p>
          </div>
          <div className='w-full h-2 bg-gray-300 rounded-full'>
            <div className='duration-1000 h-2 bg-gradient-to-l opacity-80 from-[#2964FD] to-[#EE7878] rounded-full'></div>
          </div>
        </div>
        <div className='h-10 flex flex-col'>
          <div className='flex flex-row h-6'>
            <p className='text-[10px] ml-0 mr-auto mt-0'>Finance</p>
            <p className='text-xs mr-0 ml-auto mb-0 mt-0'>0/96</p>
          </div>
          <div className='w-full h-2 bg-gray-300 rounded-full'>
            <div className='duration-1000 h-2 bg-gradient-to-l opacity-80 from-[#2964FD] to-[#EE7878] rounded-full'></div>
          </div>
        </div>
        <div className='h-12 flex flex-col'>
          <div className='flex flex-row h-6'>
            <p className='text-[10px] ml-0 mr-auto mt-0'>Machine Learning</p>
            <p className='text-xs mr-0 ml-auto mb-0 mt-0 bg-clip-text text-transparent bg-gradient-to-br from-[#2964FD] to-[#EE7878]'>
              Coming Soon
            </p>
          </div>
          <div className='w-full h-2 bg-gray-300 rounded-full'>
            <div className='duration-1000 h-2 bg-gradient-to-l opacity-80 from-[#2964FD] to-[#EE7878] rounded-full'></div>
          </div>
        </div>
        <div className='flex justify-between bg-gray-100'>
          <RxTriangleLeft />
          <RxTriangleRight />
        </div>
      </CardContent>
    </Card>
  );
};

export default SecondCard;
