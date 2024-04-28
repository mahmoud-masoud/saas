import CheckIcon from '../../UI/CheckIcon';
import UsersIcon from '../../UI/UsersIcon';

const PlusPlanCard = () => {
  return (
    <div
      className='flex-1 whitespace-nowrap p-6 pt-14
     rounded-2xl relative border border-transparent bg-black 
     bg-clip-padding before:absolute before:-z-10 before:inset-0 before:rounded-2xl
      before:m-[-1px] before:bg-gradient-to-b
       before:from-slate-600 before:from-60% before:to-black'
    >
      <div className='flex flex-col justify-center items-center gap-2'>
        <span className='font-medium text-slate-400 text-xl'>Plus</span>
        <span className='text-white text-2xl font-medium'>
          $14 per user/month
        </span>
        <div className='flex gap-1 text-sm mt-4 text-slate-400'>
          <UsersIcon />
          <span>Best for 50+ users</span>
        </div>
      </div>
      <div
        className='my-14 flex justify-between items-center
         before:h-[1px] before:w-full before:bg-slate-800
         after:h-[1px] after:w-full after:bg-slate-800'
      >
        <div className=' relative text-center min-w-fit px-2 text-slate-400 text-sm'>
          Annual billing only
        </div>
      </div>

      <div className='flex flex-col justify-between gap-12 md:min-h-72 text-sm'>
        <div className='flex flex-col gap-4'>
          <div>
            <span>Everything in Standard, plus…</span>
          </div>

          <div className='flex gap-2'>
            <CheckIcon />
            <span>SAML / Single Sign On</span>
          </div>
          <div className='flex gap-2'>
            <CheckIcon />
            <span>Advanced authentication controls</span>
          </div>
          <div className='flex gap-2'>
            <CheckIcon />
            <span>Insights and SLAs</span>
          </div>
          <div className='flex gap-2'>
            <CheckIcon />
            <span>Priority support</span>
          </div>
        </div>

        <button
          className='px-4 py-2 rounded-full text-black font-medium
         bg-white hover:bg-indigo-100 duration-200'
        >
          Get started with Plus
        </button>
      </div>
    </div>
  );
};
export default PlusPlanCard;
