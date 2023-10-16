// "use client"
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={` w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           href='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
     
//           <p className='text-rose-900 text-[18px] font-bold cursor-pointer flex '>
//             Body&nbsp;Shot KO
//           </p>
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//             <li
//               className={`${
//                 active === "About" ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive("About")}
//             >
//               <a href="about">About</a>
//             </li>
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//        {toggle ? <AiOutlineClose/> : <AiOutlineMenu/>}
//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              
//                 <li
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === "About" ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive("About");
//                   }}
//                 >
//                   <a href="about">About</a>
//                 </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import Image from "next/image";
import Link from "next/link";
import { FaLaptopCode, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className=" bg-cyan-900 sticky top-0 drop-shadow-xl">
      <div className="prose prose-2xl mx-auto flex justify-between items-center">
      <Link href="/" className=" pl-2 my-[-1em] flex justify-center items-center gap-3 no-underline text-slate-300 hover:text-white">
        <Image
        className="mx-auto rounded-full  border-2 p-[2px] border-slate-300"
         src='/image/ko.png'
         alt="madi"
         width={100}
         height={20}
         priority={true}
         />
          <p>Body Shot KO</p>
        </Link>
        <div className="flex gap-5 pr-2">
        <Link href="#" className="text-slate-300 hover:text-white">
            <FaGithub />
          </Link>
          <Link href="#" className="text-slate-300 hover:text-white">
            <FaLaptopCode/>
          </Link>
          <Link href="#" className="text-slate-300 hover:text-white">
            <FaYoutube/>
          </Link>
          <Link href="#" className="text-slate-300 hover:text-white">
            <FaXTwitter/>
          </Link>
        </div>
      </div>
    </nav>
  );
}
