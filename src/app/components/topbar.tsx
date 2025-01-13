import { RxEnvelopeClosed } from "react-icons/rx";
import { PiPhoneCallBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { CiSearch, CiHeart  } from "react-icons/ci";
import Link from "next/link";

export default function Topbar() {
    return (
        <div>
            {/* Header Container */}
            <div className="h-[50px] w-full bg-[#7E33E0] flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 space-x-4">
                {/* Left Section: Envelope and Phone */}
                <div className="flex items-center space-x-4">
                    {/* Envelope Icon and Email */}
                    <div className="flex items-center space-x-2">
                        <RxEnvelopeClosed className="w-4 h-4 text-white" />
                        <span className="hidden sm:inline text-white font-[Josefin Sans] font-semibold text-sm md:text-base">
                            mhhasanul@gmail.com
                        </span>
                    </div>

                    {/* Phone Icon and Number */}
                    <div className="flex items-center space-x-2">
                        <PiPhoneCallBold className="w-4 h-4 text-white" />
                        <span className="hidden sm:inline text-white font-[Josefin Sans] font-semibold text-sm md:text-base">
                            (12345)67890
                        </span>
                    </div>
                </div>

                {/* Right Section: Language, Currency, Login, Wishlist, and Cart */}
                <div className="flex items-center space-x-4">
                    {/* English Dropdown */}
                    <div className="hidden sm:flex items-center space-x-1">
                        <span className="text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
                            English
                        </span>
                        <RiArrowDropDownLine className="w-4 h-4 text-white" />
                    </div>

                    {/* USD Dropdown */}
                    <div className="hidden sm:flex items-center space-x-1">
                        <span className="text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
                            USD
                        </span>
                        <RiArrowDropDownLine className="w-4 h-4 text-white" />
                    </div>

                    {/* Login Section */}
                    <div>
                        <Link href="/account" className="flex items-center  space-x-1">
                        <span className="hidden sm:inline text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
                            Login
                        </span>
                        <FiUser className="w-4 h-4 text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>)}
