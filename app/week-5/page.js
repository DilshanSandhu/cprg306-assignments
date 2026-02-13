import NewItem from "./NewItem";

export default function Page() {

    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-emerald-500 text-center">Add New Item</h1>
                <NewItem />
            </div>
        </main>
    );
}