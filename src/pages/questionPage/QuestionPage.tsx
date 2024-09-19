import Navbar from '@/customComponents/nav/Navbar';
import TopCard from '@/customComponents/questionPageComp/topCardComp/TopCard';

import quant75 from '../../assets/quantGuide75.svg';
import top50 from '../../assets/top50.svg';
import coins from '../../assets/coins.svg';
import FirstCard from '@/customComponents/questionPageComp/sideCard/FirstCard';
import SecondCard from '@/customComponents/questionPageComp/sideCard/SecondCard';
import TableCard from '@/customComponents/questionPageComp/tableCard/TableCard';
import PricingFooter from '@/customComponents/pricingComp/PricingFooter';

const QuestionPage = () => {
  return (
    <div>
      <div className='bg-[#203D74]'>
        <Navbar />
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <div className='flex md:flex-row flex-col pl-[1%] mt-[2%] gap-5  items-center w-full'>
            <TopCard
              cardImg={quant75}
              cardTitle={'Quant Trader 75'}
              cardDescription={'Your go-to playlist of all the essentials'}
            />
            <TopCard
              cardImg={top50}
              cardTitle={'Top 50'}
              cardDescription={
                'The 50 most frequently asked interview questions'
              }
            />
            <TopCard
              cardImg={coins}
              cardTitle={'Coins Playlist'}
              cardDescription={'All the coin questions on the platform'}
            />
          </div>
          <div className='md:pl-[4%] pl-0 mt-[2%]  mx-[2%] md:mx-0'>
            <TableCard />
          </div>
        </div>
        <div className=' flex-col lg:w-96 lg:mt-5 lg:mr-3 mb-4 hidden lg:flex items-end'>
          <FirstCard />
          <SecondCard />
        </div>
      </div>
      <PricingFooter />
    </div>
  );
};

export default QuestionPage;
