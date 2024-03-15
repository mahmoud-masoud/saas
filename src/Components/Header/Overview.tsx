import { motion } from 'framer-motion';
// import Avatar from '../Process/Avatar';

const containerVariants = {
  hidden: {
    opacity: 0,
    translateY: '100%',
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Overview = () => {
  return (
    <div className='relative max-md:scale-75 max-w-4xl mx-auto'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='show'
        className='flex flex-col max-w-xl mx-auto items-center h-96 bg-gradient-to-tr p-10
     from-indigo-800 to-cyan-700 rounded-3xl'
      >
        <h2 className='text-4xl text-center mb-4'>Overview</h2>
        <motion.div className='flex items-end gap-2'>
          <motion.div
            initial={{ translateX: '200%' }}
            animate={{ translateX: '0' }}
            transition={{
              duration: 1,
              type: 'spring',
              delay: 0.2,
            }}
            className='bg-rose-100 p-4 rounded-full h-14 w-14'
          >
            <img src='/public/Images/Avatars/beard.png' alt='' />
          </motion.div>
          <motion.div
            initial={{ translateX: '100%' }}
            animate={{ translateX: '0' }}
            transition={{
              duration: 1,
              type: 'spring',
              delay: 0.2,
            }}
            className='bg-amber-400 p-4 rounded-full h-20 w-20'
          ></motion.div>
          <motion.div className='bg-cyan-500 p-4 z-10 rounded-full h-24 w-24'></motion.div>
          <motion.div
            initial={{ translateX: '-100%' }}
            animate={{ translateX: '0' }}
            transition={{
              duration: 1,
              type: 'spring',
              delay: 0.2,
            }}
            className='bg-orange-600 p-4 rounded-full h-20 w-20'
          ></motion.div>
          <motion.div
            initial={{ translateX: '-200%' }}
            animate={{ translateX: '0' }}
            transition={{
              duration: 1,
              type: 'spring',
              delay: 0.2,
            }}
            className='bg-emerald-500 p-4 rounded-full h-14 w-14'
          ></motion.div>
        </motion.div>

        <div className='flex justify-between mt-10 gap-4'>
          <div className='bg-teal-200 rounded-xl px-8 py-4'>
            <p className='text-slate-700 text-sm font-medium mb-2'>
              Total Employee
            </p>
            <span className='text-black font-bold text-4xl'>373+</span>
          </div>
          <div className='bg-indigo-200 rounded-xl px-8 py-4'>
            <p className='text-slate-700 text-sm font-medium mb-2'>
              Company Growth
            </p>
            <span className='text-black font-bold text-4xl'>73%</span>
          </div>
        </div>
      </motion.div>

      <div
        className='px-8 py-3 bg-white text-slate-700 
      rounded-xl w-fit left-0 top-1/3 font-medium
       h-fit absolute shadow-md -translate-x-1/2'
      >
        Total Balance
        <span className='block font-bold text-xl'>$350.25</span>
      </div>

      <div
        className='px-8 py-3 bg-white text-slate-700 
      rounded-xl w-fit right-0 top-1/2 font-medium h-fit
       absolute shadow-md translate-x-1/2'
      >
        Total Balance
        <span className='block font-bold text-xl'>$350.25</span>
      </div>
    </div>
  );
};
export default Overview;
