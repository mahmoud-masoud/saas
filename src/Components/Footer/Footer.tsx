import { motion } from 'framer-motion';
import Wrapper from '../../UI/Wrapper';
import Navbar from './Navbar';

const lineVariants = {
  initial: { width: 0 },
  animate: {
    width: 'auto',
    transition: {
      duration: 0.7,
    },
  },
};

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <footer className=''>
      <Wrapper>
        <Navbar />
        <motion.div
          variants={lineVariants}
          initial='initial'
          whileInView='animate'
          viewport={{
            once: true,
          }}
          className='h-[2.5px]
        bg-gradient-to-r from-black from-5% via-slate-500 mx-auto to-black to-95%'
        ></motion.div>
        <div
          className='flex justify-between font-thin
         text-slate-300 py-10 px-4 max-sm:text-sm items-center text-center '
        >
          <div>Privacy Policy</div>
          <div>&copy;{fullYear} Flexi SaaS All Rights Reserved</div>
          <div>Terms & Conditions</div>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
