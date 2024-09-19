import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { useNavigate } from 'react-router-dom';

const NavMobile = () => {
  const navigate = useNavigate();
  return (
    <Card className='fixed inset-x-0 z-[60] border-0 bg-[#203D74] w-[90%] p-4 shadow-lg text-white flex flex-col items-start top-[5%] left-[5%]'>
      <CardContent className='p-0 flex flex-col gap-4 w-full'>
        <Button
          className='w-[90%] flex justify-start bg-[#203D74] hover:bg-blue-700'
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </Button>
        <Button
          className='w-[90%] flex justify-start bg-[#203D74] hover:bg-blue-700'
          onClick={() => {
            navigate('/question');
          }}
        >
          Questions
        </Button>
        <Button className='w-[90%] flex justify-start bg-[#203D74] hover:bg-blue-700'>
          Quality
        </Button>
        <Button
          className='w-[90%] flex justify-start bg-blue-700 hover:bg-[#203D74]'
          onClick={() => {
            navigate('/price');
          }}
        >
          Pricing
        </Button>
      </CardContent>
      <CardContent className='p-0 flex flex-row gap-4 justify-center items-center w-full mt-[4%]'>
        <Button className='bg-blue-700'>Log In</Button>
        <Button className='bg-blue-700'>Sign Up</Button>
      </CardContent>
    </Card>
  );
};

export default NavMobile;
