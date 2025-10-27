import { jwtVerify } from "jose";


async function verifyJWT(token) {
    try {
        const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);
        const { payload } = await jwtVerify(token, secret, {
            clockTolerance: 30 // allow 30 seconds difference
        });
        return payload;
    } catch (err) {
        console.log("JWT Error:", err);
        return null;
    }
}

export default verifyJWT;