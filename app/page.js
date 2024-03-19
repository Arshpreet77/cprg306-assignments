import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4 bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-blue-500 mb-8">
        CPRG-306: Web Development 2
      </h1>
      <div className="flex justify-center items-center">
        <Link href="/week-2">Assignments week-2</Link>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/week-3">Assignments week-3</Link>
      </div>

      <div className="flex justify-center items-center">
        <Link href="/week-4">Assignments week-4</Link>
      </div>

      <div className="flex justify-center items-center">
        <Link href="/week-5">Assignments week-5</Link>
        </div>

      <div className="flex justify-center items-center">
        <Link href="/week-6">Assignments week-6</Link>
        </div>

        <div className="flex justify-center items-center">
        <Link href="/week-7">Assignments week-7</Link>
        </div>

        <div className="flex justify-center items-center">
        <Link href="/week-8">Assignments week-8</Link>
        </div>
    </main>
  );
}
