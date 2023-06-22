import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 p-10 p-20 lg:p-36 xl:grid-cols-2">
      <header className="mb-10 flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-neutral-200">Wan Isa</h1>
        <h2 className="text-lg font-medium text-neutral-200">
          CEO, Lead Engineer at MidzDev
        </h2>
        <p className="w-80 text-neutral-400">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
        <div className="mt-4 flex gap-4 text-neutral-400">
          <Link href="https://gitub.com/midzdev">
            <GitHubIcon />
          </Link>
          <Link href="https://twitter.com/midzdev" target="_blank">
            <TwitterIcon />
          </Link>
        </div>
      </header>
      <main className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="font-medium text-white">About</span>
          <article className="text-neutral-400">
            Back in 2021, I decided to try my hand at creating Roblox games and
            ended up hating game development and tumbled head-first into the
            rabbit hole of coding and web development. Fast-forward to today,
            and I’ve had the privilege of building software for a database
            company, a start-up.
            <br />
            <br />
            My main focus these days are building products and leading projects
            for our clients at MidzDev. In my free time, I've also released a
            personal project that improves developer productivity.
          </article>
        </div>
        <div>
          <span className="font-medium text-white">Experience</span>
          <div className="flex flex-col">
            <div className="flex items-center gap-20 rounded-md p-4 hover:bg-neutral-900">
              <span className="text-sm text-neutral-400">2022 - PRESENT</span>
              <span className="font-medium text-neutral-200">
                CEO, Lead Engineer • MidzDev
              </span>
            </div>
            <div className="flex items-center gap-20 rounded-md p-4 hover:bg-neutral-900">
              <span className="text-sm text-neutral-400">2022 - PRESENT</span>
              <span className="font-medium text-neutral-200">
                Contributor • Supabase
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ICONS

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="h-6 w-6 duration-200 hover:text-white"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="h-6 w-6 duration-200 hover:text-white"
    viewBox="0 0 16 16"
  >
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
  </svg>
);
