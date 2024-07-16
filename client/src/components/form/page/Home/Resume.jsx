import React from 'react';
import { motion } from 'framer-motion';
import meme from '../../../utils/img/myface.jpeg';

export default function Resume() {
  return (
    <div className='h-screen'>
      <motion.h2
        className='aboutme flex items-center justify-center text-4xl text-white font-body font-bold'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
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
      <motion.div
        className="bg-gray-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <motion.div
              className="col-span-4 sm:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="bg-[#243756] shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img alt="logo" src={meme} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                  <h1 className="text-xl font-bold text-white font-body">John Mikko Mejia</h1>
                  <p className=" text-white">Backend Developer</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="/Mejia, John Mikko I Resume.pdf"
                      download
                      className="text-white bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col text-white">
                  <span className="text-white uppercase font-bold tracking-wider mb-2">Skills</span>
                  <ul>
                    <li className="mb-2">JavaScript</li>
                    <li className="mb-2">React</li>
                    <li className="mb-2">Node.js</li>
                    <li className="mb-2">HTML/CSS</li>
                    <li className="mb-2">Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-span-4 sm:col-span-9 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <div className="bg-[#243756] shadow rounded-lg p-6 h-full">
                <p className="text-white text-base font-body">
                  I am currently attending the Polytechnic University of the Philippines Lopez Campus, pursuing a Bachelor of Science in Information Technology (BSIT). I started as a ladderized student, having completed a diploma program before passing the entrance examination to advance to the bachelor’s degree program. This pathway has allowed me to build on my foundational knowledge and skills, preparing me for a more in-depth and comprehensive education in IT.
                </p>
                <br />
                <p className='text-white text-base font-body'>
                  I used to be an intern at a networking company, where I gained practical knowledge in managing various networking devices such as routers, switches, hubs, and access points. During my internship, I also handled computer-related issues, including booting systems, changing operating systems, defragmenting drives, and resolving various ticket problems encountered by employees. This experience provided me with a strong foundation in both networking and troubleshooting technical issues.
                </p>
                <br />
                <p className='text-white text-base font-body'>
                  Now that I am still studying, I am also learning the fundamentals of React.js, Express.js, Tailwind CSS, and JavaScript. This additional knowledge is helping me prepare for future job opportunities, providing me with a better understanding and a consistent path to becoming a backend developer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
