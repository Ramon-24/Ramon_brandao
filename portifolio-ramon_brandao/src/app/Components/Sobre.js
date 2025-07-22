"use client";
import { useConfig } from "./ConfigText";
import { Textos } from "./Textos";
import { useEffect, useState } from "react";
import { Barras } from "./Barras"
import { TituloSecao } from "./TituloSecao";

export function Sobre() {
    const { config } = useConfig();
    const [t, setT] = useState(null);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.about);
        }
    }, [config?.idioma]); // Reage a mudanças no idioma

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem('configuracoes'));
            if (configSalva?.idioma) {
                setT(Textos[configSalva.idioma]?.about);
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    if (!t) return null;

    return (
        <section className="sobre">
            <TituloSecao texto={t.titulo} />
            <div className="textSobre">
                <div className="text">
                    <p>{t.paragrafo1}</p>
                    <p>{t.paragrafo2}</p>
                    <p>{t.paragrafo3}</p>
                    <p>{t.paragrafo4}</p>
                    <p>{t.paragrafo5}</p>
                </div>
                <div>
                    <h3>{t.habilidadesTitulo}</h3>
                    <Barras texto={t.habilidades} />
                </div>
            </div>
            <div className="areaFoto">

            </div>
        </section>
    );
}