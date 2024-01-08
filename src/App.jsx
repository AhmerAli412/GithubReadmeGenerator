// import React, { useState, useRef } from "react";
// import Hero from "./Components/Hero";
// import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "./Components/Footer";
// // import { Analytics } from '@vercel/analytics/react';

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [projectLink, setProjectLink] = useState("");
//   const [email, setEmail] = useState("");
//   const [mainTech, setMainTech] = useState("");
//   const [frontendTech, setFrontendTech] = useState("");
//   const [frontendFrame, setFrontendFrame] = useState("");
//   const [frontendState, setFrontendState] = useState("");
//   const [frontendUi, setFrontendUi] = useState("");
//   const [backendTech, setBackendTech] = useState("");
//   const [backendTechFrame, setBackendTechFrame] = useState("");
//   const [backendApi, setBackendApi] = useState("");
//   const [qoute, setQoute] = useState("");
//   const textareaRef = useRef(null);
//   const [blockchainTech, setBlockchainTech] = useState("");
//   const [databaseTech, setDatabaseTech] = useState("");
//   const [authenticationTech, setAuthenticationTech] = useState("");
//   const [deploymentPlatform, setDeploymentPlatform] = useState("");

//   const generateReadme = () => {
//     const readmeTemplate = `
// <h1 class="text-center text-3xl font-bold mb-4">
//   Hi there 👋, I'm ${username}
//   <br>
// </h1>

// <h3 class="text-center">${qoute}</h3>

// <p class="text-left mt-4"> <img src="https://komarev.com/ghpvc/?username=${username}&label=Profile%20views&color=0e75b6&style=flat" alt="${username}" /> </p>

// ---

// <h2 class="text-center mt-8">🚀 ${username}'s Skill Arsenal</h2>

// ### 🚀 Projects
// - **Saw my projects at**: \`${projectLink}\`

// ### 🌟 Main Technology
// - \`${mainTech}\`

// ### 🎨 Frontend Development
// - **Technologies**: \`${frontendTech}\`
// - **Frameworks**: \`${frontendFrame}\`
// - **State Management**: \`${frontendState}\`
// - **Styling & UI**: \`${frontendUi}\`

// ### 🛠 Backend Development
// - **Languages**: \`${backendTech}\`
// - **Frameworks**: \`${backendTechFrame}\`
// - **API Design**: \`${backendApi}\`

// ### 🗃 Databases
// - **NoSQL**: \`${databaseTech}\`

// ### 🛡 Authentication and Security
// - **Token-Based**: \`${authenticationTech}\`

// ### 🚀 Deployment and Hosting
// - **Platforms**: \`${deploymentPlatform}\`
// `;

//     return readmeTemplate;
//   };

//   const copyToClipboard = () => {
//     textareaRef.current.select();
//     document.execCommand("copy");
//     toast.success("README copied to clipboard!", {
//       position: toast.POSITION.TOP_CENTER,
//     });
//   };


//   return (
//     <>
//       <Hero />

//       <div>
//         <div className="relative isolate overflow-hidden bg-gray-900">
//           <svg
//             className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
//             aria-hidden="true"
//           >
//             <defs>
//               <pattern
//                 id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
//                 width={200}
//                 height={200}
//                 x="50%"
//                 y={-1}
//                 patternUnits="userSpaceOnUse"
//               >
//                 <path d="M.5 200V.5H200" fill="none" />
//               </pattern>
//             </defs>
//             <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
//               <path
//                 d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
//                 strokeWidth={0}
//               />
//             </svg>
//             <rect
//               width="100%"
//               height="100%"
//               strokeWidth={0}
//               fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
//             />
//           </svg>
//           <div
//             className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
//             aria-hidden="true"
//           >
//             <div
//               className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
//               style={{
//                 clipPath:
//                   "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
//               }}
//             />
//           </div>
//           <div className="container mx-auto max-w-4xl p-4">
//   <h1 className="text-4xl text-white font-bold mb-8">🚀 Awesome Project Generator 🚀</h1>

//   {/* Quote and Email Section */}
//   <section className="mb-8">
//     <h2 className="text-4xl text-white font-bold mb-4">📜 Project Details 📜</h2>
//     <label className="block text-white mb-2">Share your favorite quote:</label>
//     <input
//       type="text"
//       value={qoute}
//       onChange={(e) => setQoute(e.target.value)}
//       className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//       placeholder="e.g., 'Code is like humor. When you have to explain it, it’s bad.' 😄"
//     />

//     <label className="block text-white mb-2">Email (for unicorns to contact you):</label>
//     <input
//       type="text"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//       placeholder="📧 Enter your magical email here"
//     />
//   </section>

//   {/* GitHub and Backend Section */}
//   <section className="mb-8">
//     <h2 className="text-4xl text-white font-bold mb-4">🚀 Backend Details 🚀</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//       <div>
//         <label className="block text-white mb-2">GitHub Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//           placeholder="👤 Your GitHub alias"
//         />

//         <label className="block text-white mb-2">Backend Technologies (Separated with '|' ):</label>
//         <input
//           type="text"
//           value={backendTech}
//           onChange={(e) => setBackendTech(e.target.value)}
//           className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//           placeholder="💻 Backend technologies you wield"
//         />
//       </div>

