"use client";
import { useConfig } from "./Components_Segundarios/ConfigText";
import { Textos } from "./Components_Segundarios/Textos";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Config } from "./Components_Segundarios/Config";
import "./Components.css/Navegacao.css";

export function Navegacao() {
    const { config } = useConfig();
    const [t, setT] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    useEffect(() => {
        if (config?.idioma) setT(Textos[config.idioma]?.nav);
    }, [config?.idioma]);

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem('configuracoes'));
            if (configSalva?.idioma) setT(Textos[configSalva.idioma]?.nav);
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
            
            {/* Versão Desktop (exatamente como estava antes) */}
            {!isMobile && (
                <div className="nav-direita">
                    <Link href="/" className="links">{t.links.inicio}</Link>
                    <Link href="/" className="links">{t.links.sobre}</Link>
                    <Link href="/" className="links">{t.links.tecnologias}</Link>
                    <Link href="/" className="links">{t.links.habilidades}</Link>
                    <Link href="/" className="links">{t.links.projetos}</Link>
                    <Link href="/" className="links">{t.links.contato}</Link>
                    <Config />
                </div>
            )}

            {/* Versão Mobile */}
            {isMobile && (
                <>
                    <Config /> {/* Configurações sempre visíveis */}
                    
                    <button 
                        className={`hamburguer-button ${isMenuOpen ? 'open' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                        <Link href="/" className="mobile-link">{t.links.inicio}</Link>
                        <Link href="/" className="mobile-link">{t.links.sobre}</Link>
                        <Link href="/" className="mobile-link">{t.links.tecnologias}</Link>
                        <Link href="/" className="mobile-link">{t.links.habilidades}</Link>
                        <Link href="/" className="mobile-link">{t.links.projetos}</Link>
                        <Link href="/" className="mobile-link">{t.links.contato}</Link>
                    </div>
                </>
            )}
        </section>
    );
}