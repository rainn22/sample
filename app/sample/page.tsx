import Link from 'next/link';
import Image from 'next/image';

export default function SamplePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl rounded-md bg-white p-10 text-left dark:bg-black">
        <div className="flex items-center gap-4">
          <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={72} height={16} />
          <h1 className="text-2xl font-semibold">Sample Screen</h1>
        </div>

        <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300">
          This is the sample page. It demonstrates navigation from the home screen to a secondary screen.
        </p>

        <div className="mt-8">
          <Link href="/">
            <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:opacity-95">
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
