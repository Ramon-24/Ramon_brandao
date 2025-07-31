export const Textos = {
    pt: {
        nav: {
            logo1: "< Ramon",
            logo2: "Brandão />",
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
            destaque: "Desenvolvedor Full Stack",
            titulo: " que transforma propósito em soluções digitais completas.",
            subtitulo: "Atuo da lógica à interface, criando sistemas web, mobile e automações que unem funcionalidade, design e resultado — com aprendizado contínuo e foco em resolver problemas reais.",
            botaoContato: "Entre em contato",
            botaoCurriculo: "Baixar Currículo",
            badge: "</> Estudante de Desenvolvimento"
        },
        about: {
            titulo: "Sobre Mim",

            paragrafo0: "Olá! Eu sou ",
            destaque1: " Ramon Brandão",
            paragrafo1: ", um ",
            destaque2: "Desenvolvedor Full Stack",
            paragrafo2: " de 17 anos apaixonado por tecnologia, interfaces e soluções criativas.",

            paragrafo3: "Curso o último ano do ",
            destaque3: "Ensino Médio Profissional em Desenvolvimento de Sistemas",
            paragrafo4: ", onde desenvolvo aplicações completas do banco de dados ao front-end.",

            paragrafo5: "Minha jornada começou com a vontade de transformar ideias em experiências reais. Desde então, venho aprimorando minhas habilidades em projetos funcionais, acessíveis e bem organizados.",

            paragrafo6: "Recentemente, fundei a ",
            destaque4: "WebCode",
            paragrafo7: ", uma equipe jovem focada em soluções digitais para pequenos negócios. Aqui, desenvolvo, lidero e aprendo todos os dias.",

            paragrafo8: "Meu sonho é ",
            destaque5: "cursar Engenharia ou Ciência da Computação",
            paragrafo9: ", atuar em grandes projetos, e no futuro, ensinar tecnologia com propósito e criatividade.",

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
                            icone: <i className="devicon-html5-plain" />
                        },
                        {
                            nome: "CSS3",
                            descricao: "Controla o visual das páginas: cores, tamanhos, espaçamentos e animações.",
                            icone: <i className="devicon-css3-plain" />
                        },
                        {
                            nome: "JavaScript",
                            descricao: "Torna sites interativos com cliques, formulários, sliders, animações e mais.",
                            icone: <i className="devicon-javascript-plain" />
                        },
                        {
                            nome: "React",
                            descricao: "Biblioteca para criar interfaces modernas e reativas com componentes reutilizáveis.",
                            icone: <i className="devicon-react-original" />
                        },
                        {
                            nome: "Next.js",
                            descricao: "Framework React para sites rápidos com rotas, SSR, SEO e estrutura escalável.",
                            icone: <i className="devicon-nextjs-line" style={{ fontSize: "36px", display: "flex", alignItems: "center", justifyContent: "center" }} />
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
                            icone: <i className="devicon-vitejs-plain" />
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
                                <i className="devicon-nodejs-plain" style={{ fontSize: "26px" }} />
                        },
                        {
                            nome: "Express.js",
                            descricao: "Framework leve para criar APIs REST e lidar com rotas e middlewares.",
                            icone: <i className="devicon-express-original" />
                        },
                        {
                            nome: "Python",
                            descricao: "Linguagem poderosa usada em automações, scripts, APIs, bots e análise de dados.",
                            icone: <i className="devicon-python-plain" />
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
                            icone: <i className="devicon-mysql-plain-wordmark" style={{ fontSize: "30px" }} />
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
                                <i className="devicon-supabase-plain colored" />
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        // {
                        //     nome: "Docker",
                        //     descricao: "Ambiente padronizado para rodar apps em qualquer sistema sem conflitos."
                        // },
                        {
                            nome: "Thunder Client",
                            descricao: "Ferramentas para testar APIs REST de forma visual e prática.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                                </svg>
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
                            descricao: "Ferramenta colaborativa para criar protótipos e layouts responsivos.",
                            icone: <i className="devicon-figma-plain" />
                        },
                        // {
                        //     nome: "Canva",
                        //     descricao: "Criação de artes rápidas para redes, apresentações e identidade visual."
                        // },
                        // {
                        //     nome: "Acessibilidade Web",
                        //     descricao: "Boas práticas para que pessoas com deficiência consigam usar seu site."
                        // },
                        {
                            nome: "Animações CSS",
                            descricao: "Movimentação de elementos para tornar interfaces mais dinâmicas e atrativas.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
                                </svg>
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
                            descricao: "Tratamento de dados, gráficos e manipulações com códigos simples e poderosos.",
                            icone: <i className="devicon-python-plain" />
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
                            descricao: "Criação de scripts para automatizar tarefas, baixar dados, enviar e-mails etc.",
                            icone: <i className="devicon-python-plain" />
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
                            descricao: "Editor leve, rápido e personalizável com suporte a múltiplas linguagens.",
                            icone: <i className="devicon-vscode-plain" />
                        },
                        {
                            nome: "Extensões úteis",
                            descricao: "Ferramentas como Prettier, ESLint, GitLens e Live Server para produtividade."
                        },
                        {
                            nome: "Markdown",
                            descricao: "Sintaxe leve para formatar textos em READMEs, blogs e documentações.",
                            icone: <i className="devicon-markdown-original" />
                        },
                        {
                            nome: "Hospedagem (Vercel / Netlify)",
                            descricao: "Publicação rápida e gratuita de sites, com integração com Git.",
                            icone: <i className="devicon-vercel-original-wordmark" />
                        },
                        {
                            nome: "Manutenção de PC's",
                            descricao: "Concerto a parte física, o hardware e faço manutenções no software",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                                </svg>
                        },
                        {
                            nome: "FlutterFlow",
                            descricao: "Plataforma visual para criação de apps mobile e web com integração ao Firebase e exportação em código Flutter.",
                            icone: <i className="devicon-flutter-plain" />
                        }
                    ]
                }
            }
        },
        habilidades: {
            titulo: "Minhas Habilidades",
            frontend: {
                titulo: "Front-end",
                descricao: "Crio interfaces modernas, responsivas e intuitivas com atenção à experiência do usuário. Tenho domínio em linguagens de marcação, estilos e frameworks que agilizam o desenvolvimento visual.",
                itens: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React",
                    "Bootstrap",
                    "Responsive Design",
                    "Tailwind CSS",
                ]
            },
            backend: {
                titulo: "Back-end",
                descricao: "Desenvolvo lógicas e integrações robustas, conectando front-end a bancos de dados e serviços. Já trabalhei com APIs, autenticações e automações que tornam os projetos funcionais e escaláveis.",
                itens: [
                    "Node.js",
                    "Express",
                    "Python",
                    "MySQL",
                    "Supabase"
                ]
            },
            ferramentas: {
                titulo: "Ferramentas",
                descricao: "Utilizo ferramentas que aumentam minha produtividade, organização de código e comunicação com equipe. Conheço extensões e plataformas que ajudam na prototipagem, deploy e testes.",
                itens: [
                    "Git & GitHub",
                    "VS Code",
                    "Figma",
                    "NPM/Yarn",
                    "Thunder Client",
                ]
            },
            outros: {
                titulo: "Outros",
                descricao: "Tenho conhecimentos adicionais que reforçam meu perfil versátil como desenvolvedor full stack. Compreendo design, análise de dados, automações, manutenção de hardware e mais.",
                itens: [
                    "Automação",
                    "Markdown",
                    "Hospedagem (Vercel)",
                    "Excel",
                    "Análise de Dados",
                    "Manutenção de PC"
                ]
            }
        },
        projetos: {
            titulo: "Meus Projetos",
            filtros: ["Todos", "Web", "Mobile", "Outros"],
            lista: [
                {
                    nome: "Multimídia Conecta+",
                    descricao: "Controla empréstimos, devoluções e histórico de alunos, evitando perdas de livros. Em reformulação com novo design, análise de dados e perfis de usuários.",
                    status: "Individual",
                    categoria: "Web",
                    imagem: "/projetos/multimidia-conecta.jpg", // Ajuste para o caminho da imagem real
                    tecnologias: ["Node.js", "Express", "React", "Vite", "ThunderClient", "MySQL", "phpMyAdmin", "Bootstrap", "Devicon"],
                    links: [
                        {
                            nome: "Repositório",
                            url: "https://github.com/Ramon-24/Epgwa.Biblioteca",
                            svg:
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        {
                            nome: "Figma",
                            url: "https://www.figma.com/design/1zVI0wTpIatPfchkodyjRM/Multimeios-Conecta-?node-id=1-2&p=f&t=oQayHBR88UqNfUAw-0",
                            svg:
                                <i className="devicon-figma-plain" />
                        }
                    ]
                },
                {
                    nome: "Gamefic",
                    descricao: "Landing page de uma startup educacional que une gamificação, leitura infantil e tecnologia, com kits físicos e histórias interativas para aproximar crianças dos livros e dos pais.",
                    status: "Equipe",
                    categoria: "Web",
                    imagem: "/projetos/gamefic.jpg", // Atualize para o caminho real da imagem
                    tecnologias: ["Next.js", "Vercel", "Bootstrap", "Devicon", "NPM", "i18next"],
                    links: [
                        {
                            nome: "Repositório",
                            url: "https://github.com/Ramon-24/Gamefic",
                            svg:
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        {
                            nome: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
                {
                    nome: "Automação com Gestos",
                    descricao: "Projeto de automação com visão computacional que reconhece gestos das mãos via webcam para controlar o computador. Apresentado na Semana da TI como forma interativa de ensinar automação, sem uso de slides.",
                    status: "Equipe",
                    categoria: "Outros",
                    imagem: "/projetos/automacao-gestos.jpg", // Você pode substituir por uma imagem simbólica, como uma ilustração de gestos ou automação
                    tecnologias: ["Python", "OpenCV", "PyAutoGUI", "Mediapipe"],
                    links: [
                        {
                            nome: "Repositório",
                            url: "https://github.com/Ramon-24/robo",
                            svg:
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        }
                    ]
                },
                {
                    nome: "Conde-Rand",
                    descricao: "Aplicativo que possui um sorteio, um contador, um jogo de adivinha números, além de cadastro, login e histórico. Está sendo refeito por mim para melhorar o design, garantir responsividade real e aprofundar o uso da plataforma, incluindo lógica customizada com código.",
                    status: "Equipe",
                    categoria: "Mobile",
                    imagem: "/projetos/flutterflow-refeito.jpg", // Substitua por uma imagem ou mockup atualizado
                    tecnologias: ["FlutterFlow", "SupaBase"],
                    links: [
                        {
                            nome: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-flutter-plain" />
                        }
                    ]
                },
                {
                    nome: "Portfólio Pessoal",
                    descricao: "Focado em performance, acessibilidade e design responsivo. Inclui multi-idiomas, modo claro/escuro, animações e formulário de contato. Em constante atualização.",
                    status: "Em desenvolvimento contínuo",
                    categoria: "Web",
                    imagem: "/img/projetos/portfolio.png",
                    tecnologias: [
                        "Next.js", "Vercel", "i18next", "Framer_Motion", "EmailJS", "Bootstrap", "Devicon",
                    ],
                    links: [
                        {
                            nome: "Repositório",
                            url: "https://github.com/Ramon-24/Ramon_brandao",
                            svg:
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        {
                            nome: "Figma",
                            url: "https://www.figma.com/design/qI6Kpt6wHTyVFNQOZKOF74/Portifolio?node-id=0-1&p=f&t=fjzYlHexB8Cgn9YT-0",
                            svg:
                                <i className="devicon-figma-plain" />
                        },
                        {
                            nome: "Demo",
                            url: "https://ramon-brandao.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
            ]
        },
        contato: {
            titulo: "Vamos Conversar?",
            titulos: "Entre em contato",
            descricao: "Estou disponível para oportunidades, projetos freelancer ou colaborações. Sinta-se à vontade para entrar em contato através dos canais abaixo ou pelo formulário.",
            formulario: {
                tituloForms: "Envie uma mensagem",
                nome: "Nome Completo",
                email: "Email",
                assunto: "Assunto",
                mensagem: "Mensagem",
                botao: "Enviar Mensagem"
            },
            mensagem: {
                sucesso: {
                    titulo: "Mensagem enviada!",
                    descricao: "Obrigado por entrar em contato. Em breve retornarei.",
                    fechar: "Fechar"
                },
                erro: {
                    titulo: "Erro ao enviar",
                    descricao: "Tente novamente mais tarde ou envie diretamente por e-mail.",
                    fechar: "Fechar"
                },
            },
            metodos: {
                whatsapp: "WhatsApp",
                numero: "(88) 99435-9926",
                email: "Email",
                gmail: "ramonbrandao.dev@gmail.com",
                linkedin: "LinkedIn",
                conta: "linkedin.com/in/ramonbrandao",
                github: "GitHub",
                url: "github.com/ramonbrandao"
            }
        },
        footer: {
            logo1: "< Ramon",
            logo2: "Brandão />",
            descricao: "Desenvolvedor Full Stack que transforma propósito em soluções digitais completas.",
            linksRapidos: "Links Rápidos",
            inicio: "Início",
            sobre: "Sobre",
            tecnologias: "Tecnologias",
            habilidades: "Habilidades",
            projetos: "Projetos",
            contato: "Contato",

            contato: "Contato",
            telefone: "+55 (88) 99435-9926",
            localidade: "Ceará, Brasil",
            gmail: "ramonbrandao.dev@gmail.com",

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
            logo1: "< Ramon",
            logo2: "Brandão />",
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
            destaque: "Full Stack Developer",
            titulo: " who transforms purpose into complete digital solutions.",
            subtitulo: "I work from logic to interface, creating web, mobile and automation systems that combine functionality, design and results - with continuous learning and focus on solving real problems.",
            botaoContato: "Contact me",
            botaoCurriculo: "Download CV",
            badge: "</> Development Student"
        },
        about: {
            titulo: "About Me",
            paragrafo0: "Hello! I'm ",
            destaque1: " Ramon Brandão",
            paragrafo1: ", a ",
            destaque2: "Full Stack Developer",
            paragrafo2: " 17 years old passionate about technology, interfaces and creative solutions.",

            paragrafo3: "I'm in the last year of ",
            destaque3: "Professional High School in Systems Development",
            paragrafo4: ", where I develop complete applications from database to front-end.",

            paragrafo5: "My journey began with the desire to turn ideas into real experiences. Since then, I've been improving my skills in functional, accessible and well-organized projects.",

            paragrafo6: "Recently, I founded ",
            destaque4: "WebCode",
            paragrafo7: ", a young team focused on digital solutions for small businesses. Here, I develop, lead and learn every day.",

            paragrafo8: "My dream is to ",
            destaque5: "study Computer Engineering or Science",
            paragrafo9: ", work on big projects, and in the future, teach technology with purpose and creativity.",

            habilidadesTitulo: "Personal Skills",
            habilidades: [
                "Communication",
                "Teamwork",
                "Problem solving",
                "Continuous learning",
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
                            descricao: "Structures web pages with titles, paragraphs, images and links.",
                            icone: <i className="devicon-html5-plain" />
                        },
                        {
                            nome: "CSS3",
                            descricao: "Controls the appearance of pages: colors, sizes, spacing and animations.",
                            icone: <i className="devicon-css3-plain" />
                        },
                        {
                            nome: "JavaScript",
                            descricao: "Makes websites interactive with clicks, forms, sliders, animations and more.",
                            icone: <i className="devicon-javascript-plain" />
                        },
                        {
                            nome: "React",
                            descricao: "Library for creating modern, reactive interfaces with reusable components.",
                            icone: <i className="devicon-react-original" />
                        },
                        {
                            nome: "Next.js",
                            descricao: "React framework for fast sites with routes, SSR, SEO and scalable structure.",
                            icone: <i className="devicon-nextjs-line" style={{ fontSize: "36px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                        },
                        {
                            nome: "Bootstrap",
                            descricao: "Set of ready-made components to speed up the creation of responsive interfaces.",
                            icone: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                                <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                                <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                            </svg>
                        },
                        {
                            nome: "Vite",
                            descricao: "Modern and ultra-fast bundler for frontend development with JS and React.",
                            icone: <i className="devicon-vitejs-plain" />
                        }
                    ]
                },
                logicaBackend: {
                    titulo: "Logic and Back-end",
                    itens: [
                        {
                            nome: "Node.js",
                            descricao: "Allows using JavaScript on the back-end for APIs, logic and servers.",
                            icone: <i className="devicon-nodejs-plain" style={{ fontSize: "26px" }} />
                        },
                        {
                            nome: "Express.js",
                            descricao: "Lightweight framework for creating REST APIs and handling routes and middlewares.",
                            icone: <i className="devicon-express-original" />
                        },
                        {
                            nome: "Python",
                            descricao: "Powerful language used in automation, scripts, APIs, bots and data analysis.",
                            icone: <i className="devicon-python-plain" />
                        }
                    ]
                },
                bancoDeDados: {
                    titulo: "Database",
                    itens: [
                        {
                            nome: "MySQL",
                            descricao: "Relational database ideal for web systems with structured data.",
                            icone: <i className="devicon-mysql-plain-wordmark" style={{ fontSize: "30px" }} />
                        },
                        {
                            nome: "Supabase",
                            descricao: "Complete solution with real-time database, authentication and hosting.",
                            icone: <i className="devicon-supabase-plain colored" />
                        }
                    ]
                },
                devopsTestes: {
                    titulo: "DevOps & Testing",
                    itens: [
                        {
                            nome: "Git & GitHub",
                            descricao: "Code versioning with collaboration, history and integrated deploys.",
                            icone: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        },
                        {
                            nome: "Thunder Client",
                            descricao: "Tools to visually and practically test REST APIs.",
                            icone: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                            </svg>
                        }
                    ]
                },
                designUXUI: {
                    titulo: "Design & UI/UX",
                    itens: [
                        {
                            nome: "Figma",
                            descricao: "Collaborative tool for creating prototypes and responsive layouts.",
                            icone: <i className="devicon-figma-plain" />
                        },
                        {
                            nome: "Animações CSS",
                            descricao: "Element movement to make interfaces more dynamic and attractive.",
                            icone: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
                            </svg>
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
                            descricao: "Data processing, graphs and manipulations with simple and powerful code.",
                            icone: <i className="devicon-python-plain" />
                        }
                    ]
                },
                automacoes: {
                    titulo: "Automation and Scripts",
                    itens: [
                        {
                            nome: "Python",
                            descricao: "Script creation to automate tasks, download data, send emails etc.",
                            icone: <i className="devicon-python-plain" />
                        }
                    ]
                },
                outros: {
                    titulo: "Other Knowledge",
                    itens: [
                        {
                            nome: "VS Code",
                            descricao: "Light, fast and customizable editor with support for multiple languages.",
                            icone: <i className="devicon-vscode-plain" />
                        },
                        {
                            nome: "Useful extensions",
                            descricao: "Tools like Prettier, ESLint, GitLens and Live Server for productivity."
                        },
                        {
                            nome: "Markdown",
                            descricao: "Light syntax for formatting texts in READMEs, blogs and documentation.",
                            icone: <i className="devicon-markdown-original" />
                        },
                        {
                            nome: "Hosting (Vercel / Netlify)",
                            descricao: "Quick and free website publishing with Git integration.",
                            icone: <i className="devicon-vercel-original-wordmark" />
                        },
                        {
                            nome: "PC Maintenance",
                            descricao: "I fix hardware and perform software maintenance",
                            icone: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                            </svg>
                        },
                        {
                            nome: "FlutterFlow",
                            descricao: "Visual platform for creating mobile and web apps with Firebase integration and Flutter code export.",
                            icone: <i className="devicon-flutter-plain" />
                        }
                    ]
                }
            }
        },
        habilidades: {
            titulo: "My Skills",
            frontend: {
                titulo: "Front-end",
                descricao: "I create modern, responsive and intuitive interfaces with attention to user experience. I master markup languages, styles and frameworks that speed up visual development.",
                itens: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React",
                    "Bootstrap",
                    "Responsive Design",
                    "Tailwind CSS",
                ]
            },
            backend: {
                titulo: "Back-end",
                descricao: "I develop robust logic and integrations, connecting front-end to databases and services. I've worked with APIs, authentications and automations that make projects functional and scalable.",
                itens: [
                    "Node.js",
                    "Express",
                    "Python",
                    "MySQL",
                    "Supabase"
                ]
            },
            ferramentas: {
                titulo: "Tools",
                descricao: "I use tools that increase my productivity, code organization and team communication. I know extensions and platforms that help with prototyping, deployment and testing.",
                itens: [
                    "Git & GitHub",
                    "VS Code",
                    "Figma",
                    "NPM/Yarn",
                    "Thunder Client",
                ]
            },
            outros: {
                titulo: "Others",
                descricao: "I have additional knowledge that reinforces my versatile profile as a full stack developer. I understand design, data analysis, automation, hardware maintenance and more.",
                itens: [
                    "Automation",
                    "Markdown",
                    "Hosting (Vercel)",
                    "Excel",
                    "Data Analysis",
                    "PC Maintenance"
                ]
            }
        },
        projetos: {
            titulo: "My Projects",
            filtros: ["All", "Web", "Mobile", "Others"],
            lista: [
                {
                    nome: "Multimídia Conecta+",
                    descricao: "Controls loans, returns and student history, preventing book losses. Being redesigned with new design, data analysis and user profiles.",
                    status: "Individual",
                    categoria: "Web",
                    imagem: "/projetos/multimidia-conecta.jpg",
                    tecnologias: ["Node.js", "Express", "React", "Vite", "ThunderClient", "MySQL", "phpMyAdmin", "Bootstrap", "Devicon"],
                    links: [
                        {
                            nome: "Repository",
                            url: "https://github.com/Ramon-24/Epgwa.Biblioteca",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        },
                        {
                            nome: "Figma",
                            url: "https://www.figma.com/design/1zVI0wTpIatPfchkodyjRM/Multimeios-Conecta-?node-id=1-2&p=f&t=oQayHBR88UqNfUAw-0",
                            svg: <i className="devicon-figma-plain" />
                        }
                    ]
                },
                {
                    nome: "Gamefic",
                    descricao: "Landing page for an educational startup that combines gamification, children's reading and technology, with physical kits and interactive stories to bring children closer to books and parents.",
                    status: "Team",
                    categoria: "Web",
                    imagem: "/projetos/gamefic.jpg",
                    tecnologias: ["Next.js", "Vercel", "Bootstrap", "Devicon", "NPM", "i18next"],
                    links: [
                        {
                            nome: "Repository",
                            url: "https://github.com/Ramon-24/Gamefic",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        },
                        {
                            nome: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
                {
                    nome: "Gesture Automation",
                    descricao: "Computer vision automation project that recognizes hand gestures via webcam to control the computer. Presented at IT Week as an interactive way to teach automation, without using slides.",
                    status: "Team",
                    categoria: "Others",
                    imagem: "/projetos/automacao-gestos.jpg",
                    tecnologias: ["Python", "OpenCV", "PyAutoGUI", "Mediapipe"],
                    links: [
                        {
                            nome: "Repository",
                            url: "https://github.com/Ramon-24/robo",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        }
                    ]
                },
                {
                    nome: "Conde-Rand",
                    descricao: "App that has a raffle, a counter, a number guessing game, plus registration, login and history. Being redone by me to improve design, ensure real responsiveness and deepen platform use, including custom logic with code.",
                    status: "Team",
                    categoria: "Mobile",
                    imagem: "/projetos/flutterflow-refeito.jpg",
                    tecnologias: ["FlutterFlow", "SupaBase"],
                    links: [
                        {
                            nome: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-flutter-plain" />
                        }
                    ]
                },
                {
                    nome: "Personal Portfolio",
                    descricao: "Focused on performance, accessibility and responsive design. Includes multi-language, light/dark mode, animations and contact form. In constant update.",
                    status: "In continuous development",
                    categoria: "Web",
                    imagem: "/img/projetos/portfolio.png",
                    tecnologias: [
                        "Next.js", "Vercel", "i18next", "Framer_Motion", "EmailJS", "Bootstrap", "Devicon",
                    ],
                    links: [
                        {
                            nome: "Repository",
                            url: "https://github.com/Ramon-24/Ramon_brandao",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        },
                        {
                            nome: "Figma",
                            url: "https://www.figma.com/design/qI6Kpt6wHTyVFNQOZKOF74/Portifolio?node-id=0-1&p=f&t=fjzYlHexB8Cgn9YT-0",
                            svg: <i className="devicon-figma-plain" />
                        },
                        {
                            nome: "Demo",
                            url: "https://ramon-brandao.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
            ]
        },
        contato: {
            titulo: "Let's Talk?",
            titulos: "Contact me",
            descricao: "I'm available for opportunities, freelance projects or collaborations. Feel free to contact me through the channels below or via the form.",
            formulario: {
                tituloForms: "Send a message",
                nome: "Full Name",
                email: "Email",
                assunto: "Subject",
                mensagem: "Message",
                botao: "Send Message"
            },
            mensagem: {
                sucesso: {
                    titulo: "Message sent!",
                    descricao: "Thank you for contacting me. I'll get back to you soon.",
                    fechar: "Close"
                },
                erro: {
                    titulo: "Error sending",
                    descricao: "Please try again later or send directly by email.",
                    fechar: "Close"
                },
            },
            metodos: {
                whatsapp: "WhatsApp",
                numero: "(88) 99435-9926",
                email: "Email",
                gmail: "ramonbrandao.dev@gmail.com",
                linkedin: "LinkedIn",
                conta: "linkedin.com/in/ramonbrandao",
                github: "GitHub",
                url: "github.com/ramonbrandao"
            }
        },
        footer: {
            logo1: "< Ramon",
            logo2: "Brandão />",
            descricao: "Full Stack Developer who transforms purpose into complete digital solutions.",
            linksRapidos: "Quick Links",
            inicio: "Home",
            sobre: "About",
            tecnologias: "Technologies",
            habilidades: "Skills",
            projetos: "Projects",
            contato: "Contact",

            contato: "Contact",
            telefone: "+55 (88) 99435-9926",
            localidade: "Ceará, Brazil",
            gmail: "ramonbrandao.dev@gmail.com",

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
            logo1: "< Ramon",
            logo2: "Brandão />",
            links: {
                inicio: "Inicio",
                sobre: "Sobre mí",
                tecnologias: "Tecnologías",
                habilidades: "Habilidades",
                proyectos: "Proyectos",
                contacto: "Contacto"
            }
        },
        hero: {
            destaque: "Desarrollador Full Stack",
            titulo: " que transforma propósito en soluciones digitales completas.",
            subtitulo: "Actúo desde la lógica hasta la interfaz, creando sistemas web, móviles y automatizaciones que unen funcionalidad, diseño y resultados — con aprendizaje continuo y enfoque en resolver problemas reales.",
            botaoContato: "Contactar",
            botaoCurriculo: "Descargar CV",
            badge: "</> Estudiante de Desarrollo"
        },
        about: {
            titulo: "Sobre Mí",
            paragrafo0: "¡Hola! Soy ",
            destaque1: " Ramon Brandão",
            paragrafo1: ", un ",
            destaque2: "Desarrollador Full Stack",
            paragrafo2: " de 17 años apasionado por la tecnología, interfaces y soluciones creativas.",

            paragrafo3: "Estoy en el último año de ",
            destaque3: "Bachillerato Profesional en Desarrollo de Sistemas",
            paragrafo4: ", donde desarrollo aplicaciones completas desde la base de datos hasta el front-end.",

            paragrafo5: "Mi viaje comenzó con el deseo de transformar ideas en experiencias reales. Desde entonces, he estado mejorando mis habilidades en proyectos funcionales, accesibles y bien organizados.",

            paragrafo6: "Recientemente, fundé ",
            destaque4: "WebCode",
            paragrafo7: ", un equipo joven enfocado en soluciones digitales para pequeños negocios. Aquí, desarrollo, lidero y aprendo todos los días.",

            paragrafo8: "Mi sueño es ",
            destaque5: "estudiar Ingeniería o Ciencias de la Computación",
            paragrafo9: ", trabajar en grandes proyectos, y en el futuro, enseñar tecnología con propósito y creatividad.",

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
                            nombre: "HTML5",
                            descripcion: "Estructura páginas web con títulos, párrafos, imágenes y enlaces.",
                            icono: <i className="devicon-html5-plain" />
                        },
                        {
                            nombre: "CSS3",
                            descripcion: "Controla el aspecto visual de las páginas: colores, tamaños, espaciados y animaciones.",
                            icono: <i className="devicon-css3-plain" />
                        },
                        {
                            nombre: "JavaScript",
                            descripcion: "Hace sitios interactivos con clics, formularios, sliders, animaciones y más.",
                            icono: <i className="devicon-javascript-plain" />
                        },
                        {
                            nombre: "React",
                            descripcion: "Biblioteca para crear interfaces modernas y reactivas con componentes reutilizables.",
                            icono: <i className="devicon-react-original" />
                        },
                        {
                            nombre: "Next.js",
                            descripcion: "Framework React para sitios rápidos con rutas, SSR, SEO y estructura escalable.",
                            icono: <i className="devicon-nextjs-line" style={{ fontSize: "36px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                        },
                        {
                            nombre: "Bootstrap",
                            descripcion: "Conjunto de componentes listos para acelerar la creación de interfaces responsivas.",
                            icono: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                                <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                                <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                            </svg>
                        },
                        {
                            nombre: "Vite",
                            descripcion: "Empaquetador moderno y ultrarrápido para desarrollo frontend con JS y React.",
                            icono: <i className="devicon-vitejs-plain" />
                        }
                    ]
                },
                logicaBackend: {
                    titulo: "Lógica y Back-end",
                    itens: [
                        {
                            nombre: "Node.js",
                            descripcion: "Permite usar JavaScript en el back-end para APIs, lógica y servidores.",
                            icono: <i className="devicon-nodejs-plain" style={{ fontSize: "26px" }} />
                        },
                        {
                            nombre: "Express.js",
                            descripcion: "Framework ligero para crear APIs REST y manejar rutas y middlewares.",
                            icono: <i className="devicon-express-original" />
                        },
                        {
                            nombre: "Python",
                            descripcion: "Lenguaje poderoso usado en automatizaciones, scripts, APIs, bots y análisis de datos.",
                            icono: <i className="devicon-python-plain" />
                        }
                    ]
                },
                bancoDeDados: {
                    titulo: "Base de Datos",
                    itens: [
                        {
                            nombre: "MySQL",
                            descripcion: "Base de datos relacional ideal para sistemas web con datos estructurados.",
                            icono: <i className="devicon-mysql-plain-wordmark" style={{ fontSize: "30px" }} />
                        },
                        {
                            nombre: "Supabase",
                            descripcion: "Solución completa con base de datos en tiempo real, autenticación y hosting.",
                            icono: <i className="devicon-supabase-plain colored" />
                        }
                    ]
                },
                devopsTestes: {
                    titulo: "DevOps & Pruebas",
                    itens: [
                        {
                            nombre: "Git & GitHub",
                            descripcion: "Control de versiones de código con colaboración, historial y despliegues integrados.",
                            icono: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        },
                        {
                            nombre: "Thunder Client",
                            descripcion: "Herramientas para probar APIs REST de forma visual y práctica.",
                            icono: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                            </svg>
                        }
                    ]
                },
                designUXUI: {
                    titulo: "Diseño & UI/UX",
                    itens: [
                        {
                            nombre: "Figma",
                            descripcion: "Herramienta colaborativa para crear prototipos y layouts responsivos.",
                            icono: <i className="devicon-figma-plain" />
                        },
                        {
                            nombre: "Animaciones CSS",
                            descripcion: "Movimiento de elementos para hacer interfaces más dinámicas y atractivas.",
                            icono: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
                            </svg>
                        }
                    ]
                },
                analiseDados: {
                    titulo: "Análisis de Datos",
                    itens: [
                        {
                            nombre: "Excel",
                            descripcion: "Hojas de cálculo con fórmulas, filtros, tablas y dashboards."
                        },
                        {
                            nombre: "Python (Pandas/Numpy)",
                            descripcion: "Procesamiento de datos, gráficos y manipulaciones con código simple y poderoso.",
                            icono: <i className="devicon-python-plain" />
                        }
                    ]
                },
                automacoes: {
                    titulo: "Automatizaciones y Scripts",
                    itens: [
                        {
                            nombre: "Python",
                            descripcion: "Creación de scripts para automatizar tareas, descargar datos, enviar emails, etc.",
                            icono: <i className="devicon-python-plain" />
                        }
                    ]
                },
                outros: {
                    titulo: "Otros Conocimientos",
                    itens: [
                        {
                            nombre: "VS Code",
                            descripcion: "Editor ligero, rápido y personalizable con soporte para múltiples lenguajes.",
                            icono: <i className="devicon-vscode-plain" />
                        },
                        {
                            nombre: "Extensiones útiles",
                            descripcion: "Herramientas como Prettier, ESLint, GitLens y Live Server para productividad."
                        },
                        {
                            nombre: "Markdown",
                            descripcion: "Sintaxis ligera para formatear textos en READMEs, blogs y documentación.",
                            icono: <i className="devicon-markdown-original" />
                        },
                        {
                            nombre: "Hosting (Vercel / Netlify)",
                            descripcion: "Publicación rápida y gratuita de sitios, con integración con Git.",
                            icono: <i className="devicon-vercel-original-wordmark" />
                        },
                        {
                            nombre: "Mantenimiento de PCs",
                            descripcion: "Reparo hardware y realizo mantenimiento de software",
                            icono: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                            </svg>
                        },
                        {
                            nombre: "FlutterFlow",
                            descripcion: "Plataforma visual para creación de apps móviles y web con integración a Firebase y exportación en código Flutter.",
                            icono: <i className="devicon-flutter-plain" />
                        }
                    ]
                }
            }
        },
        habilidades: {
            titulo: "Mis Habilidades",
            frontend: {
                titulo: "Front-end",
                descripcion: "Creo interfaces modernas, responsivas e intuitivas con atención a la experiencia del usuario. Tengo dominio en lenguajes de marcado, estilos y frameworks que agilizan el desarrollo visual.",
                items: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React",
                    "Bootstrap",
                    "Diseño Responsivo",
                    "Tailwind CSS",
                ]
            },
            backend: {
                titulo: "Back-end",
                descripcion: "Desarrollo lógicas e integraciones robustas, conectando front-end a bases de datos y servicios. He trabajado con APIs, autenticaciones y automatizaciones que hacen los proyectos funcionales y escalables.",
                items: [
                    "Node.js",
                    "Express",
                    "Python",
                    "MySQL",
                    "Supabase"
                ]
            },
            ferramentas: {
                titulo: "Herramientas",
                descripcion: "Utilizo herramientas que aumentan mi productividad, organización de código y comunicación con equipo. Conozco extensiones y plataformas que ayudan en prototipado, despliegue y pruebas.",
                items: [
                    "Git & GitHub",
                    "VS Code",
                    "Figma",
                    "NPM/Yarn",
                    "Thunder Client",
                ]
            },
            outros: {
                titulo: "Otros",
                descripcion: "Tengo conocimientos adicionales que refuerzan mi perfil versátil como desarrollador full stack. Comprendo diseño, análisis de datos, automatizaciones, mantenimiento de hardware y más.",
                items: [
                    "Automatización",
                    "Markdown",
                    "Hosting (Vercel)",
                    "Excel",
                    "Análisis de Datos",
                    "Mantenimiento de PC"
                ]
            }
        },
        projetos: {
            titulo: "Mis Proyectos",
            filtros: ["Todos", "Web", "Móvil", "Otros"],
            lista: [
                {
                    nombre: "Multimídia Conecta+",
                    descripcion: "Controla préstamos, devoluciones e historial de estudiantes, evitando pérdidas de libros. En rediseño con nuevo diseño, análisis de datos y perfiles de usuarios.",
                    estado: "Individual",
                    categoria: "Web",
                    imagen: "/projetos/multimidia-conecta.jpg",
                    tecnologias: ["Node.js", "Express", "React", "Vite", "ThunderClient", "MySQL", "phpMyAdmin", "Bootstrap", "Devicon"],
                    links: [
                        {
                            nombre: "Repositorio",
                            url: "https://github.com/Ramon-24/Epgwa.Biblioteca",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        },
                        {
                            nombre: "Figma",
                            url: "https://www.figma.com/design/1zVI0wTpIatPfchkodyjRM/Multimeios-Conecta-?node-id=1-2&p=f&t=oQayHBR88UqNfUAw-0",
                            svg: <i className="devicon-figma-plain" />
                        }
                    ]
                },
                {
                    nombre: "Gamefic",
                    descripcion: "Landing page de una startup educacional que une gamificación, lectura infantil y tecnología, con kits físicos e historias interactivas para acercar niños a los libros y a los padres.",
                    estado: "Equipo",
                    categoria: "Web",
                    imagen: "/projetos/gamefic.jpg",
                    tecnologias: ["Next.js", "Vercel", "Bootstrap", "Devicon", "NPM", "i18next"],
                    links: [
                        {
                            nombre: "Repositorio",
                            url: "https://github.com/Ramon-24/Gamefic",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        },
                        {
                            nombre: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
                {
                    nombre: "Automatización con Gestos",
                    descripcion: "Proyecto de automatización con visión computacional que reconoce gestos de las manos vía webcam para controlar la computadora. Presentado en la Semana de TI como forma interactiva de enseñar automatización, sin uso de diapositivas.",
                    estado: "Equipo",
                    categoria: "Otros",
                    imagen: "/projetos/automacao-gestos.jpg",
                    tecnologias: ["Python", "OpenCV", "PyAutoGUI", "Mediapipe"],
                    links: [
                        {
                            nombre: "Repositorio",
                            url: "https://github.com/Ramon-24/robo",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        }
                    ]
                },
                {
                    nombre: "Conde-Rand",
                    descripcion: "Aplicación que tiene un sorteo, un contador, un juego de adivinar números, además de registro, login e historial. Está siendo rehecho por mí para mejorar el diseño, garantizar responsividad real y profundizar el uso de la plataforma, incluyendo lógica personalizada con código.",
                    estado: "Equipo",
                    categoria: "Móvil",
                    imagen: "/projetos/flutterflow-refeito.jpg",
                    tecnologias: ["FlutterFlow", "SupaBase"],
                    links: [
                        {
                            nombre: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-flutter-plain" />
                        }
                    ]
                },
                {
                    nombre: "Portafolio Personal",
                    descripcion: "Enfocado en performance, accesibilidad y diseño responsivo. Incluye multi-idioma, modo claro/oscuro, animaciones y formulario de contacto. En constante actualización.",
                    estado: "En desarrollo continuo",
                    categoria: "Web",
                    imagen: "/img/projetos/portfolio.png",
                    tecnologias: [
                        "Next.js", "Vercel", "i18next", "Framer_Motion", "EmailJS", "Bootstrap", "Devicon",
                    ],
                    links: [
                        {
                            nombre: "Repositorio",
                            url: "https://github.com/Ramon-24/Ramon_brandao",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        },
                        {
                            nombre: "Figma",
                            url: "https://www.figma.com/design/qI6Kpt6wHTyVFNQOZKOF74/Portifolio?node-id=0-1&p=f&t=fjzYlHexB8Cgn9YT-0",
                            svg: <i className="devicon-figma-plain" />
                        },
                        {
                            nombre: "Demo",
                            url: "https://ramon-brandao.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
            ]
        },
        contato: {
            titulo: "¿Hablemos?",
            titulos: "Contacto",
            descripcion: "Estoy disponible para oportunidades, proyectos freelance o colaboraciones. Siéntete libre de contactarme a través de los canales abajo o por el formulario.",
            formulario: {
                tituloForms: "Envía un mensaje",
                nombre: "Nombre Completo",
                email: "Correo Electrónico",
                asunto: "Asunto",
                mensaje: "Mensaje",
                boton: "Enviar Mensaje"
            },
            mensaje: {
                exito: {
                    titulo: "¡Mensaje enviado!",
                    descripcion: "Gracias por contactarme. Responderé pronto.",
                    cerrar: "Cerrar"
                },
                error: {
                    titulo: "Error al enviar",
                    descripcion: "Inténtalo de nuevo más tarde o envía directamente por correo electrónico.",
                    cerrar: "Cerrar"
                },
            },
            metodos: {
                whatsapp: "WhatsApp",
                numero: "(88) 99435-9926",
                email: "Correo",
                gmail: "ramonbrandao.dev@gmail.com",
                linkedin: "LinkedIn",
                cuenta: "linkedin.com/in/ramonbrandao",
                github: "GitHub",
                url: "github.com/ramonbrandao"
            }
        },
        footer: {
            logo1: "< Ramon",
            logo2: "Brandão />",
            descripcion: "Desarrollador Full Stack que transforma propósito en soluciones digitales completas.",
            linksRapidos: "Enlaces Rápidos",
            inicio: "Inicio",
            sobre: "Sobre mí",
            tecnologias: "Tecnologías",
            habilidades: "Habilidades",
            proyectos: "Proyectos",
            contacto: "Contacto",

            contacto: "Contacto",
            telefono: "+55 (88) 99435-9926",
            localidad: "Ceará, Brasil",
            gmail: "ramonbrandao.dev@gmail.com",

            derechos: "© 2025 Ramon Brandão. Todos los derechos reservados.",
            termos: {
                privacidade: "Política de Privacidad",
                uso: "Términos de Uso",
                aviso: "Aviso Legal"
            }
        }
    }

};
