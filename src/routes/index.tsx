import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  ShieldCheck,
  Wifi,
  Car,
  HeartHandshake,
  Sun,
  Syringe,
  Instagram,
  MapPin,
  Phone,
  MessageCircle,
  CalendarCheck,
  Gem,
  Heart,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-piercing.jpg";
import studioImg from "@/assets/studio.jpg";
import jewelryImg from "@/assets/jewelry.jpg";
import carolImg from "@/assets/carol.jpg";


import BotaoVerCatalogo from "@/components/ui/BotaoVerCatalogo";

const AGENDARSITE = "https://online.maapp.com.br/acantopiercing";
const WHATSAPP = "https://wa.me/5575983721788?text=Ol%C3%A1%20Carol!%20Tenho%20duvida%20em%20relaçao%20ao%20piercing.";
const INSTAGRAM = "https://instagram.com/acantopiercing";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Rua+Jos%C3%A9+Guimar%C3%A3es+Suzart+45+Serraria+Brasil+Feira+de+Santana";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acanto Piercing — Estúdio de Piercing em Feira de Santana" },
      {
        name: "description",
        content:
          "Estúdio profissional de piercing em Feira de Santana com Carol Sales. Atendimento humanizado, joias em titânio biocompatível e agendamento online fácil.",
      },
      { property: "og:title", content: "Acanto Piercing — Carol Sales" },
      {
        property: "og:description",
        content:
          "Piercing seguro, higiênico e acolhedor em Feira de Santana. Agende online em poucos cliques.",
      },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.ico" }
    ]
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Studio />
      <Catalog />
      <Booking />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight">Acanto</span>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
            Piercing
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
          <a href="#estudio" className="hover:text-foreground transition">Estúdio</a>
          <a href="#joias" className="hover:text-foreground transition">Joias</a>
          <a href="#agendamento" className="hover:text-foreground transition">Agendamento</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <a
          href={AGENDARSITE}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition shadow-soft"
        >
          Agendar <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Feira de Santana · Bahia
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Piercing profissional,{" "}
            <em className="text-accent not-italic">com cuidado</em> em cada detalhe.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            No Acanto Piercing, cada perfuração é feita com higiene rigorosa, joias
            biocompatíveis e um atendimento humanizado, sem pressa. Sua experiência
            começa antes mesmo de você sentar na cadeira.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-soft"
            >
              Agendar agora <CalendarCheck className="h-4 w-4" />
            </a>

            {/* O BOTÃO INSERIDO AQUI NA CAPA DO SITE */}
            <BotaoVerCatalogo />

          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <Stat label="Atuando desde" value="2021" />
            <Stat label="Titânio" value="100%" />
            <Stat label="Avaliação" value="5.0★" />
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem]" style={{ background: "var(--gradient-blush)" }} />
          <img
            src={heroImg}
            alt="Joias delicadas em titânio sobre tecido bege"
            width={1080}
            height={1440}
            className="rounded-[1.75rem] shadow-elevated object-cover w-full aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-card border border-border px-5 py-4 shadow-soft">
            <ShieldCheck className="h-6 w-6 text-accent" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Esterilização</p>
              <p className="text-sm font-medium">Autoclave certificada</p>
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
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-display text-3xl">{value}</dd>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <img
            src={carolImg}
            alt="Carol Sales, piercer no Acanto Piercing"
            loading="lazy"
            width={1024}
            height={1280}
            className="rounded-[1.75rem] shadow-elevated object-cover aspect-[4/5] w-full"
          />
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Prazer, Carol Sales</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">
            Mãe, empreendedora e <em className="text-accent not-italic">agora, a sua piercer.</em>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Sou perfuradora corporal do estúdio Acanto Piercing, em Feira de Santana — BA.
            Atuo na área desde 2021, e cada cliente que passa pela minha cadeira recebe
            atenção, escuta e um cuidado pensado para que sua experiência seja única e
            tranquila.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Formação contínua em técnicas seguras de perfuração",
              "Atendimento humanizado, respeitoso e sem pressa",
              "Suporte completo no pós-perfuração",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition"
          >
            <Instagram className="h-4 w-4" /> @acantopiercing
          </a>
        </div>
      </div>
    </section>
  );
}

