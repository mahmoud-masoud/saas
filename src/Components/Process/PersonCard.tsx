import { motion } from 'framer-motion';

const leftImageVariants = {
  initial: { scale: 0.9, translateX: '-50%', translateY: '-50%' },
  animate: {
    scale: 1,
    translateX: '-25%',
    translateY: 0,
    transition: { duration: 0.5, delay: 0.1, type: 'tween' },
  },
};

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
      <div className='avatar bg-indigo-500 rounded-full h-12 w-12'>
        <img
          src='/Images/Avatars/me.webp'
          alt='avatar'
          className='max-w-full rounded-full'
        />
      </div>
      <div className='name font-medium'>Mahmoud</div>
      <div className='title text-[12px] text-slate-200'>Web Developer</div>
      <div className='flex justify-between gap-1 w-full'>
        <div>6 hours</div>
        <div>30$ / H</div>
      </div>
      <div className='flex justify-between gap-2 max-md:scale-90'>
        <div className='px-2 py-1 rounded border border-white flex-1 text-center h-fit'>
          Cancel
        </div>
        <div
          className='px-2 py-1 rounded border
        border-emerald-600 bg-emerald-600 flex-1 text-center h-fit'
        >
          Invite
        </div>
      </div>
    </div>
  </motion.div>
);

export default PersonCard;
