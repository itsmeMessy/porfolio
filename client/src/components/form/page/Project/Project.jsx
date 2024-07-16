import React from 'react'
import ehalalan from '../../../utils/img/ehahaha.png'
import git from '../../../utils/img/github.png'

export default function Project() {
  return (
    <>
     <div className="max-w-md bg-[#243756]   mx-auto rounded-lg overflow-hidden shadow-lg bg-card text-card-foreground p-6 space-y-6">
  <img className="w-full h-48 rouded-lg object-cover mb-4" src={ehalalan} alt="Shoes Preview" />
  <div className="text-center">
    <h2 className="text-2xl font-bold text-primary-foreground text-white font-body">Ehalalan</h2>
    <p className="text-white font-mono mt-4">"The voting system uses React for a responsive frontend, allowing users to cast votes easily. Express.js handles the backend server and API endpoints, while MySQL stores user data and vote counts securely. This integration ensures an efficient, real-time voting process with a scalable architecture for various scenarios."</p>
  </div>
  <div className="flex justify-center space-x-4 mt-6">
  <a href="https://github.com/itsmeMessy/ehalalan" target="_blank" rel="noopener noreferrer">
    <button className="border bg-[#0F1624] text-primary-foreground hover:bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 py-2 px-4 rounded-lg text-white">
      <img aria-hidden="true" alt="source-code" src={git} className="inline-block w-4 h-4 mr-2" /> Github
    </button>
  </a>
</div>

</div>
    </>
  )
}
