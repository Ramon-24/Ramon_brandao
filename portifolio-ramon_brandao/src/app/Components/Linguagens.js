"use client";
import React, { useEffect, useState } from "react";
import { useConfig } from "./ConfigText";
import { Textos } from "./Textos";
import { TituloSecao } from "./TituloSecao";
import { GruposDestaque } from "./GruposDestaque";

export function Linguagens() {
  const { config } = useConfig();
  const [t, setT] = useState(null);

  useEffect(() => {
    if (config?.idioma) {
      setT(Textos[config.idioma]?.tecnologias);
    }
  }, [config?.idioma]);

  useEffect(() => {
    const handleStorage = () => {
      const configSalva = JSON.parse(localStorage.getItem("configuracoes"));
      if (configSalva?.idioma) {
        setT(Textos[configSalva.idioma]?.tecnologias);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!t) return null;

  return (
    <section className="linguagens" id="linguagens">
      <TituloSecao texto={t.titulo} />
      <div className="linguagens-grid">
        <GruposDestaque
          icone="🌐"
          titulo={t.grupos.desenvolvimentoWeb.titulo}
          itens={[
            { icone: "📄", ref: t.grupos.desenvolvimentoWeb.itens[0] },
            { icone: "🎨", ref: t.grupos.desenvolvimentoWeb.itens[1] },
            { icone: "⚡", ref: t.grupos.desenvolvimentoWeb.itens[2] },
            { icone: "⚛️", ref: t.grupos.desenvolvimentoWeb.itens[3] },
            { icone: "📦", ref: t.grupos.desenvolvimentoWeb.itens[4] },
            { icone: "🌈", ref: t.grupos.desenvolvimentoWeb.itens[5] },
          ]}
        />

        <GruposDestaque
          icone="🧠"
          titulo={t.grupos.logicaBackend.titulo}
          itens={[
            { icone: "🟢", ref: t.grupos.logicaBackend.itens[0] },
            { icone: "🚀", ref: t.grupos.logicaBackend.itens[1] },
            { icone: "🐍", ref: t.grupos.logicaBackend.itens[2] },
            { icone: "🌐", ref: t.grupos.logicaBackend.itens[3] },
          ]}
        />

        {/* Continue com os outros grupos do mesmo jeito... */}
      </div>
    </section>
  );
}
