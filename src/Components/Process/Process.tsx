import Wrapper from '../../UI/Wrapper';

import Avatar from './Avatar';
import Questions from './Questions';

const Process = () => {
  return (
    <section className='py-20 relative'>
      <div
        className='h-96 w-96 bg-cyan-400 rounded-full
       blur-[180px] bg-opacity-80 bottom-20 absolute right-1/2 -z-10'
      ></div>
      <div
        className='h-72 w-72 bg-indigo-500 rounded-full
       blur-[150px] absolute bottom-20 -z-10 translate-y-1/3'
      ></div>
      <Wrapper>
        <div className='flex flex-col md:flex-row gap-5 justify-around items-center'>
          <Avatar />
          <div className='flex-1 md:w-1/2 p-4'>
            <div className=' mb-10'>
              <h2 className='text-5xl text-white font-medium mb-4'>
                Simplified Process
                <span className='block mt-2'>Outstanding Results.</span>
              </h2>
              <p className='text-slate-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                consequatur molestiae recusandae earum vel sit soluta
                perferendis cum, quaerat nulla minima nemo iusto deserunt
                consectetur repellat minus
              </p>
            </div>

            <Questions />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default Process;
