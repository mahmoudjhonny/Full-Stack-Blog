import { useState } from "react";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img className="w-8" src="/logo.png" alt="" />
        <span>Lama Logo</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "Y"}
        </div>
        {/* Mobile Link List */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center transition-all gap-8 font-medium text-lg ease-in-out absolute top-16 ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="py-2 px-4 bg-blue-800 rounded-3xl text-white">
              {t("login")}
            </button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="py-2 px-4 bg-blue-800 rounded-3xl text-white">
            {t("login")}
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
