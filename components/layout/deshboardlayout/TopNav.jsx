'use client';

import Spiner from "@/components/ui/dashboard/Spiner";
import logo from "@/public/logo_full-Transparent.png";
import { createData } from "@/utils/reqres";
import Cookies from "js-cookie";
import {
    Bell,
    Menu,
    Settings,
    User2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function TopNav({ onMenu }) {



    const [token, setToken] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();




    useEffect(() => {
        const userToken = Cookies.get("token");
        setToken(userToken);
    }, []);




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
        <nav className="sticky top-0 z-40 w-full myborderBottom bg-neutral-900 ">
            <ToastContainer />
            <div className="mx-auto flex h-14 items-center justify-between px-3 sm:px-4">
                <div className="flex items-center gap-2">
                    <button
                        onClick={onMenu}
                        className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800 md:hidden"
                        aria-label="Open menu"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <Link href="/" className="w-[107px] h-full">
                        <Image className="" src={logo} alt="logo" width={1000} height={1000} />
                    </Link>
                </div>



                <div className="flex items-center gap-2">

                    <span className="hidden rounded-lg myborder bg-neutral-950 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 md:inline-block">● LIVE</span>
                    <button className="hidden rounded-lg myborder bg-neutral-950 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800 md:inline-flex">
                        <Settings className="mr-1 h-3.5 w-3.5" /> Settings
                    </button>
                    <button className="rounded-lg myborder bg-neutral-950 p-2 hover:border-neutral-700 hover:bg-neutral-800" aria-label="Notifications">
                        <Bell className="h-4 w-4" />
                    </button>


                    <div className="group relative">
                        <button className="hidden w-[35px] h-[35px] border rounded-full border-2 border-gray-100 bg-neutral-900  text-neutral-200 hover:bg-neutral-800 md:flex items-center justify-center cursor-pointer">
                            <User2 className="h-5 w-5" />
                        </button>
                        <div className="absolute top-0 right-0 h-fit w-fit mt-2 w-40  hidden cursor-pointer group-hover:block">
                            <div className="h-[40px] w-full transparent"></div>
                            <div className="bg-white px-2 py-5 rounded-sm min-w-[180px] h-fit shadow-md tooltipArraow">
                                <Link className="px-3 py-2 text-black text-lg hover:text-cyan-500 w-full" href={'/dashboard/chat'}>CherifAI</Link>
                                <button onClick={(e) => { handleLogout(e) }} className="px-3 py-2 mt-4 rounded-md text-black text-lg brandBg text-left hover:bg-gray-50 w-full cursor-pointer flex items-center gap-2">
                                    {isLoading && <Spiner />}
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default TopNav;