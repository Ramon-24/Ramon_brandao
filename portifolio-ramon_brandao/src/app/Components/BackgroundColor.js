// Background.jsx
import "./Background.css";
import { Hero } from "./Hero.js";
import { Sobre } from "./Sobre.js";
import { Linguagens } from "./Linguagens.js";
import { Navegacao } from "./Navegacao.js";
import { Habilidades } from "./Habilidades.js";
import { Projetos } from "./Projetos.js"
import { Contato } from "./Contato"
import { Footer } from "./Footer"

export function Background() {
    return (
        <div className="background">
            <section className="background-section section-1">
                <div className="circle top-left-circle"></div>
                <div className="circle bottom-right-circle"></div>
                <Navegacao />
                <Hero />
                <Sobre />
                <Linguagens />
                <Habilidades />
                <Projetos />
                <Contato />
                <Footer/>
            </section>

            {/* <section className="background-section gradient-section gradient-1"></section> */}

            {/* <section className="background-section section-2"></section> */}

            {/* <section className="background-section gradient-section gradient-2"></section> */}

            {/* <section className="background-section section-3"></section> */}
        </div>
    );
}
