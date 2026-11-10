import Image from "next/image";

import { CtaButton } from "./cta-button";
import { Section } from "./section";
import { SectionTitle } from "./section-title";

const partners = [
  {
    name: "Politechnika Wrocławska",
    logo: "/images/partners/politechnika-wroclawska.png",
  },
  { name: "Ansys", logo: "/images/partners/ansys.png" },
  { name: "Scanway Space", logo: "/images/partners/scanway-space.png" },
  { name: "Air Products", logo: "/images/partners/air-products.png" },
];

export function Partners() {
  return (
    <Section id="partnerzy" className="gap-10">
      <SectionTitle lines={["Wspólnie sięgamy wyżej."]} size="sm" />
      <p className="text-lead text-muted-foreground">
        Technologia, wiedza i wsparcie, które pomagają zamieniać plany w starty.
      </p>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <li key={partner.name} className="bg-card p-6 lg:p-8">
            <div className="relative aspect-[13/5] w-full">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 90vw"
                className="object-contain"
              />
            </div>
          </li>
        ))}
      </ul>

      <CtaButton href="#partnerzy">Poznaj naszych partnerów ↗</CtaButton>
    </Section>
  );
}
