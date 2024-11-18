// components/Header.js
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="bg-white text-blue-950 py-3 px-14">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img src="/images/logo.png" alt="Logo" className="w-30 " />
          </Link>
          <div>
            <nav className="space-x-6 hidden md:flex font-semibold">
              <Link href="/landingPage">Home</Link>
              <Link href="/recruiterProfile/123">Explore Recruiters</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
            </nav>
          </div>
          <div>
            <Link href="/register">
              <Button>
                <p className="p-3">Join as Recruiter</p>
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <button id="menu-toggle">Menu</button>
          </div>
        </div>
      </header>
      <hr className="border-t-4 border-blue-900" />
    </>
  );
};

export default Header;
