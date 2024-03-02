import Image from 'next/image'
import React from 'react'

const page = () => {
  return (

    <div className="bg-opacity-5 bg-cover bg-center" style={{ backgroundImage: 'url("/3.jpg")' }}>
  {  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">1 Year Experiencce</h1>
        <div className="h-1 w-72 bg-indigo-500 rounded"></div>
      </div>
      <p className=" text-white lg:w-1/2 font-sans font-medium w-full leading-relaxed">
Having one year of experience in React, TypeScript, Next.js, and TypeScript is a significant milestone. During this time, you likely gained valuable skills and insights into web development using these technologies.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
  className="h-40 rounded w-full object-cover object-center mb-6"
  src="/Next.jpg"
  alt="content"
  height={100}
  width={100}
/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Next Js 14</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">3 Months Experience </h2>
          <p className="leading-relaxed text-base">That's great! Having 3 months of experience with Next.js suggests that you've been working with a React-based framework for building web applications. Next.js is known for its features like server-side rendering, automatic code splitting, and easy deployment.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
<img
  className="h-40 rounded w-full object-cover object-center mb-6"
  src="/React.png"
  alt="content"
  height={100}
  width={100}
/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">React</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">3 Months Experience</h2>
          <p className="leading-relaxed text-base">Having three months of experience with React is a significant milestone, and it suggests that you've been working on building user interfaces using this popular JavaScript library.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
  className="h-40 rounded w-full object-cover object-center mb-6"
  src="/Tailwind.png"
  alt="content"
  height={100}
  width={100}
/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Tailwind css</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">3 Months Experience</h2>
          <p className="leading-relaxed text-base">experience with Tailwind CSS is a notable accomplishment, and it indicates that you've been working with this utility-first CSS framework to style and design your web projects.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
         <img
  className="h-40 rounded w-full object-cover object-center mb-6"
  src="/typescript.png"
  alt="content"
  height={100}
  width={100}
/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Typescript</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">3 Months Experience</h2>
          <p className="leading-relaxed text-base"> three months of experience with TypeScript! Working with TypeScript involves bringing static typing to your JavaScript projects, providing enhanced tooling, and helping catch potential errors early in the development process.</p>
        </div>
      </div>
    </div>
  </div>

</section>  }
</div>
  )
}

export default page
