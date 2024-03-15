import Accordion from './Accordion';

const questions = [
  {
    title: 'What is SaaS management?',
    description:
      'SaaS management refers to the process of overseeing and controlling the usage, performance, and security of software as a service (SaaS) applications within an organization.',
  },
  {
    title: 'How does a SaaS management tool help businesses?',
    description:
      'A SaaS management tool helps businesses streamline the management of their SaaS applications by providing insights into usage, costs, security vulnerabilities, and compliance.',
  },
  {
    title: 'What features should I look for in a SaaS management tool?',
    description:
      'Key features to consider in a SaaS management tool include application discovery, usage analytics, license optimization, security monitoring, and integration capabilities with other IT systems.',
  },
  {
    title: 'What are the benefits of using a SaaS management platform?',
    description:
      'Using a SaaS management platform can lead to cost savings through optimized license usage, improved security posture through better visibility and control, and enhanced productivity by streamlining application access and usage.',
  },
];

const Questions = () => {
  return (
    <div className='w-full'>
      {questions.map((item, idx) => (
        <Accordion
          idx={idx}
          key={idx}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
export default Questions;
