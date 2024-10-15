import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Welcome to Baru Store</h1>
      <Link href="/products" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go to Products
      </Link>
    </div>
  );
}
