// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
//       {/* ✅ Clickable Logo (Navigates to Home) */}
//       <Link href="/" className="flex items-center">
//         <svg
//           width="100"
//           height="50"
//           viewBox="0 0 100 50"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="cursor-pointer"
//         >
//           <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="url(#gradient)">
//             NFI
//           </text>
//           <defs>
//             <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
//               <stop offset="0%" stopColor="#364AFF" />
//               <stop offset="100%" stopColor="#7B5CFA" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </Link>

//       {/* ✅ Contact Button (Navigates to /contact) */}
//       <Link href="/contact">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
//           Contact Us
//         </button>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;













// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
//       {/* ✅ Clickable Logo (Navigates to Home) */}
//       <Link href="/" className="flex flex-col items-center">
//         <svg
//           width="100"
//           height="50"
//           viewBox="0 0 100 50"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="cursor-pointer"
//         >
//           <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="url(#gradient)">
//             NFI
//           </text>
//           <defs>
//             <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
//               <stop offset="0%" stopColor="#364AFF" />
//               <stop offset="100%" stopColor="#7B5CFA" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* ✅ Trademark Below Logo */}
//         <p className="text-xs font-semibold text-blue-700 mt-1">Natural Food for India™</p>
//       </Link>

//       {/* ✅ Contact Button (Navigates to /contact) */}
//       <Link href="/contact">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
//           Contact Us
//         </button>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;










import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* ✅ Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex items-center justify-between z-50">
        {/* ✅ Clickable Logo (Navigates to Home) */}
        <Link href="/" className="flex flex-col items-center">
          <svg
            width="100"
            height="50"
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="url(#gradient)">
              NFI
            </text>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#364AFF" />
                <stop offset="100%" stopColor="#7B5CFA" />
              </linearGradient>
            </defs>
          </svg>

          {/* ✅ Trademark Below Logo */}
          <p className="text-xs font-semibold text-blue-700 mt-1">Natural Food for India™</p>
        </Link>

        {/* ✅ Contact Button (Navigates to /contact) */}
        <Link href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
            Contact Us
          </button>
        </Link>
      </nav>

      {/* ✅ Spacer to prevent content from getting cut off */}
      <div className="h-[70px]"></div> 
    </>
  );
};

export default Navbar;
