// src/app/Components/CardProjeto.jsx
import Image from "next/image";
import "../Components.css/Projetos.css";

export function CardProjeto({
  nome,
  descricao,
  status,
  imagem,
  tecnologiasBarra,
  links = [],
  classe = ""
}) {
  return (
    <div className={`cards ${classe}`}>
      <div className="imagemContainer">
        <Image
          src={imagem}
          alt={`Imagem do projeto ${nome}`}
          width={500}
          height={300}
          className="cardProjet-imagem"
        />
        {status && <span className="spanCard">{status}</span>}
      </div>

      <div className="card-conteudo">
        <h3 className="card-nome">{nome}</h3>
        <p className="card-descricao">{descricao}</p>

        {/* Agora usamos o componente de barra diretamente como prop */}
        <div className="card-tecnologias">
          {tecnologiasBarra}
        </div>

        {links.length > 0 && (
          <div className="Cardlinks">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="linkItem"
              >
                <span className="Cardsvg">{link.svg}</span>
                <span className="nomeRede">{link.nome}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
