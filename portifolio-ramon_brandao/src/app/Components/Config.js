// "use client";
// import { useState, useEffect } from "react";
// import "./Config.css";
// import "../../app/globals.css";

// const claroPaletas = ["vermelho-light", "marrom-light", "azul-neutro-light", "azul-turquesa-light"];
// const escuroPaletas = ["vermelho-dark", "marrom-dark", "azul-neutro-dark", "azul-turquesa-dark"];


// export function Config() {
//     const [tema, setTema] = useState("light");
//     const [paleta, setPaleta] = useState("azul-neutro");
//     const [idioma, setIdioma] = useState("pt");
//     const [paletaAtiva, setPaletaAtiva] = useState("azul-neutro-light");


//     useEffect(() => {
//         localStorage.setItem("idioma", idioma);
//     }, [idioma]);

//     useEffect(() => {
//         const idiomaSalvo = localStorage.getItem("idioma");
//         if (idiomaSalvo) setIdioma(idiomaSalvo);
//     }, []);


//     useEffect(() => {
//         document.body.className = `paleta-${paleta}-${tema}`;
//         const classeNova = `paleta-${paleta}-${tema}`;
//         document.body.classList.forEach((classe) => {
//             if (classe.startsWith("paleta-")) {
//                 document.body.classList.remove(classe);
//             }
//         });
//         document.body.classList.add(classeNova);
//     }, [paleta, tema]);

//     useEffect(() => {
//         localStorage.setItem("tema", tema);
//         localStorage.setItem("paleta", paleta);
//     }, [tema, paleta]);
//     useEffect(() => {
//         const temaSalvo = localStorage.getItem("tema");
//         const paletaSalva = localStorage.getItem("paleta");
//         if (temaSalvo && paletaSalva) {
//             setTema(temaSalvo);
//             setPaleta(paletaSalva);
//         }
//     }, []);
//     useEffect(() => {
//         const classeNova = `paleta-${paleta}-${tema}`;

//         document.body.classList.forEach((classe) => {
//             if (classe.startsWith("paleta-")) {
//                 document.body.classList.remove(classe);
//             }
//         });

//         document.body.classList.add(classeNova);
//     }, [paleta, tema]);
//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             document.body.className = `paleta-${paleta}-${tema}`;
//         }
//     }, [paleta, tema]);
//     useEffect(() => {
//         localStorage.setItem("paletaAtiva", paletaAtiva);
//         localStorage.setItem("idioma", idioma);
//     }, [paletaAtiva, idioma]);

//     useEffect(() => {
//         const salvo = localStorage.getItem("paletaAtiva");
//         const idiomaSalvo = localStorage.getItem("idioma");
//         if (salvo) setPaletaAtiva(salvo);
//         if (idiomaSalvo) setIdioma(idiomaSalvo);
//     }, []);


//     const paletas = {
//         "vermelho-light": ["#802742", "#A6263E", "#D1345B", "#FF6B8B"],
//         "marrom-light": ["#5C4A3D", "#8C7E6C", "#BFB2A3", "#E0D9CF"],
//         "azul-neutro-light": ["#4D5673", "#44A1F2", "#6BB7FF", "#B0D6FF"],
//         "azul-turquesa-light": ["#002147", "#0A3161", "#182958", "#003366"]
//     };

//     const handleSelecionarPaleta = (nome) => {
//         const temaDetectado = nome.includes("dark") ? "dark" : "light";
//         const base = nome.replace("-light", "").replace("-dark", "");
//         setPaleta(base);
//         setTema(temaDetectado);
//     };

//     const [mostrarConfig, setMostrarConfig] = useState(false);
//     const traducoes = {
//         pt: {
//             configuracoes: "Configurações",
//             tema: "Tema",
//             claro: "Claro",
//             escuro: "Escuro",
//             paleta: "Paleta de Cores",
//             idioma: "Idioma",
//             portugues: "Português",
//             ingles: "Inglês",
//             espanhol: "Espanhol",
//         },
//         en: {
//             configuracoes: "Settings",
//             tema: "Theme",
//             claro: "Light",
//             escuro: "Dark",
//             paleta: "Color Palette",
//             idioma: "Language",
//             portugues: "Portuguese",
//             ingles: "English",
//             espanhol: "Spanish",
//         },
//         es: {
//             configuracoes: "Configuración",
//             tema: "Tema",
//             claro: "Claro",
//             escuro: "Oscuro",
//             paleta: "Paleta de Colores",
//             idioma: "Idioma",
//             portugues: "Portugués",
//             ingles: "Inglés",
//             espanhol: "Español",
//         }
//     };




