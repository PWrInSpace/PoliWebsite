import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SiteNav } from "./site-nav";

export function Hero() {
  return (
    <header id="top" className="relative overflow-clip">
      <Image
        src="/images/hero-r7-launch.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-black/97 via-black/45 via-[48%] to-black/70"
      />

      <div className="p-gutter relative mx-auto flex min-h-svh w-full max-w-[90rem] flex-col justify-between gap-12">
        <SiteNav />

        <div className="flex flex-col gap-8 lg:items-center lg:text-center">
          <h1 className="text-display">
            <span className="block">Tu zaczyna się</span>
            <span className="block">
              kosmiczna
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>
              przyszłość.
            </span>
          </h1>
          <p className="text-lead lg:max-w-[42.5rem]">
            <span className="block">Projektujemy. Budujemy. Startujemy.</span>
            <span className="block">
              Studencka inżynieria rakietowa z Wrocławia.
            </span>
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CtaButton href="#projekty" variant="default">
              Poznaj nasze projekty
            </CtaButton>
            <CtaButton href="#o-nas">Odkryj PWr in Space</CtaButton>
          </div>
        </div>

        <div className="flex items-start justify-between text-[13px] leading-[1.35]">
          <p>Politechnika Wrocławska</p>
          <a href="#o-nas">Przewiń w dół ↓</a>
        </div>
      </div>
    </header>
  );
}
