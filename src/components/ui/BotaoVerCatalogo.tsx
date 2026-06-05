import { useState } from 'react';
import { BookOpen, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BotaoVerCatalogo() {
  const [modalAberto, setModalAberto] = useState(false);

  // 1. Nossa lista de arquivos (Páginas do Catálogo)
  const paginasDoCatalogo = [
    "/img6.jpg",
    "/img8.jpg",
    "/img10.jpg",
    "/img27.jpg",
    "/img30.jpg",
    "/img33.jpg",
    "/img36.jpg",
    "/img39.jpg",
    "/img42.jpg",
    "/img45.jpg",
    "/img48.jpg",
    "/img51.jpg",
    "/img54.jpg",
    "/img57.jpg",
    "/img60.jpg",
    "/img63.jpg",
    "/img66.jpg"
  ];

  // 2. O estado que guarda "em qual página estamos"
  const [paginaAtual, setPaginaAtual] = useState(0);

  // 3. Funções para passar as páginas
  const irParaProxima = () => {
    if (paginaAtual < paginasDoCatalogo.length - 1) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const irParaAnterior = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  return (
    <>
      {/* Botão Principal que abre a janela */}
      <button
        onClick={() => setModalAberto(true)}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:bg-secondary transition shadow-sm"
      >
        <BookOpen size={20} />
        Ver Catálogo de Joias
      </button>

      {/* Janela Flutuante (Modal) */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

            {/* Cabeçalho do Catálogo */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-slate-50">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <BookOpen size={20} className="text-slate-600" />
                Catálogo Oficial - Acanto Piercing
              </h2>

              <button
                onClick={() => setModalAberto(false)}
                className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Área de Visualização com as Setinhas */}
            <div className="flex-1 w-full bg-slate-100 p-4 flex items-center justify-between relative group">

              {/* Botão de Voltar (Seta Esquerda) */}
              <button
                onClick={irParaAnterior}
                disabled={paginaAtual === 0}
                className="absolute left-4 z-10 p-3 rounded-full bg-white/90 shadow-md text-slate-800 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={32} />
              </button>

              {/* A Imagem do Catálogo */}
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={paginasDoCatalogo[paginaAtual]}
                  alt={`Página ${paginaAtual + 1} do Catálogo`}
                  className="max-w-full max-h-full object-contain drop-shadow-xl"
                />
              </div>

              {/* Botão de Avançar (Seta Direita) */}
              <button
                onClick={irParaProxima}
                disabled={paginaAtual === paginasDoCatalogo.length - 1}
                className="absolute right-4 z-10 p-3 rounded-full bg-white/90 shadow-md text-slate-800 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={32} />
              </button>

            </div>

            {/* Rodapé com Indicador de Páginas */}
            <div className="bg-slate-50 p-3 text-center border-t border-gray-200 text-sm font-medium text-slate-500">
              Página {paginaAtual + 1} de {paginasDoCatalogo.length}
            </div>

          </div>
        </div>
      )}
    </>
  );
}