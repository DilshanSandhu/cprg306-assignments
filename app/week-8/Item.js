export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li onClick={onSelect} className="rounded-xl border border-slate-200 dark:border-slate-800 border-l-4 border-l-blue-500 dark:border-l-blue-800 bg-white dark:bg-slate-900 p-4 shadow-md">
            <div className="space-y-2">
            <h3 className="font-semibold text-blue-600 text-lg">{name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Quantity: {quantity}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Category: {category}</p>
            </div>
        </li>
    );
}