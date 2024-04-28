import Wrapper from '../../UI/Wrapper';
import Overview from './Overview';
import HeroIntro from './HeroIntro';

const Header = () => {
  return (
    <header className='bg-hero bg-no-repeat bg-cover pb-20 px-4'>
      <Wrapper>
        <HeroIntro />
        <Overview />
      </Wrapper>
    </header>
  );
};
export default Header;
