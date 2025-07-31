"use client";
import { useConfig } from "../Components_Segundarios/ConfigText";
import { Textos } from "../Components_Segundarios/Textos";
import { useEffect, useState } from "react";
import { Icons } from "../Components_Segundarios/Icons";
import Image from 'next/image';
import "../Components.css/Hero.css"

export function Hero() {
    const { config } = useConfig();
    const [t, setT] = useState(null);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.hero);
        }
    }, [config?.idioma]); // Reage a mudanças no idioma

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem('configuracoes'));
            if (configSalva?.idioma) {
                setT(Textos[configSalva.idioma]?.hero);
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    if (!t) return null;

    return (
        <section
            className="hero"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}>

            <div className="container">
                <h1 className="title-impact">
                    <strong className="negrito">{t.destaque}</strong>
                    {t.titulo}
                </h1>
                <p className="subtitulo">{t.subtitulo}</p>
                <div className="botoes">
                    <div className="entrarContato">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ marginTop: "4px" }} fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                        </svg>
                        <a href="#contato" className="btn primario" style={{ textDecoration: "none", color: "white" }}>{t.botaoContato}</a>
                    </div>
                    <div className="baixarCurriculo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ marginTop: "3px" }} fill="currentColor" className="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                        <a href="/curriculo.pdf" className="btn secundario" style={{ textDecoration: "none", color: "var(--color-primary-1)" }} download>{t.botaoCurriculo}</a>
                    </div>
                </div>
                <Icons />
            </div>
            <section className="m">
                <div className="minhaFoto">
                    <Image
                        src="/Eu.jpg"
                        className="Foto"
                        alt="Foto"
                        width={500}
                        height={500}
                    />
                </div>
                    <span className="badge">{t.badge}</span>
            </section>
        </section>
    );
}