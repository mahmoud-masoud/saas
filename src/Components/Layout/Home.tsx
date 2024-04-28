import About from '../About/About';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import GettingStarted from '../GettingStarted/GettingStarted';
import Header from '../Header/Header';
import Logos from '../Logos/Logos';
import Pricing from '../Pricing/Pricing';
import Process from '../Process/Process';

const Home = () => {
  return (
    <>
      <Header />
      <Logos />
      <main>
        <Features />
        <Process />
        <Pricing />
        <About />
        <GettingStarted />
        <Footer />
      </main>
    </>
  );
};
export default Home;
