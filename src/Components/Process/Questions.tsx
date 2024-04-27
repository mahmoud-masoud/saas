import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

type props = {
  i: number;
  expanded: false | number;
  setExpanded: (expanded: false | number) => void;
};

const Accordion = ({ i, expanded, setExpanded }: props) => {
  const isOpen = i === expanded;
  return (
    <div>
      <motion.button
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className='p-4 w-full bg-white/10 backdrop-blur-lg rounded-lg mb-4 cursor-pointer
        flex justify-between
        '
      >
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <div
          className={`p-1 flex justify-center items-center rounded-full
           bg-white/10 backdrop-blur-lg transition-all duration-300 ${
             isOpen && 'rotate-90'
           }`}
        >
          <ChevronRight />
        </div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className='rounded-md overflow-hidden'
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.p className='mb-6 bg-white/5 backdrop-blur-lg p-4 rounded-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est
              error aliquam! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsum officia est expedita, velit labore pariatur commodi ex
              aut at asperiores quisquam iure enim harum error modi porro
              exercitationem voluptatibus non.
            </motion.p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const Questions = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return accordionIds.map((i) => (
    <Accordion i={i} key={i} expanded={expanded} setExpanded={setExpanded} />
  ));
};

const accordionIds = [0, 1, 2, 3];

export default Questions;
