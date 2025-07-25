// import { Textos } from "i18next";

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
                            // <i className="devicon-nodejs-line" style={{ fontSize: "25px" }} />
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

                            // <i className="devicon-supabase-plain" />
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
                    "SASS/SCSS"
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
                    "RESTful APIs",
                    "MongoDB",
                    "PostgreSQL",
                    "Firebase"
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
                    "Postman",
                    "Docker",
                    "Jest"
                ]
            },
            outros: {
                titulo: "Outros",
                descricao: "Tenho conhecimentos adicionais que reforçam meu perfil versátil como desenvolvedor full stack. Compreendo design, análise de dados, automações, manutenção de hardware e mais.",
                itens: [
                    "UI/UX Design",
                    "Automação",
                    "Excel",
                    "Análise de Dados",
                    "Markdown",
                    "Hospedagem (Vercel / Netlify)",
                    "Manutenção de PCs"
                ]
            }
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
                            descricao: "Structures web pages with titles, paragraphs, images and links.",
                            icone: <i className="devicon-html5-plain" />
                        },
                        {
                            nome: "CSS3",
                            descricao: "Controls the visual of pages: colors, sizes, spacing and animations.",
                            icone: <i className="devicon-css3-plain" />
                        },
                        {
                            nome: "JavaScript",
                            descricao: "Makes sites interactive with clicks, forms, sliders, animations and more.",
                            icone: <i className="devicon-javascript-plain" />
                        },
                        {
                            nome: "React",
                            descricao: "Library for creating modern and reactive interfaces with reusable components.",
                            icone: <i className="devicon-react-original" />
                        },
                        {
                            nome: "Next.js",
                            descricao: "React framework for fast sites with routes, SSR, SEO and scalable structure.",
                            icone: <i className="devicon-nextjs-line" style={{ fontSize: "35px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                        },
                        // {
                        //     nome: "Tailwind CSS",
                        //     descricao: "Utility-first framework for styling quickly with semantic and responsive classes."
                        // },
                        {
                            nome: "Bootstrap",
                            descricao: "Set of ready components to speed up the creation of responsive interfaces.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                                </svg>
                        },
                        {
                            nome: "Vite",
                            descricao: "Modern and ultra-fast bundler for frontend development with JS and React.",
                            icone: <i className="devicon-vitejs-plain" style={{ fontSize: "25px" }} />
                        }
                    ]
                },
                logicaBackend: {
                    titulo: "Logic and Back-end",
                    itens: [
                        {
                            nome: "Node.js",
                            descricao: "Allows using JavaScript on the back-end for APIs, logic and servers.",
                            icone: <i className="devicon-nodejs-line" style={{ fontSize: "25px" }} />
                        },
                        {
                            nome: "Express.js",
                            descricao: "Lightweight framework for creating REST APIs and handling routes and middlewares."
                        },
                        {
                            nome: "Python",
                            descricao: "Powerful language used in automations, scripts, APIs, bots and data analysis.",
                            icone: <i className="devicon-python-plain"></i>
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
                            descricao: "Data manipulation, graphs and processing with simple yet powerful code.",
                            // icone:
                            //     <i className="devicon-python-plain"></i>
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
                            descricao: "Create scripts to automate tasks, download data, send emails etc.",
                            icone: <i className="devicon-python-plain"></i>
                        },
                        // {
                        //     nome: "Selenium",
                        //     descricao: "Automates actions in browsers, ideal for testing and scraping."
                        // },
                        // {
                        //     nome: "WhatsApp / Telegram Bots",
                        //     descricao: "Integrations with messaging APIs to respond automatically and execute commands."
                        // }
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
                        },
                        {
                            nome: "Manutenção de PC's",
                            descricao: "Concerto a parte física, o hardware e faço manutenções no software",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                                </svg>
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
                            descricao: "Estructura páginas web con títulos, párrafos, imágenes y enlaces.",
                            icone: <i className="devicon-html5-plain" />
                        },
                        {
                            nome: "CSS3",
                            descricao: "Controla el aspecto visual de las páginas: colores, tamaños, espacios y animaciones.",
                            icone: <i className="devicon-css3-plain" />
                        },
                        {
                            nome: "JavaScript",
                            descricao: "Hace que los sitios sean interactivos con clics, formularios, sliders, animaciones y más.",
                            icone: <i className="devicon-javascript-plain" />
                        },
                        {
                            nome: "React",
                            descricao: "Biblioteca para crear interfaces modernas y reactivas con componentes reutilizables.",
                            icone: <i className="devicon-react-original" />
                        },
                        {
                            nome: "Next.js",
                            descricao: "Framework React para sitios rápidos con rutas, SSR, SEO y estructura escalable.",
                            icone: <i className="devicon-nextjs-line" style={{ fontSize: "35px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                        },
                        // {
                        //     nome: "Tailwind CSS",
                        //     descricao: "Framework utilitario para estilizar rápidamente con clases semánticas y responsivas."
                        // },
                        {
                            nome: "Bootstrap",
                            descricao: "Conjunto de componentes listos para acelerar la creación de interfaces responsivas.",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                                </svg>
                        },
                        {
                            nome: "Vite",
                            descricao: "Empaquetador moderno y ultrarrápido para desarrollo frontend con JS y React.",
                            icone: <i className="devicon-vitejs-plain" style={{ fontSize: "25px" }} />
                        }
                    ]
                },
                logicaBackend: {
                    titulo: "Lógica y Back-end",
                    itens: [
                        {
                            nome: "Node.js",
                            descricao: "Permite usar JavaScript en el back-end para APIs, lógica y servidores.",
                            icone: <i className="devicon-nodejs-line" style={{ fontSize: "25px" }} />
                        },
                        {
                            nome: "Express.js",
                            descricao: "Framework ligero para crear APIs REST y manejar rutas y middlewares."
                        },
                        {
                            nome: "Python",
                            descricao: "Lenguaje poderoso usado en automatizaciones, scripts, APIs, bots y análisis de datos.",
                            icone: <i className="devicon-python-plain"></i>
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
                        // {
                        //     nome: "PostgreSQL",
                        //     descricao: "Base de datos relacional avanzada con alto rendimiento e integridad de datos."
                        // },
                        // {
                        //     nome: "MongoDB",
                        //     descricao: "Base de datos no relacional con documentos flexibles, ideal para datos dinámicos."
                        // },
                        {
                            nome: "Supabase",
                            descricao: "Solución completa con base de datos en tiempo real, autenticación y hospedaje."
                        },
                        // {
                        //     nome: "SQLite",
                        //     descricao: "Base de datos ligera y local, usada para pruebas o aplicaciones pequeñas y offline."
                        // }
                    ]
                },
                devopsTestes: {
                    titulo: "DevOps & Pruebas",
                    itens: [
                        {
                            nome: "Git & GitHub",
                            descricao: "Versionado de código con colaboración, historial e implementaciones integradas."
                        },
                        // {
                        //     nome: "Docker",
                        //     descricao: "Entorno estandarizado para ejecutar aplicaciones en cualquier sistema sin conflictos."
                        // },
                        // {
                        //     nome: "Postman / Thunder Client",
                        //     descricao: "Herramientas para probar APIs REST de forma visual y práctica."
                        // },
                        // {
                        //     nome: "Jest",
                        //     descricao: "Biblioteca de pruebas para verificar si las funciones JavaScript son correctas."
                        // },
                        // {
                        //     nome: "CI/CD",
                        //     descricao: "Automatiza pruebas, compilaciones e implementaciones en cada push al repositorio (ej. GitHub Actions)."
                        // }
                    ]
                },
                designUXUI: {
                    titulo: "Diseño & UI/UX",
                    itens: [
                        {
                            nome: "Figma",
                            descricao: "Herramienta colaborativa para crear prototipos y diseños responsivos."
                        },
                        // {
                        //     nome: "Canva",
                        //     descricao: "Creación rápida de gráficos para redes sociales, presentaciones e identidad visual."
                        // },
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
                            descricao: "Manipulación de datos, gráficos y procesamiento con código simple pero poderoso.",
                            icone: <i className="devicon-python-plain"></i>
                        },
                        // {
                        //     nome: "SQL",
                        //     descricao: "Consultas en bases de datos relacionales para extraer y analizar información."
                        // },
                        // {
                        //     nome: "Google Data Studio",
                        //     descricao: "Plataforma de Google para crear paneles con datos conectados y gráficos interactivos."
                        // }
                    ]
                },
                automacoes: {
                    titulo: "Automatizaciones y Scripts",
                    itens: [
                        {
                            nome: "Python",
                            descricao: "Creación de scripts para automatizar tareas, descargar datos, enviar correos etc.",
                            icone: <i className="devicon-python-plain"></i>
                        },
                        // {
                        //     nome: "Selenium",
                        //     descricao: "Automatiza acciones en navegadores, ideal para pruebas y scraping."
                        // },
                        // {
                        //     nome: "Bots de WhatsApp / Telegram",
                        //     descricao: "Integraciones con APIs de mensajería para responder automáticamente y ejecutar comandos."
                        // }
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
                        },
                        {
                            nome: "Manutenção de PC's",
                            descricao: "Concerto a parte física, o hardware e faço manutenções no software",
                            icone:
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                                </svg>
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
