import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const cardVariants = {
  initial: {
    translateX: 200,
  },
  animate: {
    translateX: 0,
    transition: {
      delay: 0.2,
    },
  },
};

type props = {
  icon: ReactNode;
  title: string;
  content: string;
};

const Card = ({ icon, title, content }: props) => {
  return (
    <motion.div
      variants={cardVariants}
      initial='initial'
      animate='animate'
      className='p-10 rounded-3xl border backdrop-filter backdrop-blur-md 
       border-slate-700 bg-white/10 min-w-80 group 
       hover:bg-gradient-to-t from-indigo-500/40 to-cyan-400/30 transition-all duration-150
       
       '
    >
      <div
        className='mb-6 rounded-full
       group-hover:bg-gradient-to-r from-indigo-500 to-cyan-600 w-fit p-2 duration-300 transition-all'
      >
        {icon}
      </div>
      <h3 className='text-white text-lg mb-4'>{title}</h3>
      <p
        className='group-hover:text-white
     text-slate-400'
      >
        {content}
      </p>
    </motion.div>
  );
};
export default Card;
