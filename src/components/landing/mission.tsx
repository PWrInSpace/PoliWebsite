import { CtaButton } from "./cta-button";
import { Section } from "./section";
import { SectionTitle } from "./section-title";

const facts = [
  { value: "2017", label: "Początek naszej historii" },
  { value: "PoliWRocket", label: "Nasz projekt rakietowy" },
  { value: "Wrocław", label: "Tutaj budujemy przyszłość" },
];

export function Mission() {
  return (
    <Section id="o-nas">
      <SectionTitle lines={["Z sali wykładowej", "na platformę startową."]} />

      <div className="grid gap-8 lg:grid-cols-[5fr_6fr] lg:gap-x-[clamp(3rem,6.7vw,6rem)]">
        <p className="text-statement">
          <span className="block">Łączy nas ciekawość.</span>
          <span className="block">Napędza nas inżynieria.</span>
        </p>
        <div className="flex flex-col items-start gap-7">
          <p className="text-muted-foreground text-xl leading-[1.35]">
            Jesteśmy PWr in Space — kołem naukowym Politechniki Wrocławskiej.
            Łączymy różne specjalizacje, żeby projektować, budować i testować
            własne rakiety.
          </p>
          <CtaButton href="#zespol">Historia naszego koła ↗</CtaButton>
        </div>
      </div>

      <dl className="grid gap-7 lg:grid-cols-3 lg:gap-x-[clamp(2rem,5.5vw,5rem)]">
        {facts.map((fact) => (
          <div key={fact.value} className="flex flex-col-reverse gap-2.5">
            <dt className="text-muted-foreground text-[15px] leading-[1.35]">
              {fact.label}
            </dt>
            <dd className="text-stat">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
