import './App.css';
import PricingPage from './pages/pricingPage/PricingPage';
import QuestionPage from './pages/questionPage/QuestionPage';
import HomePage from './pages/homePage/HomePage';

import { Routes, Route } from 'react-router-dom';
import MyProfile from './pages/myProfile/MyProfile';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='question' element={<QuestionPage />} />
        <Route path='price' element={<PricingPage />} />
        <Route path='profile' element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
