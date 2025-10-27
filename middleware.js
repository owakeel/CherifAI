import { NextResponse } from "next/server";
import verifyJWT from "./utils/verifyJWT";




export default async function middleware(req) {

    const path = req.nextUrl.pathname;
    const token = req.cookies.get("token")?.value;



    // Check token validity
    const decoded = token ? await verifyJWT(token) : null;


    console.log(decoded);


    // Protected routes
    const protectedRoutes = ["/dashboard"];
    const isProtected = protectedRoutes.some(route => path.startsWith(route));



    if (!decoded && isProtected) return NextResponse.redirect(new URL("/auth/signin", req.nextUrl));



    if (!decoded) {
        const res = NextResponse.next();
        res.cookies.delete('token');
        return res;
    }





    // Role-based access
    // if (decoded && role) {
    //     if (role !== "Admin" && path.startsWith("/admin")) return NextResponse.redirect(new URL("/signin", req.nextUrl));
    //     if (role !== "Hr" && path.startsWith("/hr")) return NextResponse.redirect(new URL("/signin", req.nextUrl));
    //     if (role !== "Project Manager" && path.startsWith("/projectmanager")) return NextResponse.redirect(new URL("/signin", req.nextUrl));
    //     if (role !== "Employee" && path.startsWith("/employee")) return NextResponse.redirect(new URL("/signin", req.nextUrl));
    // }

    // If logged in but trying to visit signin page
    // if (decoded && path.startsWith("/signin")) {
    //     const redirects = {
    //         "Admin": "/admin",
    //         "Hr": "/hr",
    //         "Project Manager": "/projectmanager",
    //         "Employee": "/employee"
    //     };
    //     if (role && redirects[role]) return NextResponse.redirect(new URL(redirects[role], req.nextUrl));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};