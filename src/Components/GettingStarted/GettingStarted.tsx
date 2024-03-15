import Wrapper from '../../UI/Wrapper';

const GettingStarted = () => {
  return (
    <section className='py-20 md:py-40 px-4 text-white relative'>
      <div
        className='h-[500px] w-[500px] bg-cyan-400 rounded-full
       blur-[150px] -translate-y-1/3 bg-opacity-25 absolute right-1/2 -z-10'
      ></div>
      <div
        className='h-80 w-80 bg-indigo-500 rounded-full
       blur-[150px] -translate-y-1/2 top-20 bg-opacity-70 absolute right-10 -z-10'
      ></div>
      <Wrapper className='max-w-6xl'>
        <div className='flex gap-10 justify-between flex-col md:flex-row'>
          <h2 className='text-5xl text-white font-medium mb-4'>
            Get Started With SaaS Solution.
          </h2>
          <div className='max-w-xl'>
            <p className='text-slate-300 mb-6 max-w-xl'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus suscipit in ad magnam unde Repellendus suscipit in ad
              magnam unde
            </p>
            <button
              className='px-4 py-2 rounded-full text-white bg-gradient-to-tr
           from-indigo-600 to-teal-600 font-medium'
            >
              Get Started
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default GettingStarted;
