import Header from "@/components/Header";
import {
  getExperiences,
  getPageInfo,
  getProjects,
  getSkills,
} from "../lib/data";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import "./animations.scss";
import HeroReturn from "@/components/HeroReturn";

export default async function Home() {
  const pageInfo = await getPageInfo();
  const experiences = await getExperiences();
  const skills = await getSkills();
  const projects = await getProjects();
  return (
    <main className="bg-gradient-to-b from-[#0F131B] to-[#161E2A] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-track-black relative scrollbar-thumb-gray-600/30 scroll-smooth scrollbar-thin">
      <Header />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <div className="divider flex flex-col gap-32">
        <section
          id="about"
          className="snap-start h-screen w-full overflow-y-scroll pt-24"
        >
          <About pageInfo={pageInfo} />
        </section>
        <section
          id="experience"
          className="snap-start h-screen w-full overflow-y-scroll pt-24"
        >
          <WorkExperience experiences={experiences} />
        </section>
        <section
          id="projects"
          className="snap-start h-screen w-full overflow-y-scroll pt-16"
        >
          <Projects projects={projects} />
        </section>
        <section
          id="skills"
          className="snap-start h-screen w-full overflow-y-scroll"
        >
          <Skills skills={skills} />
        </section>
        <section
          id="contact"
          className="snap-start h-screen w-full overflow-y-scroll"
        >
          <Contact />
        </section>
      </div>
      <HeroReturn />
    </main>
  );
}
