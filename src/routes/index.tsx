import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Trophy,
  Users,
  Building2,
  Snowflake,
  Waves,
  Mountain,
  Dumbbell,
  FlaskConical,
  Cpu,
  BookOpen,
  Palette,
  Music2,
  Bus,
  ShieldCheck,
  Stethoscope,
  Leaf,
  Trees,
  Heart,
  Brain,
  Lightbulb,
  Award,
  Target,
  Compass,
  Globe2,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
  Camera,
  Microscope,
  Drama,
  Gamepad2,
} from "lucide-react";

import heroCampus from "@/assets/hero-campus.jpg";
import campusCbse from "@/assets/campus-cbse.jpg";
import campusState from "@/assets/campus-state.jpg";
import lifeClassroom from "@/assets/life-classroom.jpg";
import lifeSwimming from "@/assets/life-swimming.jpg";
import lifeHorse from "@/assets/life-horse.jpg";
import lifeScience from "@/assets/life-science.jpg";
import lifeRobotics from "@/assets/life-robotics.jpg";
import lifeBasketball from "@/assets/life-basketball.jpg";
import lifeLibrary from "@/assets/life-library.jpg";
import lifeCultural from "@/assets/life-cultural.jpg";
import lifeMusic from "@/assets/life-music.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Gen School — Empowering Young Minds to Build Tomorrow" },
      {
        name: "description",
        content:
          "World-class CBSE & State Board campuses. Innovation, discipline, creativity and holistic development for tomorrow's leaders.",
      },
      { property: "og:title", content: "Smart Gen School" },
      {
        property: "og:description",
        content: "Premium education through innovation, discipline and creativity.",
      },
    ],
  }),
  component: SmartGenHome,
});

/* ============================================================== */
/*  Reusable animation primitives                                 */
/* ============================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const },
  }),
};

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ============================================================== */
/*  Page                                                          */
/* ============================================================== */

function SmartGenHome() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <CursorGlow />
      <BackgroundOrbs />
      <Nav />
      <Hero />
      <About />
      <Campuses />
      <WhyChoose />
      <Facilities />
      <Academics />
      <StudentLife />
      <Achievements />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

/* ============================================================== */

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[500px] w-[500px] rounded-full opacity-40 mix-blend-multiply blur-3xl md:block"
      style={{
        background: "radial-gradient(closest-side, oklch(0.7 0.18 258 / 0.45), transparent 70%)",
        transition: "transform 0.25s ease-out",
      }}
    />
  );
}

function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="float-slow absolute -left-32 top-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-royal/30 to-transparent blur-3xl" />
      <div className="float-x absolute right-[-10rem] top-[40rem] h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-emerald/25 to-transparent blur-3xl" />
      <div className="float-slow absolute left-[20%] top-[120rem] h-[24rem] w-[24rem] rounded-full bg-gradient-to-br from-gold/30 to-transparent blur-3xl" />
    </div>
  );
}

/* ============================================================== */
/*  Navigation                                                    */
/* ============================================================== */

