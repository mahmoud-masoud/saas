import CheckIcon from '../../UI/CheckIcon';

const FreePlanCard = () => {
  return (
    <div
      className='flex-1 whitespace-nowrap p-6 pt-14 rounded-2xl  relative border border-transparent bg-black 
      bg-clip-padding before:absolute before:-z-10 before:inset-0 before:rounded-2xl
       before:m-[-1px] before:bg-gradient-to-b
        before:from-slate-600 before:from-60% before:to-black
     '
    >
      <div className='flex flex-col justify-center items-center gap-2'>
        <span className='font-medium text-slate-300 text-xl'>Free</span>
        <span className='text-white text-2xl font-medium'>
          Free for everyone
        </span>
        <div className='mt-4'>&nbsp;</div>
      </div>
      <div
        className='my-14 flex justify-center items-center border-slate-700 w-full h-6 
      after:h-[1px] after:w-full after:bg-slate-800 after:block'
      ></div>

      <div className='flex flex-col justify-between gap-12 md:min-h-72 text-sm'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2'>
            <CheckIcon />
            <span>Unlimited members</span>
          </div>
          <div className='flex gap-2'>
            <CheckIcon />
            <span>250 issues (+unlimited archived)</span>
          </div>
          <div className='flex gap-2'>
            <CheckIcon />
            <span>Import and export</span>
          </div>
          <div className='flex gap-2'>
            <CheckIcon />
            <span>All integrations, APIs, webhooks</span>
          </div>
        </div>

        <button
          className='px-4 py-2 rounded-full 
     bg-indigo-300/15 backdrop-filter border-indigo-900/60 border w-full
      hover:bg-indigo-300/10 duration-200'
        >
          Get started with Free
        </button>
      </div>
    </div>
  );
};
export default FreePlanCard;
