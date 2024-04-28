import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  onClose: () => void;
  success: boolean;
};

const Toast = ({ success, onClose }: Props) => {
  return (
    <AnimatePresence>
      {success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'tween',
            duration: 0.2,
            ease: 'easeInOut',
          }}
          className='bg-emerald-500 px-6 py-3 font-medium text-white 
    shadow-lg border-emerald-600 rounded w-fit
   absolute right-1/2 translate-x-1/2 -translate-y-full flex 
   justify-center items-center gap-2 text-nowrap'
        >
          <button onClick={onClose} className='text-3xl'>
            &times;
          </button>
          <span>your message was sent</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Toast;
