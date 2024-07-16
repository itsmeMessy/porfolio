import React from 'react';
import { motion } from 'framer-motion';
import Resume from './Resume';
import me from '../../../utils/img/meme.jpg';
import Ojt from './Ojt';
import Framework from '../Framework/Framework';



export default function Home() {
  return (
    <div className='h-screen'>
      <div className="py-12 mt-20 px-4 lg:px-8 text-white mb-24 scroll-smooth">
        <motion.div
          className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={me}
              alt="Portrait of Developer"
              className="w-80 h-80 object-cover rounded-full bg-accent p-2"
            />
          </motion.div>
          <motion.div
            className="w-full lg:w-2/3 p-8 bg-background"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-[#94a3b8] mb-2 text-xl">Hello there, I am</p>
            <h2 className="text-5xl font-bold font-body mb-6">
              John Mikko Insik Mejia
              <br />
              <span className='text-4xl'>Aspiring Backend Developer</span>
            </h2>
            <p className="mb-6 text-xl text-[#94a3b8]">
              <span className="font-bold font-body">❝</span>"An aspiring backend developer focuses on building server-side logic and databases that power web applications, ensuring they function efficiently and securely. Specializing in Node.js, MySQL, and Express.js, with a fundamental knowledge in React.js for building web solutions."
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col lg:items-start w-full lg:w-1/3 lg:border-l border-[var(--border)] p-8 bg-muted"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="text-center lg:text-left mb-4">
              <h4 className="text-2xl font-bold">JavaScript</h4>
              <p className="text-muted-foreground">Language</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Resume />
      <div className='scroll-smooth mb-80'>
      <Ojt />
      </div>
      <div className='scroll-smooth'>
      <Framework />
      </div>
    </div>
  );
}
