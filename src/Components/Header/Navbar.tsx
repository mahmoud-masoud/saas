import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../../UI/Logo';
import Wrapper from '../../UI/Wrapper';
import { useState } from 'react';
import MobileNavbar from './MobileNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`text-white p-2 px-4  border-b
     border-slate-800 backdrop-filter fixed backdrop-blur-lg top-0 right-0 left-0 z-20
      ${isOpen ? 'bg-[#000212]' : 'bg-indigo-800/10'} `}
    >
      <Wrapper className='flex justify-between gap-10'>
        <Logo />
        <ul className='hidden md:flex justify-between flex-1 max-w-xl gap-6 items-center'>
          <li>
            <a href='#'>Features</a>
          </li>
          <li>
            <a href='#'>Pricing</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>

        <AnimatePresence>
          {isOpen && <MobileNavbar onClose={onClose} />}
        </AnimatePresence>

        <div className='flex gap-4 items-center justify-center'>
          <motion.button
            className=' rounded-full text-sm px-6 h-fit py-2.5 bg-gradient-to-tr
        to-teal-400 from-indigo-600 font-medium 
        '
          >
            Get Started
          </motion.button>

          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </Wrapper>
    </nav>
  );
};
export default Navbar;
