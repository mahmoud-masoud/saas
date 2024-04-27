import Logo from '@/UI/Logo';
import { motion } from 'framer-motion';

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
        <div className='w-40'>
          <img src='/public/Images/Avatars/avatar.png' alt='' />
        </div>
        <PersonCard />
        <FormCard />
      </motion.div>
    </div>
  );
};
export default Avatar;

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

const PersonCard = () => (
  <motion.div
    variants={leftImageVariants}
    initial='initial'
    whileInView='animate'
    viewport={{
      once: true,
    }}
    className='h-48 w-32 md:h-56 md:w-40 bg-white/40 backdrop-blur rounded-lg absolute
left-0 top-10'
  >
    <div className='flex flex-col justify-between items-center px-2 py-4 text-sm h-full'>
      <div className='avatar bg-indigo-500 rounded-full h-12 w-12'></div>
      <div className='name font-medium'>Mahmoud Masoud</div>
      <div className='title text-[12px] text-slate-200'>Web Developer</div>
      <div className='flex justify-between gap-1 w-full'>
        <div>6 hours</div>
        <div>30$ / H</div>
      </div>
      <div className='flex justify-between w-full gap-2'>
        <div className='px-3 py-1 rounded border border-white flex-1 text-center'>
          Cancel
        </div>
        <div
          className='px-3 py-1 rounded border
        border-emerald-600 bg-emerald-600 flex-1 text-center'
        >
          Invite
        </div>
      </div>
    </div>
  </motion.div>
);
