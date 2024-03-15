import { motion } from 'framer-motion';

const TestimonialCard = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`p-10 rounded-3xl border backdrop-filter
       border-slate-700 bg-white/10 ${className}`}
    >
      <h3 className='text-white mb-4'>lab laba sdf asdfjka</h3>
      <p className='text-slate-400'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sint hic
        tempora id perferendis ipsa iure molestias. Nam doloremque praesentium
        quaerat quisquam quas
      </p>
    </motion.div>
  );
};
export default TestimonialCard;
