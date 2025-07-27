"use client";

import { useState } from "react";
import { useConfig } from "./Components_Segundarios/ConfigText";
import { Textos } from "./Components_Segundarios/Textos";
import { TituloSecao } from "./Components_Segundarios/TituloSecao";
import { Barras } from "./Components_Segundarios/Barras"
import { CardProjeto } from "./Components_Segundarios/CardProjeto";
import "../Components/Components.css/Projetos.css";

export function Projetos() {
    const { config } = useConfig();
    const t = Textos[config.idioma]?.projetos;
    const [filtro, setFiltro] = useState("Todos");

    const projetosFiltrados = t.lista.filter((projeto) =>
        filtro === "Todos" ? true : projeto.categoria === filtro
    );

    return (
        <section className="Projetos-scroll" id="projetos">
            <TituloSecao texto={t.titulo} />

            <div
                className="filtros-container"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0.6rem 1.5rem",
                    border: "none",
                    outline: "none",
                    gap: "15px",
                    borderRadius: "20px"
                }}>
                {t.filtros.map((botao) => (
                    <button
                        key={botao}
                        onClick={() => setFiltro(botao)}
                        className={`filtro-btn ${filtro === botao ? "ativo" : ""}`}
                    >
                        {botao}
                    </button>
                ))}
            </div>

            <div className="projeto-scroll">
                {projetosFiltrados.map((projeto, index) => (
                    <CardProjeto
                        key={index}
                        nome={projeto.nome}
                        descricao={projeto.descricao}
                        status={projeto.status}
                        imagem={projeto.imagem}
                        tecnologiasBarra={
                            <div className="barras-container">
                                {projeto.tecnologias.map((tech, i) => (
                                    <Barras key={i} texto={tech} />
                                ))}
                            </div>
                        }
                        links={projeto.links}
                    />
                ))}
            </div>
        </section>
    );
}