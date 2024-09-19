import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { PiGreaterThanLight, PiLessThan } from 'react-icons/pi';
import { CiSearch } from 'react-icons/ci';

const FirstCard = () => {
  return (
    <Card className='p-2 w-[80%] rounded-xl bg-white text-black shadow-xl hover:shadow-2xl duration-500 flex flex-col ml-[2%]'>
      <div className='flex flex-col duration-500 transition w-full'>
        <CardHeader className='flex flex-row items-center justify-between'>
          <CardTitle className=''>Companies</CardTitle>
          <div className='flex flex-row   justify-around'>
            <Button className='w-8 h-6 rounded-md flex flex-col bg-slate-200 hover:bg-slate-300 disabled:hover:bg-slate-200 duration-200 mx-1 my-auto cursor-pointer disabled:cursor-default disabled:text-gray-400'>
              <PiLessThan className='text-black' />
            </Button>
            <Button className='w-8 h-6 rounded-md flex flex-col bg-slate-200 hover:bg-slate-300 disabled:hover:bg-slate-200 duration-200 mx-1 my-auto cursor-pointer disabled:cursor-default disabled:text-gray-400'>
              <PiGreaterThanLight className='text-black' />
            </Button>
          </div>
        </CardHeader>
        <div className='flex flex-row items-center border rounded mx-[17px] p-[4px] h-[29px]'>
          <CiSearch />
          <Input
            className='border-0 h-[29px]'
            type='text'
            placeholder='Search ...'
          />
        </div>
        <CardContent className='mt-[4%]'>
          <div className='flex gap-5 mt-[7%]'>
            <Badge className='flex gap-2 bg-transparent text-black rounded-[26px] text-[12px]'>
              <p className='text-[8px]'>SIG </p>
              <div className='bg-[#203D74] rounded-[26px] w-10 flex justify-center text-white text-[8px]'>
                146
              </div>{' '}
            </Badge>
            <Badge className='flex gap-2 bg-transparent text-black rounded-[26px]'>
              <p className='text-[8px]'>Jane </p>
              <div className='bg-[#203D74] rounded-[26px] w-10 flex justify-center text-white text-[8px]'>
                133
              </div>{' '}
            </Badge>
          </div>
          <div className='flex gap-5 mt-[7%]'>
            <Badge className='flex gap-2 bg-transparent text-black rounded-[26px] text-[12px]'>
              <p className='text-[8px]'>DRW </p>
              <div className='bg-[#203D74] rounded-[26px] w-10 flex justify-center text-white text-[8px]'>
                50
              </div>{' '}
            </Badge>
            <Badge className='flex gap-2 bg-transparent text-black rounded-[26px]'>
              <p className='text-[8px]'>IMC </p>
              <div className='bg-[#203D74] rounded-[26px] w-10 flex justify-center text-white text-[8px]'>
                45
              </div>{' '}
            </Badge>
          </div>

          <div className='flex gap-5 mt-[7%]'>
            <Badge className='flex gap-2 bg-transparent text-black rounded-[26px] text-[8px]'>
              <p className='text-[8px]'> Rings </p>
              <div className='bg-[#203D74] rounded-[26px] w-10 flex justify-center text-white text-[8px]'>
                70
              </div>{' '}
            </Badge>
            <Badge className='flex gap-2 bg-transparent text-black rounded-[26px]'>
              <p className='text-[8px]'>Akuna </p>
              <div className='bg-[#203D74] rounded-[26px] w-10 flex justify-center text-white text-[8px]'>
                64
              </div>{' '}
            </Badge>
          </div>
          <div className='flex gap-1 mt-[7%]  pr-[9px]'>
            <Badge className='flex gap-2 bg-transparent text-black rounded-[26px] text-[12px]'>
              <p className='text-[8px]'>World </p>
              <div className='bg-[#203D74] rounded-[26px] w-10 flex justify-center text-white text-[8px]'>
                56
              </div>{' '}
            </Badge>
            <Badge className='flex gap-2 bg-transparent text-black rounded-[26px]'>
              <p className='text-[8px]'>Optiver </p>
              <div className='bg-[#203D74] rounded-[26px] w-10 flex justify-center text-white text-[8px]'>
                60
              </div>{' '}
            </Badge>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default FirstCard;
