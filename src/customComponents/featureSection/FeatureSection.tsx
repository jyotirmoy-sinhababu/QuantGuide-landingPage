import { Badge } from '@/components/ui/badge';

import FeatureCard from './FeatureCard';
import FeatureCardReverse from './FeatureCardReverse';

import iconOne from '../../assets/icon-1.svg';
import imageOne from '../../assets/image-1.svg';

import iconTwo from '../../assets/icon-2.svg';
import imageTwo from '../../assets/image-2.svg';

import iconThree from '../../assets/icon-3.svg';
import imageThree from '../../assets/image-3.svg';

import iconFour from '../../assets/icon-4.svg';
import imageFour from '../../assets/image-4.svg';

import iconFive from '../../assets/icon-5.svg';
import imageFive from '../../assets/image-5.svg';

const FeatureSection = () => {
  return (
    <div className='flex flex-col justify-center mt-[3%]'>
      <div className='flex justify-center'>
        <Badge
          variant='secondary'
          className='flex justify-center w-[100px] h-[31px] border-blue-800'
        >
          FEATURES
        </Badge>
      </div>

      {/* <div>
        <img src={spot} alt='spot' className='fixed' />
      </div> */}
      <div className='flex justify-center mt-[3%]'>
        <p className='font-bold text-[21px]'>What we do</p>
      </div>
      <div className='flex flex-col px-4 sm:px-r[40px] md:px-[100px] lg:px-[150px] justify-center space-y-[50px] z-10 mt-[4%]'>
        <FeatureCard
          imgIcon={iconOne}
          altTxt={'icon image'}
          cardHeading={'Start Exploring'}
          cardTxt={
            'Practice real interview questions asked by top quant firms and written by a team of experts. Join a community of thousands of students and professionals preparing for their next quant interviews.'
          }
          mainImg={imageOne}
        />
        <FeatureCardReverse
          imgIcon={iconTwo}
          altTxt={'icon image'}
          cardHeading={'Designed For You'}
          cardTxt={
            'Filter questions by topic, difficulty, and more to focus your personal studying on what matters. And with detailed statistics, we make it easy to stay on track and see your progress.'
          }
          mainImg={imageTwo}
        />
        <FeatureCard
          imgIcon={iconThree}
          altTxt={'icon image'}
          cardHeading={'Learn The Right Approach'}
          cardTxt={
            'Each question is paired with a comprehensive solution that systematically walks you through how to solve the question. Each question also has a hint to guide you towards the right approach.'
          }
          mainImg={imageThree}
        />
        <FeatureCardReverse
          imgIcon={iconFour}
          altTxt={'icon image'}
          cardHeading={'For Businesses'}
          cardTxt={
            'From sourcing candidates to providing assessments and training, we offer numerous services to help businesses identify top quant talent - reach out to learn more.'
          }
          mainImg={imageFour}
        />
        <FeatureCard
          imgIcon={iconFive}
          altTxt={'icon image'}
          cardHeading={'Speed Up Your Mental Math'}
          cardTxt={
            'Mental math is a crucial part of quant interviews. Customize your practice and track your progress with Quantify, our speed arithmetic game.'
          }
          mainImg={imageFive}
        />
      </div>
    </div>
  );
};

export default FeatureSection;
