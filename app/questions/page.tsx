"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuestionsPage() {
  const questions = [
    {
      title: "Ahora mismo, ¿qué buscas más: algo estable o algo ligero?",
      options: ["Nada", "Poco", "Neutral", "Bastante", "Mucho"],
    },
    {
      title: "¿Cuánto valoras poder hablar de cosas profundas (miedos, sueños, heridas)?",
      options: ["Nada", "Poco", "Neutral", "Bastante", "Mucho"],
    },
    {
      title: "¿Cuánto te importa sentir constancia de la otra persona (mensajes, detalles)?",
      options: ["Nada", "Poco", "Neutral", "Bastante", "Mucho"],
    },
    {
      title: "¿Cuánto te ilusiona construir proyectos o planes con alguien (viajes, metas)?",
      options: ["Nada", "Poco", "Neutral", "Bastante", "Mucho"],
    },
    {
      title: "¿Cuánto te importa la estabilidad emocional de la otra persona?",
      options: ["Nada", "Poco", "Neutral", "Bastante", "Mucho"],
    },
    {
      title: "¿Cuánto te ilusiona crecer con alguien (proyectos, viajes, objetivos en común)?",
      options: ["Nada", "Poco", "Neutral", "Bastante", "Mucho"],
    },
  ];

  const total = questions.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const handleSelect = (index: number) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[step] = index;
      return updated;
    });

    if (step + 1 < total) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  if (done) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl text-center">

          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-400 uppercase mb-4">
            Paso inicial completado
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Ya tenemos tu huella emocional básica. ✨
          </h1>

          <p className="text-sm md:text-base text-slate-300 mb-6">
            Con estas respuestas podremos calcular compatibilidades iniciales
            y elegir mejor con quién abrir tu primera conversación
            cuando el sistema esté activo.
          </p>

          <p className="text-xs text-slate-400 mb-8">
            Esto es solo el inicio. Muy pronto podrás ver con quién encajas
            de verdad según tu forma de sentir y lo que buscas.
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="w-full md:w-auto inline-flex items-center justify-center rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition"
            >
              Volver a responder
            </button>

            <Link
              href="/panel"
              className="w-full md:w-auto inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              Ir a mi panel
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const current = questions[step];
  const progress = Math.round((step / total) * 100);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex">
      <div className="w-full max-w-2xl mx-auto px-4 py-12">
        <p className="text-xs mb-2 text-slate-400">
          Compatibilidad inicial · Paso {step + 1} / {total}
        </p>

        <div className="h-2 w-full rounded-full bg-slate-800 mb-6 overflow-hidden">
          <div
            className="h-full bg-emerald-400 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          {current.title}
        </h1>

        <p className="text-sm text-slate-400 mb-8">
          Marca lo que más se aproxime a cómo lo sientes ahora mismo.
          No hay respuestas correctas, solo sinceras.
        </p>

        <div className="space-y-4">
          {current.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className="w-full text-left px-6 py-4 rounded-2xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm transition"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
