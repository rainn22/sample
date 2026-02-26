import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-8 bg-white px-6 py-24 sm:items-start dark:bg-black">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">Welcome</h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is the home screen. Click the button below to visit the Sample screen.
          </p>
        </div>

        <div className="flex w-full max-w-xs flex-col items-center gap-3 sm:flex-row">
          <Link href="/sample" className="w-full">
            <button className="w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-95">
              Go to Sample
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
