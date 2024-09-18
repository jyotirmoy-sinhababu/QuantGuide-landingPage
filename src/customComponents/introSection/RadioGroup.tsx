import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

import { FaRegEyeSlash } from 'react-icons/fa';

const RadioGroup = () => {
  return (
    <div className='bg-white mb-[7%] pt-[2%] pb-[2%] rounded h-[275px]'>
      <div className='flex justify-between mx-[2%]'>
        <div className='flex gap-3'>
          <Button className='bg-[#9CA3AF] hover:bg-[#9CA3AF] text-[14px]'>
            Medium
          </Button>
          <Button className='bg-[#0082F6] hover:bg-[#0082F6] text-[14px] bg-opacity-[1]'>
            Probability
          </Button>
        </div>
        <Button className='gap-1'>
          <FaRegEyeSlash /> View Hint
        </Button>
      </div>
      <div className='mx-[2%]'>
        <p className='sm:text-[14px] text-[17px] mt-2 sm:leading-2 leading-1'>
          <strong>Q.1</strong> Roll a fair standard 6−sided die until a 6
          appears. Given that the first 6 occurs before the first 5, find the
          expected number of times the die was rolled.
        </p>
        <div className='flex sm:flex-col flex-row sm:justify-normal justify-between sm:gap-2 gap-4 mt-4'>
          <div className='flex items-center space-x-2'>
            <Checkbox id='terms' className='rounded-full' />
            <Label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              2
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='terms' className='rounded-full' />
            <Label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              2.1
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='terms' className='rounded-full' />
            <Label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              3
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='terms' className='rounded-full' />
            <Label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              3.6
            </Label>
          </div>
        </div>
        <Button className='rounded-full bg-[#0082F6] hover:bg-[#0082F6] bg-opacity-[1] sm:mt-[2%] mt-[7%] '>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RadioGroup;
