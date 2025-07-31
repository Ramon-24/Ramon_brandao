"use client";
import { useConfig } from "../Components_Segundarios/ConfigText";
import { Textos } from "../Components_Segundarios/Textos";
import { useEffect, useState } from "react";
import { Barras } from "../Components_Segundarios/Barras"
import { TituloSecao } from "../Components_Segundarios/TituloSecao";
import Image from 'next/image';
import "../Components.css/Sobre.css"

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
        <section
            className="sobre"
            id="sobre"
        >
            <TituloSecao texto={t.titulo} />
            <div className="areaSobre">
                <div className="textSobre">
                    <div className="text">
                        <p>
                            {t.paragrafo0}
                            <strong>{t.destaque1}</strong>
                            {t.paragrafo1}
                            <strong>{t.destaque2}</strong>
                            {t.paragrafo2}
                        </p>

                        <p>
                            {t.paragrafo3}
                            <strong>{t.destaque3}</strong>
                            {t.paragrafo4}
                        </p>

                        <p>
                            {t.paragrafo5}
                        </p>

                        <p>
                            {t.paragrafo6}
                            <strong>{t.destaque4}</strong>
                            {t.paragrafo7}
                        </p>

                        <p>
                            {t.paragrafo8}
                            <strong>{t.destaque5}</strong>
                            {t.paragrafo9}
                        </p>

                        <p>
                            {t.paragrafo9}
                            <strong>{t.destaque6}</strong>
                            {t.paragrafo10}
                        </p>
                    </div>

                    <div>
                        <h3>{t.habilidadesTitulo}</h3>
                        <Barras texto={t.habilidades} />
                    </div>
                </div>
                <div className="areaFoto">
                    <Image
                        src="/Eu.jpg"
                        className="Foto"
                        alt="Foto"
                        width={400}
                        height={400}
                    />
                </div>

            </div>
        </section>
    );
}