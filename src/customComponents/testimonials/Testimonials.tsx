import testimonialImg from '../../assets/testimonial-image.svg';

const Testimonials = () => {
  return (
    <div>
      <p className=' opacity-60 text-center md:text-[14px] leading-1 text-black mb-20 mt-10 px-[50px] md:px-[150px] lg:px-[200px]'>
        At QuantGuide, our mission is to help you invest in yourself in pursuit
        of your dream job. We believe that everyone should have the opportunity
        to be a quant so long as they put in the time and effort to learn the
        quantitative skills needed to pass the rigorous interviewing processes.
        Most recently, our users have landed jobs at top companies around the
        world.
      </p>
      <div className='w-full flex flex-row'>
        <img
          className='mx-auto w-4/5'
          src={testimonialImg}
          alt='testimonial image'
        />
      </div>
      <p className='opacity-40 text-center text-[13px] md:text-sm leading-loose text-gray-500 mb-12 mt-4 px-[50px] md:px-[150px] lg:px-[200px]'>
        QuantGuide is not affiliated with these firms
      </p>
    </div>
  );
};

export default Testimonials;
