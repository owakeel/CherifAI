import {
    LineChart,
    Wallet,
    Zap
} from "lucide-react";

import StatCard from "./StatCard";


function StatRow() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            <StatCard
                icon={Wallet}
                title="Portfolio Value"
                value="$0"
                hint="Total across 12 properties"
                actionLabel="View details"
            />
            <StatCard
                icon={LineChart}
                title="Average ROI"
                value="0.0%"
                hint="Across all analyzed properties"
                actionLabel="Performance trends"
            />
            <StatCard
                icon={Zap}
                title="Active Deals"
                value="0"
                hint="No active deals yet"
                actionLabel="Deal pipeline"
            />
        </div>
    );
}


export default StatRow;