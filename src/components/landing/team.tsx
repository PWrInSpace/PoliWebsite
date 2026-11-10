import Image from "next/image";

import { CtaButton } from "./cta-button";
import { Section } from "./section";
import { SectionTitle } from "./section-title";

export function Team() {
  return (
    <Section id="zespol" className="gap-10">
      <div className="grid gap-6 lg:grid-cols-[71fr_49fr] lg:gap-x-[clamp(3rem,6.7vw,6rem)]">
        <SectionTitle lines={["Za każdą rakietą", "stoją ludzie."]} />
        <p className="text-muted-foreground text-xl leading-[1.35]">
          Od pierwszego szkicu do odliczania. Poznaj osoby, które sprawiają, że
          nasze projekty lecą coraz dalej.
        </p>
      </div>

      <div className="relative aspect-[342/280] max-h-[75svh] overflow-clip sm:aspect-[16/9] lg:aspect-[1296/560]">
        <Image
          src="/images/team-far-out.png"
          alt="Zespół PWr in Space z polską flagą podczas zawodów FAR-OUT"
          fill
          sizes="(min-width: 1024px) 81rem, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-6 sm:flex-row">
        <CtaButton href="#zespol" variant="default">
          Poznaj nasz zespół ↗
        </CtaButton>
        <CtaButton href="#zespol">Zobacz nasze sukcesy ↗</CtaButton>
      </div>
    </Section>
  );
}
