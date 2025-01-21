const Navbar = () => {

  return (
<nav
  className={`bg-white h-28 mb-2 block md:h-36 shadow-gray-300 shadow-sm `}
>
  <div className="w-[90%] mx-auto flex justify-between items-center h-full">
    <div className="items-center space-x-2">
      <a href="/">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-28 md:h-36"
        />
      </a>
    </div>
    <div className="">
          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScR_Y7bGd3znYgbsZC6ECHexUsgjfZkyZYIaTvPtE7nsLSukg/viewform"
          className="px-4 py-2 border-2 border-[#AA5656] rounded-lg text-[#AA5656] hover:bg-[#B76F6F] hover:text-white 
            transition-all duration-200 ease-in-out">Bli medlem</a>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
