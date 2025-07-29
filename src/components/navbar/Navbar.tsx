import NavbarMobile from "./NavbarMobile";
export default function Navbar() {
    return (
        <div>

              {/* Mobile Navbar (visible below lg) */}
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>
             
      
            <div className="h-[400px] bg-cover bg-center hidden lg:block
                    bg-[url('/images/desktop/image-hero.jpg')] 
                   ">
                                             
      
       

            {/* navbar links */}

            <div className=" flex justify-between p-7 lg:px-20 text-white">
             <h1 className="font-bold text-xl font-alata hidden lg:block">loopstudio</h1> 
                
                    <ul className="lg:flex font-alata space-x-6 sm:hidden hidden  cursor-pointer">
                        <li className=" hover:underline">About</li>
                        <li className=" hover:underline">Careers</li>
                        <li className=" hover:underline">Events</li>
                        <li className=" hover:underline">Products</li>
                        <li className=" hover:underline">Support</li>
                    </ul>

            </div>
            
          

            <div className=" w-[300px] lg:ml-20 my-10 l border-2 border-white p-3 mx-auto  ">
                <p className="text-3xl w-[200px] font-josefin lg:text-2xl font-thin text-white uppercase">Immersive experiences that deliver</p>
            </div>
  </div>
        </div>
    )
}