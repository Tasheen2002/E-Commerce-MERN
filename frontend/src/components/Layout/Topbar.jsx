import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <nav className="bg-[#1D1D1F] text-[#F5F5F7]">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" aria-label="Meta" className="hover:text-[#86868B]">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#86868B]">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter/X" className="hover:text-[#86868B]">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        {/* Center Text */}
        <div className="text-sm text-center flex-grow">
          <span>We Ship worldwide - Fast and Reliable Shipping</span>
        </div>

        {/* Contact */}
        <div className="text-sm hidden md:block">
          <a href="tel:+94766940529" className="hover:text-[#86868B]">
            +94766940529
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
