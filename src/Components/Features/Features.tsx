import Wrapper from '../../UI/Wrapper';
import Cards from '../Features/Cards';
const Features = () => {
  return (
    <section className='py-24 px-4 relative'>
      <div
        className='h-80 w-80 bg-cyan-400 rounded-full
       blur-[150px] bg-opacity-70 absolute right-1/4 -z-10'
      ></div>
      <div
        className='h-72 w-72 bg-indigo-500 rounded-full
       blur-[120px] top-20 absolute right-10 -z-10 translate-y-1/3'
      ></div>
      <Wrapper className='overflow-hidden'>
        <div className='max-w-2xl'>
          <h2 className='text-5xl text-white font-medium mb-4'>
            New Platform Features
          </h2>
          <p className='text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nesciunt veritatis nisi exercitationem eius molestias magni, sled
          </p>
        </div>
        <Cards />
      </Wrapper>
    </section>
  );
};
export default Features;
