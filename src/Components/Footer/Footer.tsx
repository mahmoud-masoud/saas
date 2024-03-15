import Wrapper from '../../UI/Wrapper';
import Navbar from './Navbar';

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <footer className=''>
      <Wrapper>
        <Navbar />
        <div className='h-[3px] test'></div>
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
