import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import WhyWorkWithMe from "@/components/WhyWorkWithMe/WhyWorkWithMe";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles["home-page"]} id="home">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <WhyWorkWithMe />
    </main>
  );
}
