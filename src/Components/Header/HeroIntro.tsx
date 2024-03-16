import { motion } from 'framer-motion';
import SpotIcon from './SpotIcon';

const headingVariants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const subTitleVariants = {
  initial: {
    opacity: 0,
    y: -5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.4,
      ease: 'easeInOut',
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
    y: -5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.8,
      ease: 'easeInOut',
    },
  },
};

const HeroIntro = () => {
  return (
    <div className='transition-all max-w-3xl mx-auto text-center py-20 pt-40 md:py-40 lg:py-44'>
      <motion.h1
        variants={headingVariants}
        initial='initial'
        animate='animate'
        className='text-4xl md:text-6xl text-white md:font-semibold text-center '
      >
        Efficiency And Productivity With our
        <div className='mt-4 relative justify-center items-center inline-flex'>
          <SpotIcon />
          <span className='relative z-10 mx-6'> SaaS </span>
        </div>
        Solution
      </motion.h1>

      <motion.p
        variants={subTitleVariants}
        initial='initial'
        animate='animate'
        className='text-slate-300 mt-10 max-w-xl mx-auto text-lg'
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        assumenda, iste dignissimos ipsam beatae facilis
      </motion.p>

      <motion.button
        variants={buttonVariants}
        initial='initial'
        animate='animate'
        className='outline outline-2 outline-offset-4 outline-white mt-10
           bg-white rounded-full px-5 py-2 
            text-black font-bold '
      >
        Start Free Trail
      </motion.button>
    </div>
  );
};
export default HeroIntro;
