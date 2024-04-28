import { motion } from 'framer-motion';
import Wrapper from '../../UI/Wrapper';

const leftCard = {
  initial: { translateX: '-95%', translateY: 200, scale: 0.9 },
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
  initial: { translateX: '95%', translateY: 200, scale: 0.9 },
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
    <section className='py-20 overflow-hidden' id='about-us'>
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
            whileInView='animate'
            viewport={{
              once: true,
            }}
            className={`p-10 rounded-3xl border backdrop-filter
       border-slate-700 hover:border-slate-500 bg-white/10 row-span-2`}
          >
            <div className='flex gap-3 items-center mb-4'>
              <img
                src='/Images/Avatars/girl-2.webp'
                alt='avatar photo'
                className='w-12 rounded-full'
              />
              <p className='text-white'>Sarah Johnson</p>
            </div>
            <p className='text-slate-400'>
              FlexiSaaS has revolutionized the way our team manages projects.
              With its intuitive interface and powerful features, we've been
              able to stay organized, communicate effectively, and meet
              deadlines consistently. FlexiSaaS has truly become an
              indispensable tool for our organization
            </p>
          </motion.div>
          <motion.div
            variants={middleCard}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            className={`p-10 rounded-3xl border backdrop-filter
       border-slate-700 hover:border-slate-500 bg-white/10`}
          >
            <div className='flex gap-3 items-center mb-4'>
              <img
                src='/Images/Avatars/man-2.webp'
                alt='avatar photo'
                className='w-12 rounded-full'
              />
              <p className='text-white'>David Rodriguez</p>
            </div>
            <p className='text-slate-400'>
              Flexi SaaS streamlines workflow, ensuring on-time delivery and
              efficient budget management. Its features optimize productivity,
              making it invaluable for operations. Flexibility and performance
              redefine project management.
            </p>
          </motion.div>
          <motion.div
            variants={rightCard}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            className={`p-10 rounded-3xl border backdrop-filter
       border-slate-700 hover:border-slate-500 bg-white/10 row-span-2`}
          >
            <div className='flex gap-3 items-center mb-4'>
              <img
                src='/Images/Avatars/girl-1.webp'
                alt='avatar photo'
                className='w-12 rounded-full'
              />
              <p className='text-white'>Emily Chen</p>
            </div>
            <p className='text-slate-400'>
              Flexi SaaS simplifies project tasks, enhancing productivity.
              Collaboration tools ensure seamless teamwork. It's a game-changer
              for projects, indispensable for success. Flexibility and
              performance empower efficient project management.
            </p>
          </motion.div>
          <motion.div
            variants={middleCard}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            className={`p-10 rounded-3xl border backdrop-filter
       border-slate-700 hover:border-slate-500 bg-white/10 `}
          >
            <div className='flex gap-3 items-center mb-4'>
              <img
                src='/Images/Avatars/man-1.webp'
                alt='avatar photo'
                className='w-12 rounded-full'
              />
              <p className='text-white'>DMichael Thompson</p>
            </div>
            <p className='text-slate-400'>
              Flexi SaaS revolutionizes team communication with real-time
              updates and centralized sharing. It facilitates seamless
              collaboration, indispensable for success. Flexibility and
              performance redefine how teams work, ensuring efficient project
              management.
            </p>
          </motion.div>
        </section>
      </Wrapper>
    </section>
  );
};
export default About;
