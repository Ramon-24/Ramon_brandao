"use client";
import "./Config.css";
import { ItensDescricao } from "./ItensDescricao";

export function GruposDestaque({ icone, titulo, itens }) {
  return (
    <div className="grupo-card">
      <div className="grupo-header">
        <div className="grupo-icon">{icone}</div>
        <h3 className="grupo-titulo">{titulo}</h3>
      </div>
      <div className="grupo-itens">
        {itens.map((item, idx) => (
          <ItensDescricao
            key={idx}
            icone={item.icone}
            nome={item.ref.nome}
            descricao={item.ref.descricao}
          />
        ))}
      </div>
    </div>
  );
}