"use client";
import { useConfig } from "../Components/ConfigText.js";
import { Textos } from "../Components/Textos.js";

export function Hero() {
    const { config } = useConfig();
    
    const idioma = config?.idioma || "pt";
    const t = Textos[idioma]?.hero || {};

    return (
        <section className="hero">
            <div className="container">
                <span className="badge">{t.badge}</span>
                <h1>{t.titulo}</h1>
                <p>{t.subtitulo}</p>
                <div className="botoes">
                    <a href="#contato" className="btn primario">{t.botaoContato}</a>
                    <a href="/curriculo.pdf" className="btn secundario" download>{t.botaoCurriculo}</a>
                </div>
            </div>
        </section>
    );
}
