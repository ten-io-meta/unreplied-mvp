"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const tones = [
  {
    id: "soft",
    title: "Suave y afectivo",
    desc: "Cariño, calma, calidez. Un tono que acompaña.",
  },
  {
    id: "deep",
    title: "Profundo e íntimo",
    desc: "Conversaciones que van más allá de lo superficial.",
  },
  {
    id: "direct",
    title: "Directo y seguro",
    desc: "Claridad, intención, seguridad emocional.",
  },
  {
    id: "fun",
    title: "Divertido y espontáneo",
    desc: "Energía ligera, humor, fluidez natural.",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selected) return;

    if (typeof window !== "undefined") {
      localStorage.setItem("tone", selected);
    }

    router.push("/questions");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 py-10">
      <div className="w-full max-w-md space-y-6">

        <h1 className="text-2xl sm:text-3xl font-semibold text-center">
          ¿Cómo te gusta que te hablen?
        </h1>

        <p className="text-center text-slate-300 text-sm">
          Elegiremos un tono compatible con tu esencia para que la conexión
          empiece con la vibración correcta.
        </p>

        <div className="space-y-4">
          {tones.map((tone) => (
            <button
              key={tone.id}
              onClick={() => setSelected(tone.id)}
              className={`w-full p-4 rounded-2xl text-left border transition ${
                selected === tone.id
                  ? "border-emerald-400 bg-emerald-400/10"
                  : "border-slate-700 hover:border-emerald-300/50"
              }`}
            >
              <h3 className="font-medium text-lg">{tone.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{tone.desc}</p>
            </button>
          ))}
        </div>

        <button
          onClick={handleContinue}
          disabled={!selected}
          className={`w-full py-3 mt-4 rounded-2xl font-semibold transition ${
            selected
              ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
              : "bg-slate-700 text-slate-400 cursor-not-allowed"
          }`}
        >
          Continuar
        </button>

      </div>
    </main>
  );
}
