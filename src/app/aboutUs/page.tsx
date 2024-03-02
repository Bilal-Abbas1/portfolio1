import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="bg-opacity-5 bg-cover bg-center" style={{ backgroundImage: 'url("/glass.jpg")' }}>
  { <section className="text-gray-900 body-font drop-shadow-2xl">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded-full" alt="hero" src="/passport.jpg" /> 
    </div>
    <div className=" shadow-transparent lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Muhammad Bilal Abbas
        <br className="hidden lg:inline-block"/>Full Stack Developer
      </h1>
      <p className="mb-8 leading-relaxed text-white text-xl font-sans font-medium">Hello, and welcome to my website. My name is Muhammad Bilal Abbas and I am a passionate programmer with 1 year of experience in programming. I love creating software solutions that are secure, functional, and user-friendly. I have worked on various projects using Next js with typescript and I am always eager to learn new things and improve my craft. You can check them out in my portfolio section. I also enjoy writing about programming topics and sharing my knowledge with others. You can read some of my articles in my blog section. If you are interested in working with me or hiring me for your project, please feel free to contact me. I would love to hear from you and discuss how we can collaborate. Thank you for visiting my website and have a great day.
</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section> }
</div>
  )

}

export default page
