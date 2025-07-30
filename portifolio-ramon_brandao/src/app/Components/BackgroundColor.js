"use client"
import "./Background.css";
import { useEffect, useRef } from 'react';
import { Navegacao } from "./Components_Principais/Navegacao";
import { Hero } from "./Components_Principais/Hero.js";
import { Sobre } from "./Components_Principais/Sobre.js";
import { Linguagens } from "./Components_Principais/Linguagens.js";
import { Habilidades } from "./Components_Principais/Habilidades.js";
import { Projetos } from "./Components_Principais/Projetos.js"
import { Contato } from "./Components_Principais/Contato"
import { Footer } from "./Components_Principais/Footer"

export function Background() {
    const circlesRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            circlesRef.current.forEach((circle, index) => {
                if (circle) {
                    const progress = Math.min(scrollPosition / (windowHeight * 0.5), 1);
                    const scale = index === 0 ?
                        (0.9 + progress * 0.2) :
                        (0.8 + progress * 0.3);

                    circle.style.transform = `scale(${scale})`;
                    circle.style.opacity = `${0.08 + progress * 0.04}`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="background">
            <Navegacao />
            <section className="background-section initial-section">
                <div
                    ref={el => circlesRef.current[0] = el}
                    className="circle top-left-circle"
                ></div>
                <div
                    ref={el => circlesRef.current[1] = el}
                    className="circle bottom-right-circle"
                ></div>
                <Hero />
            </section>

            <section className="gradient-section diagonal-gradient">
            </section>
                <div className="gradient-overlay">
                    <Sobre />
                </div>

            <section className="solid-section">
                <Linguagens />
            </section>

            <section className="gradient-section horizontal-gradient">
                <div className="gradient-overlay"></div>
                <Habilidades />
            </section>

            <Projetos />

            <section className="gradient-section diagonal-gradient">
                <div className="gradient-overlay"></div>
                <Contato />
            </section>

            <section className="solid-section last-section">
                <Footer />
            </section>
        </div>
    );
}