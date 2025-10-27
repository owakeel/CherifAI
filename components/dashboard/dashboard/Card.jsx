

export default function Card({ className = "", children }) {
    return (
        <div className={`rounded-2xl myborder p-4 shadow-lg ${className}`}>
            {children}
        </div>
    );
}

