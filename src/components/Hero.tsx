export default function Hero() {
  return (
    <section className=" px-6 md:px-16 py-12 lg:m-20 mt-10">
      <div className="lg:grid lg:grid-cols-2  grid-cols-1 items-center  ">
        {/* Left Image */}
        <div className="flex justify-center  relative">
          <img
            src="/images/desktop/image-interactive.jpg"
            alt="VR Experience"
            className="lg:w-[500px]  w-full  "
          />
        </div>

        {/* Right Text */}
        <div className="text-left bg-white lg:py-8 p-10  lg:px-20 md:mt-10 lg:absolute lg:w-[600px] lg:left-1/2 lg:-translate-x-24 lg:translate-y-[56px]  ">
          <h1 className="lg:text-4xl text-4xl font-thin mb-6 leading-tight font-josefin ">
            THE LEADER IN <br /> INTERACTIVE VR
          </h1>
          <p className="text-black leading-relaxed text-md lg:text-md font-thin font-josefin">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}
