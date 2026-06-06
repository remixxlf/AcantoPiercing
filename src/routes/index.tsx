import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  ShieldCheck,
  Instagram,
  MapPin,
  Phone,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-piercing.jpg";
import carolImg from "@/assets/carol.jpg";

import BotaoVerCatalogo from "@/components/ui/BotaoVerCatalogo";

const AGENDARSITE = "https://online.maapp.com.br/acantopiercing";
const WHATSAPP = "https://wa.me/5575983721788?text=Ol%C3%A1%20Carol!%20Tenho%20duvida%20em%20relaçao%20ao%20piercing.";
const INSTAGRAM = "https://instagram.com/acantopiercing";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Rua+Jos%C3%A9+Guimar%C3%A3es+Suzart+45+Serraria+Brasil+Feira+de+Santana";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acanto Piercing — Feira de Santana" },
      { name: "description", content: "Estúdio profissional de piercing com Carol Sales. Atendimento humanizado e joias em titânio." },
      { property: "og:title", content: "Acanto Piercing" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }]
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />
      <Hero />
      <About />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 h-12 flex items-center justify-between">
        <a href="#top" className="font-display text-lg">
          Acanto <span className="text-xs uppercase tracking-wider text-gray-600">Piercing</span>
        </a>
        <a
          href={AGENDARSITE}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-green-600 text-white px-3 py-1.5 text-xs font-medium hover:bg-green-700 transition"
        >
          Agendar <Sparkles className="h-3 w-3" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="py-6">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-gray-600">
            <Sparkles className="h-2.5 w-2.5 text-green-600" />
            Feira de Santana · BA
          </div>
          <h1 className="mt-3 font-display text-2xl sm:text-3xl lg:text-5xl leading-[1.1]">
            Piercing profissional, <em className="text-green-600 not-italic">com cuidado</em> em cada detalhe.
          </h1>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Higiene rigorosa, joias biocompatíveis e atendimento humanizado sem pressa.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-1.5 rounded-full bg-green-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-green-700 transition"
            >
              <CalendarCheck className="h-4 w-4" /> Agendar agora
            </a>
            <BotaoVerCatalogo />
          </div>
          <dl className="mt-6 grid grid-cols-3 gap-4 max-w-xs">
            <Stat label="Desde" value="2021" />
            <Stat label="Titânio" value="100%" />
            <Stat label="Avaliação" value="5.0★" />
          </dl>
        </div>

        <div className="relative">
          <img
            src={heroImg}
            alt="Joias em titânio"
            width={1080}
            height={1440}
            className="rounded-lg lg:rounded-[1.75rem] shadow-elevated object-cover w-full aspect-[4/5]"
          />
          <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-lg bg-white border border-gray-200 px-3 py-2 shadow-md">
            <ShieldCheck className="h-4 w-4 text-green-600" />
            <div>
              <p className="text-[9px] uppercase text-gray-500">Esterilização</p>
              <p className="text-xs font-medium">Autoclave</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[9px] uppercase text-gray-500">{label}</dt>
      <dd className="mt-0.5 font-display text-xl lg:text-3xl">{value}</dd>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="py-8 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 order-1">
          <img
            src={carolImg}
            alt="Carol Sales"
            width={1024}
            height={1280}
            className="rounded-lg lg:rounded-[1.75rem] shadow-elevated object-cover aspect-[4/5] w-full"
          />
        </div>
        <div className="lg:col-span-7 lg:pl-8 order-2">
          <p className="text-[10px] uppercase tracking-wider text-green-600">Prazer, Carol Sales</p>
          <h2 className="mt-2 font-display text-xl sm:text-2xl lg:text-5xl tracking-tight">
            Mãe, empreendedora e <em className="text-green-600 not-italic">sua piercer.</em>
          </h2>
          <p className="mt-3 text-sm text-gray-700">
            Atuo desde 2021 em Feira de Santana. Cada cliente recebe atenção, escuta e cuidado único.
          </p>
          <ul className="mt-4 space-y-1.5 text-xs">
            {["Técnicas seguras de perfuração", "Atendimento humanizado sem pressa", "Suporte completo no pós"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-green-600 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium hover:text-green-600">
            <Instagram className="h-3.5 w-3.5" /> @acantopiercing
          </a>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="agendamento" className="py-8">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-xl lg:rounded-[2rem] p-6 lg:p-14 text-center border border-gray-200">
          <CalendarCheck className="h-8 w-8 lg:h-10 lg:w-10 text-green-600 mx-auto" />
          <p className="mt-4 text-[10px] uppercase text-gray-500">Auto-agendamento</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-5xl tracking-tight">Agende online em poucos cliques.</h2>
          <p className="mt-3 text-sm text-gray-700 max-w-xl mx-auto">Veja valores, dias e horários. Fácil e sem complicação.</p>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left">
            {[
              { n: "01", t: "Escolha o serviço", d: "Valores e duração." },
              { n: "02", t: "Selecione horário", d: "Tempo real." },
              { n: "03", t: "Confirme", d: "No seu celular." },
            ].map((s) => (
              <div key={s.n} className="rounded-lg bg-gray-100 p-4 border border-gray-200">
                <p className="font-display text-xl lg:text-2xl text-green-600">{s.n}</p>
                <p className="mt-1.5 text-xs font-medium">{s.t}</p>
                <p className="mt-1 text-[10px] text-gray-500">{s.d}</p>
              </div>
            ))}
          </div>

          <a
            href={AGENDARSITE}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-green-600 text-white px-7 lg:px-8 py-3 lg:py-4 text-sm font-medium hover:bg-green-700 transition"
          >
            Agendar meu horário <Sparkles className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-8 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <p className="text-[10px] uppercase text-green-600">Entre em contato</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-5xl tracking-tight">Prontos para receber você.</h2>
          <div className="mt-5 space-y-3">
            <ContactRow icon={MapPin} label="Endereço" value="Rua José Guimarães Suzart, 45 — Serraria Brasil, Feira de Santana — BA" />
            <ContactRow icon={Phone} label="WhatsApp" value="(75) 9 8372-1788" />
            <ContactRow icon={Instagram} label="Instagram" value="@acantopiercing" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 content-start">
          <ContactCard href={WHATSAPP} icon={MessageCircle} title="WhatsApp" desc="Resposta rápida com a Carol" cta="Conversar agora" primary />
          <ContactCard href={INSTAGRAM} icon={Instagram} title="Instagram" desc="Perfurações e novidades" cta="@acantopiercing" />
          <ContactCard href={MAPS} icon={MapPin} title="Google Maps" desc="Como chegar ao estúdio" cta="Abrir no Maps" />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
        <Icon className="h-4.5 w-4.5 text-green-600" />
      </div>
      <div>
        <p className="text-[9px] uppercase text-gray-500">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
}

function ContactCard({ href, icon: Icon, title, desc, cta, primary }: { href: string; icon: any; title: string; desc: string; cta: string; primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`rounded-xl p-5 border transition group ${primary ? "bg-green-600 text-white border-green-600 hover:opacity-90" : "bg-white border-gray-200 hover:shadow-md"}`}
    >
      <Icon className={`h-5 w-5 lg:h-6 lg:w-6 ${primary ? "text-white" : "text-green-600"}`} />
      <h3 className="mt-3 font-medium text-sm lg:text-lg">{title}</h3>
      <p className={`mt-1 text-xs lg:text-sm ${primary ? "text-white/80" : "text-gray-500"}`}>{desc}</p>
      <p className="mt-3 inline-flex items-center gap-1.5 text-xs lg:text-sm font-medium">
        {cta} <Sparkles className="h-3 w-3 lg:h-4 lg:w-4" />
      </p>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-gray-500">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-sm lg:text-xl">Acanto</span>
          <span className="text-[9px] lg:text-xs uppercase tracking-wider">Piercing</span>
        </div>
        <p>© {new Date().getFullYear()} Acanto Piercing · Feira de Santana — BA</p>
        <div className="flex items-center gap-4 lg:gap-5">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-green-600">Instagram</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-green-600">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}