//     return (
//         <>
//             <div className="botao-container">
//                 <button className="botao-flutuante" onClick={() => setMostrarConfig(true)}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
//                         <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
//                     </svg>
//                 </button>
//             </div>

//             {mostrarConfig && (
//                 <div className="overlay">
//                     <div className="config-card">
//                         <div className="config-title">
//                             <h1>{traducoes[idioma].configuracoes}</h1>
//                             <button className="botao-fechar" onClick={() => setMostrarConfig(false)}>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
//                                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
//                                 </svg>
//                             </button>
//                         </div>

//                         <div className="Area">
//                             <h3 className="Titulo">{traducoes[idioma].tema}</h3>
//                             <div className="grupo-botoes">
//                                 <button
//                                     className={`botao-opcao ${paletaAtiva.endsWith("light") ? "ativo" : ""}`}
//                                     onClick={() => setPaletaAtiva(paletaAtiva.replace("dark", "light"))}
//                                 >
//                                     {traducoes[idioma].claro}
//                                 </button>

//                                 <button
//                                     className={`botao-opcao ${paletaAtiva.endsWith("dark") ? "ativo" : ""}`}
//                                     onClick={() => setPaletaAtiva(paletaAtiva.replace("light", "dark"))}
//                                 >
//                                     {traducoes[idioma].escuro}
//                                 </button>

//                             </div>
//                         </div>

//                         <div className="Area">
//                             <h3 className="Titulo">{traducoes[idioma].paleta}</h3>
//                             <div className="paletas-container">
//                                 {Object.entries(paletas).map(([nome, cores]) => (
//                                     <div
//                                         key={nome}
//                                         className={`paleta ${`paleta-${paleta}-${tema}` === nome ? "ativo" : ""}`}
//                                         onClick={() => handleSelecionarPaleta(nome)}
//                                     >
//                                         {cores.map((cor, i) => (
//                                             <div key={i} className="cor" style={{ backgroundColor: cor }} />
//                                         ))}
//                                     </div>
//                                 ))}

//                             </div>
//                         </div>

//                         <div className="Area">
//                             <h3 className="Titulo">{traducoes[idioma].idioma}</h3>
//                             <div className="grupo-botoes">
//                                 <button className={`botao-opcao ${idioma === "pt" ? "ativo" : ""}`} onClick={() => setIdioma("pt")}>
//                                     {traducoes[idioma].portugues}
//                                 </button>
//                                 <button className={`botao-opcao ${idioma === "en" ? "ativo" : ""}`} onClick={() => setIdioma("en")}>
//                                     {traducoes[idioma].ingles}
//                                 </button>
//                                 <button className={`botao-opcao ${idioma === "es" ? "ativo" : ""}`} onClick={() => setIdioma("es")}>
//                                     {traducoes[idioma].espanhol}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );

// }
















"use client";
import { useState, useEffect } from "react";
import "./Config.css";
import "../../app/globals.css";

