"use client";
import "./Config.css";

export function ItensDescricao({ icone, nome, descricao }) {
  return (
    <div className="item-card">
      <div className="item-header">
        <div className="item-icon">{icone}</div>
        <h4 className="item-nome">{nome}</h4>
      </div>
      <p className="item-descricao">{descricao}</p>
    </div>
  );
}