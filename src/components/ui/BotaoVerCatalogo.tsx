import { useState } from 'react';
import { BookOpen, X } from 'lucide-react';

export default function BotaoVerCatalogo() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      {/* Botão com o mesmo visual do seu site */}
      <button
        onClick={() => setModalAberto(true)}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:bg-secondary transition shadow-sm"
      >
        <BookOpen size={20} />
        Ver Catálogo de Joias
      </button>

      {/* Janela Flutuante */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

            {/* Cabeçalho */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-slate-50">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <BookOpen size={20} className="text-slate-600" />
                Catálogo Oficial - Acanto Piercing
              </h2>

              <button
                onClick={() => setModalAberto(false)}
                className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                title="Fechar catálogo"
              >
                <X size={24} />
              </button>
            </div>

            {/* O "Buraco na parede" apontando exatamente para o seu arquivo na pasta public */}
            <div className="flex-1 w-full bg-slate-200 p-2 sm:p-4">
              <iframe
                src="/JoiasAcanto.pdf"
                className="w-full h-full rounded border border-gray-300 shadow-inner bg-white"
                title="Catálogo Acanto Piercing"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}