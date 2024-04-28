import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Header/Navbar';

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};
export default Root;
