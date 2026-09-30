import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import AnimatedBackground from '@/components/portfolio/AnimatedBackground';
import SocialSidebar from '@/components/portfolio/SocialSidebar';
import ChatWidget from '@/components/portfolio/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <SocialSidebar />
      
      <main className="relative z-10">
        <section id="chat-intro" className="relative flex min-h-[100dvh] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="absolute inset-0 hero-gradient" />
          
          <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center justify-center pt-10">
            <div className="animate-fade-in-up shrink-0 text-center">
              <span className="section-kicker">Interactive Experience</span>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-glow sm:text-4xl md:text-5xl">
                This is not a regular portfolio website.
              </h1>
              <p className="mt-3 mb-8 text-base text-muted-foreground sm:text-lg">
                I'm an AI Engineer, so I built an AI to answer your questions. Talk to it below, or scroll down to browse normally.
              </p>
            </div>
            
            <div className="w-full flex-1">
              <ChatWidget />
            </div>
          </div>
        </section>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
