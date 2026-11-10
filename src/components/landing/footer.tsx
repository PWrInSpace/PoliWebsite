import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionTitle } from "./section-title";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/pwrinspace/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/pwr-in-space/" },
  { label: "Facebook", href: "https://www.facebook.com/pwrinspace" },
  { label: "YouTube", href: "https://www.youtube.com/@poliwrocket1294" },
];

export function Footer() {
  return (
    <footer
      id="kontakt"
      className="px-gutter pt-[clamp(3rem,5vw,4.5rem)] pb-12"
    >
      <div className="mx-auto flex w-full max-w-[81rem] flex-col gap-12">
        <div className="grid items-center gap-16 lg:grid-cols-[736fr_496fr]">
          <div className="flex flex-col items-start gap-6">
            <SectionTitle
              lines={["Następny start?", "Zróbmy go razem."]}
              size="lg"
            />
            <p className="text-lead-lg text-muted-foreground">
              Dołącz do zespołu lub wesprzyj naszą kolejną misję.
            </p>
            <div className="pt-2">
              <CtaButton
                href="mailto:pwrinspace@pwr.edu.pl"
                variant="default"
                className="w-auto gap-3"
              >
                Porozmawiajmy <span aria-hidden>↗</span>
              </CtaButton>
            </div>
          </div>

          <div className="relative order-first mx-auto aspect-square w-full max-w-[min(26rem,55svh)] lg:order-last">
            <Image
              src="/images/planet.png"
              alt="Planeta w odcieniach błękitu z jasnymi pasmami chmur"
              fill
              sizes="(min-width: 1024px) 26rem, 90vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div aria-hidden className="bg-muted-foreground/18 h-px" />

          <div className="flex flex-col gap-y-16 lg:flex-row lg:justify-between lg:gap-x-12">
            <Image
              src="/images/pwr-in-space-logo-footer.svg"
              alt="PWr in Space"
              width={180}
              height={65}
              className="h-[clamp(3.4rem,3.2rem+0.5vw,4.06rem)] w-auto self-start"
            />
            <div className="flex flex-col gap-[18px] leading-[1.35] lg:w-[28rem]">
              <a href="mailto:pwrinspace@pwr.edu.pl" className="text-xl">
                pwrinspace@pwr.edu.pl
              </a>
              <p className="text-muted-foreground text-[15px]">
                Politechnika Wrocławska · Wrocław
              </p>
            </div>
            <ul className="grid grid-cols-[auto_auto] justify-start gap-x-6 gap-y-4 leading-[1.35] lg:w-[25rem]">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-muted-foreground flex justify-between text-xs leading-[1.35]">
            <span>PWr in Space</span>
            <span>PL / EN</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
