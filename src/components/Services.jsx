// import React from "react";

// function Services() {
//   return (
//     <div id="services" className="py-20 text-gray-400">
//       <div className="container mx-auto">
//         <h1 className="sub-title text-5xl font-bold text-white">My Services</h1>
//         <div className="services-list grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
//           <div className="bg-gray-800 p-10 rounded-lg transition-all transform hover:bg-pink-500 hover:translate-y-[-10px]">
//             <i className="fa-solid fa-code text-4xl mb-6"></i>
//             <h2 className="text-2xl font-semibold mb-4">frontend Developer</h2>
//             <p className="">Intermediate</p>
//             <p>
//               As a passionate and detail-oriented Frontend Developer, I
//               specialize in crafting visually stunning and highly responsive
//               websites....
//             </p>
//             <a href="#" className="text-white mt-4 inline-block">
//               Learn more
//             </a>
//           </div>
//           <div className="bg-gray-800 p-10 rounded-lg transition-all transform hover:bg-pink-500 hover:translate-y-[-10px]">
//             <i className="fa-solid fa-crop text-4xl mb-6"></i>
//             <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
//             <p className="">beginner</p>
//             <p>
//               Crafting intuitive and visually appealing user interfaces that
//               enhance the user experience, ensuring a seamless journey from
//               start to finish....
//             </p>
//             <a href="#" className="text-white mt-4 inline-block">
//               Learn more
//             </a>
//           </div>
//           <div className="bg-gray-800 p-10 rounded-lg transition-all transform hover:bg-pink-500 hover:translate-y-[-10px]">
//             <i className="fa-brands fa-app-store text-4xl mb-6"></i>
//             <h2 className="text-2xl font-semibold mb-4">Backend Developer</h2>
//             <p className="">Beginner</p>
//             <p>
//               Building robust and scalable server-side applications that power
//               seamless user experiences and ensure system reliability....
//             </p>
//             <a href="#" className="text-white mt-4 inline-block">
//               Learn more
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;


import React from "react";

const Service = () => {
  return (
    <section className="mt-20 experience-section text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Explore My <span className="text-blue-500">Experience</span>
      </h1>
      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-8">
        {" "}
        <div className="p-6 border-x-4 border-y-4 border-black  ml-20  px-20 bg-white rounded-[30px] shadow-md">
          {" "}
          <h2 className="text-2xl  font-semibold text-gray-800 mb-4">
            Frontend Developer
          </h2>{" "}
          <ul className="py-10  font-semibold text-[20px] space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  className="h-8 rounded-full"
                  src="src/assets/checkmark.png"
                  alt=""
                />
                        <span className="text-black">HTML</span>       {" "}
              </div>
              <span className=" text-green-600">Experienced</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  className="h-8 rounded-full"
                  src="src/assets/checkmark.png"
                  alt=""
                />
                        <span className="text-black">CSS</span>       {" "}
              </div>
              <span className=" text-green-600">Experienced</span>
            </li>
                   
            <li className="flex items-center justify-between">
                   {" "}
              <div className="flex gap-2">
                <img
                  className="h-8 rounded-full"
                  src="src/assets/checkmark.png"
                  alt=""
                />
                        <span className="text-black">JAVASCRIPT</span>       {" "}
              </div>
              <span className=" text-yellow-500">Intermediate</span>       
            </li>
                   
            <li className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  className="h-8 rounded-full"
                  src="src/assets/checkmark.png"
                  alt=""
                />
                        <span className="text-black">React.js</span>       {" "}
              </div>
              <span className=" text-green-600">Experienced</span>       
            </li>
                   
            <li className="flex items-center justify-between">
                 {" "}
              <div className="flex gap-2">
                <img
                  className="h-8 rounded-full"
                  src="src/assets/checkmark.png"
                  alt=""
                />
                        <span className="text-black">Tailwind CSS</span>       {" "}
              </div>
              <span className=" text-yellow-500">Intermediate</span>       
            </li>
                 {" "}
          </ul>
             {" "}
        </div>
           {" "}
        <div className="p-6 border-x-4 border-y-4 border-black  mr-20  px-20 bg-white rounded-[30px] shadow-md">
               {" "}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Tools & Frameworks
          </h2>
               {" "}
          <ul className="py-10 text-[20px] font-semibold space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  className="h-8 rounded-full"
                  src="src/assets/checkmark.png"
                  alt=""
                />
                <span className="text-black">Git & GitHub</span>{" "}
              </div>
              <span className=" text-yellow-500">Intermediate</span>       
            </li>
                   
            <li className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  className="h-8 rounded-full"
                  src="src/assets/checkmark.png"
                  alt=""
                />
                        <span className="text-black">Material-UI</span>       {" "}
              </div>
              <span className=" text-yellow-500">Intermediate</span>       
            </li>
                   
            <li className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  className="h-8 rounded-full"
                  src="src/assets/checkmark.png"
                  alt=""
                />
                        <span className="text-black">Express</span>       {" "}
              </div>
              <span className=" text-yellow-500">Intermediate</span>       
            </li>
                   
            <li className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  className="h-8 rounded-full"
                  src="src/assets/checkmark.png"
                  alt=""
                />
                        <span className="text-black">Vs Code</span>       {" "}
              </div>
              <span className=" text-green-600">Experienced</span>       
            </li>
                   
            <li className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  className="h-8 rounded-full"
                  src="src/assets/checkmark.png"
                  alt=""
                />
                        <span className="text-black">Node.js</span>       {" "}
              </div>
              <span className=" text-yellow-500">Intermediate</span>       
            </li>
                 {" "}
          </ul>
             {" "}
        </div>
           
      </div>
       {" "}
    </section>
  );
};

export default Service;

