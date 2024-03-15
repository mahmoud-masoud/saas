import Wrapper from '../../UI/Wrapper';

const Logos = () => {
  return (
    <section>
      <Wrapper
        className='overflow-x-hidden whitespace-nowrap 
      flex py-4 relative border-y border-slate-500'
      >
        <div className='flex gap-10 animate- shrink-0 px-10 animate-infinite'>
          {Array(9)
            .fill(null)
            .map((_, idx) => {
              return (
                <Logo
                  src={`public/Images/Logos/logo-${idx + 1}.svg`}
                  key={idx}
                />
              );
            })}
        </div>
        <div className='flex gap-10 animate- shrink-0 px-10 animate-infinite'>
          {Array(9)
            .fill(null)
            .map((_, idx) => {
              return (
                <Logo
                  src={`public/Images/Logos/logo-${idx + 1}.svg`}
                  key={idx}
                />
              );
            })}
        </div>
      </Wrapper>
    </section>
  );
};
export default Logos;

const Logo = ({ src }: { src: string }) => {
  return (
    <img src={src} alt='company logo' className=' grayscale invert w-28' />
  );
};
