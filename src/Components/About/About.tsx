import { motion } from 'framer-motion';
import Wrapper from '../../UI/Wrapper';
// import TestimonialCard from './TestimonialCard';

const leftCard = {
  initial: { translateX: '-100%', translateY: 200, scale: 0.9 },
  animate: {
    translateX: 0,
    translateY: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const rightCard = {
  initial: { translateX: '100%', translateY: 200, scale: 0.9 },
  animate: {
    translateX: 0,
    translateY: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const middleCard = {
  initial: { translateY: '100%', scale: 0.9 },
  animate: {
    translateY: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};

const About = () => {
  return (
    <section className='py-20 overflow-hidden'>
      <Wrapper>
        <div className='mb-20 text-center'>
          <h2 className='text-5xl text-white font-medium mb-4'>
            What Our Clients Say About Us
          </h2>
          <p className='text-slate-400 max-w-2xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            consequatur molestiae recusandae earum vel sit soluta perferendis
            cum, quaerat nulla minima nemo iusto minus
          </p>
        </div>

        <section
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
         gap-6 px-4 lg:px-10 xl:px-20'
        >
          <motion.div
            variants={leftCard}
            initial='initial'
            animate='animate'
            className={`p-10 rounded-3xl border backdrop-filter
       border-slate-700 bg-white/10 row-span-2`}
          >
            <h3 className='text-white mb-4'>lab laba sdf asdfjka</h3>
            <p className='text-slate-400'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sint
              hic tempora id perferendis ipsa iure molestias. Nam doloremque
              praesentium quaerat quisquam quas
            </p>
          </motion.div>
          <motion.div
            variants={middleCard}
            initial='initial'
            animate='animate'
            className={`p-10 rounded-3xl border backdrop-filter
       border-slate-700 bg-white/10`}
          >
            <h3 className='text-white mb-4'>lab laba sdf asdfjka</h3>
            <p className='text-slate-400'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sint
              hic tempora id perferendis ipsa iure molestias. Nam doloremque
              praesentium quaerat quisquam quas
            </p>
          </motion.div>
          <motion.div
            variants={rightCard}
            initial='initial'
            animate='animate'
            className={`p-10 rounded-3xl border backdrop-filter
       border-slate-700 bg-white/10 row-span-2`}
          >
            <h3 className='text-white mb-4'>lab laba sdf asdfjka</h3>
            <p className='text-slate-400'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sint
              hic tempora id perferendis ipsa iure molestias. Nam doloremque
              praesentium quaerat quisquam quas
            </p>
          </motion.div>
          <motion.div
            variants={middleCard}
            initial='initial'
            animate='animate'
            className={`p-10 rounded-3xl border backdrop-filter
       border-slate-700 bg-white/10 `}
          >
            <h3 className='text-white mb-4'>lab laba sdf asdfjka</h3>
            <p className='text-slate-400'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sint
              hic tempora id perferendis ipsa iure molestias. Nam doloremque
              praesentium quaerat quisquam quas
            </p>
          </motion.div>
        </section>
      </Wrapper>
    </section>
  );
};
export default About;
