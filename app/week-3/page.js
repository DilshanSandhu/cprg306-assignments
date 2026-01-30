import GroceryItemList from "./GroceryItemList";

export default function Page() {
    return (
        <main className="min-h-screen bg-black text-white p-8">
            <h1 className="text-2xl font-semibold mb-6 text-center">Shopping List</h1>

            <div className="flex justify-center">
            <GroceryItemList />
            </div>
        </main>
    );
}