export default function Footer() {
  const socialLinks = [
    { Image: "/images/icon-facebook.svg" },
    { Image: "/images/icon-instagram.svg" },
    { Image: "/images/icon-twitter.svg" },
    { Image: "/images/icon-pinterest.svg" },
  ];

  return (
    <div className="bg-black p-7 lg:space-y-4 lg:px-10">
      {/* Row 1: Logo + Social icons (lg) */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4 mx-auto">
        {/* Logo (always first) */}
        <h1 className="font-bold lg:text-xl text-3xl text-white ">loopstudios</h1>

        {/* Social icons (3rd on mobile, 2nd on lg) */}
        <div className="flex gap-4  ">
          {socialLinks.map((item, index) => (
            <img key={index} src={item.Image} alt="" className="w-5 h-5 hidden lg:block" />
          ))}
        </div>
      </div>

      {/* Row 2: Menu + Copyright */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        {/* Menu (2nd on mobile, 1st on lg) */}
        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-4 items-center lg:text-sm text-2xl ">
          <li className="text-white hover:underline">About</li>
          <li className="text-white hover:underline">Careers</li>
          <li className="text-white hover:underline">Events</li>
          <li className="text-white hover:underline">Products</li>
          <li className="text-white hover:underline">Support</li>
        </ul>

        <div className="flex gap-4  ">
          {socialLinks.map((item, index) => (
            <img key={index} src={item.Image} alt="" className=" w-7 h-7 mx-1  block lg:hidden mt-7" />
          ))}
        </div>

        {/* Copyright (last on mobile, 2nd on lg) */}
        <p className="text-gray-400 text-center lg:text-sm text-2xl">
          © 2023 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
}