//       <div>
//         <label className="block text-white mb-2">Backend Framework (Separated with '|' ):</label>
//         <input
//           type="text"
//           value={backendTechFrame}
//           onChange={(e) => setBackendTechFrame(e.target.value)}
//           className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//           placeholder="🛠️ The mighty framework supporting your backend"
//         />

//         <label className="block text-white mb-2">Backend APIs (Separated with '|' ):</label>
//         <input
//           type="text"
//           value={backendApi}
//           onChange={(e) => setBackendApi(e.target.value)}
//           className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//           placeholder="🔗 Any magical APIs you've conjured?"
//         />
//       </div>
//     </div>
//   </section>

//   {/* Project and Frontend Section */}
//   <section className="mb-8">
//     <h2 className="text-4xl text-white  font-bold mb-4">🎨 Frontend Details 🎨</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//       <div>
//         <label className="block text-white mb-2">Project Link:</label>
//         <input
//           type="text"
//           value={projectLink}
//           onChange={(e) => setProjectLink(e.target.value)}
//           className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//           placeholder="🔗 Your project's portal in the digital realm"
//         />

//         <label className="block text-white mb-2">Main Technology:</label>
//         <input
//           type="text"
//           value={mainTech}
//           onChange={(e) => setMainTech(e.target.value)}
//           className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//           placeholder="🚀 The powerhouse technology driving your project"
//         />

// <label className="block text-white mb-2">Frontend Framework (Separated with '|' ):</label>
//         <input
//           type="text"
//           value={frontendFrame}
//           onChange={(e) => setFrontendFrame(e.target.value)}
//           className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//           placeholder="🖼️ The artistic framework crafting your frontend"
//         />
//       </div>

//       <div>
//         <label className="block text-white mb-2">Frontend Technologies (Separated with '|' ):</label>
//         <input
//           type="text"
//           value={frontendTech}
//           onChange={(e) => setFrontendTech(e.target.value)}
//           className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//           placeholder="🎨 Frontend technologies making your project beautiful"
//         />

       

//         <label className="block text-white mb-2">Frontend State Management Tool (Separated with '|' ):</label>
//         <input
//           type="text"
//           value={frontendState}
//           onChange={(e) => setFrontendState(e.target.value)}
//           className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//           placeholder="🧠 How does your frontend keep its state?"
//         />

//         <label className="block text-white mb-2">Frontend UI Framework (Separated with '|' ):</label>
//         <input
//           type="text"
//           value={frontendUi}
//           onChange={(e) => setFrontendUi(e.target.value)}
//           className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//           placeholder="🎉 The UI framework adding a sprinkle of magic"
//         />
//       </div>
//     </div>
//   </section>

//   {/* Database, Authentication, Deployment Section */}
//   <section className="mb-8">
//       <h2 className="text-4xl text-white font-bold mb-4">🔐 Database & Authentication 🔐</h2>
//       {/* ... (previous code) */}
//     <label className="block text-white mb-2">Database Technologies (Separated with '|' ):</label>
//     <input
//       type="text"
//       value={databaseTech}
//       onChange={(e) => setDatabaseTech(e.target.value)}
//       className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//       placeholder="🗃️ Database tech that stores your project's secrets"
//     />

//     <label className="block text-white mb-2">Authentication Technologies:</label>
//     <input
//       type="text"
//       value={authenticationTech}
//       onChange={(e) => setAuthenticationTech(e.target.value)}
//       className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//       placeholder="🔐 How do you guard the gates of your project?"
//     />

//     <label className="block text-white mb-2">Deployment Platform (Separated with '|' ):</label>
//     <input
//       type="text"
//       value={deploymentPlatform}
//       onChange={(e) => setDeploymentPlatform(e.target.value)}
//       className="w-full border p-2 text-white rounded mb-4 bg-bg1"
//       placeholder="🚢 Where does your project set sail?"
//     />
//   </section>
 
//           <button
//             onClick={() => alert(generateReadme())}
//             className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Generate README 📜
//           </button>

//           {/* Generated README Section with Copyable Textarea */}
//           <div className="mt-4">
//             <h2 className="text-2xl text-white font-bold mb-2">🎉 Generated README 🎉</h2>
//             <textarea
//               ref={textareaRef}
//               rows="20"
//               cols="80"
//               value={generateReadme()}
//               readOnly
//               className="w-full bg-bg1 text-white border p-2 rounded"
//             ></textarea>

// <button
//             onClick={() => copyToClipboard()}
//             className="bg-indigo-500 text-white mt-5 px-4 py-2 rounded hover:bg-blue-700 mr-4"
//           >
//             Copy to Clipboard 📋
//           </button>
//              <ToastContainer />
//   </div>
  
// </div>

//         </div>
//       </div>
//       <Footer/>
     
//     </>
//   );
// };

// export default App;


import React from 'react'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Generator from './Components/Generator'

const App = () => {
  return (
    <div>
      <Hero/>
      <Generator/>
      <Footer/>
    </div>
  )
}

export default App
