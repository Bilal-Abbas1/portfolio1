import Image from 'next/image'
import React from 'react'

const page = () => {
  return (

    <div className="bg-opacity-5 bg-cover bg-center" style={{ backgroundImage: 'url("/2.jpg")' }}>
     {<section className=" bg-transparent bg-green-500 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 tracking-widest">Softweres which i can use</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">TypeScript, React, Next.js, and Tailwind CSS are a powerful combination for building professional and modern web applications.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img src="/next.jpg" alt="" height={200} width={200}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Next js 14</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">Next.js tends to focus on optimizing performance, including faster build times and improved runtime efficiency. This might involve enhancements to the build process, better tree-shaking, or other optimizations.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
               
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img src="/typescript.png" alt="" height={200} width={200}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Typescript</h2>
            <h3 className="text-gray-500 mb-3">  </h3>
            <p className="mb-4">
              TypeScript is a superset of JavaScript that adds static typing to the language. It allows developers to write code that is more predictable and less error-prone by catching type-related errors during development. Here are some key aspects and features of TypeScript</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img src="/React.png" alt="" height={200} width={200}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">React</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">
            React is a popular open-source JavaScript library for building user interfaces, primarily for single-page applications where the user interface needs to be dynamic and interactive. Developed and maintained by Facebook, React has gained widespread adoption in the web development community due to its simplicity, flexibility, and performance. Here are some key aspects and features of Reac.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
              
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img src="/Tailwind.png" alt="" height={200} width={200}/>
               <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Tailwind CSS</h2>
            <h3 className="text-gray-500 mb-3">Designer</h3>
            <p className="mb-4">Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes to build designs directly in your markup. It's different from traditional CSS frameworks in that it doesn't come with predefined components or styles; instead, it offers a large set of utility classes that you can use to style your HTML elements.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
               
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>}
</div>
  )
}

export default page
