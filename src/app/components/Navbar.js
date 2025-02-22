// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center">
//         <svg
//           width="100"
//           height="50"
//           viewBox="0 0 100 50"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="url(#gradient)">
//             Nfi
//           </text>
//           <defs>
//             <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
//               <stop offset="0%" stopColor="#5ECBF1" />
//               <stop offset="100%" stopColor="#6C41FF" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* ✅ Contact Button (Navigates to /contact) */}
//       <Link href="/contact">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
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
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* ✅ Clickable Logo (Navigates to Home) */}
      <Link href="/" className="flex items-center">
        <svg
          width="100"
          height="50"
          viewBox="0 0 100 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="url(#gradient)">
            Nfi
          </text>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#5ECBF1" />
              <stop offset="100%" stopColor="#6C41FF" />
            </linearGradient>
          </defs>
        </svg>
      </Link>

      {/* ✅ Contact Button (Navigates to /contact) */}
      <Link href="/contact">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
          Contact Us
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
