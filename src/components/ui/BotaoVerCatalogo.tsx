export default function BotaoVerCatalogo() {
  const URL_CATALOGO = "https://www.canva.com/design/DAG_tFnnFcc/TkVBYiWBDriZGbuyWDbtIQ/view?utm_content=DAG_tFnnFcc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfd0c6deccc#2";

  return (
    <a
      href={URL_CATALOGO}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:bg-secondary transition shadow-sm"
    >
      <span>Ver Catálogo de Joias</span>
    </a>
  );
}