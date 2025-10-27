import logo from "@/public/logo_full.png";
import Link from "next/link";

import Spiner from "@/components/ui/dashboard/Spiner";
import { createData } from "@/utils/reqres";
import Cookies from "js-cookie";
import {
    Bot,
    Building2,
    ChartBarStacked,
    ChevronRight,
    FileText,
    Home,
    LineChart,
    PanelsTopLeft,
    Plus,
    Wallet,
    X
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";


function Sidebar({ open, onClose }) {



    const pathname = usePathname();
    const router = useRouter();
    const [isLoading, setisLoading] = useState(false);
    const [token, setToken] = useState(null);

    const items = useMemo(
        () => [
            { icon: PanelsTopLeft, label: "Dashboard", href: "/dashboard" },
            { icon: LineChart, label: "Deal Analyzer", href: "/dashboard/deals" },
            { icon: Plus, label: "Add Property", href: "/dashboard/addproperty" },
            { icon: Building2, label: "Properties", href: "/dashboard/properties" },
            { icon: Wallet, label: "Funding Finder", href: "/dashboard/funding" },
            { icon: FileText, label: "Blueprints", href: "/dashboard/blueprints" },
            { icon: ChartBarStacked, label: "Market Watch", href: "/dashboard/market" },
            { icon: Home, label: "Mortgage", href: "/dashboard/mortgage" },
            { icon: Bot, label: "CherifAI", href: "/dashboard/chat" },
            // { icon: Lock, label: "Vault", href: "/dashboard/vault" },
        ],
        []
    );







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

            // Remove a cookie by name
            Cookies.remove("token", { path: "/" });

            router.push('/auth/signin');


        } catch (error) {
            toast.warn(error.message || 'Something went wrong');
        } finally {
            setisLoading(false);
        }



    }








    return (
        <>
            {/* Mobile drawer */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={onClose}
            />
            <aside
                className={`fixed top-0 h-screen inset-y-0 left-0 z-50 w-72 transform myborderRight bg-neutral-900 p-3 transition-transform duration-200 md:sticky md:top-14 md:z-auto md:w-[260px] md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
                aria-hidden={!open}
            >
                <div className="mb-2 flex items-center justify-between px-1 md:hidden">
                    <Link href="/" className="w-[107px] h-full">
                        <Image className="" src={logo} alt="logo" width={1000} height={1000} />
                    </Link>
                    <button onClick={onClose} className="rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800" aria-label="Close menu">
                        <X className="h-4 w-4" />
                    </button>
                </div>


                <nav className="mt-2">
                    {items.map(({ icon: Icon, label, href }, idx) => (
                        <Link
                            key={idx}
                            href={href}
                            className={`mb-2 flex items-center justify-between rounded-xl px-3 py-2 text-sm transition hover:bg-neutral-700 hover:text-cyan-400 ${href === pathname ? "bg-neutral-700 text-cyan-400" : "text-neutral-300"}`}
                            onClick={onClose}
                        >
                            <span className="flex items-center gap-3">
                                <Icon className="h-6 w-6 brandColor" />
                                <span className="text-lg font-normal">{label}</span>
                            </span>
                            <ChevronRight className="h-4 w-4 brandColor" />
                        </Link>
                    ))}
                </nav>


                <div className="absolute bottom-20 left-5 w-fit">
                    <button onClick={(e) => { handleLogout(e) }} className="brandBg rounded-lg px-3 w-[190px] py-2 text-md font-semibold text-neutral-950 hover:bg-sky-400 cursor-pointer flex items-center justify-center  gap-2">

                        {isLoading && <Spiner />}

                        Logout
                    </button>
                </div>

            </aside>
        </>
    );
}


export default Sidebar;