import Header from "@/components/layout/sitelayout/Header";
import Footer from "./Footer";

const Sitelayout = ({ children }) => {
    return (
        <div className="">
            <Header />
            <div className="py-16">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Sitelayout;
