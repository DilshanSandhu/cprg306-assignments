export default function Item({ name, quantity, category }) {
    return (
        <li className="rounded-2xl border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-800 p-4 shadow-sm transition hover:bg-slate-50 hover:shadow-md dark:hover:bg-slate-950">
            <div className="flex items-start justify-between gap-4 p-4">
            <h3 className="font-semibold text-emerald-600">{name}</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300">Quantity: {quantity}</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">Category: {category}</p>
            </div>
        </li>
    );
}