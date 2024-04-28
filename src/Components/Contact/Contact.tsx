import LoadingSpinner from '@/UI/LoadingSpinner';
import Toast from '@/UI/Toast';
import Wrapper from '@/UI/Wrapper';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className='py-24 relative p-4'>
      <div className='container mx-auto mb-4 md:mb-6'>
        <button
          onClick={() => navigate(-1)}
          className='flex items-center gap-2 p-2 hover:bg-white/10 duration-150'
        >
          <ArrowLeft size={28} />
          <span className='text-lg'>Back</span>
        </button>
      </div>
      <Wrapper className='bg-gradient-to-tr from-indigo-900 to-cyan-900 overflow-hidden rounded-xl'>
        <div className='flex bg-black/50 backdrop-blur-3xl p-4 md:p-8 '>
          <ContactForm />
          <ContactInfo />
        </div>
      </Wrapper>
    </section>
  );
};
export default Contact;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<FormValues> = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
    }, 2500);
  };

  const onClose = () => {
    setIsSuccess(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSuccess(false);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [success]);

  return (
    <div className='w-full md:w-1/2'>
      <span className='text-indigo-300 font-medium inline-block mb-4'>
        Contact Us
      </span>
      <h2 className='text-3xl md:text-4xl font-bold mb-8'>Reach Out To Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-6'>
          <div className={`flex flex-col gap-4 border-slate-400 `}>
            <label
              htmlFor='name'
              className={`${errors?.name && 'text-red-500'}`}
            >
              Name
            </label>
            <input
              {...register('name', { required: true, min: 3 })}
              type='text'
              name='name'
              placeholder='name'
              className={`border border-indigo-300 py-2 px-4 bg-transparent rounded ${
                errors?.name && 'border-red-500'
              }`}
            />
            {errors?.name && (
              <div className='text-red-500'>name is required</div>
            )}
          </div>
          <div className={`flex flex-col gap-4 border-slate-400`}>
            <label
              htmlFor='email'
              className={`${errors?.email && 'text-red-500'}`}
            >
              Email
            </label>
            <input
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+\.\S{2,}$/i,
              })}
              type='text'
              name='email'
              placeholder='email'
              className={`border border-indigo-300 py-2 px-4 bg-transparent rounded ${
                errors?.email && 'border-red-500'
              }`}
            />
            {errors?.email && (
              <div className='text-red-500'>email is required</div>
            )}
          </div>
          <div className={`flex flex-col gap-4 border-green-400`}>
            <label
              htmlFor='name'
              className={`${errors?.message && 'text-red-500'}`}
            >
              Message
            </label>
            <textarea
              {...register('message', { required: true, min: 3 })}
              name='message'
              placeholder='your message'
              className={`border border-indigo-300 py-2 px-4 bg-transparent min-h-40 rounded ${
                errors?.message && 'border-red-500'
              }`}
            />
            {errors?.message && (
              <div className='text-red-500'>Message is required</div>
            )}
          </div>

          <button className='bg-gradient-to-tr from-indigo-500 to-cyan-500 py-3 px-6 text-lg font-bold rounded-md transition-all duration-300 hover:bg-gradient-to-br'>
            {isSubmitting ? <LoadingSpinner /> : 'Send The Message'}
          </button>
        </div>
      </form>
      <Toast success={success} onClose={onClose} />
    </div>
  );
};
const ContactInfo = () => {
  return (
    <div className='w-1/2 flex justify-center items-center max-md:hidden'>
      <div>
        <img src='/Images/illustration/message.svg' alt='' />
      </div>
    </div>
  );
};
