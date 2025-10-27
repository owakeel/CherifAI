'use client';

import Spiner from "@/components/ui/dashboard/Spiner";
import logo from "@/public/logo_full-Transparent.png";
import { createData } from "@/utils/reqres";
import verifyJWT from "@/utils/verifyJWT";
import Cookies from "js-cookie";
import { Menu, User2, X } from "lucide-react"; // modern icons
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Container from "./Container";

export default function Header() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [logedUser, setLogedUser] = useState(null);
  const [token, setToken] = useState(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];


  useEffect(() => {

    const usercaller = async () => {
      const userToken = Cookies.get("token");
      const lUser = await verifyJWT(userToken);
      setToken(userToken);
      setLogedUser(lUser);
    }

    usercaller();

  }, [])



  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();



  //handle logout function is here
  const handleLogout = async (e) => {

    e.preventDefault();
    setisLoading(true);

    try {
      const res = await createData('api/auth/logout', {}, token);

      Cookies.remove("token", { path: "/" });
      router.push('/auth/signin');


    } catch (error) {
      toast.warn(error.message || 'Something went wrong');
    } finally {
      setisLoading(false);
    }



  }



  return (
    <header className="w-full shadow-sm fixed top-0 left-0 z-50 bg myborderBottom bg color">
      <ToastContainer />

      <Container>
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="w-[107px] h-full flex items-center">
            <Image className="" src={logo} alt="logo" width={1000} height={1000} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className=" transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {
              logedUser ? (
                <div className="relative group">
                  <button className="hidden w-[35px] h-[35px] border rounded-full border-2 border-gray-100 bg-neutral-900  text-neutral-200 hover:bg-neutral-800 md:flex items-center justify-center cursor-pointer">
                    <User2 className="h-5 w-5" />
                  </button>

                  <div className="absolute top-0 right-0 h-fit w-fit mt-2 w-40 block hidden cursor-pointer group-hover:block">
                    <div className="h-[40px] w-full transparent"></div>
                    <div className="bg-white px-2 py-5 rounded-sm min-w-[180px] h-fit shadow-md tooltipArraow">
                      <Link className="px-3 py-2 text-black text-lg hover:text-cyan-500 w-full" href={'/dashboard'}>Dashboard</Link>
                      <button onClick={(e) => { handleLogout(e) }} className="px-3 py-2 mt-4 rounded-md text-black text-lg brandBg text-left hover:bg-gray-50 w-full cursor-pointer flex items-center gap-2" >
                        {isLoading && <Spiner />}
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>



              ) : (
                <Link href="/auth/signin" className="btn">Login</Link>
              )
            }
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text transition cursor-pointer"
          >
            {mobileOpen ? <X className="duration-400 hover:rotate-180" size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>




      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg shadow-md w-full h-screen">
          <Container>
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="transition-colors duration-200 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3">
                {
                  logedUser ? (
                    <div className="flex items-center gap-2 relative group">
                      <button className="w-[35px] h-[35px] border rounded-full border-2 border-gray-100 bg-neutral-900  text-neutral-200 hover:bg-neutral-800 flex items-center justify-center cursor-pointer">
                        <User2 className="h-5 w-5" />
                      </button>
                      <span>{logedUser.name}</span>

                      <div className="absolute top-0 left-0 h-fit w-fit mt-2 w-40 block hidden cursor-pointer group-hover:block">
                        <div className="h-[40px] w-full transparent"></div>
                        <div className="bg-white px-2 py-5 rounded-sm min-w-[180px] h-fit shadow-md tooltipArraow">
                          <Link className="px-3 py-2 text-black text-lg hover:text-cyan-500 w-full" href={'/dashboard'}>Dashboard</Link>
                          <button onClick={(e) => { handleLogout(e) }} className="px-3 py-2 mt-4 rounded-md text-black text-lg brandBg text-left hover:bg-gray-50 w-full cursor-pointer" href={'/dashboard'}>Logout</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href="/auth/signin" className="btn">Login</Link>
                  )
                }

              </div>
            </nav>
          </Container>

        </div>
      )
      }
    </header >
  );
}
