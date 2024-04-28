import { motion } from 'framer-motion';
import FormCard from './FormCard';
import PersonCard from './PersonCard';

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

const Avatar = () => {
  return (
    <div className='px-12 w-full flex-1'>
      <motion.div
        variants={bigImageVariants}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true,
        }}
        className='relative max-w-lg h-96 bg-gradient-to-tr
        to-teal-600 from-indigo-800 font-medium flex justify-center itc rounded-3xl'
      >
        <div className='h-full'>
          <img
            src='/Images/illustration/process.webp'
            alt=''
            className='h-full object-cover rounded-3xl'
          />
        </div>
        <PersonCard />
        <FormCard />
      </motion.div>
    </div>
  );
};
export default Avatar;
