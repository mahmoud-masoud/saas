import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const cardsContainerVariants = {
  initial: {
    translateX: 800,
  },
  animate: {
    translateX: 0,
    transition: {
      duration: 1,
    },
  },
};

const cardVariants = {
  initial: {
    translateX: 200,
  },
  animate: {
    translateX: 0,
  },
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: '-150px',
  });

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(
        containerRef?.current?.scrollWidth -
          containerRef?.current?.offsetWidth -
          800
      );
    }
  }, []);

  return (
    <section className='py-14'>
      <motion.div ref={containerRef} className='overflow-hidden'>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          variants={cardsContainerVariants}
          initial='initial'
          animate={isInView ? 'animate' : 'initial'}
          className='flex gap-10'
        >
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial='initial'
              animate={isInView ? 'animate' : 'initial'}
              className='min-w-96 p-10 rounded-3xl border backdrop-filter
            border-slate-700 bg-white/10'
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div
                className='h-12 w-12 bg-gradient-to-t from-purple-500
        to-cyan-500 mb-4 rounded-full'
              ></div>
              <h3 className='text-white mb-4'>lab laba sdf asdfjka</h3>
              <p className='text-slate-400'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                sint hic tempora id perferendis ipsa iure molestias. Nam
                doloremque praesentium quaerat quisquam quas
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cards;
