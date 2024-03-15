import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const bigImageVariants = {
  initial: {
    scale: 0.7,
    translateY: 200,
  },
  animate: {
    scale: 1,
    translateY: 0,
    transition: { duration: 2, type: 'spring' },
  },
};

const leftImageVariants = {
  initial: { scale: 0.9, translateX: '-50%', translateY: '-50%' },
  animate: {
    scale: 1,
    translateX: '-25%',
    translateY: 0,
    transition: { duration: 0.5, delay: 0.1, type: 'tween' },
  },
};
const rightImageVariants = {
  initial: { scale: 0.9, translateX: '50%', translateY: '50%' },
  animate: {
    scale: 1,
    translateX: '25%',
    translateY: 0,
    transition: { duration: 0.5, delay: 0.1, type: 'tween' },
  },
};

const Avatar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='px-12 w-full flex-1'>
      <motion.div
        ref={ref}
        variants={bigImageVariants}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        className='relative max-w-lg h-96 bg-white rounded-3xl'
      >
        <motion.div
          variants={leftImageVariants}
          initial='initial'
          animate={isInView ? 'animate' : 'initial'}
          className='h-48 w-32 md:h-56 md:w-40 bg-emerald-400 rounded-lg absolute
      left-0 top-10'
        ></motion.div>
        <motion.div
          variants={rightImageVariants}
          initial='initial'
          animate={isInView ? 'animate' : 'initial'}
          className='h-48 w-32 md:h-56 md:w-40 bg-amber-400 rounded-lg absolute
      right-0 bottom-10 translate-x-1/3
      '
        ></motion.div>
      </motion.div>
    </div>
  );
};
export default Avatar;
