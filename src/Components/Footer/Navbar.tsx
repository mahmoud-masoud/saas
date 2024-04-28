import Logo from '../../UI/Logo';
import { Link } from 'react-router-dom';

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
  {
    path: 'contact',
    name: 'Contact',
  },
];

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center flex-col py-20'>
      <div className='flex justify-center items-center flex-col mb-12'>
        <Logo />
        <h3 className='mt-2 text-xl font-medium'>Flexi SaaS</h3>
      </div>
      <ul className='flex gap-12 text-slate-300'>
        {links.map((link, i) => {
          const contactLink = i === links.length - 1;
          return (
            <li key={i} className='hover:text-white duration-150'>
              {contactLink ? (
                <Link to={link.path}>{link.name}</Link>
              ) : (
                <a href={link.path}>{link.name}</a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
