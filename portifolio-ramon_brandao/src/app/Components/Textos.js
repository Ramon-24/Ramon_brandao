// import { Textos } from "i18next";

export const Textos = {
    pt: {
        nav: {
            logo: "< Ramon Brandão />",
            links: {
                inicio: "Início",
                sobre: "Sobre",
                tecnologias: "Tecnologias",
                habilidades: "Habilidades",
                projetos: "Projetos",
                contato: "Contato"
            }
        },
        hero: {
            titulo: "Desenvolvedor Full Stack que transforma propósito em soluções digitais completas.",
            subtitulo: "Atuo da lógica à interface, criando sistemas web, mobile e automações que unem funcionalidade, design e resultado — com aprendizado contínuo e foco em resolver problemas reais.",
            botaoContato: "Entre em contato",
            botaoCurriculo: "Baixar Currículo",
            badge: "Estudante de Desenvolvimento"
        },
        about: {
            titulo: "Sobre Mim",
            paragrafo1: "Olá! Eu sou Ramon Brandão, um Desenvolvedor Full Stack de 17 anos apaixonado por tecnologia, interfaces e soluções criativas.",
            paragrafo2: "Curso o último ano do Ensino Médio Profissional em Desenvolvimento de Sistemas, onde desenvolvo aplicações completas do banco de dados ao front-end.",
            paragrafo3: "Minha jornada começou com a vontade de transformar ideias em experiências reais. Desde então, venho aprimorando minhas habilidades em projetos funcionais, acessíveis e bem organizados.",
            paragrafo4: "Recentemente, fundei a WebCode, uma equipe jovem focada em soluções digitais para pequenos negócios. Aqui, desenvolvo, lidero e aprendo todos os dias.",
            paragrafo5: "Meu sonho é cursar Engenharia ou Ciência da Computação, atuar em grandes projetos, e no futuro, ensinar tecnologia com propósito e criatividade.",
            habilidadesTitulo: "Habilidades Pessoais",
            habilidades: [
                "Comunicação",
                "Trabalho em equipe",
                "Resolução de problemas",
                "Aprendizado contínuo",
                "Adaptabilidade"
            ]
        },
        tecnologias: {
            titulo: "Linguagens & Tecnologias",
            grupos: {
                desenvolvimentoWeb: {
                    titulo: "Desenvolvimento Web",
                    itens: [
                        {
                            nome: "HTML5",
                            descricao: "Estrutura páginas da web com títulos, parágrafos, imagens e links.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-html" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
                                </svg>
                        },
                        {
                            nome: "CSS3",
                            descricao: "Controla o visual das páginas: cores, tamanhos, espaçamentos e animações.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-css" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.397 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zM6.78 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.106.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422t.777-.149q.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375" />
                                </svg>
                        },
                        {
                            nome: "JavaScript",
                            descricao: "Torna sites interativos com cliques, formulários, sliders, animações e mais.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-javascript" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518" />
                                </svg>
                        },
                        {
                            nome: "React",
                            descricao: "Biblioteca para criar interfaces modernas e reativas com componentes reutilizáveis.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-jsx" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.075 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252.284.091.665.091.507 0 .858-.158.355-.158.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.188-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM0 14.791q0 .247.082.466.083.22.243.39.165.17.407.267.246.093.569.093.63 0 .984-.346.357-.345.358-1.004v-2.725h-.791v2.745q0 .302-.138.466t-.422.164a.5.5 0 0 1-.454-.246.6.6 0 0 1-.073-.27zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" />
                                </svg>
                        },
                        {
                            nome: "Next.js",
                            descricao: "Framework React para sites rápidos com rotas, SSR, SEO e estrutura escalável.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-jsx" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.075 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252.284.091.665.091.507 0 .858-.158.355-.158.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.188-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM0 14.791q0 .247.082.466.083.22.243.39.165.17.407.267.246.093.569.093.63 0 .984-.346.357-.345.358-1.004v-2.725h-.791v2.745q0 .302-.138.466t-.422.164a.5.5 0 0 1-.454-.246.6.6 0 0 1-.073-.27zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" />
                                </svg>
                        },
                        // {
                        //     nome: "Tailwind CSS",
                        //     descricao: "Framework utilitário para estilizar rapidamente com classes semânticas e responsivas."
                        // },
                        {
                            nome: "Bootstrap",
                            descricao: "Conjunto de componentes prontos para acelerar a criação de interfaces responsivas.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                                </svg>
                        },
                        {
                            nome: "Vite",
                            descricao: "Empacotador moderno e ultrarrápido para desenvolvimento frontend com JS e React.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                                </svg>
                        }
                    ]
                },
                logicaBackend: {
                    titulo: "Lógica e Back-end",
                    itens: [
                        {
                            nome: "Node.js",
                            descricao: "Permite usar JavaScript no back-end para APIs, lógica e servidores.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        {
                            nome: "Express.js",
                            descricao: "Framework leve para criar APIs REST e lidar com rotas e middlewares.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        {
                            nome: "Python",
                            descricao: "Linguagem poderosa usada em automações, scripts, APIs, bots e análise de dados.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        // {
                        //     nome: "Flask",
                        //     descricao: "Microframework Python para criação rápida de back-ends e APIs."
                        // },
                        // {
                        //     nome: "JWT",
                        //     descricao: "Autenticação segura com tokens no front-end e back-end."
                        // },
                        // {
                        //     nome: "REST",
                        //     descricao: "Padrão para criação de APIs com rotas e métodos HTTP bem definidos."
                        // }
                    ]
                },
                bancoDeDados: {
                    titulo: "Banco de Dados",
                    itens: [
                        {
                            nome: "MySQL",
                            descricao: "Banco de dados relacional ideal para sistemas web com dados estruturados.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        // {
                        //     nome: "PostgreSQL",
                        //     descricao: "Banco relacional avançado com alta performance e integridade de dados."
                        // },
                        // {
                        //     nome: "MongoDB",
                        //     descricao: "Banco não-relacional com documentos flexíveis, ideal para dados dinâmicos."
                        // },
                        {
                            nome: "Supabase",
                            descricao: "Solução completa com banco em tempo real, autenticação e hospedagem.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        // {
                        //     nome: "SQLite",
                        //     descricao: "Banco leve e local, usado para testes ou aplicações pequenas e offline."
                        // }
                    ]
                },
                devopsTestes: {
                    titulo: "DevOps & Testes",
                    itens: [
                        {
                            nome: "Git & GitHub",
                            descricao: "Versionamento de código com colaboração, histórico e deploys integrados.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        // {
                        //     nome: "Docker",
                        //     descricao: "Ambiente padronizado para rodar apps em qualquer sistema sem conflitos."
                        // },
                        {
                            nome: "Thunder Client",
                            descricao: "Ferramentas para testar APIs REST de forma visual e prática."
                        },
                        // {
                        //     nome: "Jest",
                        //     descricao: "Biblioteca de testes para verificar se funções JavaScript estão corretas."
                        // },
                        // {
                        //     nome: "CI/CD",
                        //     descricao: "Automatiza testes, builds e deploys a cada push no repositório (Ex: GitHub Actions)."
                        // }
                    ]
                },
                designUXUI: {
                    titulo: "Design & UI/UX",
                    itens: [
                        {
                            nome: "Figma",
                            descricao: "Ferramenta colaborativa para criar protótipos e layouts responsivos."
                        },
                        // {
                        //     nome: "Canva",
                        //     descricao: "Criação de artes rápidas para redes, apresentações e identidade visual."
                        // },
                        {
                            nome: "Acessibilidade Web",
                            descricao: "Boas práticas para que pessoas com deficiência consigam usar seu site."
                        },
                        {
                            nome: "Animações CSS",
                            descricao: "Movimentação de elementos para tornar interfaces mais dinâmicas e atrativas."
                        }
                    ]
                },
                analiseDados: {
                    titulo: "Análise de Dados",
                    itens: [
                        {
                            nome: "Excel",
                            descricao: "Planilhas com fórmulas, filtros, tabelas e dashboards."
                        },
                        {
                            nome: "Python (Pandas/Numpy)",
                            descricao: "Tratamento de dados, gráficos e manipulações com códigos simples e poderosos."
                        },
                        // {
                        //     nome: "SQL",
                        //     descricao: "Consultas em bancos de dados relacionais para extração e análise de informações."
                        // },
                        // {
                        //     nome: "Google Data Studio",
                        //     descricao: "Plataforma do Google para criar dashboards com dados conectados e gráficos interativos."
                        // }
                    ]
                },
                automacoes: {
                    titulo: "Automações e Scripts",
                    itens: [
                        {
                            nome: "Python",
                            descricao: "Criação de scripts para automatizar tarefas, baixar dados, enviar e-mails etc."
                        },
                        // {
                        //     nome: "Selenium",
                        //     descricao: "Automatiza ações em navegadores, ideal para testes e extrações."
                        // },
                        // {
                        //     nome: "Bots de WhatsApp / Telegram",
                        //     descricao: "Integrações com APIs de mensagens para responder automaticamente e executar comandos."
                        // }
                    ]
                },
                outros: {
                    titulo: "Outros Conhecimentos",
                    itens: [
                        {
                            nome: "VS Code",
                            descricao: "Editor leve, rápido e personalizável com suporte a múltiplas linguagens."
                        },
                        {
                            nome: "Extensões úteis",
                            descricao: "Ferramentas como Prettier, ESLint, GitLens e Live Server para produtividade."
                        },
                        {
                            nome: "Markdown",
                            descricao: "Sintaxe leve para formatar textos em READMEs, blogs e documentações."
                        },
                        {
                            nome: "Hospedagem (Vercel / Netlify)",
                            descricao: "Publicação rápida e gratuita de sites, com integração com Git."
                        },
                        {
                            nome: "Manutenção de PC's",
                            descricao: "Concerto a parte física, o hardware e faço manutenções no software"
                        }
                    ]
                }
            }
        },
        habilidades: {
            titulo: "Front-end",
            frontend: "Front-end",
            backend: "Back-end",
            ferramentas: "Ferramentas",
            outros: "Outros"
        },
        projetos: {
            titulo: "Meus Projetos",
            filtros: ["Todos", "Web", "Mobile", "Outros"]
        },
        contato: {
            titulo: "Vamos Conversar?",
            descricao: "Estou disponível para oportunidades, projetos freelancer ou colaborações. Sinta-se à vontade para entrar em contato através dos canais abaixo ou pelo formulário.",
            formulario: {
                nome: "Nome Completo",
                email: "Email",
                assunto: "Assunto",
                mensagem: "Mensagem",
                botao: "Enviar Mensagem"
            },
            metodos: {
                whatsapp: "WhatsApp",
                email: "Email",
                linkedin: "LinkedIn",
                github: "GitHub"
            }
        },
        footer: {
            descricao: "Desenvolvedor Full Stack que transforma propósito em soluções digitais completas.",
            linksRapidos: "Links Rápidos",
            contato: "Contato",
            direitos: "© 2025 Ramon Brandão. Todos os direitos reservados.",
            termos: {
                privacidade: "Política de Privacidade",
                uso: "Termos de Uso",
                aviso: "Aviso Legal"
            }
        }
    },

    en: {
        nav: {
            logo: "< Ramon Brandão />",
            links: {
                inicio: "Home",
                sobre: "About",
                tecnologias: "Technologies",
                habilidades: "Skills",
                projetos: "Projects",
                contato: "Contact"
            }
        },
        hero: {
            titulo: "Full Stack Developer turning purpose into complete digital solutions.",
            subtitulo: "I work from logic to interface, creating web, mobile systems and automations that combine functionality, design and results — with continuous learning and focus on solving real problems.",
            botaoContato: "Get in Touch",
            botaoCurriculo: "Download Resume",
            badge: "Development Student"
        },
        about: {
            titulo: "About Me",
            paragrafo1: "Hello! I'm Ramon Brandão, a 17-year-old Full Stack Developer passionate about technology, interfaces and creative solutions.",
            paragrafo2: "I am in my last year of High School Professional in Systems Development, where I develop complete applications from database to front-end.",
            paragrafo3: "My journey started with the desire to turn ideas into real experiences. Since then, I have been honing my skills in functional, accessible and well-organized projects.",
            paragrafo4: "Recently, I founded WebCode, a young team focused on digital solutions for small businesses. Here, I develop, lead and learn every day.",
            paragrafo5: "My dream is to study Engineering or Computer Science, work on large projects, and in the future, teach technology with purpose and creativity.",
            habilidadesTitulo: "Personal Skills",
            habilidades: [
                "Communication",
                "Teamwork",
                "Problem Solving",
                "Continuous Learning",
                "Adaptability"
            ]
        },
        tecnologias: {
            titulo: "Languages & Technologies",
            grupos: {
                desenvolvimentoWeb: {
                    titulo: "Web Development",
                    itens: [
                        {
                            nome: "HTML5",
                            descricao: "Structures web pages with titles, paragraphs, images and links."
                        },
                        {
                            nome: "CSS3",
                            descricao: "Controls the visual of pages: colors, sizes, spacing and animations."
                        },
                        {
                            nome: "JavaScript",
                            descricao: "Makes sites interactive with clicks, forms, sliders, animations and more."
                        },
                        {
                            nome: "React",
                            descricao: "Library for creating modern and reactive interfaces with reusable components."
                        },
                        {
                            nome: "Next.js",
                            descricao: "React framework for fast sites with routes, SSR, SEO and scalable structure."
                        },
                        // {
                        //     nome: "Tailwind CSS",
                        //     descricao: "Utility-first framework for styling quickly with semantic and responsive classes."
                        // },
                        {
                            nome: "Bootstrap",
                            descricao: "Set of ready components to speed up the creation of responsive interfaces."
                        },
                        {
                            nome: "Vite",
                            descricao: "Modern and ultra-fast bundler for frontend development with JS and React."
                        }
                    ]
                },
                logicaBackend: {
                    titulo: "Logic and Back-end",
                    itens: [
                        {
                            nome: "Node.js",
                            descricao: "Allows using JavaScript on the back-end for APIs, logic and servers."
                        },
                        {
                            nome: "Express.js",
                            descricao: "Lightweight framework for creating REST APIs and handling routes and middlewares."
                        },
                        {
                            nome: "Python",
                            descricao: "Powerful language used in automations, scripts, APIs, bots and data analysis."
                        },
                        // {
                        //     nome: "Flask",
                        //     descricao: "Microframework Python for rapid back-end and API creation."
                        // },
                        // {
                        //     nome: "JWT",
                        //     descricao: "Secure authentication with tokens on front-end and back-end."
                        // },
                        // {
                        //     nome: "REST",
                        //     descricao: "Standard for creating APIs with well-defined routes and HTTP methods."
                        // }
                    ]
                },
                bancoDeDados: {
                    titulo: "Database",
                    itens: [
                        {
                            nome: "MySQL",
                            descricao: "Relational database ideal for web systems with structured data."
                        },
                        // {
                        //     nome: "PostgreSQL",
                        //     descricao: "Advanced relational database with high performance and data integrity."
                        // },
                        // {
                        //     nome: "MongoDB",
                        //     descricao: "Non-relational database with flexible documents, ideal for dynamic data."
                        // },
                        {
                            nome: "Supabase",
                            descricao: "Complete solution with real-time database, authentication and hosting."
                        },
                        // {
                        //     nome: "SQLite",
                        //     descricao: "Lightweight and local database, used for testing or small offline applications."
                        // }
                    ]
                },
                devopsTestes: {
                    titulo: "DevOps & Testing",
                    itens: [
                        {
                            nome: "Git & GitHub",
                            descricao: "Code versioning with collaboration, history and integrated deployments."
                        },
                        // {
                        //     nome: "Docker",
                        //     descricao: "Standardized environment to run apps on any system without conflicts."
                        // },
                        {
                            nome: "Postman / Thunder Client",
                            descricao: "Tools to test REST APIs visually and practically."
                        },
                        // {
                        //     nome: "Jest",
                        //     descricao: "Testing library to verify if JavaScript functions are correct."
                        // },
                        // {
                        //     nome: "CI/CD",
                        //     descricao: "Automates tests, builds and deployments on every push to the repository (e.g. GitHub Actions)."
                        // }
                    ]
                },
                designUXUI: {
                    titulo: "Design & UI/UX",
                    itens: [
                        {
                            nome: "Figma",
                            descricao: "Collaborative tool to create prototypes and responsive layouts."
                        },
                        // {
                        //     nome: "Canva",
                        //     descricao: "Quickly create graphics for social media, presentations and branding."
                        // },
                        {
                            nome: "Web Accessibility",
                            descricao: "Best practices to ensure people with disabilities can use your site."
                        },
                        {
                            nome: "CSS Animations",
                            descricao: "Animate elements to make interfaces more dynamic and engaging."
                        }
                    ]
                },
                analiseDados: {
                    titulo: "Data Analysis",
                    itens: [
                        {
                            nome: "Excel",
                            descricao: "Spreadsheets with formulas, filters, tables and dashboards."
                        },
                        {
                            nome: "Python (Pandas/Numpy)",
                            descricao: "Data manipulation, graphs and processing with simple yet powerful code."
                        },
                        // {
                        //     nome: "SQL",
                        //     descricao: "Queries in relational databases for extracting and analyzing information."
                        // },
                        // {
                        //     nome: "Google Data Studio",
                        //     descricao: "Google platform to create dashboards with connected data and interactive charts."
                        // }
                    ]
                },
                automacoes: {
                    titulo: "Automations and Scripts",
                    itens: [
                        {
                            nome: "Python",
                            descricao: "Create scripts to automate tasks, download data, send emails etc."
                        },
                        {
                            nome: "Selenium",
                            descricao: "Automates actions in browsers, ideal for testing and scraping."
                        },
                        {
                            nome: "WhatsApp / Telegram Bots",
                            descricao: "Integrations with messaging APIs to respond automatically and execute commands."
                        }
                    ]
                },
                outros: {
                    titulo: "Other Knowledge",
                    itens: [
                        {
                            nome: "VS Code",
                            descricao: "Lightweight, fast and customizable code editor with multi-language support."
                        },
                        {
                            nome: "Useful Extensions",
                            descricao: "Tools like Prettier, ESLint, GitLens and Live Server for productivity."
                        },
                        {
                            nome: "Markdown",
                            descricao: "Lightweight syntax for formatting texts in READMEs, blogs and documentation."
                        },
                        {
                            nome: "Hosting (Vercel / Netlify)",
                            descricao: "Quick and free publishing of sites with Git integration."
                        }
                    ]
                }
            }
        },
        habilidades: {
            titulo: "Front-end",
            frontend: "Front-end",
            backend: "Back-end",
            ferramentas: "Tools",
            outros: "Others"
        },
        projetos: {
            titulo: "My Projects",
            filtros: ["All", "Web", "Mobile", "Others"]
        },
        contato: {
            titulo: "Let's Talk?",
            descricao: "I am available for opportunities, freelance projects or collaborations. Feel free to contact me through the channels below or via the form.",
            formulario: {
                nome: "Full Name",
                email: "Email",
                assunto: "Subject",
                mensagem: "Message",
                botao: "Send Message"
            },
            metodos: {
                whatsapp: "WhatsApp",
                email: "Email",
                linkedin: "LinkedIn",
                github: "GitHub"
            }
        },
        footer: {
            descricao: "Full Stack Developer turning purpose into complete digital solutions.",
            linksRapidos: "Quick Links",
            contato: "Contact",
            direitos: "© 2025 Ramon Brandão. All rights reserved.",
            termos: {
                privacidade: "Privacy Policy",
                uso: "Terms of Use",
                aviso: "Legal Notice"
            }
        }
    },

    es: {
        nav: {
            logo: "< Ramon Brandão />",
            links: {
                inicio: "Inicio",
                sobre: "Sobre",
                tecnologias: "Tecnologías",
                habilidades: "Habilidades",
                proyectos: "Proyectos",
                contato: "Contacto"
            }
        },
        hero: {
            titulo: "Desarrollador Full Stack que transforma propósito en soluciones digitales completas.",
            subtitulo: "Trabajo desde la lógica hasta la interfaz, creando sistemas web, móviles y automatizaciones que combinan funcionalidad, diseño y resultados — con aprendizaje continuo y enfoque en resolver problemas reales.",
            botaoContato: "Ponte en contacto",
            botaoCurriculo: "Descargar Currículum",
            badge: "Estudiante de Desarrollo"
        },
        about: {
            titulo: "Sobre Mí",
            paragrafo1: "¡Hola! Soy Ramon Brandão, un Desarrollador Full Stack de 17 años apasionado por la tecnología, interfaces y soluciones creativas.",
            paragrafo2: "Estoy en mi último año de Bachillerato Profesional en Desarrollo de Sistemas, donde desarrollo aplicaciones completas desde la base de datos hasta el front-end.",
            paragrafo3: "Mi viaje comenzó con el deseo de convertir ideas en experiencias reales. Desde entonces, he estado perfeccionando mis habilidades en proyectos funcionales, accesibles y bien organizados.",
            paragrafo4: "Recientemente, fundé WebCode, un equipo joven enfocado en soluciones digitales para pequeños negocios. Aquí, desarrollo, lidero y aprendo todos los días.",
            paragrafo5: "Mi sueño es estudiar Ingeniería o Ciencias de la Computación, trabajar en grandes proyectos y, en el futuro, enseñar tecnología con propósito y creatividad.",
            habilidadesTitulo: "Habilidades Personales",
            habilidades: [
                "Comunicación",
                "Trabajo en equipo",
                "Resolución de problemas",
                "Aprendizaje continuo",
                "Adaptabilidad"
            ]
        },
        tecnologias: {
            titulo: "Lenguajes & Tecnologías",
            grupos: {
                desenvolvimentoWeb: {
                    titulo: "Desarrollo Web",
                    itens: [
                        {
                            nome: "HTML5",
                            descricao: "Estructura páginas web con títulos, párrafos, imágenes y enlaces."
                        },
                        {
                            nome: "CSS3",
                            descricao: "Controla el aspecto visual de las páginas: colores, tamaños, espacios y animaciones."
                        },
                        {
                            nome: "JavaScript",
                            descricao: "Hace que los sitios sean interactivos con clics, formularios, sliders, animaciones y más."
                        },
                        {
                            nome: "React",
                            descricao: "Biblioteca para crear interfaces modernas y reactivas con componentes reutilizables."
                        },
                        {
                            nome: "Next.js",
                            descricao: "Framework React para sitios rápidos con rutas, SSR, SEO y estructura escalable."
                        },
                        // {
                        //     nome: "Tailwind CSS",
                        //     descricao: "Framework utilitario para estilizar rápidamente con clases semánticas y responsivas."
                        // },
                        {
                            nome: "Bootstrap",
                            descricao: "Conjunto de componentes listos para acelerar la creación de interfaces responsivas."
                        },
                        {
                            nome: "Vite",
                            descricao: "Empaquetador moderno y ultrarrápido para desarrollo frontend con JS y React."
                        }
                    ]
                },
                logicaBackend: {
                    titulo: "Lógica y Back-end",
                    itens: [
                        {
                            nome: "Node.js",
                            descricao: "Permite usar JavaScript en el back-end para APIs, lógica y servidores."
                        },
                        {
                            nome: "Express.js",
                            descricao: "Framework ligero para crear APIs REST y manejar rutas y middlewares."
                        },
                        {
                            nome: "Python",
                            descricao: "Lenguaje poderoso usado en automatizaciones, scripts, APIs, bots y análisis de datos."
                        },
                        // {
                        //     nome: "Flask",
                        //     descricao: "Microframework Python para creación rápida de back-ends y APIs."
                        // },
                        // {
                        //     nome: "JWT",
                        //     descricao: "Autenticación segura con tokens en front-end y back-end."
                        // },
                        // {
                        //     nome: "REST",
                        //     descricao: "Estándar para crear APIs con rutas bien definidas y métodos HTTP."
                        // }
                    ]
                },
                bancoDeDados: {
                    titulo: "Base de Datos",
                    itens: [
                        {
                            nome: "MySQL",
                            descricao: "Base de datos relacional ideal para sistemas web con datos estructurados."
                        },
                        {
                            nome: "PostgreSQL",
                            descricao: "Base de datos relacional avanzada con alto rendimiento e integridad de datos."
                        },
                        {
                            nome: "MongoDB",
                            descricao: "Base de datos no relacional con documentos flexibles, ideal para datos dinámicos."
                        },
                        {
                            nome: "Firebase",
                            descricao: "Solución completa con base de datos en tiempo real, autenticación y hospedaje."
                        },
                        {
                            nome: "SQLite",
                            descricao: "Base de datos ligera y local, usada para pruebas o aplicaciones pequeñas y offline."
                        }
                    ]
                },
                devopsTestes: {
                    titulo: "DevOps & Pruebas",
                    itens: [
                        {
                            nome: "Git & GitHub",
                            descricao: "Versionado de código con colaboración, historial e implementaciones integradas."
                        },
                        {
                            nome: "Docker",
                            descricao: "Entorno estandarizado para ejecutar aplicaciones en cualquier sistema sin conflictos."
                        },
                        {
                            nome: "Postman / Thunder Client",
                            descricao: "Herramientas para probar APIs REST de forma visual y práctica."
                        },
                        {
                            nome: "Jest",
                            descricao: "Biblioteca de pruebas para verificar si las funciones JavaScript son correctas."
                        },
                        {
                            nome: "CI/CD",
                            descricao: "Automatiza pruebas, compilaciones e implementaciones en cada push al repositorio (ej. GitHub Actions)."
                        }
                    ]
                },
                designUXUI: {
                    titulo: "Diseño & UI/UX",
                    itens: [
                        {
                            nome: "Figma",
                            descricao: "Herramienta colaborativa para crear prototipos y diseños responsivos."
                        },
                        {
                            nome: "Canva",
                            descricao: "Creación rápida de gráficos para redes sociales, presentaciones e identidad visual."
                        },
                        {
                            nome: "Accesibilidad Web",
                            descricao: "Buenas prácticas para que personas con discapacidad puedan usar tu sitio."
                        },
                        {
                            nome: "Animaciones CSS",
                            descricao: "Animar elementos para hacer interfaces más dinámicas y atractivas."
                        }
                    ]
                },
                analiseDados: {
                    titulo: "Análisis de Datos",
                    itens: [
                        {
                            nome: "Excel",
                            descricao: "Hojas de cálculo con fórmulas, filtros, tablas y paneles de control."
                        },
                        {
                            nome: "Python (Pandas/Numpy)",
                            descricao: "Manipulación de datos, gráficos y procesamiento con código simple pero poderoso."
                        },
                        {
                            nome: "SQL",
                            descricao: "Consultas en bases de datos relacionales para extraer y analizar información."
                        },
                        {
                            nome: "Google Data Studio",
                            descricao: "Plataforma de Google para crear paneles con datos conectados y gráficos interactivos."
                        }
                    ]
                },
                automacoes: {
                    titulo: "Automatizaciones y Scripts",
                    itens: [
                        {
                            nome: "Python",
                            descricao: "Creación de scripts para automatizar tareas, descargar datos, enviar correos etc."
                        },
                        {
                            nome: "Selenium",
                            descricao: "Automatiza acciones en navegadores, ideal para pruebas y scraping."
                        },
                        {
                            nome: "Bots de WhatsApp / Telegram",
                            descricao: "Integraciones con APIs de mensajería para responder automáticamente y ejecutar comandos."
                        }
                    ]
                },
                outros: {
                    titulo: "Otros Conocimientos",
                    itens: [
                        {
                            nome: "VS Code",
                            descricao: "Editor de código ligero, rápido y personalizable con soporte para múltiples lenguajes."
                        },
                        {
                            nome: "Extensiones útiles",
                            descricao: "Herramientas como Prettier, ESLint, GitLens y Live Server para productividad."
                        },
                        {
                            nome: "Markdown",
                            descricao: "Sintaxis ligera para formatear textos en READMEs, blogs y documentación."
                        },
                        {
                            nome: "Hospedaje (Vercel / Netlify)",
                            descricao: "Publicación rápida y gratuita de sitios con integración con Git."
                        }
                    ]
                }
            }
        },
        habilidades: {
            titulo: "Front-end",
            frontend: "Front-end",
            backend: "Back-end",
            ferramentas: "Herramientas",
            outros: "Otros"
        },
        projetos: {
            titulo: "Mis Proyectos",
            filtros: ["Todos", "Web", "Móvil", "Otros"]
        },
        contato: {
            titulo: "¿Hablamos?",
            descricao: "Estoy disponible para oportunidades, proyectos freelance o colaboraciones. No dudes en contactarme a través de los canales a continuación o mediante el formulario.",
            formulario: {
                nome: "Nombre Completo",
                email: "Email",
                assunto: "Asunto",
                mensagem: "Mensaje",
                botao: "Enviar Mensaje"
            },
            metodos: {
                whatsapp: "WhatsApp",
                email: "Email",
                linkedin: "LinkedIn",
                github: "GitHub"
            }
        },
        footer: {
            descricao: "Desarrollador Full Stack que transforma propósito en soluciones digitales completas.",
            linksRapidos: "Enlaces Rápidos",
            contato: "Contacto",
            direitos: "© 2025 Ramon Brandão. Todos los derechos reservados.",
            termos: {
                privacidade: "Política de Privacidad",
                uso: "Términos de Uso",
                aviso: "Aviso Legal"
            }
        }
    }
};
