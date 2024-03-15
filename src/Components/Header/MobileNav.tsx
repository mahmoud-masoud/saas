import { motion } from 'framer-motion';

const containerVariants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.9],
      duration: 0.3,
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.3,
    },
  },
};

const navLinksVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const listVariants = {
  initial: {
    opacity: 0,

    transition: { staggerChildren: 0.09, staggerDirection: -1 },
  },
  animate: {
    opacity: 1,

    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.09,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const navLinks = [
  { title: 'Features', url: '#features' },
  { title: 'Pricing', url: '#Pricing' },
  { title: 'Contact', url: '#contact' },
  { title: 'About', url: '#about' },
];

const MobileNavbar = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='absolute right-0 top-full origin-top h-screen w-screen
       text-white bg-[#000212]'
    >
      <motion.ul
        variants={listVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        className='flex-col pt-20 px-4 gap-4'
      >
        {navLinks.map((link, index) => {
          return (
            <li key={index} className='text-4xl py-4'>
              <motion.div variants={navLinksVariants}>
                <a className='block' onClick={onClose} href={link.url}>
                  {link.title}
                </a>
              </motion.div>
            </li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};
export default MobileNavbar;
