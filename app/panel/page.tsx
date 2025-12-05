"use client";

import Link from "next/link";

export default function PanelPage() {
  // Por ahora todo es fake / estático.
  // Luego aquí podremos leer datos reales del backend.
  const totalObjetivo = 1000;
  const registrados = 327; // simulado
  const porcentaje = Math.round((registrados / totalObjetivo) * 100);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-emerald-400 uppercase mb-4">
          Unreplied · Universo en marcha
        </p>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Tu huella está guardada.
          <br />
          Ahora tu universo se está llenando. ✨
        </h1>

        <p className="text-sm md:text-base text-slate-300 mb-6">
          Con lo que has respondido ya podemos empezar a calcular compatibilidades
          iniciales. En esta fase solo necesitamos algo de masa crítica para que
          tu primer match tenga sentido de verdad.
        </p>

        {/* Bloque de progreso de base de datos */}
        <div className="mb-8 space-y-3">
          <div className="flex items-center justify-between text-xs font-medium text-slate-300">
            <span>Personas registradas en esta edición</span>
            <span>
              {registrados} / {totalObjetivo} · {porcentaje}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-emerald-400 transition-all"
              style={{ width: `${porcentaje}%` }}
            />
          </div>
          <p className="text-xs text-slate-400">
            Cuantas más personas entren, mejor podremos encontrar alguien que
            encaje de verdad con tu forma de sentir y con lo que buscas.
          </p>
        </div>

        {/* Mensaje tipo “esto nació porque alguien no contestó un WhatsApp” (guiño) */}
        <div className="mb-8 rounded-2xl bg-slate-900 border border-slate-800 px-4 py-3 text-xs text-slate-300">
          <p>
            Este experimento nació porque alguien no respondió un mensaje. 
            No queremos que eso vuelva a ser el final de una historia, sino 
            solo el principio de construir conexiones con más cuidado.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <Link
            href="/questions"
            className="w-full inline-flex items-center justify-center rounded-2xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition"
          >
            Volver a responder el test
          </Link>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
          >
            Volver al inicio
          </Link>
        </div>

        <p className="mt-4 text-[11px] text-slate-500">
          * En una versión futura, cuando se alcance el mínimo de personas,
          esta pantalla se convertirá en el panel donde verás tu compatibilidad
          potencial y el estado de tus conversaciones.
        </p>
      </div>
    </main>
  );
}
