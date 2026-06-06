import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, CalendarCheck } from "lucide-react";

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
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans">
      <Nav />
      <Hero />
      <CarolAndStudio />
      <Catalog />
      <FooterCTA />
    </div>
  );
}

// 1. CABEÇALHO BEM FINO E DISCRETO
function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="mx-auto max-w-5xl px-5 h-12 flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="font-bold text-lg text-stone-900">Acanto</span>
          <span className="text-[9px] uppercase tracking-widest text-stone-500">Piercing</span>
        </div>
        <a
          href={AGENDARSITE}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Agendar horário
        </a>
      </div>
    </header>
  );
}


// 2. TOPO DIRETO AO PONTO
function Hero() {
  return (
    <section className="pt-8 pb-10 px-5 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 space-y-3">
        <h1 className="font-bold text-3xl md:text-5xl leading-tight text-stone-900">
          Piercing com segurança e precisão.
        </h1>
        <p className="text-sm text-stone-600 max-w-md">
          Higiene rigorosa, joias em titânio e atendimento humanizado em Feira de Santana.
        </p>
        <div className="flex flex-wrap gap-3 pt-3">
          <a
            href={AGENDARSITE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-semibold hover:bg-emerald-800 transition"
          >
            Agendar <CalendarCheck className="h-4 w-4" />
          </a>
          <BotaoVerCatalogo />
        </div>
      </div>

      <div className="flex-1 w-full">
        {/* MUDANÇA AQUI: Usando h-auto e object-contain para não cortar a foto */}
        <img
          src={heroImg}
          alt="Piercing em destaque"
          className="w-full h-auto max-h-[350px] object-contain rounded-2xl shadow-sm"
        />
      </div>
    </section>
  );
}

// 3. CAROL & ESTÚDIO (Juntos na mesma seção para economizar espaço)
function CarolAndStudio() {
  return (
    <section className="py-10 bg-stone-50 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-6">
          <h2 className="font-bold text-2xl text-stone-900">A Carol & O Estúdio</h2>
          <p className="text-sm mt-3 text-stone-600 leading-relaxed">
            Sou Carol Sales, atuo na área desde 2021 com foco em perfurações seguras e delicadas.
            Na Acanto, você encontra um ambiente acolhedor, com materiais 100% descartáveis e autoclave para sua total segurança.
          </p>
        </div>

        {/* As duas fotos lado a lado no celular e no computador */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <img
            src={carolImg}
            alt="Carol Piercer"
            className="h-40 md:h-64 w-full object-cover rounded-xl shadow-sm"
          />
          <img
            src={studioImg}
            alt="Interior do Estúdio"
            className="h-40 md:h-64 w-full object-cover rounded-xl shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}

// 4. CATÁLOGO ULTRA RESUMIDO
function Catalog() {
  return (
    <section className="py-10 px-5 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 w-full order-2 md:order-1">
        <img
          src={jewelryImg}
          alt="Joias em titânio"
          className="h-48 md:h-64 w-full object-cover rounded-xl shadow-sm"
        />
      </div>
      <div className="flex-1 space-y-3 order-1 md:order-2 text-center md:text-left">
        <h2 className="font-bold text-2xl text-stone-900">Joias em Titânio</h2>
        <p className="text-sm text-stone-600">
          Trabalhamos exclusivamente com peças biocompatíveis e hipoalergênicas.
          Escolha a joia perfeita para o seu novo piercing.
        </p>
        <div className="pt-2">
          <BotaoVerCatalogo />
        </div>
      </div>
    </section>
  );
}

// 5. RODAPÉ E CONTATO DIRETOS
function FooterCTA() {
  return (
    <section className="py-12 bg-emerald-800 text-center px-5 rounded-t-3xl mt-4">
      <h2 className="font-bold text-2xl text-white mb-6">Pronta para perfurar?</h2>

      <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
        <a
          href={AGENDARSITE}
          target="_blank"
          rel="noreferrer"
          className="bg-white text-emerald-900 px-6 py-3 rounded-full text-sm font-bold shadow-md hover:bg-stone-100 transition"
        >
          Acessar Agenda Online
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 border border-emerald-600 bg-emerald-700/50 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-emerald-700 transition"
        >
          <MessageCircle className="h-4 w-4" /> Dúvidas no WhatsApp
        </a>
      </div>

      <div className="mt-8 flex justify-center gap-6 text-emerald-100/70 text-xs font-medium">
        <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
          <Instagram className="h-3 w-3" /> @acantopiercing
        </a>
        <a href={MAPS} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
          <MapPin className="h-3 w-3" /> Feira de Santana, BA
        </a>
      </div>
    </section>
  );
}