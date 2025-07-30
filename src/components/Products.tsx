export default function Products() {


    const items= [
          
           { name: "deep earth", 
           desktop: "/images/desktop/image-deep-earth.jpg", 
           mobile: "/images/mobile/image-deep-earth.jpg" },

          { name: "night arcade",
          desktop: "/images/desktop/image-night-arcade.jpg",
          mobile: "/images/mobile/image-night-arcade.jpg" },

             { name: "soccer team vr",
              desktop: "/images/desktop/image-soccer-team.jpg",
               mobile: "/images/mobile/image-soccer-team.jpg" },

              { name: "the grid",
                 desktop: "/images/desktop/image-grid.jpg",
                 mobile: "/images/mobile/image-grid.jpg" },

             { name: "from up above vr",
                              desktop: "/images/desktop/image-from-above.jpg",
                   mobile: "/images/mobile/image-from-above.jpg" },

                   { name: "pocket borealis",
                      desktop: "/images/desktop/image-pocket-borealis.jpg",
                   mobile: "/images/mobile/image-pocket-borealis.jpg" },

                     { name: "the curiosity",
                 desktop: "/images/desktop/image-curiosity.jpg",
              mobile: "/images/mobile/image-curiosity.jpg" },

             { name: "make it fisheye",
       desktop: "/images/desktop/image-fisheye.jpg",
      mobile: "/images/mobile/image-fisheye.jpg" },


                   
       
    ]

    return <div className=" p-10">
     {/* text and button */}
     <div className="flex justify-between w-full lg:px-10 px-10">
        <h1 className=" uppercase lg:text-3xl text-3xl  font-medium font-josefin ">our creations</h1>
        <button className="border-2 uppercase font-josefin font-semibold border-black lg:px-10 lg:py-1 hidden lg:block hover:bg-black hover:text-white *:
        transition duration-300">see all</button>
     </div>

     {/* images */}

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10  lg:p-10">
     {
        items.map((item, index) => (
        <div  key={index} className="relative h-[200px]  lg:h-[400px] group ">
            {/* desktop images */}
        
        <div
              className="hidden lg:block h-full w-full bg-cover bg-center    "
              style={{ backgroundImage: `url(${item.desktop})` }}
            ></div>
        

         {/* Mobile image */}
            <div
              className="lg:hidden h-full  w-full bg-cover bg-center  cursor-pointer "
              style={{ backgroundImage: `url(${item.mobile})` }}
            ></div>

            
  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300 "></div>



            {/* Overlay text */}
            <div className="absolute bottom-5 left-5 text-white lg:text-2xl text-xl  uppercase font-thin font-josefin group-hover:text-black ">
              {item.name}
            </div>
        </div>
        ))
     }
    </div>
     <button className="border-2 uppercase bg-white mx-auto mt-9 px-14 py-2 font-josefin font-semibold border-gray-500 lg:px-10 lg:py-1 block lg:hidden
     hover:bg-black hover:text-white transition duration-300">see all</button>

    </div>;
}