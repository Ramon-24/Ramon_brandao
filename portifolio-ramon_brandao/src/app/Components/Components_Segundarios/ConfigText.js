"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ConfigContext = createContext();

export function ConfigProvider({ children }) {
    const [config, setConfig] = useState(null); // Inicia como null para controle de carregamento

    useEffect(() => {
        const carregarConfig = () => {
            const configSalva = localStorage.getItem("configuracoes");
            const configPadrao = {
                tema: "light",
                paleta: "azul-neutro",
                idioma: "pt"
            };

            const configInicial = configSalva ? JSON.parse(configSalva) : configPadrao;
            setConfig(configInicial);

            // Aplica o tema imediatamente
            document.body.classList.add(`paleta-${configInicial.paleta}-${configInicial.tema}`);

            // Salva a config padrão se não existir
            if (!configSalva) {
                localStorage.setItem("configuracoes", JSON.stringify(configPadrao));
            }
        };

        carregarConfig();
    }, []);

    const atualizarConfig = (novaConfig) => {
        setConfig(novaConfig);
        localStorage.setItem("configuracoes", JSON.stringify(novaConfig));
    };

    if (!config) return null; // Ou um loading spinner

    return (
        <ConfigContext.Provider value={{ config, atualizarConfig }}>
            {children}
        </ConfigContext.Provider>
    );
}

export function useConfig() {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error("useConfig deve ser usado dentro de um ConfigProvider");
    }
    return context;
}