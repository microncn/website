import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10 grid grid-cols-1 xl:grid-cols-2 lg:p-36 p-20">
      <header className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl text-neutral-200 font-bold">Wan Isa</h1>
        <h2 className="text-lg font-medium text-neutral-200">
          CEO, Lead Engineer at MidzDev
        </h2>
        <p className="text-neutral-400 w-80">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
      </header>
      <main className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-white font-medium">About</span>
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
          <span className="text-white font-medium">Experience</span>
          <div className="flex flex-col">
            <div className="flex  gap-20 hover:bg-neutral-950 p-4 rounded-md items-center">
              <div className="text-sm text-neutral-400">2022 - PRESENT</div>
              <div className="">
                <h1 className="text-neutral-200 font-medium">
                  CEO, Lead Engineer • MidzDev
                </h1>
              </div>
            </div>
            <div className="flex  gap-20 hover:bg-neutral-950 p-4 rounded-md items-center">
              <div className="text-sm text-neutral-400">2022 - PRESENT</div>
              <div className="">
                <h1 className="text-neutral-200 font-medium">
                  Contributor • Supabase
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
