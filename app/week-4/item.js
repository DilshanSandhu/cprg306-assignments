export default function Item({ name, quantity, category }) {
    return (
        <li className="border rounded-lg border-gray-600 p-4 bg-black">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-slate-400">Quantity: {quantity}</p>
            <p className="text-sm text-slate-400">Category: {category}</p>
        </li>
    );
}