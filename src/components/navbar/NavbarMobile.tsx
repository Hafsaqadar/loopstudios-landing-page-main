import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <div className="h-[400px] bg-cover bg-center
                    bg-[url('/images/mobile/image-hero.jpg')] 
                   ">
   
    <nav className="relative bg-transparent text-white p-5">
        
          
      {/* Top Navbar */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">loopstudio</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

       <div className=" w-[300px] lg:ml-20 my-10 border-2 mt-20 border-white p-3 mx-auto  ">
                <p className="text-3xl w-[200px] font-thin text-white uppercase">Immersive experiences that deliver</p>
            </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-full bg-black p-8 space-y-8 z-50">
          {/* Logo + Close Button */}
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl text-white">loopstudios</h1>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              className="focus:outline-none"
            >
              <X size={28} className="text-white" />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col space-y-6 font-semibold text-xl text-white">
            <li className="hover:text-gray-300 cursor-pointer mt-20 font-thin text-2xl uppercase">About</li>
            <li className="hover:text-gray-300 cursor-pointer font-thin text-2xl  uppercase">Careers</li>
            <li className="hover:text-gray-300 cursor-pointer font-thin text-2xl  uppercase">Events</li>
            <li className="hover:text-gray-300 cursor-pointer font-thin text-2xl  uppercase">Products</li>
            <li className="hover:text-gray-300 cursor-pointer font-thin text-2xl  uppercase">Support</li>
          </ul>
        </div>
      )}
    
     
    </nav>
      </div>
  
  );
}
