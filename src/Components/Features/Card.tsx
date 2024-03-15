import { motion } from 'framer-motion';

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

const Card = () => {
  return (
    <motion.div
      variants={cardVariants}
      initial='initial'
      animate='animate'
      className='p-10 rounded-3xl border backdrop-filter backdrop-blur-md
       border-slate-700 bg-white/10'
    >
      <div
        className='h-12 w-12 bg-gradient-to-t from-purple-500
        to-cyan-500 mb-4 rounded-full'
      ></div>
      <h3 className='text-white mb-4'>lab laba sdf asdfjka</h3>
      <p className='text-slate-400'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sint hic
        tempora id perferendis ipsa iure molestias. Nam doloremque praesentium
        quaerat quisquam quas
      </p>
    </motion.div>
  );
};
export default Card;
