import { Button } from '@/components/ui/button';

import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

import { useState } from 'react';
import NavMobile from './NavMobile';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <div className='flex justify-between items-center mx-[4%] h-[51px] bg-[#203D74] bg-opacity-[1]'>
        <div>
          <p className='text-[#E1E1FF]'>QuantGuide</p>
        </div>
        <div className='sm:block hidden'>
          <Button
            className='text-[#E1E1FF] hover:text-[#E1E1FF]  hover:bg-[#203D74] opacity-60 font-normal text-[0.8rem]'
            variant='ghost'
            onClick={() => {
              navigate('/question');
            }}
          >
            Questions
          </Button>
          <Button
            className='text-[#E1E1FF] hover:text-[#E1E1FF]  hover:bg-[#203D74] opacity-60 font-normal text-[0.8rem]'
            variant='ghost'
            onClick={() => {
              navigate('/price');
            }}
          >
            Pricing
          </Button>
        </div>
        <div className='sm:flex items-center hidden gap-9'>
          <Button
            className='h-[31px] hover:w-[80px] rounded-[56px] hover:text-[#E1E1FF] bg-gradient-to-r from-blue-500 to-pink-500 text-[#E1E1FF] border-0 text-[0.8rem]'
            variant='outline'
          >
            Go Premium
          </Button>

          <Popover>
            <PopoverTrigger>
              <Avatar className=''>
                <AvatarFallback className='bg-[#203D74] text-white border border-white'>
                  JS
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className='flex flex-col w-[80%] '>
              <Button
                variant='ghost'
                className='m-0 mx-0 bg-transparent'
                onClick={() => {
                  navigate('/profile');
                }}
              >
                My Profile
              </Button>
              <Button variant='ghost' className='m-0 h-0'>
                Log Out
              </Button>
            </PopoverContent>
          </Popover>
        </div>
        <div className='sm:hidden block'>
          <Button
            onClick={toggleSidebar}
            className='bg-transparent'
            variant='ghost'
          >
            {!isOpen ? (
              <RxHamburgerMenu className='text-white' />
            ) : (
              <RxCross2 className='text-white' />
            )}
          </Button>
        </div>
      </div>
      {isOpen ? <NavMobile /> : null}
    </div>
  );
};

export default Navbar;
