import { IoLogoLinkedin } from 'react-icons/io5';
const Footer = () => {
  return (
    <div className='w-full md:h-[350px] md:pt-0 pt-5 h-full relative bg-zinc-950 flex flex-col text-white'>
      <div className='h-full md:justify-around justify-start md:items-center md:w-full flex md:flex-row flex-col md:mx-auto'>
        <div className='md:w-1/3 mx-auto md:m-0'>
          <div className='flex flex-col max-w-[300px] justify-start h-full space-y-3 md:my-auto md:ml-6 mx-auto'>
            <p>QuantGuide</p>
            <p className='opacity-70 text-[14px]'>
              QuantGuide is the best platform to enhance your technical skills,
              expand your questions knowledge, and prepare for quant interviews.
            </p>
            <div className='flex flex-row gap-x-5'>
              <a
                className='w-[38px] h-[38px] rounded-[88.27px] border border-white flex justify-center items-center'
                href=''
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className='md:w-1/3 text-[12px]'>
          <div className='mx-auto md:my-0 my-3 w-full flex flex-row justify-between md:justify-around md:space-y-0 space-y-3 max-w-[300px] md:max-w-full'>
            <div className='flex flex-col'>
              <a className='opacity-70' href='#'>
                Home
              </a>
              <a className='opacity-70' href='#'>
                Questions
              </a>
              <a className='opacity-70' href='#'>
                Discussion
              </a>
              <a className='opacity-70' href='#'>
                Quantify{' '}
              </a>
              <a className='opacity-70' href='#'>
                Pricing
              </a>
              <a className='opacity-70' href='#'>
                {' '}
                Contact Us
              </a>
            </div>
            <div className='flex flex-col space-y-3'>
              <p className=' hover:cursor-pointer'>Feedback</p>
              <a href='#'>Terms of use</a>
              <a href='#'>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <p className='m-auto opacity-60 mb-4 text-[12px]'>
          Copyright © 2024 QuantGuide
        </p>
      </div>
    </div>
  );
};

export default Footer;
