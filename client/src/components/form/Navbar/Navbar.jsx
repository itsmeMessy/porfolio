import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import git from '../../utils/img/github.png';
import em from '../../utils/img/gmail.png';
import fac from '../../utils/img/face.png';
import logo from '../../utils/img/logo2.png';

export default function Navbar() {
    const handleEmailClick = () => {
        const email = 'janmicko.official@gmail.com';
        const subject = 'Subject of the email';
        const body = '';
        
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.open(gmailLink, '_blank');
    };

    return (
        <> 
            <div className="flex justify-between items-center text-white font-semibold text-xl pt-6 font-body">
                <div className='flex ml-36'> 
                    <img src={logo} alt="logo" style={{ width: '70px', height: '70px' }} />
                    <span className='mt-5'>Jan-Micko</span>
                </div>
                <nav className="flex-grow">
                    <ul className="flex justify-center ml-10 space-x-10">
                        <li>
                            <NavLink
                                exact={true}
                                to="/"
                                id='nav'
                                className={({ isActive }) => (isActive ? 'text-slate-400' : 'hover:opacity-80')}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/framework"
                                className={({ isActive }) => (isActive ? 'text-slate-400' : 'hover:opacity-80')}
                            >
                                Framework
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => (isActive ? 'text-slate-400' : 'hover:opacity-80')}
                            >
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="flex">
                    <ul className="flex items-center space-x-4 mr-24">
                        <li>
                            <Link to="https://github.com/itsmeMessy" className='opacity:'>
                                <img src={git} alt="github" style={{ width: '40px', height: '40px' }} />
                            </Link>
                        </li>
                        <li>
                            <span onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                                <img src={em} alt="email" style={{ width: '40px', height: '40px' }} />
                            </span>
                        </li>
                        <li>
                            <Link to="https://www.facebook.com/profile.php?id=100086062877237">
                                <img src={fac} alt="facebook" style={{ width: '30px', height: '30px' }} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
