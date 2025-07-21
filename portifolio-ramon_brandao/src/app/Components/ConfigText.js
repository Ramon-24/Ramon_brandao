"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ConfigContext = createContext();

export function ConfigProvider({ children }) {
    const [config, setConfig] = useState({
        tema: "light",
        paleta: "azul-neutro",
        idioma: "pt"
    });

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("configuracoes"));
        if (saved) setConfig(saved);
    }, []);

    const atualizarConfig = (novaConfig) => {
        setConfig(novaConfig);
        localStorage.setItem("configuracoes", JSON.stringify(novaConfig));
    };

    return (
        <ConfigContext.Provider value={{ config, atualizarConfig }}>
            {children}
        </ConfigContext.Provider>
    );
}

export function useConfig() {
    return useContext(ConfigContext);
}
