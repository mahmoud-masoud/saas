import Logo from '@/UI/Logo';
import { motion } from 'framer-motion';

const rightImageVariants = {
  initial: { scale: 0.9, translateX: '50%', translateY: '50%' },
  animate: {
    scale: 1,
    translateX: '25%',
    translateY: 0,
    transition: { duration: 0.5, delay: 0.1, type: 'tween' },
  },
};

const FormCard = () => (
  <motion.div
    variants={rightImageVariants}
    initial='initial'
    whileInView='animate'
    viewport={{
      once: true,
    }}
    className='p-2 py-4 h-48 w-32 md:h-56 md:w-40 bg-white/30 backdrop-blur rounded-lg absolute
right-0 bottom-10 translate-x-1/3 
'
  >
    <div className='flex flex-col justify-between text-sm h-full'>
      <div className='flex rounded-lg overflow-hidden'>
        <div className='logo p-1 bg-emerald-500'>
          <Logo />
        </div>
        <div className='bg-white p-1 w-full text-black '>
          <span className='font-bold'>Flexi SaaS</span>
          <p className='text-slate-400'>lablbablaaa</p>
        </div>
      </div>

      <div className=' flex flex-col flex-1 gap-0.5 justify-between '>
        <div className='flex flex-col gap-0.5'>
          <span>name</span>
          <div className='border border-white px-2 py-1 rounded-md'>
            <span>type here</span>
          </div>
        </div>
        <div className='flex flex-col gap-0.5'>
          <span>name</span>
          <div className='border border-white px-2 py-1 rounded-md'>
            <span>type here</span>
          </div>
        </div>
        <button className='bg-black p-1 text-white w-full rounded'>
          Join Now
        </button>
      </div>
    </div>
  </motion.div>
);

export default FormCard;
