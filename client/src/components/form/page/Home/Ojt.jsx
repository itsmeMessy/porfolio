import React from 'react';
import { motion } from 'framer-motion';
import Photo from './Photo';


export default function Ojt() {
  return (
    <div className='ojt h-screen scroll-smooth'>
    {[...Array(8)].map((_, i)=><br key = {i} />)}
    <motion.h2
        className='view flex items-center justify-center text-4xl text-white font-body font-bold'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      Internship
      </motion.h2>
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative w-1/4 h-2 bg-zinc-500 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 w-full"></div>
        </div>
      </motion.div>
      
      <Photo />
    </div>
  );
}
