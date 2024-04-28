import Wrapper from '../../UI/Wrapper';
import FreePlanCard from './FreePlanCard';
import PlusPlanCard from './PlusPlanCard';
import StandardPlanCard from './StandardPlanCard';

const Pricing = () => {
  return (
    <section className='py-20 px-4' id='pricing'>
      <Wrapper className='max-w-6xl'>
        <div className='max-w-xl text-center mx-auto mb-20'>
          <h2 className='text-4xl md:text-6xl text-center text-white font-medium mb-6'>
            Pricing
          </h2>
          <p className='text-slate-300 text-lg'>
            Use Flexi SaaS for free with your whole team. Upgrade to enable
            unlimited issues, enhanced security controls, and additional
            features.
          </p>
        </div>

        <div className='mt-10 flex justify-between items-center gap-12 md:gap-8 flex-wrap'>
          <FreePlanCard />
          <StandardPlanCard />
          <PlusPlanCard />
        </div>
      </Wrapper>
    </section>
  );
};
export default Pricing;
