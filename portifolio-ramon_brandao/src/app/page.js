import { Config } from "./Components/Config.js";
import { Textos } from "../app/Components/Textos.js";
import { useConfig } from "../app/Components/ConfigText.js";
import { Hero } from "../app/Components/Hero.js";
import { Sobre } from "../app/Components/Sobre.js"

export default function Home() {
  return (
    < >
      <Config />
      <Hero />
      <Sobre/>
    </>
  );
}
