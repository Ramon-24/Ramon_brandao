"use client";
import React, { useEffect, useState } from "react";
import { useConfig } from "../Components_Segundarios/ConfigText";
import { Textos } from "../Components_Segundarios/Textos";
import { TituloSecao } from "../Components_Segundarios/TituloSecao";
import { GruposDestaque } from "../Components_Segundarios/GruposDestaque";
import "../Components.css/Config.css";

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
    <section className="linguagens" id="linguagens" style={{paddingTop: "100px"}}>
      <TituloSecao texto={t.titulo} />
      <div className="linguagens-scroll0">
        <div className="linguagens-scroll">
          {Object.entries(t.grupos).map(([key, grupo], idx) => (
            <GruposDestaque
              key={idx}
              icone={grupo.icone}
              titulo={grupo.titulo}
              itens={grupo.itens.map((item, i) => ({ icone: item.icone, ref: item }))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}