"use client";
import { useConfig } from "./Components_Segundarios/ConfigText";
import { Textos } from "./Components_Segundarios/Textos";
import { useEffect, useState } from "react";
import { Barras } from "./Components_Segundarios/Barras"
import { TituloSecao } from "./Components_Segundarios/TituloSecao";
import { GruposDestaque } from "../Components/Components_Segundarios/GruposDestaque";
import Image from 'next/image';
import "./Components.css/Habilidades.css"


export function Habilidades() {
    const { config } = useConfig();
    const [t, setT] = useState(null);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.habilidades);
        }
    }, [config?.idioma]);

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem("configuracoes"));
            if (configSalva?.idioma) {
                setT(Textos[configSalva.idioma]?.habilidades);
            }
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    if (!t) return null;
    return (
        <section className="habilidades">
            <TituloSecao texto={t.titulo} />
            <div className="habilidades-scroll-cards">
                <div className="habilidades-scroll">


                    <div className="habilidade-card">
                        <div className="item-header">
                            <div className="item-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-brush-fill" viewBox="0 0 16 16">
                                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04" />
                                </svg>
                            </div>
                            <h3 className="item-nome">{t.frontend.titulo}</h3>
                        </div>
                        <div className="descricao-Habilidades">
                            <p>{t.frontend.descricao}</p>
                        </div>
                        <div>
                            <Barras texto={t.frontend.itens} />
                        </div>
                    </div>


                    <div className="habilidade-card">
                        <div className="item-header">
                            <div className="item-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-hdd-stack" viewBox="0 0 16 16">
                                    <path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z" />
                                    <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                    <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                                </svg>
                            </div>
                            <h3 className="item-nome">{t.backend.titulo}</h3>
                        </div>
                        <div className="descricao-Habilidades">
                            <p>{t.backend.descricao}</p>
                        </div>
                        <div>
                            <Barras texto={t.backend.itens} />
                        </div>
                    </div>


                    <div className="habilidade-card">
                        <div className="item-header">
                            <div className="item-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16">
                                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
                                </svg>
                            </div>
                            <h3 className="item-nome">{t.ferramentas.titulo}</h3>
                        </div>
                        <div className="descricao-Habilidades">
                            <p>{t.ferramentas.descricao}</p>
                        </div>
                        <div>
                            <Barras texto={t.ferramentas.itens} />
                        </div>
                    </div>


                    <div className="habilidade-card">
                        <div className="item-header">
                            <div className="item-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                                </svg>
                            </div>
                            <h3 className="item-nome">{t.outros.titulo}</h3>
                        </div>
                        <div className="descricao-Habilidades">
                            <p>{t.outros.descricao}</p>
                        </div>
                        <div>
                            <Barras texto={t.outros.itens} />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
