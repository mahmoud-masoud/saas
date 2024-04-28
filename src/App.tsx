import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Components/Layout/Root';
import Home from './Components/Layout/Home';
import ContactPage from './Components/Contact/Contact';

const App = () => {
  const router = createBrowserRouter([
    { path: '*', element: <div>page not found</div> },
    {
      path: '/',
      element: <Root />,

      children: [
        { index: true, element: <Home /> },
        { path: '/contact', element: <ContactPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
