import {
  ArrowUpRight,
  Database,
  Download,
  Mail,
  MapPin,
  PhoneCall,
  Sparkles,
} from "lucide-react";

import type { ElementType } from "react";

import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

type Accent = keyof typeof accentClass;

type LinkItem = {
  label: string;
  value: string;
  href: string;
  icon: ElementType;
  accent: Accent;
};

const links: LinkItem[] = [
  {
    label: "GitHub",
    value: "github.com/devanshtyagi26",
    href: "https://github.com/devanshtyagi26",
    icon: FiGithub,
    accent: "magenta",
  },
  {
    label: "LinkedIn",
    value: "in/tyagi-devansh",
    href: "https://linkedin.com/in/tyagi-devansh",
    icon: LuLinkedin,
    accent: "cyan",
  },
  {
    label: "Email",
    value: "tyagidevansh3@gmail.com",
    href: "mailto:tyagidevansh3@gmail.com",
    icon: Mail,
    accent: "cyan",
  },
  {
    label: "Phone",
    value: "+91 89239 55041",
    href: "tel:+918923955041",
    icon: PhoneCall,
    accent: "lime",
  }
];

const accentClass = {
  cyan: "text-primary",
  lime: "text-secondary",
  magenta: "text-accent",
};

const accentBg = {
  cyan: "bg-primary/10 border-primary/30",
  lime: "bg-secondary/10 border-secondary/30",
  magenta: "bg-accent/10 border-accent/30",
};

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="aurora pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-8">
        <header className="flex items-center justify-between text-[10px] font-mono-display uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-secondary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            OPEN TO OPPORTUNITIES
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-primary" />
            tap to connect
          </span>
        </header>

        <section className="float-up scanline relative mt-6 overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-xl shadow-card">
          <CornerTicks />

          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-linear-to-br from-primary via-accent to-secondary opacity-60 blur-md" />
              <img
                src="/avatar.jpg"
                width={768}
                height={768}
                alt="Devansh Tyagi portrait"
                className="relative h-20 w-20 rounded-full border border-border object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-card bg-secondary text-[10px] text-secondary-foreground">
                <Database className="h-2.5 w-2.5" />
              </span>
            </div>
            <div className="min-w-0 flex-1 pt-1">
              <p className="font-mono-display text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                &lt;hello world /&gt;
              </p>
              <h1 className="mt-1 font-mono-display text-2xl font-semibold leading-tight text-foreground">
                Devansh Tyagi
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                <span className="text-gradient font-medium">
                  Aspiring Data Scientist
                </span>
                <span className="mx-1.5 text-border">/</span>
                AI · ML
              </p>
              <p className="mt-1 flex items-center gap-1 font-mono-display text-[10px] uppercase tracking-[0.2em] text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                 CLASS OF 26
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 font-mono-display">
            <Stat label="cgpa" value="9.27" />
            <Stat label="projects" value="10+" />
            <Stat label="code commits" value="1k+" />
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            <span className="text-foreground">AI/ML developer</span> {" "}
             and final-year CS student at
             <span className="text-foreground"> University of Delhi.</span>{" "}
             I train neural networks, build high-performance backends with 
             <span className="text-foreground"> FastAPI</span>, and deploy full-stack applications.
          </p>

          <div className="mt-4 flex items-center gap-1.5 font-mono-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <MapPin className="h-3 w-3 text-primary" />
            New Delhi, India
          </div>

          <a
            href="/Devansh_Tyagi_Resume.pdf"
            download
            className="group mt-5 flex items-center justify-between gap-3 rounded-xl border border-primary/40 bg-linear-to-r from-primary/15 via-secondary/10 to-accent/15 px-4 py-3 transition-all hover:border-primary hover:shadow-glow active:scale-[0.99]"
          >
            <span className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Download className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-mono-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  resume.pdf · 1 page
                </span>
                <span className="text-sm font-medium text-foreground">
                  Download Resume
                </span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </section>

        <p className="mt-8 flex items-center gap-3 font-mono-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          connect.endpoints
          <span className="h-px flex-1 bg-border" />
        </p>

        <ul className="mt-4 space-y-2.5">
          {links.map((item, index) => (
            <li
              key={item.label}
              className="float-up"
              style={{ animationDelay: `${100 + index * 60}ms` }}
            >
              <LinkRow item={item} index={index} />
            </li>
          ))}
        </ul>

        <footer className="mt-auto pt-10 text-center font-mono-display text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <p>// data is the new language</p>
          <p className="mt-1 opacity-60">© 2026 · devansh.tyagi</p>
        </footer>
      </div>

      <a
        href="/Devansh_Tyagi_Contact.vcf"
        className="fixed bottom-5 right-5 z-20 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-card/70 px-4 py-2.5 font-mono-display text-[10px] uppercase tracking-[0.18em] text-foreground shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm backdrop-saturate-150 supports-backdrop-filter:bg-card/55 transition-all hover:border-primary hover:bg-card/80 hover:shadow-glow active:scale-[0.98]"
      >
        <Download className="h-4 w-4 text-primary" />
        Save Contact
      </a>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/40 px-2 py-2 text-center">
      <p className="text-base font-semibold text-foreground">{value}</p>
      <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function LinkRow({ item, index }: { item: LinkItem; index: number }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card/60 p-3.5 backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card hover:shadow-glow active:scale-[0.99]"
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${accentBg[item.accent]}`}
      >
        <Icon className={`h-5 w-5 ${accentClass[item.accent]}`} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-mono-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {String(index).padStart(2, "0")} · {item.label}
        </p>
        <p className="truncate text-sm text-foreground">{item.value}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
    </a>
  );
}

function CornerTicks() {
  const base = "absolute h-3 w-3 border-primary/60";

  return (
    <>
      <span className={`${base} left-2 top-2 border-l border-t`} />
      <span className={`${base} right-2 top-2 border-r border-t`} />
      <span className={`${base} bottom-2 left-2 border-b border-l`} />
      <span className={`${base} bottom-2 right-2 border-b border-r`} />
    </>
  );
}
