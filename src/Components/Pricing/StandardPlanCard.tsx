import { useState } from 'react';
import CheckIcon from '../../UI/CheckIcon';
import UsersIcon from '../../UI/UsersIcon';
import { motion } from 'framer-motion';

const StandardPlanCard = () => {
  const [plan, setPlan] = useState('annually');

  return (
    <div
      className='flex-1 whitespace-nowrap p-6 pt-14 bg-gradient-to-tr from-indigo-600/30 to-teal-600/30
     rounded-2xl relative border border-transparent
     after:absolute after:-z-10 after:inset-0 after:rounded-2xl after:bg-black
     bg-clip-padding before:absolute before:-z-10 before:inset-0 before:rounded-2xl
      before:m-[-1px] before:bg-gradient-to-b before:from-indigo-400 before:to-slate-700
      
      '
    >
      <div className=' flex flex-col justify-center items-center gap-2'>
        <span className='font-medium text-slate-300 text-xl'>Standard</span>
        {plan === 'annually' ? (
          <div className='flex justify-center items-center gap-2'>
            <span className='text-white text-2xl font-medium'>
              $8 per user/month
            </span>
            <span className='text-sm px-1 bg-indigo-500 rounded w-fit h-fit'>
              -20%
            </span>
          </div>
        ) : (
          <span className='text-white text-2xl font-medium'>
            $10 per user/month
          </span>
        )}
        <div className='flex gap-1 text-sm mt-4 text-slate-400'>
          <UsersIcon />
          <span>Best for 1-50 users</span>
        </div>
      </div>

      <div
        className='my-14 flex justify-between items-center
         before:h-[1px] before:w-full before:bg-slate-700
         after:h-[1px] after:w-full after:bg-slate-700'
      >
        <div
          className='relative text-center min-w-fit mx-2 px-4
         text-slate-400 text-sm rounded-full bg-slate-600/60 flex justify-between items-center gap-2'
        >
          <div className='h-6 min-w-36'></div>

          <button
            className={`z-10 absolute left-0 h-full w-1/2 text-center ${
              plan === 'monthly' ? 'text-white' : 'text-slate-400'
            }`}
            onClick={() => setPlan('monthly')}
          >
            Monthly
          </button>

          <button
            className={`z-10 absolute right-0 h-full w-1/2 text-center ${
              plan === 'annually' ? 'text-white' : 'text-slate-400'
            }`}
            onClick={() => setPlan('annually')}
          >
            Annually
          </button>

          {plan === 'annually' && (
            <motion.div
              layoutId='plan'
              className='h-[20px] w-1/2 bg-indigo-500 absolute right-0.5 top-0.5 rounded-full'
            ></motion.div>
          )}
          {plan === 'monthly' && (
            <motion.div
              layoutId='plan'
              className='h-[20px] w-1/2 bg-indigo-500 absolute left-0.5 top-0.5  rounded-full'
            ></motion.div>
          )}
        </div>
      </div>

      <div className='flex flex-col justify-between gap-12 md:min-h-72 text-sm'>
        <div className='flex flex-col gap-4'>
          <div>
            <span>Everything in free, plus…</span>
          </div>

          <div className='flex gap-2'>
            <CheckIcon className='text-emerald-300' />
            <span>Unlimited issues and file uploads</span>
          </div>
          <div className='flex gap-2'>
            <CheckIcon className='text-emerald-300' />
            <span>Guest accounts, private teams</span>
          </div>
          <div className='flex gap-2'>
            <CheckIcon className='text-emerald-300' />
            <span>Admin roles</span>
          </div>
        </div>

        <button
          className='px-4 py-2 rounded-full text-white bg-gradient-to-tr
          from-indigo-600 to-teal-600 font-medium'
        >
          Get started with Standard
        </button>
      </div>
    </div>
  );
};
export default StandardPlanCard;
