import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navbar from '@/customComponents/nav/Navbar';
import PricingFooter from '@/customComponents/pricingComp/PricingFooter';

const MyProfile = () => {
  return (
    <div>
      <div className='bg-[#203D74]'>
        <Navbar />
      </div>
      <div className='mt-[3%] flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50%] bg-[#203D74]'>
          <p className='text-white text-2xl'>JS</p>
        </div>
        <p className='text-xl'>Jyotirmoy</p>
        <Badge className='bg-transparent text-black border border-black'>
          Basic
        </Badge>
      </div>
      <div className='flex md:flex-row flex-col mt-[3%] mx-14 gap-16 '>
        <div className='flex md:flex-col flex-row'>
          <Button
            variant='outline'
            className='bg-blue-700 text-white text-[10px] md:w-[250px] w-[120px] flex justify-center items-center'
          >
            Account Information
          </Button>
          <Button className='text-[10px]' variant='ghost'>
            Statics
          </Button>
          <Button className='text-[10px]' variant='ghost'>
            Billing
          </Button>
        </div>
        <div>
          <Card className='w-full p-4 bg-white shadow-xl border-gray-200 border-2 rounded-md max-h-[60vh] overflow-y-scroll'>
            <CardContent className=' flex flex-row space-x-2 space-y-2'>
              <p className='w-1/2 text-sm my-auto'>First Name</p>
              <Input className='input input-bordered input-sm w-full text-sm' />
            </CardContent>
            <CardContent className=' flex flex-row space-x-2 space-y-2'>
              <p className='w-1/2 text-sm my-auto'>Last Name</p>
              <Input className='input input-bordered input-sm w-full text-sm' />
            </CardContent>
            <CardContent className=' flex flex-row space-x-2 space-y-2'>
              <p className='w-1/2 text-sm my-auto'>Email</p>
              <Input className='input input-bordered input-sm w-full text-sm' />
            </CardContent>
            <CardContent className=' flex flex-row space-x-2 space-y-2'>
              <p className='w-1/2 text-sm my-auto'>Username</p>
              <Input className='input input-bordered input-sm w-full text-sm' />
            </CardContent>
            <CardContent className=' flex flex-row space-x-2 space-y-2'>
              <p className='w-1/2 text-sm my-auto'>University</p>
              <Input className='input input-bordered input-sm md:w-[700px] w-[300px] text-sm' />
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <PricingFooter />
      </div>
    </div>
  );
};

export default MyProfile;
