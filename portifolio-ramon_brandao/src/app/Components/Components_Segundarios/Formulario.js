"use client";
import Image from "next/image";
import Logo from "../../../../public/LogoGuia.svg";
import { useConfig } from "./ConfigText";
import { Textos } from "./Textos";
import { useEffect, useState } from "react";
import "../Components.css/Contato.css";

export function Formulario() {
    const [mensagem, setMensagem] = useState(null);
    const { config } = useConfig();
    const [t, setT] = useState(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.contato);
        }
    }, [config?.idioma]);

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

    useEffect(() => {
        // Simula a animação de entrada
        const timer = setTimeout(() => setIsInView(true), 300);
        return () => clearTimeout(timer);
    }, []);

    if (!t) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formsubmit.co/ajax/ramonbrandao.dev24@gmail.com", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            setMensagem(res.ok ? "sucesso" : "erro");
            if (res.ok) form.reset();
        } catch (error) {
            console.error(error);
            setMensagem("erro");
        }
    };

    return (
        <div>
            <div className="form-container">
                <form
                    onSubmit={handleSubmit}
                    className={`contact-form ${isInView ? 'in-view' : ''}`}
                >
                    <h2 className="form-title">{t.formulario.tituloForms}</h2>
                    <div className="title-underline"></div>

                    <div className="form-group">
                        <label htmlFor="nome" className="form-label">
                            {t.formulario.nome}
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="name"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            {t.formulario.email}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="assunto" className="form-label">
                            {t.formulario.assunto}
                        </label>
                        <input
                            type="text"
                            id="assunto"
                            name="subject"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensagem" className="form-label">
                            {t.formulario.mensagem}
                        </label>
                        <textarea
                            id="mensagem"
                            name="message"
                            rows="5"
                            className="form-textarea"
                            required
                        ></textarea>
                    </div>

                    {/* Campos ocultos */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="Nova mensagem do portfólio!" />
                    <input
                        type="hidden"
                        name="_autoresponse"
                        value="Olá! Recebi sua mensagem e em breve te responderei. Obrigado!"
                    />

                    <button type="submit" className="form-submit">
                        {t.formulario.botao}
                    </button>
                </form>
            </div>





            {/* Popup de confirmação */}
            {mensagem && (
                <div className="overlay" style={{ zIndex: "9999"}}>
                    <div className="config-card">
                        <div style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={80}
                                height={80}
                                className="mx-auto mb-4"
                            />

                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "16px"
                            }}>
                                {mensagem === "sucesso" ? (
                                    <>
                                        <h3 className="text-xl font-bold text-green-600"
                                            style={{
                                                fontWeight: "600",
                                                color: "var(--color-text-primary)",
                                                marginTop: "10px"
                                            }}>
                                            {t.mensagem.sucesso.titulo}
                                        </h3>
                                        <p className="mt-2"
                                            style={{
                                                fontWeight: "500",
                                                color: "var(--color-text-primary)",
                                                fontSize: "14px"
                                            }}>
                                            {t.mensagem.sucesso.descricao}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h3
                                            style={{
                                                fontWeight: "600",
                                                color: "var(--color-text-primary)",
                                                marginTop: "10px"
                                            }}>
                                            {t.mensagem.erro.titulo}</h3>
                                        <p
                                            className="mt-2"
                                            style={{
                                                fontWeight: "500",
                                                color: "var(--color-text-primary)",
                                                fontSize: "14px"
                                            }}>
                                            {t.mensagem.erro.descricao}</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "end",
                            marginRight: "20px"
                        }}>
                            <button
                                onClick={() => setMensagem(null)}
                                style={{
                                    marginTop: "30px",
                                    display: "flex",
                                    borderColor: "var(--color-primary-2)",
                                    backgroundColor: "var(--color-primary-2)",
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "8px 18px",
                                    borderRadius: "20px",
                                    boxShadow: " 0 0 0 1px var(--color-background), 0 0 4px 1px var(--color-primary-2)"
                                }}
                            >
                                {t.mensagem.erro.fechar}
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}