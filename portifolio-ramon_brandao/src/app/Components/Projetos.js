"use client";
import { useConfig } from "./ConfigText";
import { Textos } from "./Textos";
import { useEffect, useState } from "react";
import { Barras } from "./Barras"
import { TituloSecao } from "./TituloSecao";
import { GruposDestaque } from "./GruposDestaque";
import Image from 'next/image';


export function Projetos() {
    const { config } = useConfig();
    const [t, setT] = useState(null);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.projetos);
        }
    }, [config?.idioma]);

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem("configuracoes"));
            if (configSalva?.idioma) {
                setT(Textos[configSalva.idioma]?.projetos);
            }
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    if (!t) return null;
    return (
        <section className="projetos">
            <TituloSecao texto={t.titulo} />
        </section>
    );
}
