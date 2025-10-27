"use client";

import {
    Calculator,
    Calendar as CalendarIcon,
    Download,
    Info,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
    Area,
    AreaChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

/**
 * MortgageCalculator.jsx — JavaScript + Tailwind (Next.js client component)
 *
 * Features
 * - Left: Loan Details form
 * - Right: KPIs (Monthly Payment, Loan Amount, Total Interest, Total Paid)
 * - Chart: Payment breakdown over time (Remaining Balance, Principal Paid, Interest Paid)
 * - Table: Annual amortization (calendar year)
 * - CSV Export
 */
export default function MortgageCalculator() {
    const [form, setForm] = useState({
        price: 350000,
        down: 70000,
        years: 30,
        rate: 6.5,
        tax: 6000, // annual
        insurance: 1200, // annual
        pmi: 0.5, // percent annual of principal when LTV > 80%
        start: new Date().toISOString().slice(0, 10),
    });

    const onChange = (key) => (e) =>
        setForm((s) => ({ ...s, [key]: key === "start" ? e.target.value : num(e.target.value) }));

    const results = useMemo(() => calcMortgage(form), [form]);

    return (
        <section className="w-full bg-neutral-950 text-neutral-100">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-2">
                {/* ---------------- Loan Details ---------------- */}
                <div className="rounded-2xl myborder bg-neutral-900 p-4 shadow-lg ring-1 ring-inset ring-neutral-800 sticky top-[100px] h-fit">
                    <Header icon={<Calculator className="h-5 w-5 brandColor" />} title="Loan Details" />

                    <Field label="Purchase Price" help="Home purchase price">
                        <Input value={form.price} onChange={onChange("price")} prefix="$" />
                    </Field>

                    <Field label="Down Payment" help="Cash paid upfront">
                        <Input value={form.down} onChange={onChange("down")} prefix="$" />
                        <p className="mt-1 text-xs text-neutral-400">
                            {formatPct((form.down / Math.max(1, form.price)) * 100)} down payment
                        </p>
                    </Field>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Loan Term (Years)">
                            <Input value={form.years} onChange={onChange("years")} />
                        </Field>
                        <Field label="Interest Rate (%)">
                            <Input value={form.rate} onChange={onChange("rate")} />
                        </Field>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Annual Property Tax">
                            <Input value={form.tax} onChange={onChange("tax")} prefix="$" />
                        </Field>
                        <Field label="Annual Insurance">
                            <Input value={form.insurance} onChange={onChange("insurance")} prefix="$" />
                        </Field>
                    </div>

                    <Field label="PMI (%)" help="Charged when LTV > 80% (annual %)">
                        <Input value={form.pmi} onChange={onChange("pmi")} />
                        <p className="mt-1 text-xs brandColor">
                            {results.ltv <= 80 ? "No PMI required (≤ 80% LTV)" : "PMI estimated (LTV > 80%)"}
                        </p>
                    </Field>

                    <Field label="Start Date">
                        <div className="relative">
                            <Input type="date" value={form.start} onChange={onChange("start")} rightIcon={<CalendarIcon className="h-4 w-4" />} />
                        </div>
                    </Field>

                    <button
                        onClick={() => setForm({ ...form })}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl brandBg px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-teal-400"
                    >
                        <Calculator className="h-4 w-4" /> Calculate
                    </button>
                </div>

                {/* ---------------- Right Summary + Charts ---------------- */}
                <div className="flex flex-col gap-6">
                    {/* Summary */}
                    <div className="rounded-2xl myborder bg-neutral-900 p-4 shadow-lg ring-1 ring-inset ring-neutral-800">
                        <div className="text-center">
                            <div className="text-sm text-neutral-400">Monthly Payment</div>
                            <div className="mt-1 text-4xl font-extrabold brandColor">{fmt(results.monthlyTotal)}</div>
                        </div>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <KPI label="Loan Amount" value={fmt(results.principal)} />
                            <KPI label="Total Interest" value={fmt(results.totalInterest)} />
                            <KPI label="Payoff Date" value={results.payoffDate} />
                            <KPI label="Total Paid" value={fmt(results.totalPaid)} />
                        </div>

                        <details className="mt-4 rounded-xl myborder bg-neutral-950">
                            <summary className="cursor-pointer select-none px-3 py-2 text-sm font-semibold">Cost Breakdown</summary>
                            <div className="grid gap-3 px-3 pb-3 text-sm text-neutral-300 sm:grid-cols-2">
                                <Row label="Principal & Interest" value={fmt(results.monthlyPI)} />
                                <Row label="Property Tax" value={fmt(results.monthlyTax)} />
                                <Row label="Insurance" value={fmt(results.monthlyIns)} />
                                <Row label="PMI" value={fmt(results.monthlyPMI)} />
                            </div>
                        </details>
                    </div>

                    {/* Chart + Export */}
                    <div className="rounded-2xl myborder bg-neutral-900 p-4 shadow-lg ring-1 ring-inset ring-neutral-800">
                        <div className="mb-2 flex items-center justify-between">
                            <div className="text-base font-semibold">Payment Breakdown Over Time</div>
                            <button onClick={() => exportCSV(results.schedule)} className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-semibold hover:border-neutral-700 hover:bg-neutral-800">
                                <Download className="h-3.5 w-3.5" /> Export CSV
                            </button>
                        </div>

                        <div className="h-56 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={results.chartData} margin={{ left: -20, right: 10 }}>
                                    <XAxis dataKey="label" hide tick={{ fontSize: 10 }} />
                                    <YAxis tickFormatter={(v) => `$${Math.round(v / 1000)}k`} tick={{ fontSize: 10 }} width={40} />
                                    <Tooltip formatter={(v) => fmt(v)} labelFormatter={(l) => `Month ${l}`} />
                                    <Legend wrapperStyle={{ fontSize: 12 }} />
                                    <Area type="monotone" dataKey="balance" name="Remaining Balance" fillOpacity={0.15} fill="currentColor" stroke="currentColor" strokeWidth={1.5} className="brandColor" />
                                    <Area type="monotone" dataKey="principalPaid" name="Principal Paid" fillOpacity={0.1} fill="currentColor" stroke="currentColor" strokeWidth={1.5} className="text-purple-300" />
                                    <Area type="monotone" dataKey="interestPaid" name="Interest Paid" fillOpacity={0.1} fill="currentColor" stroke="currentColor" strokeWidth={1.5} className="text-amber-300" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Annual table */}
                    <div className="rounded-2xl myborder bg-neutral-900 p-4 shadow-lg ring-1 ring-inset ring-neutral-800">
                        <div className="text-base font-semibold">Amortization Schedule by Calendar Year</div>
                        <div className="mt-3 overflow-x-auto">
                            <table className="min-w-full text-left text-sm">
                                <thead className="text-neutral-300">
                                    <tr className="border-b border-neutral-800">
                                        <Th>Year</Th>
                                        <Th className="text-right">Principal</Th>
                                        <Th className="text-right">Interest</Th>
                                        <Th className="text-right">Tax & Ins.</Th>
                                        <Th className="text-right">PMI</Th>
                                        <Th className="text-right">Total Paid</Th>
                                        <Th className="text-right">Balance</Th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.byYear.map((y) => (
                                        <tr key={y.year} className="border-b border-neutral-900/60 last:border-0">
                                            <Td>{y.year}</Td>
                                            <Td className="text-right">{fmt(y.principal)}</Td>
                                            <Td className="text-right">{fmt(y.interest)}</Td>
                                            <Td className="text-right">{fmt(y.taxIns)}</Td>
                                            <Td className="text-right">{fmt(y.pmi)}</Td>
                                            <Td className="text-right">{fmt(y.total)}</Td>
                                            <Td className="text-right">{fmt(y.balance)}</Td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ----------------------------- UI primitives ---------------------------- */
function Header({ icon, title }) {
    return (
        <div className="mb-3 flex items-center gap-2">
            {icon}
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    );
}

function Field({ label, help, children }) {
    return (
        <div className="mb-4">
            <label className="mb-1 flex items-center gap-1 text-xs font-semibold text-neutral-300">
                {label}
                {help && (
                    <span title={help} className="inline-flex items-center text-neutral-500">
                        <Info className="h-3.5 w-3.5" />
                    </span>
                )}
            </label>
            {children}
        </div>
    );
}

function Input({ prefix, rightIcon, className = "", ...props }) {
    return (
        <div className={`relative ${className}`}>
            {prefix && (
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500">{prefix}</span>
            )}
            <input
                {...props}
                inputMode="decimal"
                className={`w-full rounded-xl myborder bg-neutral-950 px-3 py-2 text-sm outline-none transition placeholder:text-neutral-500 focus:border-neutral-600 ${prefix ? "pl-7" : ""
                    } ${rightIcon ? "pr-9" : ""}`}
            />
            {rightIcon && (
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">{rightIcon}</span>
            )}
        </div>
    );
}

function KPI({ label, value }) {
    return (
        <div className="rounded-xl myborder bg-neutral-950 p-3">
            <div className="text-xs text-neutral-400">{label}</div>
            <div className="mt-1 font-semibold">{value}</div>
        </div>
    );
}

function Row({ label, value }) {
    return (
        <div className="flex items-center justify-between">
            <span>{label}</span>
            <span className="font-semibold">{value}</span>
        </div>
    );
}

function Th({ className = "", children }) {
    return <th className={`px-2 py-2 ${className}`}>{children}</th>;
}
function Td({ className = "", children }) {
    return <td className={`px-2 py-2 text-neutral-300 ${className}`}>{children}</td>;
}

/* ----------------------------- Calculations ---------------------------- */
function calcMortgage({ price, down, years, rate, tax, insurance, pmi, start }) {
    const principal = Math.max(0, num(price) - num(down));
    const r = num(rate) / 100 / 12;
    const n = Math.max(1, Math.round(num(years) * 12));
    const taxM = num(tax) / 12;
    const insM = num(insurance) / 12;
    const ltv = principal / Math.max(1, price) * 100;
    const pmiMonthly = ltv > 80 ? (num(pmi) / 100) * principal / 12 : 0;

    // Monthly principal & interest (standard amortization)
    const monthlyPI = r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : principal / n;
    const monthlyTotal = monthlyPI + taxM + insM + pmiMonthly;

    // Build schedule month-by-month
    let balance = principal;
    const schedule = [];
    let cur = new Date(start || new Date());
    let totalInterest = 0;
    let totalPrincipal = 0;

    for (let i = 1; i <= n; i++) {
        const interest = balance * r;
        const principalPaid = Math.min(balance, monthlyPI - interest);
        balance = Math.max(0, balance - principalPaid);

        schedule.push({
            index: i,
            date: cur.toISOString().slice(0, 10),
            principal: principalPaid,
            interest,
            tax: taxM,
            insurance: insM,
            pmi: pmiMonthly,
            total: principalPaid + interest + taxM + insM + pmiMonthly,
            balance,
        });

        totalInterest += interest;
        totalPrincipal += principalPaid;

        // next month
        cur = new Date(cur);
        cur.setMonth(cur.getMonth() + 1);
    }

    // Aggregate by calendar year
    const byYearMap = new Map();
    for (const row of schedule) {
        const y = new Date(row.date).getFullYear();
        const agg = byYearMap.get(y) || { year: y, principal: 0, interest: 0, taxIns: 0, pmi: 0, total: 0, balance: row.balance };
        agg.principal += row.principal;
        agg.interest += row.interest;
        agg.taxIns += row.tax + row.insurance;
        agg.pmi += row.pmi;
        agg.total += row.total;
        agg.balance = row.balance; // last balance of that year
        byYearMap.set(y, agg);
    }
    const byYear = Array.from(byYearMap.values());

    // Chart data (sample each 6 months to reduce points)
    const chartData = schedule.filter((_, i) => i % 6 === 0 || i === schedule.length - 1).map((r) => ({
        label: r.index,
        balance: r.balance,
        principalPaid: r.principal,
        interestPaid: r.interest,
    }));

    const payoffDate = new Date(schedule[schedule.length - 1].date).toLocaleString(undefined, { month: "long", year: "numeric" });

    return {
        principal,
        ltv,
        monthlyPI,
        monthlyTax: taxM,
        monthlyIns: insM,
        monthlyPMI: pmiMonthly,
        monthlyTotal,
        schedule,
        byYear,
        chartData,
        totalInterest,
        totalPaid: totalPrincipal + totalInterest + taxM * n + insM * n + pmiMonthly * n,
        payoffDate,
    };
}

function exportCSV(rows) {
    const header = ["Month", "Date", "Principal", "Interest", "Tax", "Insurance", "PMI", "Total", "Balance"];
    const lines = [header.join(",")].concat(
        rows.map((r, i) => [i + 1, r.date, r.principal, r.interest, r.tax, r.insurance, r.pmi, r.total, r.balance].join(","))
    );
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "amortization.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

/* ------------------------------ Utils ------------------------------ */
function num(v) {
    if (v === null || v === undefined || v === "") return 0;
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
}
function fmt(x) {
    try {
        return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(x || 0);
    } catch {
        return `$${Math.round(x || 0).toLocaleString()}`;
    }
}
function formatPct(p) {
    return `${(p || 0).toFixed(1)}%`;
}
