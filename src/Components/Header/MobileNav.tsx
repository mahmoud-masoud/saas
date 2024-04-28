import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

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

const links = [
  {
    path: '#features',
    name: 'Features',
  },
  {
    path: '#about-us',
    name: 'About Us',
  },
  {
    path: '#pricing',
    name: 'Pricing',
  },
];
const MobileNavbar = ({ onClose }: { onClose: () => void }) => {
  const isContact = useLocation().pathname === '/contact';

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
        <li className='text-4xl' onClick={onClose}>
          <motion.div variants={navLinksVariants}>
            <Link to={'/'} className='py-4 inline-block'>
              Home
            </Link>
          </motion.div>
        </li>
        <li className='text-4xl' onClick={onClose}>
          <motion.div variants={navLinksVariants}>
            <Link to={'contact'} className='py-4 inline-block'>
              Contact
            </Link>
          </motion.div>
        </li>
        {links.map((link, index) => {
          return (
            <li key={index} className={`text-4xl ${isContact ? 'hidden' : ''}`}>
              <motion.div variants={navLinksVariants}>
                <a
                  href={link.path}
                  onClick={onClose}
                  className='py-4 inline-block'
                >
                  {link.name}
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
