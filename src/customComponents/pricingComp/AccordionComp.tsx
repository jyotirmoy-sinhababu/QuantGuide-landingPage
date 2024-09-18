import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const AccordionComp = ({ question, answer }: any) => {
  return (
    <Accordion type='single' collapsible className='mx-[10%] '>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='bg-[#203D74] rounded-sm text-white px-[15px]'>
          {question}
        </AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComp;
