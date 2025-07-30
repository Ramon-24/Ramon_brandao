"use client";
import { useConfig } from "../Components_Segundarios/ConfigText";
import { Textos } from "../Components_Segundarios/Textos";
import { useEffect, useState } from "react";
import { Barras } from "../Components_Segundarios/Barras"
import { TituloSecao } from "../Components_Segundarios/TituloSecao";
import { Formulario } from "../Components_Segundarios/Formulario"
import Image from 'next/image';

export function Contato() {
    const { config } = useConfig();
    const [t, setT] = useState(null);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.contato);
        }
    }, [config?.idioma]); // Reage a mudanças no idioma

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem('configuracoes'));
            if (configSalva?.idioma) {
                setT(Textos[configSalva.idioma]?.contato);
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    if (!t) return null;

    return (
        <section className="contato" style={{paddingTop: "100px"}}>
            <TituloSecao texto={t.titulo} />
            <div
                className="Area-contato"
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}>







                <div className="Inf-contato">
                    <h1>{t.titulos}</h1>
                    <div className="title-underline"></div>
                    <p>{t.descricao}</p>

                    <div
                        className="Inf-cards-contato"
                        style={{
                            gap: "20px"
                        }}>
                        <div
                            className="Inf-card-contato"
                            style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>

                            <div className="icone-circulo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fab fa-linkedin-in" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </div>
                            <div className="Inf-text-contato">
                                <h3>{t.metodos.github}</h3>
                                <p>{t.metodos.url}</p>
                            </div>

                        </div>





                        <div
                            className="Inf-card-contato"
                            style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>

                            <div className="icone-circulo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fab fa-linkedin-in" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </div>
                            <div className="Inf-text-contato">
                                <h3>{t.metodos.github}</h3>
                                <p>{t.metodos.url}</p>
                            </div>

                        </div>




                        <div
                            className="Inf-card-contato"
                            style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>

                            <div className="icone-circulo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fab fa-linkedin-in" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </div>
                            <div className="Inf-text-contato">
                                <h3>{t.metodos.github}</h3>
                                <p>{t.metodos.url}</p>
                            </div>

                        </div>




                        <div
                            className="Inf-card-contato"
                            style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>

                            <div className="icone-circulo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fab fa-linkedin-in" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </div>
                            <div className="Inf-text-contato">
                                <h3>{t.metodos.github}</h3>
                                <p>{t.metodos.url}</p>
                            </div>

                        </div>



                    </div>
                </div>
                <Formulario />
            </div>
        </section>
    );
}