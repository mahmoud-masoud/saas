import Logo from '../../UI/Logo';

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center flex-col py-20'>
      <div className='flex justify-center items-center flex-col mb-12'>
        <Logo />
        <h3 className='mt-2 text-xl font-medium'>Flexi SaaS</h3>
      </div>
      <ul className='flex gap-12 text-slate-300'>
        <li>Features</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
