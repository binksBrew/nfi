// // const Footer = () => {
// //     return (
// //       <footer className="bg-gray-100 text-center py-4 text-gray-700 text-sm">
// //         &copy; 2024 NFI (Natural Residue Free) Co. All Rights Reserved.
// //       </footer>
// //     );
// //   };
  
// //   export default Footer;
  







// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-gray-700 py-8">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
//         {/* ✅ NFI Logo (Same as Navbar) */}
//         <div className="flex flex-col items-center md:items-start">
//           <Link href="/" className="flex items-center">
//             <svg
//               width="120"
//               height="60"
//               viewBox="0 0 100 50"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="cursor-pointer"
//             >
//               <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="url(#gradient)">
//                 NFI
//               </text>
//               <defs>
//                 <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
//                   <stop offset="0%" stopColor="#364AFF" />
//                   <stop offset="100%" stopColor="#7B5CFA" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </Link>
//           <p className="text-sm mt-2">Natural Residue-Free Excellence</p>
//         </div>

//         {/* ✅ Contact Information */}
//         <div className="text-sm">
//           <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
//           <p>Email: <a href="mailto:info@nfigrapes.com" className="text-blue-600 hover:underline">info@nfigrapes.com</a></p>
//           <p>Phone: <a href="tel:+917770023175" className="text-blue-600 hover:underline">+91 98765 43210</a></p>
//           <p>Address: Nashik, Maharashtra, India</p>
//         </div>

//         {/* ✅ Quick Links */}
//         <div className="text-sm">
//           <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
//           <ul className="space-y-1">
//             <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
//             <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
//             <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
//             <li><Link href="/gallery" className="hover:text-blue-600">Gallery</Link></li>
//           </ul>
//         </div>
//       </div>

//       {/* ✅ Copyright Section */}
//       <div className="mt-6 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
//         &copy; {new Date().getFullYear()} NFI (Natural Residue Free) Co. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;













import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* ✅ NFI Logo + Trademark */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex flex-col items-center md:items-start">
            {/* ✅ NFI Logo (Same as Navbar) */}
            <svg
              width="120"
              height="60"
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
          </Link>
          {/* ✅ Trademark Below Logo */}
          <p className="text-sm font-semibold mt-2 text-blue-700">Natural Food for India™</p>
        </div>

        {/* ✅ Contact Information (From ContactUs Component) */}
        <div className="text-sm">
          <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:info@nfigrapes.com" className="text-blue-600 hover:underline">info@nfigrapes.com</a></p>
          <p>Phone: <a href="tel:+917972294961" className="text-blue-600 hover:underline">+91 79722 94961</a></p>
          <p>Address: Nashik, Maharashtra, India</p>
          <div className="mt-3 space-y-2">
            <p>
              <span className="text-red-500 text-xl">📞</span> 
              <Link href="tel:+917972294961" className="text-blue-600 hover:underline ml-1">
                Call Us Directly
              </Link>
            </p>
            <p>
              <span className="text-green-500 text-xl">💬</span> 
              <Link href="https://wa.me/+917972294961" target="_blank" className="text-blue-600 hover:underline ml-1">
                WhatsApp Us
              </Link>
            </p>
            <p>
              <span className="text-pink-500 text-xl">📍</span> 
              <Link 
                href="https://www.google.com/maps/place/Navrang+Mangal+Karyalaya/@20.0166956,73.7926488,17z/data=!4m6!3m5!1s0x3bddea4cefdecf65:0xa585bc1bab3981f6!8m2!3d20.0166906!4d73.7952237!16s%2Fg%2F1tl8j50p?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="text-blue-600 hover:underline ml-1"
              >
                Open Google Maps
              </Link>
            </p>
          </div>
        </div>

        {/* ✅ Quick Links */}
        <div className="text-sm">
          <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link href="/gallery" className="hover:text-blue-600">Gallery</Link></li>
          </ul>
        </div>
      </div>

      {/* ✅ Copyright Section */}
      <div className="mt-6 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} NFI (Natural Residue Free) Co. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
