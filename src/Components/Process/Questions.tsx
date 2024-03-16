import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type props = {
  i: number;
  expanded: false | number;
  setExpanded: (expanded: false | number) => void;
};

const Accordion = ({ i, expanded, setExpanded }: props) => {
  const isOpen = i === expanded;
  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? '#FF0088' : '#0055FF' }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className='h-10 w-full bg-blue-400 mb-6'
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
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
            <div>
              <motion.p
                className=''
                variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                transition={{ duration: 0.8 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                est error aliquam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum officia est expedita, velit labore
                pariatur commodi ex aut at asperiores quisquam iure enim harum
                error modi porro exercitationem voluptatibus non.
              </motion.p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
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
