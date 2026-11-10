import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Mission } from "@/components/landing/mission";
import { Partners } from "@/components/landing/partners";
import { Projects } from "@/components/landing/projects";
import { Team } from "@/components/landing/team";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Mission />
        <Projects />
        <Team />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