const NAV = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Campuses", "#campuses"],
  ["Facilities", "#facilities"],
  ["Academics", "#academics"],
  ["Gallery", "#gallery"],
  ["Achievements", "#achievements"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
] as const;

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6 ${scrolled ? "shadow-[0_15px_50px_-20px_oklch(0.18_0.05_265/0.45)]" : ""}`}
        >
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy via-royal to-emerald text-white shadow-md">
              <GraduationCap className="h-5 w-5" />
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/40" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-tight text-navy">
                SMART GEN
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                School of Tomorrow
              </span>
            </span>
          </a>
          <ul className="hidden items-center gap-7 xl:flex">
            {NAV.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link text-sm font-medium text-navy/80 hover:text-navy"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden xl:block">
            <a
              href="#contact"
              className="ripple group inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white shadow-md transition-transform hover:-translate-y-0.5"
            >
              Visit Us{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/50 bg-white/40 text-navy backdrop-blur xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-2 max-w-7xl px-4 sm:px-6 xl:hidden"
          >
            <div className="glass rounded-2xl p-4">
              <ul className="grid grid-cols-2 gap-1">
                {NAV.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-navy hover:bg-white/60"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ============================================================== */
/*  Hero                                                          */
/* ============================================================== */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={heroCampus}
          alt="Smart Gen campus at golden hour"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="hero-overlay absolute inset-0 -z-10" />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-white/70"
            style={{
              left: `${(i * 53) % 100}%`,
              bottom: `-${(i * 17) % 30}px`,
              width: `${4 + (i % 4) * 2}px`,
              height: `${4 + (i % 4) * 2}px`,
              animation: `particle-rise ${14 + (i % 9)}s linear ${i * 0.6}s infinite`,
              opacity: 0.55,
            }}
          />
        ))}
      </div>

      {/* Floating geo shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="float-slow absolute left-[8%] top-[22%] h-24 w-24 rotate-12 rounded-3xl border border-white/30 bg-white/10 backdrop-blur-md" />
        <div className="float-x absolute right-[10%] top-[32%] h-16 w-16 rounded-full border border-gold/40 bg-gold/15 backdrop-blur-md" />
        <div className="float-slow absolute right-[18%] bottom-[18%] h-20 w-20 rotate-45 rounded-2xl border border-emerald/40 bg-emerald/10 backdrop-blur-md" />
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 sm:pt-32"
      >
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="chip mb-6 self-start text-white"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />A Legacy of Excellence Since 2000
        </motion.span>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="max-w-5xl text-balance text-5xl font-medium leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Empowering Young Minds
          <br className="hidden sm:block" />
          <span className="gold-text italic">to Build Tomorrow.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
        >
          Smart Gen School provides world-class education through innovation, discipline, creativity
          and holistic development — preparing tomorrow's leaders today.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#campuses"
            className="ripple group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-sm font-semibold text-navy shadow-[0_20px_50px_-15px_oklch(0_0_0/0.5)] transition-transform hover:-translate-y-1"
          >
            <Compass className="h-4 w-4" /> Explore Campus
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="ripple group inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-transform hover:-translate-y-1 hover:bg-white/20"
          >
            <Award className="h-4 w-4 text-gold" /> Discover Excellence
          </a>
        </motion.div>

        {/* Glass stat strip */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            ["25+", "Years"],
            ["5K+", "Students"],
            ["250+", "Faculty"],
            ["100%", "Results"],
          ].map(([n, l]) => (
            <div key={l} className="glass rounded-2xl px-4 py-3 text-center">
              <div className="font-display text-2xl text-white">{n}</div>
              <div className="text-[11px] uppercase tracking-widest text-white/70">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block h-2 w-1 rounded-full bg-white/80"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  About                                                         */
/* ============================================================== */

const PILLARS = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Rigorous curriculum, mastery learning, top-tier outcomes.",
  },
  {
    icon: Heart,
    title: "Character Building",
    desc: "Values, empathy, integrity at the core of every classroom.",
  },
  {
    icon: Target,
    title: "Leadership",
    desc: "Student-led councils, debate, MUNs and real-world projects.",
  },
  {
    icon: Trophy,
    title: "Sports",
    desc: "From swimming to equestrian — a champion's training ground.",
  },
  { icon: Cpu, title: "Technology", desc: "Smart classrooms, robotics, AI literacy from day one." },
  {
    icon: Lightbulb,
    title: "Creativity",
    desc: "Art, music, theatre and design woven into daily learning.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline",
    desc: "Structured environment that nurtures focus and respect.",
  },
  {
    icon: Brain,
    title: "Holistic Growth",
    desc: "Mind, body & spirit — developed in equal measure.",
  },
];

function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="chip text-navy">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> About Smart Gen
            </span>
            <h2 className="mt-5 text-balance text-4xl font-medium leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
              A school where tradition meets <span className="italic text-royal">tomorrow.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              For over two decades Smart Gen has shaped curious thinkers, principled leaders and
              creative builders. Our two flagship campuses combine world-class infrastructure with
              the warmth of a community that truly knows every child.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <article className="tilt-hover group relative h-full overflow-hidden rounded-3xl bg-card p-6 ring-1 ring-border">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-royal/15 to-emerald/10 blur-2xl transition-opacity group-hover:opacity-80" />
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-navy to-royal text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  Campuses                                                      */
/* ============================================================== */

const CBSE_FEATURES = [
  ["Air Conditioned Smart Classrooms", Snowflake],
  ["Digital Learning Environment", Cpu],
  ["Highly Qualified Faculty", Users],
  ["Horse Riding Arena", Mountain],
  ["Olympic Swimming Pool", Waves],
  ["Basketball & Volleyball Courts", Dumbbell],
  ["Huge Cricket & Football Grounds", Trophy],
  ["Robotics & STEM Lab", Cpu],
  ["Science & Computer Labs", FlaskConical],
  ["Grand Library", BookOpen],
  ["Art & Music Studios", Palette],
  ["Eco-friendly Green Campus", Leaf],
  ["School Transport", Bus],
  ["24×7 CCTV Security", ShieldCheck],
  ["On-campus Medical Room", Stethoscope],
  ["Modern Infrastructure", Building2],
] as const;

const STATE_FEATURES = [
  ["Spacious Bright Classrooms", Building2],
  ["Pleasant Learning Environment", Leaf],
  ["Excellent Teaching Faculty", Users],
  ["Smart Learning Methods", Cpu],
  ["Computer Laboratory", Cpu],
  ["Science Laboratory", FlaskConical],
  ["Well-stocked Library", BookOpen],
  ["Spacious Playground", Trophy],
  ["Cultural Activities", Drama],
  ["Indoor & Outdoor Sports", Dumbbell],
  ["Beautiful Green Campus", Trees],
  ["Clean & Safe Environment", ShieldCheck],
  ["Affordable Quality Education", Award],
  ["Student-friendly Atmosphere", Heart],
] as const;

function Campuses() {
  return (
    <section id="campuses" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="chip text-navy">
            <Building2 className="h-3.5 w-3.5 text-gold" /> Our Campuses
          </span>
          <h2 className="mt-5 text-balance text-4xl font-medium text-navy sm:text-5xl lg:text-6xl">
            Two campuses. <span className="italic text-royal">One promise.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Designed for different boards, equally devoted to nurturing every child.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <CampusCard
            tag="CBSE Campus"
            title="The Smart Gen Flagship"
            image={campusCbse}
            accent="from-royal to-emerald"
            features={CBSE_FEATURES.map((f) => ({ label: f[0], Icon: f[1] }))}
          />
          <CampusCard
            tag="State Board Campus"
            title="Rooted in Heritage"
            image={campusState}
            accent="from-gold to-emerald"
            features={STATE_FEATURES.map((f) => ({ label: f[0], Icon: f[1] }))}
          />
        </div>
      </div>
    </section>
  );
}

function CampusCard({
  tag,
  title,
  image,
  features,
  accent,
}: {
  tag: string;
  title: string;
  image: string;
  accent: string;
  features: { label: string; Icon: React.ComponentType<{ className?: string }> }[];
}) {
  return (
    <Reveal>
      <article className="tilt-hover group relative overflow-hidden rounded-[2rem] bg-card ring-1 ring-border">
        <div className="relative h-72 overflow-hidden sm:h-80">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full scale-105 object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <span
              className={`chip mb-3 text-white`}
              style={{ background: "color-mix(in oklab, white 18%, transparent)" }}
            >
              <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${accent}`} /> {tag}
            </span>
            <h3 className="font-display text-3xl text-white sm:text-4xl">{title}</h3>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {features.map(({ label, Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.025, duration: 0.4 }}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/40 px-3 py-2.5 transition-colors hover:border-royal/40 hover:bg-secondary"
              >
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${accent} text-white shadow-sm`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-navy">{label}</span>
              </motion.div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal hover:gap-3 transition-all"
          >
            Schedule a campus tour <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

/* ============================================================== */
/*  Why Choose                                                    */
/* ============================================================== */

const WHY = [
  {
    icon: Users,
    t: "Experienced Faculty",
    d: "Master educators with decades of mentoring excellence.",
  },
  {
    icon: Target,
    t: "Individual Attention",
    d: "Low ratios. Every child seen, heard and challenged.",
  },
  {
    icon: GraduationCap,
    t: "Academic Excellence",
    d: "Consistent 100% board results year after year.",
  },
  { icon: Cpu, t: "Digital Classrooms", d: "Immersive smart panels and adaptive learning tools." },
  { icon: Trophy, t: "Sports Excellence", d: "From state champions to national medallists." },
  {
    icon: Heart,
    t: "Personality Development",
    d: "Confidence, communication and emotional intelligence.",
  },
  { icon: Award, t: "Leadership Skills", d: "Student councils, MUNs and community service." },
  {
    icon: Lightbulb,
    t: "Modern Learning",
    d: "Project-based, inquiry-led, future-ready pedagogy.",
  },
  { icon: ShieldCheck, t: "Safe Campus", d: "24×7 security, trained staff and on-site medical." },
  { icon: Globe2, t: "Value Based Education", d: "Rooted in ethics, open to a global mindset." },
];

function WhyChoose() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="chip text-navy">
            <Star className="h-3.5 w-3.5 text-gold" /> Why Smart Gen
          </span>
          <h2 className="mt-5 text-balance text-4xl font-medium text-navy sm:text-5xl lg:text-6xl">
            Ten reasons families <span className="italic text-royal">choose us first.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {WHY.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.04}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-card p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:ring-royal/40 hover:shadow-[0_30px_60px_-25px_oklch(0.52_0.18_258/0.5)]">
                <div
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--royal) 18%, transparent), transparent 70%)",
                  }}
                />
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-navy to-royal text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  Facilities                                                    */
/* ============================================================== */

const FACILITIES = [
  { t: "Air Conditioned Classrooms", img: lifeClassroom, Icon: Snowflake },
  { t: "Olympic Swimming Pool", img: lifeSwimming, Icon: Waves },
  { t: "Horse Riding Arena", img: lifeHorse, Icon: Mountain },
  { t: "Basketball Court", img: lifeBasketball, Icon: Dumbbell },
  { t: "Cricket & Football Grounds", img: lifeBasketball, Icon: Trophy },
  { t: "Robotics & STEM Lab", img: lifeRobotics, Icon: Cpu },
  { t: "Science Laboratories", img: lifeScience, Icon: Microscope },
  { t: "Computer Labs", img: lifeClassroom, Icon: Cpu },
  { t: "Grand Library", img: lifeLibrary, Icon: BookOpen },
  { t: "Auditorium", img: lifeCultural, Icon: Drama },
  { t: "Music Room", img: lifeMusic, Icon: Music2 },
  { t: "Art Studio", img: lifeMusic, Icon: Palette },
  { t: "School Transport", img: lifeClassroom, Icon: Bus },
  { t: "24×7 CCTV Security", img: lifeClassroom, Icon: ShieldCheck },
  { t: "Medical Facility", img: lifeClassroom, Icon: Stethoscope },
  { t: "Indoor Activity Zone", img: lifeRobotics, Icon: Gamepad2 },
];

function Facilities() {
  return (
    <section id="facilities" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="chip text-navy">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Facilities
          </span>
          <h2 className="mt-5 text-balance text-4xl font-medium text-navy sm:text-5xl lg:text-6xl">
            World-class spaces for <span className="italic text-royal">every passion.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map(({ t, img, Icon }, i) => (
            <Reveal key={t} delay={i * 0.03}>
              <article className="group relative h-72 overflow-hidden rounded-3xl ring-1 ring-border shadow-[0_18px_50px_-25px_oklch(0.18_0.05_265/0.4)] transition-transform hover:-translate-y-1.5">
                <img
                  src={img}
                  alt={t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                    <Icon className="h-4 w-4 text-navy" />
                    <span className="text-xs font-semibold text-navy">Facility</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl text-white">{t}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  Academics                                                     */
/* ============================================================== */

const PROGRAMS = [
  {
    age: "Age 3 – 5",
    t: "Pre Primary",
    d: "Play, wonder and discovery — building joyful first learners.",
    Icon: Sparkles,
  },
  {
    age: "Class 1 – 5",
    t: "Primary",
    d: "Foundational literacy, numeracy and a love for inquiry.",
    Icon: BookOpen,
  },
  {
    age: "Class 6 – 8",
    t: "Middle School",
    d: "Curiosity meets rigour — critical thinking takes root.",
    Icon: Brain,
  },
  {
    age: "Class 9 – 12",
    t: "High School",
    d: "Specialised streams, university readiness, life skills.",
    Icon: GraduationCap,
  },
];

function Academics() {
  return (
    <section id="academics" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="chip text-navy">
            <GraduationCap className="h-3.5 w-3.5 text-gold" /> Academic Programs
          </span>
          <h2 className="mt-5 text-balance text-4xl font-medium text-navy sm:text-5xl lg:text-6xl">
            A continuum from <span className="italic text-royal">first steps to scholars.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map(({ age, t, d, Icon }, i) => (
            <Reveal key={t} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-b from-card to-secondary/40 p-7 ring-1 ring-border transition-all hover:-translate-y-2 hover:ring-royal/40 hover:shadow-[0_30px_60px_-20px_oklch(0.52_0.18_258/0.4)]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy via-royal to-emerald text-white shadow-md">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-royal">
                  {age}
                </div>
                <h3 className="mt-2 font-display text-2xl text-navy">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy/70 transition-all group-hover:gap-3 group-hover:text-royal">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  Student Life (masonry)                                        */
/* ============================================================== */

const LIFE = [
  { src: lifeClassroom, t: "Smart Classrooms", span: "row-span-2" },
  { src: lifeScience, t: "Science Experiments", span: "" },
  { src: lifeSwimming, t: "Swimming", span: "row-span-2" },
  { src: lifeBasketball, t: "Sports", span: "" },
  { src: lifeHorse, t: "Horse Riding", span: "" },
  { src: lifeRobotics, t: "Robotics", span: "row-span-2" },
  { src: lifeLibrary, t: "Library", span: "" },
  { src: lifeCultural, t: "Cultural Events", span: "" },
  { src: lifeMusic, t: "Music & Dance", span: "" },
];

function StudentLife() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="chip text-navy">
            <Camera className="h-3.5 w-3.5 text-gold" /> Student Life
          </span>
          <h2 className="mt-5 text-balance text-4xl font-medium text-navy sm:text-5xl lg:text-6xl">
            Every day, an <span className="italic text-royal">adventure.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:grid-cols-4">
          {LIFE.map(({ src, t, span }, i) => (
            <Reveal key={t + i} delay={i * 0.04} className={span}>
              <figure className="group relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-border shadow-[0_18px_50px_-25px_oklch(0.18_0.05_265/0.4)]">
                <img
                  src={src}
                  alt={t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 font-display text-lg text-white sm:p-5 sm:text-xl">
                  {t}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  Achievements                                                  */
/* ============================================================== */

const STATS = [
  { n: 5000, s: "+", l: "Students Thriving", Icon: Users },
  { n: 250, s: "+", l: "Faculty Members", Icon: GraduationCap },
  { n: 25, s: "+", l: "Years of Excellence", Icon: Award },
  { n: 100, s: "%", l: "Academic Results", Icon: Target },
  { n: 50, s: "+", l: "Awards & Honours", Icon: Trophy },
  { n: 100, s: "+", l: "Sports Championships", Icon: Dumbbell },
];

function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="navy-grad grad-anim relative overflow-hidden rounded-[2.5rem] p-8 text-white sm:p-14 lg:p-20">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-royal/40 blur-3xl" />

          <Reveal className="relative max-w-2xl">
            <span className="chip text-white">
              <Trophy className="h-3.5 w-3.5 text-gold" /> Achievements
            </span>
            <h2 className="mt-5 text-balance text-4xl font-medium sm:text-5xl lg:text-6xl">
              Numbers that tell our <span className="gold-text italic">story.</span>
            </h2>
            <p className="mt-5 text-lg text-white/75">
              A quarter-century of consistent excellence — measured not just in results, but in
              lives transformed.
            </p>
          </Reveal>

          <div className="relative mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {STATS.map(({ n, s, l, Icon }, i) => (
              <Reveal key={l} delay={i * 0.07}>
                <div className="glass-dark relative overflow-hidden rounded-3xl p-6 sm:p-8">
                  <Icon className="h-6 w-6 text-gold" />
                  <div className="mt-4 font-display text-5xl font-medium sm:text-6xl">
                    <Counter to={n} suffix={s} />
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-widest text-white/70">{l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  Testimonials                                                  */
/* ============================================================== */

const TESTS = [
  {
    name: "Anjali Mehra",
    role: "Parent · Class 7",
    avatar: avatar1,
    rating: 5,
    quote:
      "Smart Gen is more than a school — it's a second home. The teachers know my daughter so well it sometimes amazes me.",
  },
  {
    name: "Rajesh Kumar",
    role: "Parent · Class 10 & 12",
    avatar: avatar2,
    rating: 5,
    quote:
      "Both my children flourished here. The facilities are world-class but it's the values they learned that make me proudest.",
  },
  {
    name: "Ishita Sharma",
    role: "Student · Class 12",
    avatar: avatar3,
    rating: 5,
    quote:
      "Robotics club, basketball team, MUN — Smart Gen gave me a runway. I'm heading to my dream university because of this place.",
  },
  {
    name: "Anjali Mehra",
    role: "Parent · Class 7",
    avatar: avatar1,
    rating: 5,
    quote:
      "Outstanding leadership, transparent communication and incredible academic outcomes. Highly recommended for any family.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % TESTS.length);
  const prev = () => setI((p) => (p - 1 + TESTS.length) % TESTS.length);
  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="chip text-navy">
            <Quote className="h-3.5 w-3.5 text-gold" /> Testimonials
          </span>
          <h2 className="mt-5 text-balance text-4xl font-medium text-navy sm:text-5xl lg:text-6xl">
            Loved by parents <span className="italic text-royal">and students.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative h-[26rem] sm:h-[22rem]">
            <AnimatePresence mode="wait">
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
                className="glass-card absolute inset-0 flex flex-col rounded-[2rem] p-8 sm:p-12"
              >
                <Quote className="h-10 w-10 text-gold" />
                <p className="mt-6 max-w-3xl text-balance font-display text-2xl leading-snug text-navy sm:text-3xl">
                  "{TESTS[i].quote}"
                </p>
                <div className="mt-auto flex items-center gap-4 pt-8">
                  <img
                    src={TESTS[i].avatar}
                    alt={TESTS[i].name}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/60"
                  />
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-navy">{TESTS[i].name}</div>
                    <div className="truncate text-sm text-muted-foreground">{TESTS[i].role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: TESTS[i].rating }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 lg:flex-col">
            <button
              onClick={prev}
              aria-label="Previous"
              className="glass grid h-12 w-12 place-items-center rounded-full text-navy transition hover:-translate-y-0.5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5 lg:flex-col">
              {TESTS.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Go to ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-navy" : "w-3 bg-navy/25 hover:bg-navy/40"} lg:h-3 lg:w-1.5 ${k === i ? "lg:h-8" : ""}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="glass grid h-12 w-12 place-items-center rounded-full text-navy transition hover:-translate-y-0.5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  Gallery                                                       */
/* ============================================================== */

const GALLERY_CATS = ["All", "Campus", "Sports", "Labs", "Classrooms", "Events"] as const;
type Cat = (typeof GALLERY_CATS)[number];

const GALLERY: { src: string; t: string; cat: Cat }[] = [
  { src: heroCampus, t: "Main Campus", cat: "Campus" },
  { src: campusCbse, t: "CBSE Block", cat: "Campus" },
  { src: campusState, t: "Heritage Block", cat: "Campus" },
  { src: lifeSwimming, t: "Swimming Pool", cat: "Sports" },
  { src: lifeHorse, t: "Horse Riding", cat: "Sports" },
  { src: lifeBasketball, t: "Basketball", cat: "Sports" },
  { src: lifeScience, t: "Science Lab", cat: "Labs" },
  { src: lifeRobotics, t: "Robotics Lab", cat: "Labs" },
  { src: lifeClassroom, t: "Smart Class", cat: "Classrooms" },
  { src: lifeLibrary, t: "Library", cat: "Classrooms" },
  { src: lifeCultural, t: "Annual Day", cat: "Events" },
  { src: lifeMusic, t: "Music Recital", cat: "Events" },
];

function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const items = cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat);
  return (
    <section id="gallery" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="chip text-navy">
            <Camera className="h-3.5 w-3.5 text-gold" /> Gallery
          </span>
          <h2 className="mt-5 text-balance text-4xl font-medium text-navy sm:text-5xl lg:text-6xl">
            A glimpse into our <span className="italic text-royal">world.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {GALLERY_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${c === cat ? "bg-navy text-white shadow-md" : "glass text-navy hover:-translate-y-0.5"}`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <motion.figure
                key={g.t + g.src}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border shadow-[0_18px_40px_-25px_oklch(0.18_0.05_265/0.4)]"
              >
                <img
                  src={g.src}
                  alt={g.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-sm font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.t}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  Contact                                                       */
/* ============================================================== */

const CONTACT = {
  address: "Smart Gen School Campus, Education City, Greater Noida, UP 201310, India",
  phone: "+91 98765 43210",
  email: "hello@smartgenschool.edu",
  mapsEmbed: "https://www.google.com/maps?q=Greater+Noida&output=embed",
};

function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="chip text-navy">
            <MapPin className="h-3.5 w-3.5 text-gold" /> Contact
          </span>
          <h2 className="mt-5 text-balance text-4xl font-medium text-navy sm:text-5xl lg:text-6xl">
            Visit us. <span className="italic text-royal">We'd love to host you.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="glass-card flex h-full flex-col gap-5 rounded-[2rem] p-8 sm:p-10">
              <ContactRow Icon={MapPin} label="Address" value={CONTACT.address} />
              <ContactRow Icon={Phone} label="Phone" value={CONTACT.phone} />
              <ContactRow Icon={Mail} label="Email" value={CONTACT.email} />

              <div className="mt-auto rounded-2xl border border-border/60 bg-secondary/40 p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-royal">
                  Visiting Hours
                </div>
                <div className="mt-2 text-sm text-navy">Mon – Sat · 9:00 AM – 4:00 PM</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Closed on Sundays & public holidays
                </div>
              </div>

              <a
                href="#campuses"
                className="ripple group inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
              >
                Plan a Campus Visit{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[2rem] ring-1 ring-border shadow-[0_25px_60px_-25px_oklch(0.18_0.05_265/0.4)]">
              <iframe
                title="Smart Gen School location"
                src={CONTACT.mapsEmbed}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy to-royal text-white shadow-md">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-widest text-royal">{label}</div>
        <div className="mt-1 text-base text-navy">{value}</div>
      </div>
    </div>
  );
}

/* ============================================================== */
/*  Footer                                                        */
/* ============================================================== */

function Footer() {
  return (
    <footer className="relative pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="navy-grad relative overflow-hidden rounded-[2.5rem] p-8 text-white sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-royal/40 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <a href="#home" className="flex items-center gap-2.5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-navy">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-xl font-semibold">SMART GEN</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                    School of Tomorrow
                  </span>
                </span>
              </a>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
                Empowering young minds to build tomorrow. A premium CBSE & State Board institution
                rooted in values and ready for the future.
              </p>
              <div className="mt-6 flex gap-2">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="glass-dark grid h-10 w-10 place-items-center rounded-full text-white transition-transform hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <FooterCol
              title="Explore"
              links={[
                ["About", "#about"],
                ["Campuses", "#campuses"],
                ["Facilities", "#facilities"],
                ["Academics", "#academics"],
              ]}
            />
            <FooterCol
              title="Discover"
              links={[
                ["Gallery", "#gallery"],
                ["Achievements", "#achievements"],
                ["Testimonials", "#testimonials"],
                ["Student Life", "#campuses"],
              ]}
            />

            <div>
              <h4 className="font-display text-lg">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {CONTACT.address}
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-gold" /> {CONTACT.phone}
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-gold" /> {CONTACT.email}
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
            <div>© {new Date().getFullYear()} Smart Gen School. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-gold" /> Crafted with care for tomorrow's
              leaders.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h4 className="font-display text-lg">{title}</h4>
      <ul className="mt-5 space-y-2.5 text-sm">
        {links.map(([l, h]) => (
          <li key={l}>
            <a href={h} className="nav-link inline-block text-white/75 hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
