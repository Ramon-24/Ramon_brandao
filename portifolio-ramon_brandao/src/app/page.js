import { Config } from "../app/Components/Components_Segundarios/Config";
import { Textos } from "./Components/Components_Segundarios/Textos.js";
import { useConfig } from "./Components/Components_Segundarios/ConfigText.js";
import { Hero } from "../app/Components/Hero.js";
import { Sobre } from "../app/Components/Sobre.js";
import { Linguagens } from "../app/Components/Linguagens.js";
import { Navegacao } from "./Components/Navegacao.js";
import { Habilidades } from "./Components/Habilidades.js";
import { Projetos } from "./Components/Projetos.js"

export default function Home() {
  return (
    < >
      <Navegacao />
      <Hero />
      <Sobre />
      <Linguagens />
      <Habilidades/>
      <Projetos/>
    </>
  );
}
