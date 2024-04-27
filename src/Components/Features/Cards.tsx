import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Card from './Card';
import {
  CalendarClock,
  FileText,
  FolderKanban,
  GanttChart,
  HeartHandshake,
} from 'lucide-react';

const cardsContainerVariants = {
  initial: {
    translateX: 800,
  },
  animate: {
    translateX: 0,
    transition: {
      duration: 1,
    },
  },
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: '-150px',
  });

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(
        containerRef?.current?.scrollWidth -
          containerRef?.current?.offsetWidth -
          800
      );
    }
  }, []);

  return (
    <section className='py-14'>
      <motion.div ref={containerRef} className='overflow-hidden'>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          variants={cardsContainerVariants}
          initial='initial'
          animate={isInView ? 'animate' : 'initial'}
          className='flex gap-10'
        >
          {cards.map((item, i) => (
            <Card
              key={i}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cards;

const cards = [
  {
    icon: <FolderKanban size={36} />,
    title: 'Task Management',
    content:
      'Effortlessly create, assign, and prioritize tasks with intuitive drag-and-drop functionality. Track task progress in real-time and ensure deadlines are met with customizable alerts and notifications.',
  },
  {
    icon: <HeartHandshake size={36} />,
    title: 'Team Collaboration',
    content:
      'Facilitate seamless collaboration among team members with centralized communication channels. Share files, exchange feedback, and brainstorm ideas effortlessly within the platform.',
  },
  {
    icon: <GanttChart size={36} />,
    title: 'Gantt Chart',
    content:
      'Visualize project timelines and dependencies with interactive Gantt charts. Identify bottlenecks, allocate resources effectively, and keep stakeholders informed about project progress at a glance.',
  },
  {
    icon: <CalendarClock size={36} />,
    title: 'Time Tracking',
    content:
      'Monitor time spent on tasks and projects with precision. Gain insights into team productivity, identify areas for improvement, and optimize resource allocation for better project outcomes.',
  },
  {
    icon: <FileText size={36} />,
    title: 'Document Management',
    content:
      'Centralize project-related documents and files for easy access and sharing. Ensure version control, streamline document approval processes, and maintain a secure repository for sensitive information.',
  },
];