export function Config() {
    // Estados
    const [config, setConfig] = useState({
        tema: 'light',
        paleta: 'azul-neutro',
        idioma: 'pt'
    });
    const [mostrarConfig, setMostrarConfig] = useState(false);

    // Paletas de cores para ambos os temas
    const paletas = {
        light: {
            'vermelho': ["#802742", "#A6263E", "#D1345B", "#FF6B8B"],
            'marrom': ["#5C4A3D", "#8C7E6C", "#BFB2A3", "#E0D9CF"],
            'azul-neutro': ["#4D5673", "#44A1F2", "#6BB7FF", "#B0D6FF"],
            'azul-turquesa': ["#002147", "#0A3161", "#182958", "#003366"]
        },
        dark: {
            'vermelho': ["#5A1A2E", "#7A1D37", "#A8254A", "#D1345B"],
            'marrom': ["#3D3329", "#5C5041", "#8A7B68", "#B0A18E"],
            'azul-neutro': ["#2A3145", "#1E5B9E", "#2B75C2", "#4D9AE8"],
            'azul-turquesa': ["#001A33", "#00264D", "#003366", "#004080"]
        }
    };

    // Traduções
    const traducoes = {
        pt: {
            configuracoes: "Configurações",
            tema: "Tema",
            claro: "Claro",
            escuro: "Escuro",
            paleta: "Paleta de Cores",
            idioma: "Idioma",
            portugues: "Português",
            ingles: "English",
            espanhol: "Español"
        },
        en: {
            configuracoes: "Settings",
            tema: "Theme",
            claro: "Light",
            escuro: "Dark",
            paleta: "Color Palette",
            idioma: "Language",
            portugues: "Portuguese",
            ingles: "English",
            espanhol: "Spanish"
        },
        es: {
            configuracoes: "Configuración",
            tema: "Tema",
            claro: "Claro",
            escuro: "Oscuro",
            paleta: "Paleta de Colores",
            idioma: "Idioma",
            portugues: "Portugués",
            ingles: "Inglés",
            espanhol: "Español"
        }
    };

    // Efeito para carregar configurações salvas
    useEffect(() => {
        const carregarConfiguracoes = () => {
            const configSalva = JSON.parse(localStorage.getItem('configuracoes')) || {
                tema: 'light',
                paleta: 'azul-neutro',
                idioma: 'pt'
            };
            setConfig(configSalva);
            aplicarTema(configSalva.paleta, configSalva.tema);
        };
        carregarConfiguracoes();
    }, []);

    // Aplicar tema ao body e salvar no localStorage
    const aplicarTema = (paleta, tema) => {
        const classeNova = `paleta-${paleta}-${tema}`;

        // Remove classes antigas
        document.body.classList.forEach(classe => {
            if (classe.startsWith('paleta-')) {
                document.body.classList.remove(classe);
            }
        });

        // Aplica nova classe
        document.body.classList.add(classeNova);

        // Atualiza CSS variables
        const cores = paletas[tema][paleta];
        document.documentElement.style.setProperty('--cor-primaria', cores[1]);
        document.documentElement.style.setProperty('--cor-secundaria', cores[2]);
        document.documentElement.style.setProperty('--cor-destaque', cores[3]);

        // Salva no localStorage
        const novaConfig = { ...config, paleta, tema };
        setConfig(novaConfig);
        localStorage.setItem('configuracoes', JSON.stringify(novaConfig));
    };

    // Handler para mudar tema
    const mudarTema = (novoTema) => {
        aplicarTema(config.paleta, novoTema);
    };

    // Handler para mudar paleta
    const mudarPaleta = (novaPaleta) => {
        aplicarTema(novaPaleta, config.tema);
    };

    // Handler para mudar idioma
    const mudarIdioma = (novoIdioma) => {
        const novaConfig = { ...config, idioma: novoIdioma };
        setConfig(novaConfig);
        localStorage.setItem('configuracoes', JSON.stringify(novaConfig));
    };

    return (
        <>
         
            <div className="botao-container">
                <button
                    className="botao-flutuante"
                    onClick={() => setMostrarConfig(true)}
                    aria-label={traducoes[config.idioma].configuracoes}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                </button>
            </div>

         
            {mostrarConfig && (
                <div className="overlay">
                    <div className="config-card">
                        <div className="config-header">
                            <h1>{traducoes[config.idioma].configuracoes}</h1>
                            <button
                                className="botao-fechar"
                                onClick={() => setMostrarConfig(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        </div>

              
                        <div className="config-section">
                            <h2>{traducoes[config.idioma].tema}</h2>
                            <div className="opcoes-grid">
                                <button
                                    className={`opcao-botao ${config.tema === 'light' ? 'ativo' : ''}`}
                                    onClick={() => mudarTema('light')}
                                >
                                    {traducoes[config.idioma].claro}
                                </button>
                                <button
                                    className={`opcao-botao ${config.tema === 'dark' ? 'ativo' : ''}`}
                                    onClick={() => mudarTema('dark')}
                                >
                                    {traducoes[config.idioma].escuro}
                                </button>
                            </div>
                        </div>

                        <div className="divisor"></div>


                        <div className="config-section">
                            <h2>{traducoes[config.idioma].paleta}</h2>
                            <div className="paletas-grid">
                                {Object.keys(paletas[config.tema]).map((nomePaleta) => (
                                    <div
                                        key={nomePaleta}
                                        className={`paleta ${config.paleta === nomePaleta ? 'ativo' : ''}`}
                                        onClick={() => mudarPaleta(nomePaleta)}
                                    >
                                        {paletas[config.tema][nomePaleta].map((cor, index) => (
                                            <div key={index} className="cor" style={{ backgroundColor: cor }} />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="divisor"></div>


                        <div className="config-section">
                            <h2>{traducoes[config.idioma].idioma}</h2>
                            <div className="opcoes-grid">
                                <button
                                    className={`opcao-botao ${config.idioma === 'pt' ? 'ativo' : ''}`}
                                    onClick={() => mudarIdioma('pt')}
                                >
                                    {traducoes[config.idioma].portugues}
                                </button>
                                <button
                                    className={`opcao-botao ${config.idioma === 'en' ? 'ativo' : ''}`}
                                    onClick={() => mudarIdioma('en')}
                                >
                                    {traducoes[config.idioma].ingles}
                                </button>
                                <button
                                    className={`opcao-botao ${config.idioma === 'es' ? 'ativo' : ''}`}
                                    onClick={() => mudarIdioma('es')}
                                >
                                    {traducoes[config.idioma].espanhol}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}