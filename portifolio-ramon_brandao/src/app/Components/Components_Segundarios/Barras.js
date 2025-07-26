"use client";
import { useConfig } from "./ConfigText";
import "../Components.css/Barra.css"

export function Barras({ texto }) {
    const { config } = useConfig();

    // Garante que texto seja array
    const tecnologias = Array.isArray(texto) ? texto : String(texto).split(" ");

    return (
        <div>
            {tecnologias.map((palavra, index) => (
                <div
                    key={index}
                    className={`barra-container ${config.tema} paleta-${config.paleta}`}>
                    {palavra}
                </div>
            ))}
        </div>
    );
}
