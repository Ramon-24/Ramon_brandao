"use client";
import { useConfig } from "./ConfigText";

export function Barras({ texto }) {
    const { config } = useConfig();

    return (
        <div className={`barra-container ${config.tema} paleta-${config.paleta}`}>
            {texto}
        </div>
    );
}
