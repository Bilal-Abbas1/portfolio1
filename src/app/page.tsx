import Image from "next/image";

export default function Home() {
  return (

    <div className="bg-transparent bg-opacity-5 bg-cover bg-center" style={{ backgroundImage: 'url("/3.jpg")' }}>
   { <main className="flex bg-gradient-to-r from-yellow-300 to-green-300 min-h-screen flex-col items-center justify-between p-24">
<div>
{/* <img className=" hero-overlay bg-opacity-60" src="glass.jpg" alt="" /> */}

  <div className="bg-gradient-to-r from-purple-300 to-red-300 text-white">
    <header className="bg-blue-500 text-white text-center py-4">
        <div className="flex items-center justify-center h-96">
  <div className="text-center">
    <h1 className="text-7xl font-bold h-20">Welcome to My Portfolio</h1>
  </div>
</div>

    </header>

    <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800 shadow-lg text-white">
                <h2 className="text-xl font-bold">About Me</h2>
                <p className="mt-2">MY OBJECTIVE IS TO WORK WITH FULL SINCERITY & DEVOTION FOR THE 
ORGANIZATION, WHERE I CAN UTILIZE AND PROVE MY KNOWLEDGE, 
SKILLS, MY ACADEMIC AND WORK EXPERIENCE EFFICIENTLY AND EFFECTIVELY TO ACHIEVE GOALS AND ATTAIN CARRIER GROWTH IN THE ORGANIZATION.</p>
            </div>
            <div className="p-4 bg-gray-800 shadow-lg text-white">
                <h2 className="text-xl font-bold">Projects</h2>
                <ul className="mt-2">
                    <li>Portfolio Website</li>
                    <li>E-commerce Application</li>
                    <li>Blog Website</li>
                </ul>
            </div>
        </div>
    </div>

    <footer className="bg-blue-500 text-gray-200 text-center py-4 mt-8">
        <p>&copy; 2024 My Portfolio</p>
    </footer>
</div>
</div>
    </main>}
   </div>
  );
}
