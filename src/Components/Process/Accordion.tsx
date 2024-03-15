import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  idx: number;
  title: string;
  description: string;
};

const Accordion = ({ idx, title, description }: Props) => {
  console.log(idx);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='text-white w-full mb-4'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer px-4 py-4 
      backdrop-filter bg-white/15 rounded-xl flex justify-between'
      >
        <p> {title}</p>

        <motion.svg
          animate={
            isOpen
              ? {
                  rotate: '180deg',
                }
              : {
                  rotate: '0deg',
                }
          }
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-7 h-7 stroke-2 p-1 bg-black/40 rounded-full'
        >
          <path
            fillRule='evenodd'
            d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
            clipRule='evenodd'
          />
        </motion.svg>
      </div>
      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.4,
              },
              opacity: {
                duration: 0.3,
              },
            }}
            className=' overflow-hidden'
          >
            <p className='p-6 mt-4 bg-white/10 backdrop-filter  rounded-md'>
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Accordion;