function Studio() {
  const features = [
    { icon: Sun, title: "Ambiente claro e organizado", desc: "Limpeza e iluminação pensadas para o seu conforto." },
    { icon: HeartHandshake, title: "Acolhedor e diverso", desc: "Lugar seguro que respeita toda a diversidade." },
    { icon: Car, title: "Fácil acesso", desc: "Ruas com estacionamento próximo ao estúdio." },
    { icon: Wifi, title: "Wi-Fi disponível", desc: "Conecte-se enquanto te recebemos." },
    { icon: ShieldCheck, title: "Esterilização autoclave", desc: "Todo material esterilizado por autoclave certificada." },
    { icon: Syringe, title: "Material profissional", desc: "Equipamentos e insumos de uso exclusivamente clínico." },
  ];
  return (
    <section id="estudio" className="py-24 lg:py-32 bg-nude/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Onde você fará seu piercing</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">
            Um estúdio pensado para sua segurança e bem-estar.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Cada detalhe do espaço foi cuidado para que você se sinta em casa — com toda a
            estrutura profissional que um procedimento estético merece.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition"
            >
              <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-blush">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[1.75rem] overflow-hidden shadow-elevated">
          <img
            src={studioImg}
            alt="Interior do estúdio Acanto Piercing"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full object-cover aspect-[16/8]"
          />
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section id="joias" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Catálogo de joias</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">
            Joias biocompatíveis em <em className="text-accent not-italic">titânio</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Trabalhamos com peças em titânio implant grade — o material mais seguro do
            mercado, ideal para perfurações novas e peles sensíveis. Estética e saúde no
            mesmo lugar.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {[
              "Titânio implant grade",
              "Acabamento polido espelhado",
              "Hipoalergênicas",
              "Designs delicados e atemporais",
            ].map((i) => (
              <li key={i} className="flex items-center gap-2">
                <Gem className="h-4 w-4 text-accent" /> {i}
              </li>
            ))}
          </ul>

          {/* O BOTÃO NA SEÇÃO DO CATÁLOGO */}
          <div className="mt-9">
            <BotaoVerCatalogo />
          </div>

        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem]" style={{ background: "var(--gradient-blush)" }} />
          <img
            src={jewelryImg}
            alt="Coleção de joias em titânio biocompatível"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-[1.75rem] shadow-elevated object-cover aspect-square w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="agendamento" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="rounded-[2rem] p-10 lg:p-16 text-center border border-border shadow-elevated"
          style={{ background: "var(--gradient-blush)" }}
        >
          <CalendarCheck className="h-10 w-10 text-accent mx-auto" />
          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-primary/70">Auto-agendamento</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight max-w-2xl mx-auto">
            Agende seu horário online em poucos cliques.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Veja os valores, dias e horários disponíveis e escolha o melhor momento para você.
            Fácil, intuitivo e sem complicação.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            {[
              { n: "01", t: "Escolha o serviço", d: "Veja os valores e a duração de cada procedimento." },
              { n: "02", t: "Selecione o horário", d: "Dias e horários atualizados em tempo real." },
              { n: "03", t: "Confirme e pronto", d: "Você recebe a confirmação direto no seu celular." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-card/70 backdrop-blur p-5 border border-border/60">
                <p className="font-display text-2xl text-accent">{s.n}</p>
                <p className="mt-2 font-medium">{s.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          <a
            href={AGENDARSITE}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:opacity-90 transition shadow-soft"
          >
            Agendar meu horário <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const points = [
    { icon: Heart, title: "2 retornos avaliativos", desc: "Acompanhamento da cicatrização incluso no seu atendimento." },
    { icon: MessageCircle, title: "Suporte via WhatsApp", desc: "Tire dúvidas com a Carol sempre que precisar." },
    { icon: Sparkles, title: "Guia exclusivo de cuidados", desc: "Material com tudo sobre o pós-perfuração." },
    { icon: Clock, title: "Atendimento sem pressa", desc: "Tempo dedicado para um momento único e tranquilo." },
    { icon: Syringe, title: "Material descartável e estéril", desc: "Insumos abertos na sua frente, sempre novos." },
    { icon: ShieldCheck, title: "Sua saúde em primeiro lugar", desc: "Protocolos rigorosos de biossegurança." },
  ];
  return (
    <section className="py-24 lg:py-32 bg-nude/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Como será sua experiência</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">
            Cuidado completo, antes, durante e depois.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-card border border-border p-7 hover:shadow-soft transition"
            >
              <p.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-5 font-medium text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Entre em contato</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">
            Estamos prontos para receber você.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Fale com a gente pelo WhatsApp, siga no Instagram ou venha visitar o estúdio.
            Também estamos no Google — encontre-nos com um clique.
          </p>

          <div className="mt-10 space-y-4">
            <ContactRow icon={MapPin} label="Endereço" value="Rua José Guimarães Suzart, 45 — Serraria Brasil, Feira de Santana — BA" />
            <ContactRow icon={Phone} label="Telefone / WhatsApp" value="(75) 9 8372-1788" />
            <ContactRow icon={Instagram} label="Instagram" value="@acantopiercing" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 content-start">
          <ContactCard
            href={WHATSAPP}
            icon={MessageCircle}
            title="WhatsApp"
            desc="Resposta rápida com a Carol."
            cta="Conversar agora"
            primary
          />
          <ContactCard
            href={INSTAGRAM}
            icon={Instagram}
            title="Instagram"
            desc="Veja perfurações e novidades."
            cta="@acantopiercing"
          />
          <ContactCard
            href={MAPS}
            icon={MapPin}
            title="Google Maps"
            desc="Como chegar ao estúdio."
            cta="Abrir no Maps"
          />
          <ContactCard
            href={MAPS}
            icon={Sparkles}
            title="Estamos no Google"
            desc="Encontre-nos com um clique."
            cta="Ver no Google"
          />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-xl bg-blush flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm">{value}</p>
      </div>
    </div>
  );
}

function ContactCard({
  href,
  icon: Icon,
  title,
  desc,
  cta,
  primary,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  cta: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`rounded-2xl p-6 border transition group ${primary
          ? "bg-primary text-primary-foreground border-primary hover:opacity-90"
          : "bg-card border-border hover:shadow-soft"
        }`}
    >
      <Icon className={`h-6 w-6 ${primary ? "text-accent" : "text-accent"}`} />
      <h3 className="mt-5 font-medium text-lg">{title}</h3>
      <p className={`mt-1 text-sm ${primary ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {desc}
      </p>
      <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
        {cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
      </p>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row gap-6 items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-xl text-foreground">Acanto</span>
          <span className="text-xs uppercase tracking-[0.25em]">Piercing</span>
        </div>
        <p>© {new Date().getFullYear()} Acanto Piercing · Feira de Santana — BA</p>
        <div className="flex items-center gap-5">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp</a>
          <a href={MAPS} target="_blank" rel="noreferrer" className="hover:text-foreground">Maps</a>
        </div>
      </div>
    </footer>
  );
}