import Navbar from '@/customComponents/nav/Navbar';
import FreePricingCard from '@/customComponents/pricingComp/FreePricingCard';
import MonthlyPaidCard from '@/customComponents/pricingComp/MonthlyPaidCard';
import PaidPricingCard from '@/customComponents/pricingComp/PaidPricingCard';

import amex from '../../assets/AMEX.svg';
import applepay from '../../assets/applepay.svg';
import master from '../../assets/master.svg';
import stripe from '../../assets/stripe.svg';
import visa from '../../assets/VISA.svg';
import PremiumFeatureCard from '@/customComponents/pricingComp/PremiumFeatureCard';

import account from '../../assets/account.svg';
import lightbulb from '../../assets/lightbulb.svg';
import trophy from '../../assets/trophy.svg';
import unlock from '../../assets/unlock.svg';
import PricingTestimonialCard from '@/customComponents/pricingComp/PricingTestimonialCard';

import jane from '../../assets/jane.svg';
import citadel from '../../assets/citadel.svg';
import akuna from '../../assets/akuna.svg';
import AccordionComp from '@/customComponents/pricingComp/AccordionComp';
import PricingFooter from '@/customComponents/pricingComp/PricingFooter';

const PricingPage = () => {
  return (
    <div>
      <div className='bg-[#203D74]'>
        <Navbar />
      </div>
      <div className='flex flex-col justify-center items-center gap-5'>
        <p className='mx-auto md:font-semibold text-5xl mt-12 text-center text-transparent bg-clip-text bg-gradient-to-br from-[#2964FD] to-[#EE7878] my-auto font-[400]'>
          Go Premium
        </p>
        <p className='mx-auto font-normal text-xl mt-4 text-center'>
          Increase your probability of landing an offer in quant
        </p>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 lg:flex-row lg:mt-[5%] mt-[3%] xl:space-x-8'>
        <FreePricingCard />
        <PaidPricingCard />
        <MonthlyPaidCard />
      </div>
      <div className='flex justify-center flex-col mt-[4%]'>
        <div className='flex justify-center'>
          <p className='mx-auto text-lg tracking-widest mb-8 font-inter text-gray-400'>
            Trusted by
          </p>
        </div>
        <div className='flex lg:justify-around justify-center lg:gap-0 gap-3 lg:mx-[11%] mx-[4%]'>
          <img className='lg:w-[8%] w-[10%]' src={stripe} alt='stripe' />
          <img className='lg:w-[8%] w-[10%]' src={visa} alt='visa' />
          <img className='lg:w-[8%] w-[10%]' src={amex} alt='amex' />
          <img className='lg:w-[8%] w-[10%]' src={master} alt='master' />
          <img className='lg:w-[8%] w-[10%]' src={applepay} alt='applepay' />
        </div>
      </div>
      <div>
        <p className='mx-auto font-normal text-4xl mt-12 text-center text-transparent bg-clip-text bg-gradient-to-br from-[#2964FD] to-[#EE7878] my-auto py-2'>
          Why Premium?
        </p>
        <p className='mx-auto font-normal text-xl mt-4 text-center'>
          We give our users a disproportionate advantage.
        </p>
        <div className='flex lg:flex-row flex-col gap-4 lg:justify-between justify-center lg:mx-[12%] items-center mt-[4%]'>
          <div className='flex flex-col w-[400px] justify-center '>
            {' '}
            <PremiumFeatureCard
              icon={trophy}
              title={'Premium Questions'}
              description={
                'Gain exclusive access to our latest and ever-growing collection of premium questions asked by top quant firms and written by a team of experts.'
              }
            />
            <PremiumFeatureCard
              icon={unlock}
              title={'Detailed Solutions'}
              description={
                'Unlock detailed solutions to every question on the platform. Each solution includes a step-by-step breakdown that efficiently walks you through the question. Take a look at our free solutions for Collecting Toys II and Place or Take.'
              }
            />
          </div>
          <div className='flex flex-col w-[400px] justify-center'>
            <PremiumFeatureCard
              icon={lightbulb}
              title={'Hints Feature'}
              description={
                'Get stuck? All of our questions have hints to guide you towards the right approach for the problem.'
              }
            />
            <PremiumFeatureCard
              icon={account}
              title={'Company Tags'}
              description={
                "Target your studying towards the companies you're interviewing for right now and find out which companies ask which types of questions."
              }
            />
          </div>
        </div>
      </div>
      <div className='flex md:flex-row flex-col mt-[4%] justify-between mx-[10%] '>
        <div className='mt-5'>
          <p className=''>What are others saying about us?</p>
        </div>
        <div className='mt-6'>
          <PricingTestimonialCard
            title={'Intern at Jane Street'}
            description={
              'I had my final rounds at Jane Street and was told today that I will get the internship offer. Thanks to the team at QuantGuide!'
            }
            img={jane}
            mt='2%'
            yj
          />
        </div>
        <div className='mt-14'>
          <PricingTestimonialCard
            title={'SWE at Facebook'}
            description={
              'After switching from SWE and studying on QG, I got final rounds at IMC and Akuna, and ended up taking an offer at Akuna!'
            }
            img={akuna}
          />
        </div>
        <div>
          <PricingTestimonialCard
            title={'Student at Harvard'}
            description={
              'I grinded on QuantGuide and got an offer from Citadel, and some of the interview questions I got are on QuantGuide.'
            }
            img={citadel}
          />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <AccordionComp
          question={'What will I get with a premium subscription?'}
          answer={
            'In addition to free questions and features, you will have access to exclusive premium questions and features. This includes verified premium questions asked by real quant firms, written solutions to all questions, hints for when you get stuck, and more. Take a look at our free solutions for Collecting Toys II and Place or Take.'
          }
        />
        <AccordionComp
          question={'What about the non-premium questions?'}
          answer={
            "Those aren't going anywhere! You will continue to have access to non-premium questions when you subscribe to premium"
          }
        />
        <AccordionComp
          question={'What if I subscribe and want to cancel?'}
          answer={
            'You can cancel your subscription at any time through your account settings. Your cancellation will take effect immediately.'
          }
        />
      </div>
      <PricingFooter />
    </div>
  );
};

export default PricingPage;
