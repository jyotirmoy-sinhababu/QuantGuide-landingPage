import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { FaRegStar } from 'react-icons/fa6';
import { PiGreaterThanLight, PiLessThan } from 'react-icons/pi';
import { CiSearch } from 'react-icons/ci';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const questions = [
  {
    name: 'Place Or Take',
    topic: 'Probability',
    difficulty: 'Hard',
    status: '',
    details: 'Detailed info about Place Or Take',
  },
  {
    name: 'Collecting Toys II',
    topic: 'Probability',
    difficulty: 'Hard',
    status: '',
    details: 'Detailed info about Collecting Toys II',
  },
  {
    name: 'Chess Tournament I',
    topic: 'Probability',
    difficulty: 'Medium',
    status: '',
    details: 'Detailed info about Chess Tournament I',
  },
  {
    name: 'Poker Hands I',
    topic: 'Probability',
    difficulty: 'Easy',
    status: '',
    details: 'Detailed info about Poker Hands I',
  },
  {
    name: 'Free Sundae',
    topic: 'Probability',
    difficulty: 'Hard',
    status: '',
    details: 'Detailed info about Free Sundae',
  },
  {
    name: 'Place Or Take',
    topic: 'Probability',
    difficulty: 'Hard',
    status: '',
    details: 'Detailed info about Place Or Take',
  },
  {
    name: 'Poker Hands I',
    topic: 'Probability',
    difficulty: 'Easy',
    status: '',
    details: 'Detailed info about Poker Hands I',
  },
  {
    name: 'Chess Tournament I',
    topic: 'Probability',
    difficulty: 'Medium',
    status: '',
    details: 'Detailed info about Chess Tournament I',
  },
];

const TableCard = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);

  const handleRowClick = (question: any) => {
    setSelectedQuestion(question);
  };
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-[10px]'>Name</TableHead>
            <TableHead className='text-[10px]'>Topic</TableHead>
            <TableHead className='text-[10px]'>Difficulty</TableHead>
            <div className='flex  justify-end items-center gap-10 '>
              <TableHead className='flex  items-center text-[10px]'>
                Status
              </TableHead>
              <TableHead className='flex flex-row items-center  border rounded p-[2px] h-[29px] md:w-[200px] w-[80px]'>
                <CiSearch className=' text-[18px] ' />
                <Input
                  className='border-0 h-[29px] text-[10px] '
                  type='text'
                  placeholder='Search ...'
                />
              </TableHead>
            </div>
          </TableRow>
        </TableHeader>
        <TableBody>
          {questions.map((question, index) => (
            <TableRow
              key={index}
              onClick={() => handleRowClick(question)}
              className={`cursor-pointer hover:bg-gray-100  ${
                index % 2 === 0 ? 'bg-gray-200' : ''
              }`}
            >
              <TableCell className='text-[10px] '>{question.name}</TableCell>
              <TableCell className='text-[10px]'>{question.topic}</TableCell>
              <TableCell className='text-[10px]'>
                {question.difficulty}
              </TableCell>
              <TableCell className='text-[10px]'>{question.status}</TableCell>
              <TableCell className='flex justify-end'>
                <FaRegStar />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='flex justify-between mt-4 '>
        <p className='text-[#909090] my-auto text-center text-[12px]'>
          Results: 1211
        </p>
        <div className='flex'>
          <Button className='w-8 h-6 rounded-md flex flex-col bg-slate-200 hover:bg-slate-300 disabled:hover:bg-slate-200 duration-200 mx-1 my-auto cursor-pointer disabled:cursor-default disabled:text-gray-400'>
            <PiLessThan className='text-black' />
          </Button>
          <p className='text-[#909090] my-auto text-center text-[12px]'>
            Page 1/1
          </p>
          <Button className='w-8 h-6 rounded-md flex flex-col bg-slate-200 hover:bg-slate-300 disabled:hover:bg-slate-200 duration-200 mx-1 my-auto cursor-pointer disabled:cursor-default disabled:text-gray-400'>
            <PiGreaterThanLight className='text-black' />
          </Button>
        </div>
      </div>
      {selectedQuestion && (
        <div className='mt-4 p-4 border rounded-md shadow'>
          <h2 className='text-lg font-bold'>{selectedQuestion.name}</h2>
          <p>
            <strong>Topic:</strong> {selectedQuestion.topic}
          </p>
          <p>
            <strong>Difficulty:</strong> {selectedQuestion.difficulty}
          </p>
          <p>
            <strong>Details:</strong> {selectedQuestion.details}
          </p>
          <Button onClick={() => setSelectedQuestion(null)}>Close</Button>
        </div>
      )}
    </div>
  );
};

export default TableCard;
