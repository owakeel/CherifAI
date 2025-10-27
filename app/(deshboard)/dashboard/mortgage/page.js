import MortgageCalculator from "@/components/dashboard/Mortgage/MortgageCalculator";



const Mortgage = () => {
    return (
        <div className="h-fit">

            <div className="bg-neutral-800 myborder rounded-lg">
                <div className="mb-3 flex items-center gap-2 p-4">
                    <svg width="18" height="18"><circle cx="9" cy="9" r="8" fill="currentColor" className="brandColor" /></svg>
                    <h1 className="text-2xl font-extrabold tracking-tight">Mortgage Calculator</h1>
                </div>
                <MortgageCalculator />
            </div>

        </div>
    )
}

export default Mortgage;


