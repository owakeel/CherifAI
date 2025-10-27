'use client'



import AnalysesAndAlerts from "@/components/dashboard/dashboard/AnalysesAndAlerts";
import Card from "@/components/dashboard/dashboard/Card";
import InsightBanner from "@/components/dashboard/dashboard/InsightBanner";
import StatRow from "@/components/dashboard/dashboard/StatRow";
import {
    Area,
    AreaChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";



export const dynamic = "force-dynamic";



const Deshboard = () => {




    // Static demo data
    const chartData = [
        { label: "Jan", balance: 12000, principalPaid: 2000, interestPaid: 500 },
        { label: "Feb", balance: 11000, principalPaid: 2500, interestPaid: 450 },
        { label: "Mar", balance: 9500, principalPaid: 2700, interestPaid: 400 },
        { label: "Apr", balance: 8000, principalPaid: 3000, interestPaid: 380 },
        { label: "May", balance: 6500, principalPaid: 3200, interestPaid: 350 },
        { label: "Jun", balance: 5000, principalPaid: 3500, interestPaid: 300 },
        { label: "Mar", balance: 9500, principalPaid: 2700, interestPaid: 400 },
        { label: "Apr", balance: 8000, principalPaid: 3000, interestPaid: 380 },
        { label: "May", balance: 6500, principalPaid: 3200, interestPaid: 350 },
        { label: "Jun", balance: 5000, principalPaid: 3500, interestPaid: 300 },
    ];

    const fmt = (v) => `$${v.toLocaleString()}`;





    return (
        <div className="h-fit">
            <InsightBanner />
            <StatRow />
            <Card className="mt-6 h-fit bg-neutral-900 flex items-center justify-center text-neutral-400 text-sm">
                <div className="h-100 w-full py-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ left: -20, right: 10 }}>
                            <XAxis dataKey="label" tick={{ fontSize: 10 }} />
                            <YAxis
                                tickFormatter={(v) => `$${Math.round(v / 1000)}k`}
                                tick={{ fontSize: 10 }}
                                width={40}
                            />
                            <Tooltip formatter={(v) => fmt(v)} labelFormatter={(l) => `Month ${l}`} />
                            <Legend wrapperStyle={{ fontSize: 14 }} />

                            <Area
                                type="monotone"
                                dataKey="balance"
                                name="Remaining Balance"
                                fillOpacity={0.15}
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                className="brandColor"
                            />
                            <Area
                                type="monotone"
                                dataKey="principalPaid"
                                name="Principal Paid"
                                fillOpacity={0.1}
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                className="text-purple-300"
                            />
                            <Area
                                type="monotone"
                                dataKey="interestPaid"
                                name="Interest Paid"
                                fillOpacity={0.1}
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                className="text-amber-300"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Card>
            <AnalysesAndAlerts />
        </div>
    )
}

export default Deshboard;


