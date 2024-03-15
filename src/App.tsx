import About from './Components/About/About';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import GettingStarted from './Components/GettingStarted/GettingStarted';
import Header from './Components/Header/Header';
import Logos from './Components/Logos/Logos';
import Pricing from './Components/Pricing/Pricing';
import Process from './Components/Process/Process';

const App = () => {
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
export default App;
