import React from 'react'
import react from '../../../utils/img/react.png'
import ex from '../../../utils/img/exx.png'
import my from '../../../utils/img/mysql.jpeg'
export default function Framework() {
  return (
    <>
     <div class="bg-background p-6 min-h-screen">
  <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-card p-6 rounded-lg shadow-lg bg-[#243756]">
      <img class="w-16 h-12 mb-4 rounded-lg" src={ex} alt="programming-icon" />
      <h3 class="text-lg text-foreground font-semibold text-white font-body">Express JS</h3>
      <p class="text-muted-foreground text-md font-mono text-white">
      Express.js is a minimal and flexible Node.js web application framework designed to build web and mobile applications. It provides a robust set of features for web and mobile applications, such as routing, middleware integration, and template engines, which simplify the development process. Express.js is known for its simplicity, speed, and scalability, making it a popular choice for creating RESTful APIs and web applications. It allows developers to efficiently handle HTTP requests and responses, making backend development straightforward and efficient.
      </p>
      <a href="https://expressjs.com/" class="text-primary font-medium text-sm mt-4 inline-block text-white hover:underline">Documentation</a>
    </div>

    <div class="bg-card p-6 rounded-lg shadow-lg bg-[#243756]">
      <img class="w-12 h-12 mb-4" src={react} alt="designing-icon" />
      <h3 class="text-lg text-foreground font-semibold text-white font-body">React JS</h3>
      <p class="text-muted-foreground text-md  font-mono text-white">
      React.js is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, which can manage their own state, leading to efficient and dynamic web applications. React's component-based architecture and virtual DOM enable high performance and easier debugging, making it a preferred choice for modern web development.
      </p>
      <a href="https://react.dev/" class="text-primary font-medium text-sm mt-4 inline-block text-white hover:underline">Documentation</a>
    </div>

    <div class="bg-card p-6 rounded-lg shadow-lg bg-[#243756]">
      <img class="w-12 h-12 mb-4" src={my} alt="team-player-icon" />
      <h3 class="text-lg text-foreground font-semibold text-white font-body">MySQL Workbench</h3>
      <p class="text-muted-foreground text-md text-white font-mono">
      MySQL Workbench is a unified visual tool for database architects, developers, and DBAs that offers comprehensive features for MySQL database design, development, and administration. It simplifies tasks like creating and managing database schemas, writing and optimizing SQL queries, and performing server configuration and user management. With additional capabilities for data migration and performance monitoring, MySQL Workbench enhances productivity and efficiency, making it an essential tool for managing MySQL databases across various platforms.
      </p>
      <a href="https://dev.mysql.com/doc/workbench/en/" class="text-primary font-medium text-sm mt-4 inline-block text-white hover:underline">Documentation</a>
    </div>
  </div>
    </div>
    </>
  )
}
