import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className=' bg-gradient-to-r from-yellow-300 to-green-300 shadow-xl'>
        <header className="  border-4 border-t-green-700 border-b-yellow-700 border-l-black border-r-black mx-28   rounded-full bg-gradient-to-r from-yellow-300 to-green-300 shadow-xl  text-black font-medium py-4 backdrop-filter backdrop-blur-lg bg-opacity-60">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-gray-300">Home</a></li>
                    <li><a href="/aboutUs" className="hover:text-gray-300">About Us</a></li>
                    <li><a href="/aboutUs/professionalSkills/" className="hover:text-gray-300">Professional Skills</a></li>
                    <li><a href="/aboutUs/professionalSkills/experience/" className="hover:text-gray-300">Experience</a></li>
                    <li><a href="/aboutUs/professionalSkills/experience/achievements/" className="hover:text-gray-300">Achievements</a></li>
                    <li><a href="/aboutUs/professionalSkills/experience/achievements/professionalEngagement/" className="hover:text-gray-300">Professional Engagement</a></li>
                    <li><a href="/aboutUs/professionalSkills/experience/achievements/professionalEngagement/contactUs/" className="hover:text-gray-300">Contact Us</a></li>
                </ul>
            </nav>
        </header>
        </div>
    );
}

export default Navbar;
