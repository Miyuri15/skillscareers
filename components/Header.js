// components/Header.js
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white text-blue-950 py-3 px-14">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img src="/images/logo.png" alt="Logo" className="w-30" />
          </Link>
          <div className="hidden md:flex flex-1 justify-center font-semibold">
            <nav className="flex space-x-6">
              <Link href="/landingPage">Home</Link>
              <Link href="/recruiterProfile/123">Explore Recruiters</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
            </nav>
          </div>
          <div className="hidden md:block">
            <Link href="/register">
              <Button>
                <p className="p-3">Join as Recruiter</p>
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <button id="menu-toggle" onClick={toggleMenu}>
              Menu
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4">
            <nav className="flex flex-col space-y-4 font-semibold">
              <Link href="/landingPage">Home</Link>
              <Link href="/recruiterSearch">Explore Recruiters</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/categories">
                <Button>
                  <p className="px-6 py-2">Join as Recruiter</p>
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
      <hr className="border-t-4 border-blue-900" />
    </>
  );
};

export default Header;
