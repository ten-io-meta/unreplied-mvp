"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type BasicProfile = {
  email: string;
  year: string;
  city: string;
};

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState<BasicProfile>({
    email: "",
    year: "",
    city: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // MVP: guardamos en localStorage para usarlo luego
    if (typeof window !== "undefined") {
      localStorage.setItem("basicProfile", JSON.stringify(form));
    }

    router.push("/onboarding");
  };

  const disabled =
    !form.email.trim() || !form.year.trim() || !form.city.trim();

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="w-full max-w-md rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl p-6 sm:p-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-2">
            unreplied · mvp
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold leading-snug">
            Aquí no empiezas con fotos.
            <br />
            Empiezas contando{" "}
            <span className="text-emerald-400">a quién buscas</span>.
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Te acompañamos a construir una conversación auténtica,
            anónima y segura. Primero afinamos el universo, luego aparece
            la persona.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300">
              Correo (solo para tu acceso, nadie lo verá)
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              className="w-full rounded-2xl bg-slate-800/80 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              required
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1 space-y-2">
              <label className="text-xs font-medium text-slate-300">
                Año de nacimiento
              </label>
              <input
                type="number"
                name="year"
                value={form.year}
                onChange={handleChange}
                placeholder="1994"
                className="w-full rounded-2xl bg-slate-800/80 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                required
              />
            </div>

            <div className="flex-1 space-y-2">
              <label className="text-xs font-medium text-slate-300">
                Ciudad
              </label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Tu ciudad"
                className="w-full rounded-2xl bg-slate-800/80 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                required
              />
            </div>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            Tus datos se usan solo para este experimento de compatibilidad.
            No hay fotos públicas, no hay perfiles que se exhiben. Solo
            dos personas compatibles hablando sin prejuicios.
          </p>

          <button
            type="submit"
            disabled={disabled}
            className={`w-full mt-2 rounded-2xl py-2.5 text-sm font-semibold transition ${
              disabled
                ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                : "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
            }`}
          >
            Empezar
          </button>
        </form>
      </div>
    </main>
  );
}
