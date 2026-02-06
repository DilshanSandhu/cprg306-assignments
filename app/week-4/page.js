import ItemList from './item-list';

export default function Page() {
    return (
        <main className='min-h-screen bg-black text-white flex justify-center'>
            <div className='w-full max-w-md p-6'>
            <h1 className='text-2xl font-bold mb-6 text-center'>Shopping List</h1>
            <ItemList />
        </div>
        </main>
    );
}