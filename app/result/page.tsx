"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();

  // Primera pantalla -> después pasa a universo     
  const [screen, setScreen] = useState<"basic" | "universe">("basic");

  if (screen === "basic") {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 bg-slate-950 text-white">
        <div className="max-w-3xl w-full bg-slate-900/60 border border-slate-800 rounded-3xl p-10 backdrop-blur-md shadow-xl text-center">

          <p className="text-emerald-400 tracking-widest text-sm mb-3">
            PASO INICIAL COMPLETADO
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ya tenemos tu huella<br />emocional básica. ✨
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Con estas respuestas podremos calcular compatibilidades iniciales y
            elegir mejor con quién abrir tu primera conversación cuando el
            sistema esté activo.
          </p>

          <p className="text-slate-400 text-sm mb-10">
            Esto es solo el inicio. Muy pronto podrás ver con quién encajas de verdad
            según tu forma de sentir y lo que buscas.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/questions")}
              className="px-6 py-3 rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800 transition"
            >
              Volver a responder
            </button>

            <button
              onClick={() => setScreen("universe")}
              className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition"
            >
              Ir a mi panel
            </button>
          </div>
        </div>
      </main>
    );
  }

  // -----------------------------
  // PANTALLA 2: UNIVERSO EN MARCHA
  // -----------------------------
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-slate-950 text-white">
      <div className="max-w-3xl w-full bg-slate-900/60 border border-slate-800 rounded-3xl p-10 backdrop-blur-md shadow-xl">

        <p className="text-emerald-400 tracking-widest text-sm mb-3">
          UNREPLIED · UNIVERSO EN MARCHA
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Tu huella está guardada.<br />Ahora tu universo se está llenando. ✨
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          Con lo que has respondido ya podemos empezar a calcular compatibilidades
          iniciales. En esta fase solo necesitamos algo de masa crítica para que tu
          primer match tenga sentido de verdad.
        </p>

        {/* Barra de progreso simulada */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Personas registradas en esta edición</span>
            <span>327 / 1000 · 33%</span>
          </div>

          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500" style={{ width: "33%" }}></div>
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-10 leading-relaxed">
          Cuantas más personas entren, mejor podremos encontrar alguien que encaje de verdad
          con tu forma de sentir y con lo que buscas.
        </p>

        <div className="bg-slate-800/60 p-4 rounded-xl text-slate-300 text-sm mb-10 leading-relaxed">
          Este experimento nació porque alguien no respondió un mensaje.  
          No queremos que eso vuelva a ser el final de una historia, sino solo el principio
          de construir conexiones con más cuidado.
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/questions")}
            className="px-6 py-3 rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800 transition"
          >
            Volver a responder el test
          </button>

          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition"
          >
            Volver al inicio
          </button>
        </div>

        <p className="text-slate-500 text-xs text-center mt-10">
          * En una versión futura, cuando se alcance el mínimo de personas, esta pantalla se
          convertirá en el panel donde verás tu compatibilidad potencial y el estado de tus
          conversaciones.
        </p>
      </div>
    </main>
  );
}
