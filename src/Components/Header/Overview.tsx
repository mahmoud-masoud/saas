import { motion } from 'framer-motion';
import { useRef } from 'react';
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
  const ref = useRef(null);

  return (
    <div ref={ref} className='relative max-md:scale-75 max-w-4xl mx-auto'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex flex-col max-w-xl mx-auto items-center h-96 bg-gradient-to-tr p-10
     from-indigo-800 to-cyan-700 rounded-3xl'
      >
        <h2 className='text-4xl text-center mb-4'>Overview</h2>
        <motion.div className='flex items-end gap-2'>
          <motion.div
            initial={{ translateX: '200%' }}
            whileInView={{ translateX: '0' }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: 'spring',
              delay: 0.2,
            }}
            className='bg-rose-100 rounded-full h-14 w-14'
          >
            <img src='/Images/Avatars/1.webp' alt='' />
          </motion.div>
          <motion.div
            initial={{ translateX: '100%' }}
            whileInView={{ translateX: '0' }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: 'spring',
              delay: 0.2,
            }}
            className=' rounded-full h-20 w-20'
          >
            <img src='/Images/Avatars/2.webp' alt='' />
          </motion.div>
          <motion.div className=' z-10 rounded-full h-24 w-24'>
            <img src='/Images/Avatars/3.webp' alt='' />
          </motion.div>
          <motion.div
            initial={{ translateX: '-100%' }}
            whileInView={{ translateX: '0' }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: 'spring',
              delay: 0.2,
            }}
            className='rounded-full h-20 w-20'
          >
            <img src='/Images/Avatars/4.webp' alt='' />
          </motion.div>
          <motion.div
            initial={{ translateX: '-200%' }}
            whileInView={{ translateX: '0' }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: 'spring',
              delay: 0.2,
            }}
            className='rounded-full h-14 w-14'
          >
            <img src='/Images/Avatars/5.webp' alt='' />
          </motion.div>
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
        className='px-8 py-3 bg-gradient-to-br from-white to-violet-400 text-slate-700 
      rounded-xl w-fit right-0 top-1/2 font-medium h-fit
       absolute shadow-md translate-x-1/2'
      >
        Customers
        <span className='block font-bold text-xl'>3440</span>
      </div>
    </div>
  );
};
export default Overview;
