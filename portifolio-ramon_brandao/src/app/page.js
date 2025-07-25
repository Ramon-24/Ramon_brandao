import { Config } from "./Components/Config.js";
import { Textos } from "../app/Components/Textos.js";
import { useConfig } from "../app/Components/ConfigText.js";
import { Hero } from "../app/Components/Hero.js";
import { Sobre } from "../app/Components/Sobre.js";
import { Linguagens } from "../app/Components/Linguagens.js";
import { Navegacao } from "./Components/Navegacao.js";

export default function Home() {
  return (
    < >
      <Navegacao />
      <Hero />
      <Sobre />
      <Linguagens />
    </>
  );
}
