"use client";

import { Calendar as CalendarIcon, Home, Info, Upload } from "lucide-react";
import { useMemo, useRef, useState } from "react";

/**
 * AddPropertyPage.jsx — JavaScript + Tailwind (Next.js)
 *
 * A standalone responsive page for adding a property (no modal).
 * Matches your screenshots closely.
 */
export default function AddPropertyPage() {
    const [form, setForm] = useState({
        title: "",
        address: "",
        type: "Single Family",
        zillow: "",
        purchasePrice: "",
        purchaseDate: "",
        currentValue: "",
        files: [],
    });

    const fileInputRef = useRef(null);

    const propertyTypes = useMemo(
        () => ["Single Family", "Multi Family", "Condo", "Townhouse", "Duplex", "Land"],
        []
    );

    const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

    const onDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files || []);
        setForm((s) => ({ ...s, files: [...s.files, ...files] }));
    };

    const onPick = () => fileInputRef.current?.click();

    const removeFile = (idx) => setForm((s) => ({ ...s, files: s.files.filter((_, i) => i !== idx) }));

    const submit = () => {
        if (!form.address?.trim()) return alert("Please enter the address.");
        console.log("Creating property...", form);
    };

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100">
            <div className="myborder px-4 py-8 bg-neutral-800 rounded-lg">
                {/* Header */}
                <div className="mb-6 flex items-center gap-2 pb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 ring-1 ring-inset ring-neutral-800">
                        <Home className="h-5 w-5 brandColor" />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight">Add New Property</h1>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    <Field label="Property Title">
                        <Input
                            placeholder="e.g., Sunset Boulevard Apartment"
                            value={form.title}
                            onChange={set("title")}
                        />
                    </Field>

                    <Field label="Full Address" help="Format: Street, City, State ZIP">
                        <Input
                            placeholder="123 Main St, Los Angeles, CA 90001"
                            value={form.address}
                            onChange={set("address")}
                        />
                    </Field>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Property Type">
                            <select
                                value={form.type}
                                onChange={set("type")}
                                className="w-full appearance-none rounded-xl myborder bg-neutral-950 px-3 py-2 text-sm outline-none focus:border-neutral-600"
                            >
                                {propertyTypes.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                        </Field>

                        <Field label="Zillow URL (Optional)">
                            <Input
                                placeholder="https://zillow.com/..."
                                value={form.zillow}
                                onChange={set("zillow")}
                            />
                        </Field>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Purchase Price">
                            <Input prefix="$" value={form.purchasePrice} onChange={set("purchasePrice")} />
                        </Field>
                        <Field label="Purchase Date">
                            <Input
                                type="date"
                                value={form.purchaseDate}
                                onChange={set("purchaseDate")}
                                rightIcon={<CalendarIcon className="h-4 w-4" />}
                            />
                        </Field>
                    </div>

                    <Field label="Current Value (Optional)" help="Leave empty to use purchase price">
                        <Input prefix="$" value={form.currentValue} onChange={set("currentValue")} />
                    </Field>

                    {/* Upload */}
                    <div>
                        <div className="mb-1 text-xs font-semibold text-neutral-300">Documents (Optional)</div>
                        <div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={onDrop}
                            onClick={onPick}
                            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-neutral-700 bg-neutral-950/70 p-6 text-center hover:border-neutral-600"
                        >
                            <Upload className="h-6 w-6 text-neutral-400" />
                            <div className="text-sm text-neutral-300">Click to upload or drag and drop</div>
                            <div className="text-xs text-neutral-500">Contracts, photos, permits, etc.</div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                className="hidden"
                                onChange={(e) => setForm((s) => ({ ...s, files: [...s.files, ...Array.from(e.target.files || [])] }))}
                            />
                        </div>

                        {form.files.length > 0 && (
                            <ul className="mt-3 divide-y divide-neutral-800 rounded-xl myborder">
                                {form.files.map((f, i) => (
                                    <li key={i} className="flex items-center justify-between px-3 py-2 text-sm">
                                        <span className="truncate text-neutral-300">{f.name}</span>
                                        <button
                                            type="button"
                                            className="text-xs text-red-300 hover:underline"
                                            onClick={() => removeFile(i)}
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-3 border-t border-neutral-800 pt-4">
                        <button
                            type="button"
                            className="rounded-xl myborder bg-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800"
                            onClick={() => setForm({ title: "", address: "", zillow: "", purchasePrice: "", currentValue: "", purchaseDate: "", files: [] })}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={submit}
                            className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-cyan-400"
                        >
                            Create Property
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

function Field({ label, help, children }) {
    return (
        <div>
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
        <div className={`relative myborder ${className}`}>
            {prefix && (
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500">{prefix}</span>
            )}
            <input
                {...props}
                className={`w-full rounded-xl myborder bg-neutral-950 px-3 py-2 text-sm outline-none placeholder:text-neutral-500 focus:border-neutral-600 ${prefix ? "pl-7" : ""
                    } ${rightIcon ? "pr-9" : ""}`}
            />
            {rightIcon && (
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">{rightIcon}</span>
            )}
        </div>
    );
}

function num(v) {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
}