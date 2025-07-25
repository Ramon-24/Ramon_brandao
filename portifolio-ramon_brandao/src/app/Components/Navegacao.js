"use client";
import { useConfig } from "./ConfigText";
import { Textos } from "./Textos";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Config } from "./Config";
import "./Config.css";
// import "/LogoGuia"

export function Navegacao() {
    const { config } = useConfig();
    const [t, setT] = useState(null);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.nav);
        }
    }, [config?.idioma]);

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem('configuracoes'));
            if (configSalva?.idioma) {
                setT(Textos[configSalva.idioma]?.nav);
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    if (!t) return null;

    return (
        <section className="nav">
            <div className="nav-esquerda">
                <h1 className="logo1">{t.logo1}</h1>
                <h1 className="logo2">{t.logo2}</h1>
            </div>
            <div className="nav-direita">
                <Link href="/" className="links">{t.links.inicio}</Link>
                <Link href="/" className="links">{t.links.sobre}</Link>
                <Link href="/" className="links">{t.links.tecnologias}</Link>
                <Link href="/" className="links">{t.links.habilidades}</Link>
                <Link href="/" className="links">{t.links.projetos}</Link>
                <Link href="/" className="links">{t.links.contato}</Link>
                <Config />
            </div>
        </section>

    );
}