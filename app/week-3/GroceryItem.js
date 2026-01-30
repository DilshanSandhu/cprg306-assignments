export default function GroceryItem({name, quantity, category}) 
{
    return (
        <li className="border border-white-400 rounded-lg p-4">
            <p className="text-slate-100">
                {name}
            </p>

            <p className="text-sm text-white-500">
                Quantity: {quantity}  
            </p>
            <p className="text-sm text-white-500">
                Category: {category}
            </p>
        </li> 
    );
}