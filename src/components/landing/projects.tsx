import Image from "next/image";

import { CtaButton } from "./cta-button";
import { Section } from "./section";
import { SectionTitle } from "./section-title";

const projects = [
  {
    title: "R8 Alcyone",
    description: "Kolejny krok w rozwoju napędu ciekłego.",
    image: "/images/r8-alcyone.png",
    sizes: "(min-width: 1024px) 64vw, 100vw",
  },
  {
    title: "R7 Together",
    description: "Własny silnik. Wspólna misja.",
    image: "/images/r7-together.png",
    sizes: "(min-width: 1024px) 36vw, 100vw",
  },
];

const r7Specs = [
  { value: "4,58 m", label: "Długość" },
  { value: "3600 N", label: "Maksymalny ciąg" },
  { value: "258 m/s", label: "Prędkość do" },
];

export function Projects() {
  return (
    <Section id="projekty">
      <SectionTitle lines={["Pomysły, które", "odrywają się od ziemi."]} />

      <div className="grid gap-6 lg:grid-cols-[824fr_448fr]">
        {projects.map((project) => (
          <a
            key={project.title}
            href="#projekty"
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-[8/7] max-h-[70svh] overflow-clip sm:aspect-[16/9] lg:aspect-auto lg:h-[min(27.8vw,25rem)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes={project.sizes}
                className="object-cover"
              />
            </div>
            <div className="flex items-start justify-between gap-4">
              <p className="text-project">{project.title}</p>
              <span aria-hidden className="text-project">
                ↗
              </span>
            </div>
            <p className="text-muted-foreground text-[17px] leading-[1.35]">
              {project.description}
            </p>
          </a>
        ))}
      </div>

      <p className="text-muted-foreground leading-[1.35]">
        R7 Together — dane techniczne
      </p>
      <dl className="bg-card grid w-full gap-7 p-6 sm:p-8 lg:max-w-[66.25rem] lg:grid-cols-3 lg:gap-12">
        {r7Specs.map((spec) => (
          <div key={spec.label} className="flex flex-col-reverse gap-2">
            <dt className="text-muted-foreground text-sm leading-[1.35]">
              {spec.label}
            </dt>
            <dd className="text-stat">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <CtaButton href="#projekty">Zobacz wszystkie projekty ↗</CtaButton>
    </Section>
  );
}
