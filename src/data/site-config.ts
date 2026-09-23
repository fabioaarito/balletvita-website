export const colors = {
  white: "#ffffff",
  teal: "#67c4a8",
  yellow: "#f6e449",
  dark: "#363535",
  black: "#000000",
  lightGray: "#efefef",
  darkText: "#373535",
} as const;

export const heroConfig = {
  title: "BALLETVITA - ACADEMIA DE ARTES",
  slogan: "VIDA, ARTE E MOVIMENTO",
  tagline: "Ensino de dança para todas as idades.\nA celebrar 19 anos em 2026!",
  cta: "Marcar Aula Experimental",
  description: "Explore o movimento e descubra o prazer da dança connosco.",
} as const;

export const aboutConfig = {
  title: "A BALLETVITA...",
  text:
    "A Balletvita - Academia de Artes nasceu da paixão pela dança e pelo ensino artístico. Ao longo de quase duas décadas de atividade, a academia tem acompanhado o percurso de várias gerações de alunos, proporcionando um espaço onde crianças, jovens e adultos podem explorar o movimento, desenvolver o seu potencial e descobrir o prazer de dançar.",
  image: "/images/about-image.jpg",
  anniversary:
    "Em setembro de 2026, a Balletvita celebra 19 anos de atividade, um percurso construído com alunos, famílias, professores e todos aqueles que fizeram parte da história da escola. Mais do que formar bailarinos, procuramos contribuir para o crescimento pessoal de cada aluno e para a criação de uma relação duradoura com a dança.",
  cta: "Saber mais sobre nós",
} as const;

export const sobreNosConfig = {
  subtitle: "Vida, Arte e Movimento",
  intro: [
    "A Balletvita - Academia de Artes nasceu da paixão pela dança e pelo ensino artístico.",
    "Ao longo de quase duas décadas de atividade, a academia tem acompanhado o percurso de várias gerações de alunos, proporcionando um espaço onde crianças, jovens e adultos podem explorar o movimento, desenvolver o seu potencial e descobrir o prazer de dançar.",
  ],
  introImage: "/images/about-image.jpg",
  sections: [
    {
      title: "Mais do que uma academia de dança",
      band: "teal" as const,
      paragraphs: [
        "Com uma equipa de professores qualificados e experientes, oferecemos aulas adaptadas a diferentes idades e níveis, promovendo o desenvolvimento artístico, físico e pessoal de cada aluno.",
        "Na Balletvita valorizamos não só a aprendizagem técnica, mas também a criatividade, a disciplina, o respeito e o espírito de grupo.",
        "Ao longo destes anos, muitos alunos iniciaram aqui o seu percurso na dança. Alguns seguiram formação profissional e continuam hoje ligados ao meio artístico. Outros escolheram diferentes caminhos, mas mantêm a dança como uma parte importante das suas vidas.",
      ],
    },
    {
      title: "Uma Associação para promover a dança e dar oportunidades",
      band: "white" as const,
      image: "/images/banner1.jpg",
      paragraphs: [
        "Em 2025 a Balletvita fundou a Pé Esquerdo - Associação Cultural com o objetivo de promover novos projetos artísticos, iniciativas culturais e atividades ligadas à dança. Representa neste momento uma estrutura com atividade contínua e estruturada na área da dança desportiva e da criação coreográfica, oferecendo oportunidades formativas e culturais de excelência a crianças, jovens e adultos.",
        "O primeiro projeto a ser iniciado foi a Companhia de Dança Balletvita, estrutura de criação contínua que estreou o seu primeiro projeto a 17 de junho desse ano, no Centro Cultural da Malaposta.",
      ],
    },
    {
      title: "19 anos de história",
      band: "teal" as const,
      paragraphs: [
        "Em setembro de 2026, a Balletvita celebra 19 anos de atividade, um percurso construído com alunos, famílias, professores e todos aqueles que fizeram parte da história da escola.",
        "Mais do que formar bailarinos, procuramos contribuir para o crescimento pessoal de cada aluno e para a criação de uma relação duradoura com a dança.",
      ],
    },
  ],
  espaco: {
    title: "O nosso Espaço",
    text: "A Academia Balletvita é composta por dois estúdios com cinco salas no total, todas elas preparadas para as necessidades de cada modalidade.",
    studios: [
      {
        title: "Estúdio 1",
        address: "Rua Major Mouzinho de Albuquerque 12 loja A",
        images: [
          "/images/about-image.jpg",
          "/images/video-thumb.jpg",
          "/images/banner1.jpg",
          "/images/card2.jpg",
          "/images/carousel-1.jpg",
          "/images/carousel-2.jpg",
        ],
      },
      {
        title: "Estúdio 2",
        address: "Rua Cândido de Oliveira 2 A",
        images: [
          "/images/video-thumb.jpg",
          "/images/about-image.jpg",
          "/images/carousel-1.jpg",
          "/images/carousel-2.jpg",
          "/images/banner1.jpg",
          "/images/card2.jpg",
        ],
      },
    ],
  },
} as const;

export const modalidadesConfig = {
  title: "MODALIDADES PARA TODOS OS GOSTOS E IDADES",
  intro:
    "Na Balletvita — Academia de Artes, as aulas são organizadas por idade e nível, permitindo acompanhar o desenvolvimento técnico e artístico de cada aluno ao longo do seu percurso. A escola oferece diferentes modalidades de dança e movimento, proporcionando uma formação equilibrada e adaptada às diversas etapas da aprendizagem.",
  items: [
    { title: "Ballet clássico", slug: "ballet-classico", image: "/images/banner1.jpg" },
    { title: "Dança Contemporânea", slug: "danca-contemporanea", image: "/images/card2.jpg" },
    { title: "Dança Social e de Salão", slug: "danca-social-e-de-salao", image: "/images/card2.jpg" },
  ],
  dropdownLabel: "Todas as Modalidades",
  schedule: "Aulas todas as semanas, de\nsegunda a sábado",
  scheduleCta: "Ver Horários",
} as const;

export const modalidadesData = [
  {
    slug: "ballet-classico",
    title: "Ballet Clássico",
    image: "/images/banner1.jpg",
    paragraphs: [
      "O ballet clássico constitui a base da formação em dança, desenvolvendo postura, coordenação, musicalidade, disciplina e consciência corporal.",
      "Nas aulas, os alunos trabalham progressivamente a técnica do ballet, de acordo com a sua idade e nível, num processo que valoriza tanto a precisão técnica como a sensibilidade artística.",
    ],
    idadeMinima: "Idade mínima: 3 anos",
    badge: {
      title: "ROYAL ACADEMY\nOF DANCE",
      text: "A Balletvita é uma escola filiada da Royal Academy of Dance, seguindo na maioria das turmas os princípios pedagógicos desta instituição internacional de referência no ensino do ballet.",
    },
    gallery: [
      "/images/banner1.jpg",
      "/images/about-image.jpg",
      "/images/carousel-1.jpg",
      "/images/carousel-2.jpg",
    ],
  },
  {
    slug: "danca-contemporanea",
    title: "Dança Contemporânea",
    image: "/images/card2.jpg",
    paragraphs: [
      "A dança contemporânea explora o movimento como forma de investigação artística e expressão individual.",
      "Partindo de diferentes referências técnicas e estéticas, esta linguagem procura desenvolver no aluno uma relação mais consciente com o corpo, o espaço e a musicalidade. Nas aulas são trabalhados diversos princípios técnicos como coordenação, mobilidade, equilíbrio, dinâmica e qualidade de movimento, muitas vezes aliados à exploração criativa através de exercícios de improvisação, composição e interpretação.",
      "A dança contemporânea caracteriza-se precisamente pela diversidade de abordagens ao movimento e pela liberdade de construção de uma linguagem corporal própria.",
      "Sendo uma linguagem artística em constante transformação, a dança contemporânea acompanha as pesquisas de movimento e as novas formas de olhar o corpo, enriquecendo continuamente as possibilidades expressivas do movimento.",
      "Ao longo do percurso de aprendizagem, os alunos desenvolvem também consciência corporal, sensibilidade artística e capacidade de criação, explorando diferentes formas de movimento e relação com o espaço e com os outros intérpretes. Esta prática incentiva a autonomia, a expressividade e o pensamento artístico.",
    ],
    idadeMinima: "Idade mínima: 6 anos",
    gallery: [
      "/images/card2.jpg",
      "/images/carousel-1.jpg",
      "/images/banner1.jpg",
      "/images/carousel-2.jpg",
    ],
  },
  {
    slug: "danca-social-e-de-salao",
    title: "Dança Social e de Salão",
    image: "/images/card2.jpg",
    paragraphs: [
      "A organização competitiva de dez das Danças de Salão fez com que se tornassem as mais populares internacionalmente, sendo referidas como Danças de Salão. Existem muitas outras danças que ganham o seu espaço com um carácter social.",
      "As Danças de Salão de competição encontram-se divididas em dois grandes grupos: as Modernas (Valsa Lenta, Valsa Vienense, Quickstep, Slow Fox e Tango) e as Latinas (Cha Cha Cha, Rumba, Samba, Jive e Paso Doble). Todas as outras são designadas como sociais (Salsa, Merengue, Mambo, entre outras).",
      "Com a evolução da dança desportiva foram surgindo diferentes categorias, não sendo obrigatória a prática desta modalidade a pares.",
      "A Balletvita é membro da Federação Portuguesa de Dança Desportiva, competindo desde 2016 na categoria de grupos, alcançando desde então vários prémios a nível nacional e internacional.",
      "Nas aulas de Dança Social terá a oportunidade de conhecer a base de vários ritmos latinos e clássicos, com uma forte componente social. São danças praticadas como uma forma de entretenimento e de integração na turma e que podem ser facilmente aplicadas em ambiente de festa. Assim, o objetivo principal desta aula será aprender danças de salão, de uma forma descontraída e informal.",
    ],
    idadeMinima: "Idade mínima: 6 anos",
    gallery: [
      "/images/card2.jpg",
      "/images/carousel-2.jpg",
      "/images/banner1.jpg",
      "/images/carousel-1.jpg",
    ],
  },
  {
    slug: "hip-hop",
    title: "Hip-Hop",
    image: "/images/card2.jpg",
    paragraphs: [
      "O Hip-Hop é uma modalidade dinâmica que combina movimento, ritmo e expressão individual, tendo origem nas culturas urbanas e na forte ligação entre dança e música.",
      "Nas aulas são explorados diferentes estilos e influências do Hip Hop, através do trabalho coreográfico, exercícios de coordenação, musicalidade e improvisação. Os alunos desenvolvem ritmo, presença em palco e consciência corporal, enquanto são incentivados a experimentar e a construir a sua própria forma de movimento.",
      "Esta prática promove também energia, confiança e trabalho de grupo, permitindo aos alunos explorar a dança num contexto criativo e estimulante.",
    ],
    idadeMinima: "Idade mínima: 6 anos",
    gallery: [
      "/images/card2.jpg",
      "/images/carousel-1.jpg",
      "/images/banner1.jpg",
      "/images/carousel-2.jpg",
    ],
  },
  {
    slug: "danca-criativa",
    title: "Dança Criativa",
    image: "/images/card2.jpg",
    paragraphs: [
      "A Dança Criativa destina-se às crianças mais novas e constitui uma primeira aproximação ao universo da dança através do movimento, da música e da imaginação.",
      "Nas aulas, as crianças exploram o movimento de forma lúdica e orientada, desenvolvendo coordenação, ritmo, consciência corporal e relação com o espaço. Através de jogos de movimento e propostas criativas, cada criança é incentivada a experimentar diferentes formas de expressão corporal.",
      "Este trabalho contribui também para o desenvolvimento da atenção, da autonomia e da relação com o grupo, criando uma base importante para futuras aprendizagens na dança.",
    ],
    idadeMinima: "Idade mínima: 3 anos",
    gallery: [
      "/images/card2.jpg",
      "/images/about-image.jpg",
      "/images/carousel-1.jpg",
      "/images/carousel-2.jpg",
    ],
  },
  {
    slug: "k-pop",
    title: "K-Pop",
    image: "/images/card2.jpg",
    paragraphs: [
      "O K-Pop inspira-se nas coreografias da música pop coreana, conhecidas pela sua energia, precisão e forte ligação à música.",
      "Nas aulas, os alunos aprendem sequências coreográficas inspiradas em artistas e grupos de K-Pop, desenvolvendo coordenação, ritmo, memória de movimento e presença em palco.",
      "Esta modalidade combina dança, musicalidade e trabalho de grupo num ambiente dinâmico e motivador.",
    ],
    idadeMinima: "Idade mínima: 6 anos",
    gallery: [
      "/images/card2.jpg",
      "/images/carousel-2.jpg",
      "/images/banner1.jpg",
      "/images/carousel-1.jpg",
    ],
  },
  {
    slug: "pilates",
    title: "Pilates",
    image: "/images/card2.jpg",
    paragraphs: [
      "O Pilates é um método de exercício físico focado no fortalecimento muscular, na melhoria da postura, na flexibilidade, fluidez do movimento, respiração e na consciência corporal.",
      "Através de movimentos controlados e de um trabalho atento à respiração, as aulas promovem equilíbrio, estabilidade e bem-estar físico. Esta prática contribui para o fortalecimento do corpo de forma equilibrada e para a prevenção de tensões e lesões.",
      "O Pilates é adequado a diferentes níveis de condição física e constitui uma excelente forma de cuidar do corpo e melhorar a qualidade de movimento.",
    ],
    idadeMinima: "Idade mínima: 12 anos",
    gallery: [
      "/images/card2.jpg",
      "/images/about-image.jpg",
      "/images/carousel-1.jpg",
      "/images/carousel-2.jpg",
    ],
  },
  {
    slug: "ginastica-de-manutencao",
    title: "Ginástica de Manutenção",
    image: "/images/card2.jpg",
    paragraphs: [
      "A Ginástica de Manutenção destina-se a participantes séniores, promovendo a atividade física regular de forma segura e adaptada.",
      "As aulas incluem exercícios orientados para melhorar mobilidade, equilíbrio, força e coordenação, contribuindo para a manutenção da condição física e do bem-estar geral.",
      "A prática regular ajuda a preservar a autonomia, a flexibilidade e a qualidade de vida, num ambiente ativo e motivador.",
    ],
    idadeMinima: "Idade mínima: 60 anos",
    gallery: [
      "/images/card2.jpg",
      "/images/carousel-2.jpg",
      "/images/banner1.jpg",
      "/images/carousel-1.jpg",
    ],
  },
  {
    slug: "yoga",
    title: "Yoga",
    image: "/images/card2.jpg",
    paragraphs: [
      "O Yoga é uma prática que combina movimento, respiração e concentração, promovendo equilíbrio entre corpo e mente.",
      "Através de diferentes posturas, exercícios de respiração e momentos de relaxamento, as aulas contribuem para melhorar a flexibilidade, a força, a postura e a consciência corporal.",
      "Esta prática favorece também o bem-estar geral, ajudando a reduzir tensões e a desenvolver maior equilíbrio físico e mental. As aulas são adequadas a diferentes níveis de experiência.",
    ],
    idadeMinima: "Idade mínima: 12 anos",
    gallery: [
      "/images/card2.jpg",
      "/images/carousel-1.jpg",
      "/images/banner1.jpg",
      "/images/carousel-2.jpg",
    ],
  },
  {
    slug: "grupo-de-teatro",
    title: "Grupo de Teatro",
    image: "/images/card2.jpg",
    paragraphs: [
      "O nosso grupo de teatro é direcionado para crianças e jovens dos 8 aos 16 anos. São realizados exercícios e jogos, com cenários imaginários e situações desafiantes, onde os sentimentos se ajustam, acordam e examinam.",
      "Com o objetivo de estimular a desinibição, a confiança e a consciência de grupo, no sentido da contracena. Colocação da voz, com especial atenção na articulação.",
      "É desenvolvida a perceção espacial, expressão corporal e criatividade. São criadas pela Professora Ana Paula Nunes peças especificamente para este grupo representar nos espetáculos do final do ano letivo.",
    ],
    idadeMinima: "Dos 8 aos 16 anos",
    gallery: [
      "/images/card2.jpg",
      "/images/about-image.jpg",
      "/images/carousel-2.jpg",
      "/images/carousel-1.jpg",
    ],
  },
] as const;

export const teachersConfig = {
  title: "CONHEÇA OS NOSSOS PROFESSORES",
  dropdownLabel: "Todos os Professores",
  leftImage: "/images/teacher-f.jpg",
  rightImage: "/images/teacher-m.jpg",
  ctaBandTitle:
    "Seja para seguir o sonho da dança ou por pura diversão, a Balletvita é o sitio ideal para toda a família.\nJunte-se a nós!",
  cta: "Marcar Aula Experimental",
} as const;

export const professoresData = [
  {
    slug: "ana-corista",
    name: "Ana Corista",
    role: "Fundadora e Diretora Artística",
    homeLabel: "BALLET / DANÇA CRIATIVA",
    image: "/images/teacher-f.jpg",
    bio: [
      "Ana Corista é diretora artística e pedagógica da Balletvita – Academia de Artes, instituição que fundou em 2007 e onde coordena o Departamento de Técnica de Dança Clássica, acumulando funções de docência e orientação pedagógica.",
      "É licenciada em Dança, ramo de Educação, pela Faculdade de Motricidade Humana, e detentora do Certificate in Ballet Teaching Studies pela Royal Academy of Dance.",
      "Ao longo do seu percurso tem desenvolvido um trabalho continuado na formação técnica e artística em Dança Clássica, Dança Criativa, Barra de Chão e Pilates, colaborando com diversas instituições no âmbito da formação artística e pedagógica.",
      "É membro fundador da Pé Esquerdo – Associação Cultural, onde assume um papel ativo na estruturação de projetos artísticos e na promoção da dança enquanto prática artística, educativa e cultural.",
      "A sua atividade centra-se na formação artística, na mediação cultural e no desenvolvimento de públicos, contribuindo para a qualificação de jovens praticantes e intérpretes e para o fortalecimento do tecido cultural local no concelho de Odivelas.",
    ],
    modalidades: [
      { title: "Ballet", slug: "ballet-classico" },
      { title: "Dança Criativa", slug: "danca-criativa" },
    ],
  },
  {
    slug: "ana-paula-nunes",
    name: "Ana Paula Nunes",
    role: "Professora de Teatro",
    homeLabel: "GRUPO DE TEATRO",
    image: "/images/teacher-f.jpg",
    bio: [
      "Nascida em Lisboa a 25 de dezembro de 1961 e residente em Odivelas, iniciou o seu percurso artístico em 1980 através de audições no Teatro Adóque. Desde então desenvolveu uma atividade ligada ao teatro, cinema e televisão, conciliando-a com a sua carreira profissional na área financeira e de recursos humanos.",
      "Ao longo dos anos participou em diversos espetáculos de teatro de revista, comédia e café-teatro em salas como o Teatro Adóque, Teatro ABC, Teatro Variedades e Teatro da Comuna. Participou também em cinema e televisão, em produções como Jogo de Mão, Passagem por Lisboa e vários programas da RTP, além de trabalhos de dobragem, como a Rua Sésamo.",
      "Colaborou em projetos culturais do Município de Odivelas e desenvolveu uma forte ligação à criação teatral, assumindo funções de escrita, adaptação e encenação em numerosos espetáculos apresentados em auditórios como o Liceu Camões e o Tivoli BBVA, a maioria em parceria com a Balletvita – Academia de Dança.",
      "Desde 2010 integra a direção da Sociedade Musical Odivelense, onde é responsável pelos grupos de teatro juvenil e adulto, criando e encenando várias peças originais. Paralelamente, dedica-se também à poesia, participando em antologias e recitais.",
    ],
    modalidades: [{ title: "Grupo de Teatro", slug: "grupo-de-teatro" }],
  },
  {
    slug: "barbara-ferrao",
    name: "Bárbara Ferrão",
    role: "Treinadora de Dança Desportiva",
    homeLabel: "DANÇAS DE SALÃO",
    image: "/images/teacher-f.jpg",
    bio: [
      "Desde 2013 dedicada às danças de salão, é treinadora/professora responsável pelos grupos de competição e formação na Balletvita. Orienta quatro grupos em competição no Circuito Nacional e Campeonatos Nacionais e Internacionais, encontrando-se também a frequentar o Curso de Treinador de Dança Desportiva (Grau I), certificado pelo IPDJ.",
      "O seu trabalho tem sido marcado pela consistência pedagógica e pela obtenção de vários títulos nacionais e internacionais.",
    ],
    modalidades: [{ title: "Danças de Salão", slug: "danca-social-e-de-salao" }],
  },
  {
    slug: "beatriz-duarte",
    name: "Beatriz Duarte",
    role: "Professora de Ballet e Dança Contemporânea",
    homeLabel: "BALLET",
    image: "/images/teacher-f.jpg",
    bio: [
      "Bailarina e criadora, Beatriz Duarte formou-se na FOR Dance Theater e no Projeto Quorum em 2020. Ensina Ballet, Barra de Chão e Dança Contemporânea há 6 anos, abrangendo todas as gerações de alunos.",
      "Paralelamente ao ensino, dirige o seu próprio coletivo de dança contemporânea, onde desenvolve o seu trabalho autoral. A sua abordagem foca-se no rigor técnico e no prazer de dançar, pautando-se sempre pela empatia e pela criação de laços com todos os seus alunos.",
    ],
    modalidades: [
      { title: "Ballet", slug: "ballet-classico" },
      { title: "Dança Contemporânea", slug: "danca-contemporanea" },
    ],
  },
  {
    slug: "beatriz-roque",
    name: "Beatriz Roque",
    role: "Professora de Danças de Salão",
    homeLabel: "DANÇAS DE SALÃO",
    image: "/images/teacher-f.jpg",
    bio: [
      "Licenciada em Ciências do Desporto e mestre em Ensino da Educação Física pela Faculdade de Motricidade Humana. Iniciou os seus estudos em dança aos 5 anos e explorou diferentes estilos como jazz e ballet.",
      "No entanto, foi nas danças de salão que encontrou a sua verdadeira essência. Hoje dedica-se a ensinar e a partilhar a magia da dança com alunos de todas as idades, acreditando que dançar é uma forma única de expressão, conexão e alegria.",
    ],
    modalidades: [{ title: "Danças de Salão", slug: "danca-social-e-de-salao" }],
  },
  {
    slug: "bianca-flores",
    name: "Bianca Flores",
    role: "Professora de K-Pop",
    homeLabel: "K-POP",
    image: "/images/teacher-f.jpg",
    bio: [
      "Iniciou o seu percurso no mundo da dança através das danças de salão, modalidade em que competiu durante cerca de 10 anos (2014–2024). Durante este período participou em várias competições com o grupo Vitagirls, conquistando diversos títulos e tendo também a oportunidade de participar em programas televisivos como \"Got Talent\" e \"Dança com as Estrelas\".",
      "Ao longo da sua formação teve contacto com diferentes estilos de dança, incluindo hip-hop, jazz, contemporâneo e musical, o que contribuiu para um percurso artístico versátil e dinâmico.",
      "Mais tarde descobriu o universo do K-pop e aprofundou esta vertente com a ajuda de professores coreanos: Sun Bee e Hyeonseok. Desde 2022 leciona aulas de K-pop na Balletvita – Academia de Artes, onde procura partilhar com os alunos a energia, a criatividade e a diversão deste estilo, incentivando-os a expressarem-se através da dança.",
    ],
    modalidades: [{ title: "K-Pop", slug: "k-pop" }],
  },
  {
    slug: "cristina-rodrigues",
    name: "Cristina Rodrigues",
    role: "Professora de Yoga e Yogaterapeuta",
    homeLabel: "YOGA",
    image: "/images/teacher-f.jpg",
    bio: [
      "Descobriu o yoga em 2008, aos 24 anos, e foi amor à primeira vista. Um ano depois iniciou a sua formação como Professora de Yoga e Yogaterapeuta, um percurso de três anos que deu início a uma jornada contínua de aprendizagem.",
      "Ao longo dos anos especializou-se em yoga para bebés, crianças, adolescentes e yoga na gravidez, acumulando mais de 1000 horas de formação. Leciona desde 2010 e tem alunos entre 1 e 80 anos.",
      "Acredita profundamente no yoga como uma prática acessível a todos e numa filosofia de vida capaz de transformar a saúde física, mental e emocional.",
    ],
    modalidades: [{ title: "Yoga", slug: "yoga" }],
  },
  {
    slug: "florinda-loureiro",
    name: "Florinda Loureiro",
    role: "Professora de Ballet",
    homeLabel: "BALLET",
    image: "/images/teacher-f.jpg",
    bio: [
      "Tendo iniciado a sua formação na escola de Música e Bailado da Fundação Calouste Gulbenkian, fez o curso de bailarina do Conservatório Nacional e complementou com o diploma de Curso Superior Especializado da ESD/IPL, mestrado em Performance Artística/Dança na FMH/UTL (curricular) e mestrado em Educação pela Arte da UM, com defesa de tese sobre o tema “Contribuição da dança educativa no desenvolvimento global da criança dos 3 aos 6 anos”.",
      "Iniciou a sua carreira artística na CNB e pertenceu ao grupo de formação da ADAL. Trabalhou como freelancer e coreografou para teatro infantil e musical. Fez estágios de Dança Clássica, Antiga e notação Benesh em Portugal e no estrangeiro.",
      "Foi monitora na FMH/UTL de 1991 a 2000 e docente no Estúdio-Anna Mascolo desde 1990 até 2008. A partir do ano 2001 até 2011 foi docente no Instituto Piaget. Foi diretora pedagógica e professora de dança clássica e dança contemporânea na escola de ensino articulado que criou no Aiadança/Sintra.",
      "Fez o curso de técnica de dança clássica Vaganova em 2019/2020 (1.º ao 6.º ano) e o de formação de formadores, certificação Educação Artística – uma abordagem curricular em dança, de 28-05-2022 a 25-06-2022.",
      "Leciona com regularidade dança antiga em workshops, remonta e coreografa para eventos de recreação histórica. Participou em exposições coletivas, a última das quais no espaço “Um teatro em cada bairro, AVENIDAS”, em abril de 2023. Já editou 3 livros, dois dos quais de poesia. No ano de 2022 começou a lecionar ballet em escolas do concelho de Loures e na Balletvita.",
    ],
    modalidades: [{ title: "Ballet", slug: "ballet-classico" }],
  },
  {
    slug: "heloisa-goes",
    name: "Heloísa Góes",
    role: "Professora de Ballet",
    homeLabel: "BALLET",
    image: "/images/teacher-f.jpg",
    bio: [
      "Iniciou a sua formação em dança em 2006, ingressando no Balleteatro Mônica Minelli, onde recebeu treino em ballet clássico, jazz, tap dance e irish dance. Em 2014, obteve o diploma pelo método da Royal Academy of Dance.",
      "Aos 18 anos, deu continuidade aos estudos no Conservatório Internacional de Portugal, aprimorando a sua técnica clássica pelo método cubano e recebendo formação em pas de deux, repertório, dança contemporânea e danças de caráter. Em 2018, transferiu-se para Florença, Itália, onde concluiu a sua formação no departamento de dança moderna e contemporânea do Opus Ballet Centro Coreográfico e no projeto Get the Floor. Durante esse período, aprofundou os seus conhecimentos em floor work e contact improvisation.",
      "Desde a conclusão da sua formação, trabalhou com distintas companhias e projetos, como CBCL, Versilia Danza Dance Company com Kaleidos, Zakuro Speaking Bodies sob a direção de Jennifer Rosati e Lorenzo Di Rocco, e Sinais do Tempo com Daniel Cardoso; colaborou também com Gustavo Oliveira, Diego Sinniger e Lienz Chang, entre outros.",
      "Atualmente leciona na Balletvita – Academia de Artes no departamento de ballet clássico e desenvolve uma pesquisa sobre movimentos em colaboração com o bailarino Francesco Grilli-Cicilioni no projeto do coletivo Hephran.",
    ],
    modalidades: [{ title: "Ballet", slug: "ballet-classico" }],
  },
  {
    slug: "matilde-pinto",
    name: "Matilde Pinto",
    role: "Bailarina e Professora de Dança Contemporânea",
    homeLabel: "DANÇA CONTEMPORÂNEA",
    image: "/images/teacher-f.jpg",
    bio: [
      "Começou a dançar aos três anos na Balletvita – Academia de Dança e Artes, em Lisboa, onde estudou até aos quinze anos e teve oportunidade de trabalhar com professoras como Teresa Alves da Silva e Ana Corista.",
      "Em 2019 mudou-se para Leiria para prosseguir os seus estudos no Conservatório Internacional de Ballet e Dança Annarella Sanchez, onde permaneceu até 2022. Durante este período trabalhou com coreógrafos e professores de renome, entre os quais Yannik Boquim, David Makhateli, Maina Gielgud, Roberta Ferrara, Lienz Chang e Annarella Sanchez. Concluiu o curso aos dezassete anos, obtendo o certificado profissional de dança.",
      "Em 2023, aos dezanove anos, integrou o Quorum Project, em Lisboa, onde continua a desenvolver a sua formação em dança clássica e, sobretudo, contemporânea. No Quorum teve oportunidade de trabalhar com coreógrafos e professores como Daniel Cardoso, Kim Potthoff, Harold George, Johannes Härtl, Sylvia Rijmer, Miguel Oliveira, Margarida Carvalho, Roberto Altamura, Barbora Hruskova, Catarina Casqueiro, Bruno Duarte, Gonçalo Lobato, Tom Colin, Filipe Macedo e Susana Matos.",
      "Durante a temporada 2023/2025 foi distinguida com uma bolsa para frequentar o summer intensive da PNSD Rosella Hightower, em França. Ao longo dos anos participou em diversos concursos de dança, tendo recebido vários prémios e bolsas de estudo, entre os quais uma semana de formação na Codarts.",
      "Como bailarina profissional, trabalhou com a Quorum Dance Company em produções como “O Quebra-Nozes”, “STORM” de Daniel Cardoso, “A Sagração da Primavera” de Daniel Cardoso e Xie Xin, “Salto Longe” de Margarida Carvalho e “Fios Invisíveis” de Filipa Peraltinha. Também fez trabalhos posteriores para Luís Xarez e Catarina Casqueiro.",
    ],
    modalidades: [{ title: "Dança Contemporânea", slug: "danca-contemporanea" }],
  },
  {
    slug: "maria-ines-lamas",
    name: "Maria Inês Lamas",
    role: "Professora de Ballet, Dança Criativa e Barra de Chão",
    homeLabel: "BALLET / DANÇA CRIATIVA",
    image: "/images/teacher-f.jpg",
    bio: [
      "Iniciou o seu percurso na dança aos três anos, com o Ballet, na Balletvita, academia que acompanha o seu crescimento artístico desde então. Ao longo dos anos foi explorando diferentes modalidades, entre elas Jazz, Modern Theatre, Dança Contemporânea e Danças de Salão, descobrindo diferentes formas de expressão através do movimento.",
      "Com o passar do tempo, encontrou na Dança Contemporânea e nas Danças de Salão um amor muito especial, sendo áreas nas quais tem vindo a desenvolver a sua formação, sem nunca perder o carinho pelo Ballet, uma base muito importante que marcou o início do seu percurso artístico.",
      "O desejo de continuar a aprofundar os seus conhecimentos e de fazer da Dança o seu caminho levou-a, em 2023, a ingressar na Escola Superior de Dança, onde concluiu a Licenciatura em Dança em 2026. Lá teve a oportunidade de contactar com diferentes métodos, linguagens e processos de criação, adquirindo diversas competências artísticas e pedagógicas.",
      "Atualmente, para além de integrar a equipa de professores da Balletvita, faz parte do Quorum Project, um projeto de formação e criação artística de caráter pré-profissional, onde continua a desenvolver o seu percurso enquanto intérprete e artista. É também federada na Federação Portuguesa de Dança Desportiva desde 2017, mantendo uma prática contínua nas Danças de Salão e dando continuidade a uma área que tem vindo a assumir um papel importante na sua relação com a dança.",
      "A sua ligação à Balletvita acompanha, assim, todo o seu percurso na Dança, tendo agora a oportunidade de regressar à academia onde continua a crescer enquanto bailarina, desta vez também enquanto professora, partilhando com os seus alunos o gosto e a paixão pela dança que a acompanham desde os três anos.",
    ],
    modalidades: [
      { title: "Ballet", slug: "ballet-classico" },
      { title: "Dança Criativa", slug: "danca-criativa" },
    ],
  },
  {
    slug: "miguel-quintas",
    name: "Miguel Quintas",
    role: "Coreógrafo e Professor de Hip-Hop",
    homeLabel: "HIP-HOP",
    image: "/images/teacher-m.jpg",
    bio: [
      "Miguel Quintas é coreógrafo e professor na Balletvita – Academia de Artes. Licenciado em Professores do Ensino Básico, variante de Educação Física, dedica-se ao ensino da dança na vertente Hip Hop, com especial incidência no estilo R&B, desde o ano 2000.",
      "Ao longo do seu percurso, venceu inúmeros torneios e campeonatos de dança, como bailarino e coreógrafo, entre os quais o Madonna Grimes Championship, uma das mais prestigiadas competições de Hip Hop a nível mundial.",
      "Colaborou como formador/professor/coreógrafo/instrutor/preletor com algumas das organizações mais reconhecidas em Portugal, como a Manz, Centro de Estudos Fitness (CEF), Paulo Cardoso Produções (PJC), LG Convenções, Spunky e Reebok Portugal, entre outras.",
      "O seu método de ensino assenta fortemente no estilo LA Styles, fruto de uma formação contínua junto de alguns dos coreógrafos mais influentes do panorama internacional, tais como Ian Eastwood, Brian Puspos, Jun Quemado, Millo Levell, Wade Robson, Patrick Chen e muitos outros. A sua formação decorreu em diversos países: Estados Unidos, Brasil, Inglaterra, França e Espanha.",
      "Atualmente, Miguel Quintas trabalha em exclusivo para a Balletvita, onde orienta o grupo de competição e exibição da academia, tendo ganho diversos prémios ao longo dos últimos anos.",
    ],
    modalidades: [{ title: "Hip-Hop", slug: "hip-hop" }],
  },
  {
    slug: "noah-almeida",
    name: "Noah Almeida",
    role: "Professor de Hip-Hop",
    homeLabel: "HIP-HOP",
    image: "/images/teacher-m.jpg",
    bio: [
      "Iniciou o seu percurso na dança aos 7 anos na Balletvita – Academia de Artes, onde começou a sua formação em Hip Hop e Jazz. Ao longo dos anos manteve uma forte ligação às danças de rua, encontrando o seu estilo sobretudo nos L.A. Styles, enquanto desenvolvia também o seu interesse pela dança contemporânea.",
      "Atualmente encontra-se a concluir a licenciatura em Dança na Faculdade de Motricidade Humana, onde teve contacto com diversas linguagens e estilos, incluindo danças tradicionais, sapateado americano, sevilhanas, danças internacionais, dança clássica, dança contemporânea, dança moderna e danças de rua.",
      "O seu interesse artístico centra-se na exploração e fusão de diferentes linguagens de movimento, particularmente entre a dança contemporânea e as danças de rua, tanto em contexto coreográfico como de improvisação.",
    ],
    modalidades: [
      { title: "Hip-Hop", slug: "hip-hop" },
      { title: "Dança Contemporânea", slug: "danca-contemporanea" },
    ],
  },
  {
    slug: "sara-goncalves",
    name: "Sara Gonçalves",
    role: "Professora de Pilates e Manutenção Sénior",
    homeLabel: "PILATES",
    image: "/images/teacher-f.jpg",
    bio: [
      "Iniciou o seu percurso na Balletvita como aluna, tendo-se licenciado em Fisioterapia pela Escola Superior de Saúde da Cruz Vermelha Portuguesa, em 2013.",
      "Descobriu o gosto pelo Pilates, nomeadamente o Pilates clínico, tendo feito formação em Matwork (1, 2 e 3), bola, pré e pós-parto, escoliose, cirurgia da coluna e ombro, pela APPI, através da Bwizer. A paixão pelo movimento levou-a a realizar uma Pós-Graduação em Exercício Clínico pela Universidade Europeia em 2022.",
      "No momento, dá aulas de Pilates e Manutenção Sénior, e dedica-se à prática clínica como fisioterapeuta ao domicílio e em contexto institucional, na sua maioria na área da Geriatria e deficiência, sendo a sua principal missão garantir que cada aula e sessão seja um passo em direção a um corpo mais forte, saudável e funcional.",
    ],
    modalidades: [
      { title: "Pilates", slug: "pilates" },
      { title: "Ginástica de Manutenção", slug: "ginastica-de-manutencao" },
    ],
  },
  {
    slug: "teresa-alves-da-silva",
    name: "Teresa Alves da Silva",
    role: "Professora de Dança Contemporânea",
    homeLabel: "DANÇA CONTEMPORÂNEA",
    image: "/images/teacher-f.jpg",
    bio: [
      "Fez formação na Academia de Dança Contemporânea de Setúbal, sob a orientação de António Rodrigues e Graça Bessa. Foi bailarina principal na CeDeCe, no Ballet Gulbenkian e na Companhia Aterballetto.",
      "Entre os coreógrafos mais relevantes que marcam o seu percurso artístico destacam-se Mats Ek (Solo for Two), Jiří Kylián, Ohad Naharin, Angelin Preljocaj, Didy Veldman, Mauro Bigonzetti, Stijn Celis, Rui Horta, Itzik Galili, Jan Kodet, Paulo Ribeiro, Vasco Wellenkamp, Olga Roriz, Rodrigo Pederneiras, Vera Mantero e Michele Merola. Em 2007 fundou, com André Mesquita, a TOK’ART (2007–2015), onde assumiu funções de codiretora artística e bailarina.",
      "Em 2009 conquistou o 1.º Prémio de Interpretação com o solo Lake, no 13th International Solo-Tanz-Theater Festival, em Estugarda.",
      "Pela relevância do seu olhar analítico enquanto assistente de coreografia e diretora de ensaios, participou na remontagem das peças See Blue Through (Didy Veldman) – Phoenix Dance Theatre e Ballet da Ópera de Leipzig; A Terceira Sugestão (André Mesquita) – CPBC; Heaven (André Mesquita) – Viseu; La Traviata (encenação de Pier Luigi Pizzi) – Teatro Nacional de São Carlos; Uníssono (Victor Hugo Pontes) – Escola Lugar Presente; e Wolfgang, Bitte (Rui Horta) – Escola António Verney.",
      "Enquanto artista freelancer trabalhou com Miguel Moreira, Rui Horta, Paulo Ribeiro, Victor Hugo Pontes, André Mesquita, Sérgio Diogo Matias, Sofia Dias, Valter Fernandes, Sylvia Rijmer, Clara Andermatt e Margarida Belo Costa.",
      "Como convidada, lecionou em diversos cursos intensivos de dança, entre os quais o 3rd Beijing International Ballet Intensive Course, o XXII Estágio de Dança de Aveiro, o 1.º e 2.º Curso Intensivo Balletvita e no Conservatório Nacional de Dança. É professora de dança contemporânea na Academia de Dança Balletvita desde 2018.",
      "Foi professora na For Dance Theatre, dirigida por Olga Roriz (2017–2021), e integrou o quadro artístico do Dance Spot Conservatório de Dança entre 2021 e 2025, onde desempenhou funções de professora e coordenadora de dança contemporânea. Desde 2024 leciona também no projeto DOOR, dirigido por Margarida Belo Costa.",
      "Em 2025 fundou a Pé Esquerdo – Associação Cultural, juntamente com a Academia Balletvita, onde coreografou a peça Corpo. Caminho de Palavras para a Companhia Balletvita. Nesse mesmo ano, co-criou e interpretou a peça hOLD, com São Castro. A criação é produzida pela Play False | Associação Cultural e encontra-se atualmente em circulação pelo país.",
    ],
    modalidades: [{ title: "Dança Contemporânea", slug: "danca-contemporanea" }],
  },
] as const;

export const palcoConfig = {
  title: "EM PALCO",
  text: `Ao longo do ano letivo, os alunos da Balletvita – Academia de Artes têm oportunidade de participar em diferentes momentos de apresentação do trabalho desenvolvido nas aulas.

Estes momentos permitem partilhar o percurso artístico dos alunos e experienciar o palco como parte integrante da aprendizagem.`,
  videoThumb: "/images/video-thumb.jpg",
} as const;

export const infoCardsConfig = {
  blocks: [
    {
      title: "ADULTOS",
      items: ["Apresentações em dezembro", "Apresentações em maio"],
      band: "white" as const,
    },
    {
      title: "CRIANÇAS",
      items: ["Aulas de apresentação em dezembro", "Espetáculo final em julho"],
      band: "gray" as const,
    },
    {
      title: "COMPETIÇÕES",
      items: ["Dança Desportiva", "Dança Contemporânea"],
      band: "white" as const,
    },
  ],
} as const;

export const galleryConfig = {
  images: [
    { src: "/images/carousel-1.jpg", caption: "Espetáculo de Natal\nAdultos" },
    { src: "/images/carousel-2.jpg", caption: "Espetáculo de Maio\nAdultos" }
  ],
  cta: "Ver Fotos e Vídeos",
} as const;

export const testimonialsConfig = {
  headingTeal: "PERCURSOS NA DANÇA\nE PARA ALÉM DELA",
  headingWhite: "O OLHAR DAS FAMÍLIAS",
  cards: [
    {
      name: "RAQUEL LOUREIRO",
      role: "Ballet e K-Pop",
      avatar: "/images/avatar-a.png",
      quote:
        "Encontrei na Balletvita um espaço onde a dança é vivida com seriedade e alegria. Cada aula é uma nova descoberta.",
      mirrored: false,
      variant: "outline" as const,
    },
    {
      name: "FABITO RITO",
      role: "Ex-aluno",
      avatar: "/images/avatar-b.png",
      quote:
        "Foi na Balletvita que aprendi a amar a dança. Levo para a vida toda as aulas e os ensinamentos dos professores.",
      mirrored: true,
      variant: "outline" as const,
    },
    {
      name: "ANA CORISTA",
      role: "Mãe da Violeta e Pilar",
      avatar: "/images/avatar-a.png",
      quote:
        "As minhas filhas cresceram a dançar na Balletvita. Ver o seu progresso e a felicidade em cada espetáculo não tem preço.",
      mirrored: false,
      variant: "yellow" as const,
    },
    {
      name: "PEDRO CORREIA",
      role: "Pai da Julieta",
      avatar: "/images/avatar-b.png",
      quote:
        "Uma escola que acolhe cada aluno com carinho. A Julieta ganhou confiança e fez muitos amigos entre as aulas.",
      mirrored: true,
      variant: "teal" as const,
    },
  ],
} as const;

export const contactConfig = {
  heading: "Fale connosco, visite-nos\ne acompanhe-nos nas\nredes sociais",
  address: "Rua Major Mouzinho de\nAlbuquerque, 12 Loja A\n2620-153 Póvoa de Santo Adrião",
  phone: "210163133 / 932361919",
  emails: [
    { label: "geral@balletvita.pt", href: "mailto:geral@balletvita.pt" },
    { label: "balletvita@gmail.com", href: "mailto:balletvita@gmail.com" },
  ],
  socials: [
    { src: "/images/social-2.png", alt: "Facebook", href: "https://www.facebook.com/balletvita" },
    { src: "/images/social-1.png", alt: "Instagram", href: "https://www.instagram.com/balletvita_academia/" },
  ],
} as const;

export const associationConfig = {
  logo: "/images/assoc-logo.png",
  title: "A Pé esquerdo é...",
  text:
    "Uma associação cultural sem fins lucrativos, fundada pela Balletvita – Academia de Artes e por Ana Corista, sediada no concelho de Odivelas. Assume-se como uma estrutura com atividade contínua e estruturada na área da dança desportiva e da criação coreográfica, oferecendo oportunidades formativas e culturais de excelência a crianças, jovens e adultos.",
  text2:
    "A Associação dedica-se à promoção da dança enquanto prática artística, cultural e desportiva, desenvolvendo formação artística regular, projetos de criação coreográfica, ações de mediação cultural e participação em contextos competitivos, com especial enfoque na dança desportiva.",
  cta: "Saber Mais",
} as const;

export const associacaoPage = {
  intro: {
    title: "Apresentação Geral",
    paragraphs: [
      "A Pé Esquerdo é uma associação cultural sem fins lucrativos, fundada pela Balletvita – Academia de Artes e por Ana Corista, sediada no concelho de Odivelas. Assume-se como uma estrutura com atividade contínua e estruturada na área da dança desportiva e da criação coreográfica, oferecendo oportunidades formativas e culturais de excelência a crianças, jovens e adultos.",
      "A Associação dedica-se à promoção da dança enquanto prática artística, cultural e desportiva, desenvolvendo formação artística regular, projetos de criação coreográfica, ações de mediação cultural e participação em contextos competitivos, com especial enfoque na dança desportiva.",
      "Em 2025, foi criada a Companhia de Dança Balletvita, estrutura de criação contínua que estreou o seu primeiro projeto a 17 de junho desse ano, no Centro Cultural da Malaposta, com o apoio da Balletvita – Academia de Artes. Este momento marcou o início de uma estratégia programática estruturada, consolidada num plano de atividades implementado a partir de março de 2026, reforçando a presença da Associação no território e ampliando a oferta cultural e formativa do concelho.",
      "A Pé Esquerdo orienta-se pelo princípio da democratização do acesso à prática artística de qualidade, valorizando a dança enquanto património cultural vivo e instrumento de desenvolvimento social, educativo e comunitário. A sua atividade assume-se como um serviço cultural de proximidade, promovendo o acesso contínuo à formação artística, à criação coreográfica e à prática desportiva da dança, em articulação com a comunidade local e com o tecido educativo e cultural do território.",
      "Após um período dedicado à estruturação interna, definição de regulamentos, organização administrativa e implementação de ferramentas de gestão, a Associação encontra-se atualmente numa fase estruturada de consolidação e crescimento, plenamente preparada para a expansão sustentada da sua atividade e para o estabelecimento de parcerias institucionais.",
      "Os projetos desenvolvidos dirigem-se a públicos diversificados, incluindo crianças e jovens em formação artística, atletas de dança desportiva, artistas emergentes e público em geral do concelho de Odivelas.",
    ],
  },
  missao: {
    title: "Missão e Objetivos",
    paragraphs: [
      "Contribuir para o estudo, preservação, desenvolvimento e divulgação da dança enquanto expressão artística, cultural e desportiva, promovendo a criação contemporânea, a formação contínua, a participação ativa da comunidade e o desenvolvimento da dança desportiva em contexto competitivo e recreativo.",
      "A Pé Esquerdo – Associação Cultural assume-se como uma estrutura de apoio à prática e à criação artística nas suas múltiplas vertentes, promovendo a articulação entre formação, experimentação coreográfica, prática performativa, dança desportiva e linguagens emergentes.",
      "A Associação reconhece que o desenvolvimento artístico sustentável exige não apenas talento e espaço físico, mas também acompanhamento organizacional, estratégico e administrativo. Criar implica igualmente saber estruturar, planear e gerir. Nesse sentido, propõe-se apoiar processos criativos de forma integrada, oferecendo suporte logístico, produtivo e estrutural, contribuindo para a profissionalização, autonomia e consolidação do setor artístico local.",
      "Atualmente, as atividades formativas e criativas desenvolvem-se nas instalações da Balletvita – Academia de Artes, que acolhe a Associação e assegura condições técnicas adequadas, ainda que com limitações dimensionais para processos de criação de maior escala. A prática da dança desportiva decorre em espaço comunitário do concelho, permitindo responder às exigências físicas dessa vertente e mantendo uma forte ligação ao território.",
      "Enquanto entidade sediada em Odivelas, a Pé Esquerdo ambiciona afirmar o território como espaço de criação contemporânea, cruzando proximidade urbana e contacto com a natureza. Num horizonte de crescimento sustentado, projeta alargar progressivamente o seu plano de intervenção, criando condições para residências artísticas mais estruturadas e, futuramente, com possibilidade de acolhimento temporário de artistas.",
      "A visão a médio e longo prazo passa pela consolidação de um espaço ampliado, próximo de Lisboa, que reúna criação, formação e permanência artística num mesmo lugar — um espaço onde cidade e campo dialoguem, permitindo a imersão criativa, a partilha de processos e a construção de comunidade em torno da arte. A Pé Esquerdo pretende, assim, contribuir para a construção de um ecossistema cultural estruturado, sustentável, colaborativo e enraizado no território.",
    ],
  },
  objetivos: {
    title: "Objetivos",
    items: [
      "Desenvolver atividades regulares de formação artística e pedagógica na área da dança e desporto, com foco na dança desportiva.",
      "Promover a criação coreográfica e a experimentação artística, através de residências e projetos de criação.",
      "Apoiar o desenvolvimento artístico e profissional de jovens intérpretes.",
      "Fomentar a participação da associação em competições da FPDD e outros eventos desportivos e culturais, reforçando a representação institucional do concelho.",
      "Valorizar culturalmente o concelho de Odivelas, através da apresentação pública de espetáculos, competições e participação em eventos institucionais.",
      "Ampliar o acesso à cultura e à prática artística, envolvendo a comunidade local em atividades regulares e inovadoras.",
    ],
  },
  atividade: {
    title: "Atividade Desenvolvida",
    intro:
      "A atividade da Associação estrutura-se em três núcleos complementares, que permitem uma atuação integrada entre formação, criação artística, prática performativa e representação institucional do concelho.",
    nucleos: [
      {
        title: "Centro de Formação e Atividades Artísticas (Núcleo A)",
        paragraphs: [
          "O Centro de Formação e Atividades Artísticas constitui o núcleo dedicado à formação e prática artística, acolhendo aulas regulares, workshops, residências artísticas, formações contínuas e projetos de criação. Dispõe de estúdios equipados e adaptados a profissionais e artistas emergentes, garantindo condições seguras, organizadas e flexíveis para o desenvolvimento de atividades criativas.",
          "Os espaços podem ser utilizados em regime de aluguer ou parceria, respeitando horários, normas de utilização e limites de ocupação. Os associados beneficiam de tarifas especiais, incentivando a participação contínua.",
          "No ano civil de 2026, a Associação conta atribuir duas Bolsas de Criação Coreográfica, consistindo na cedência gratuita de estúdio para desenvolvimento de projetos artísticos, pelo período de 15 dias úteis, podendo este período ser usufruído de forma não sequencial, mediante calendarização prévia.",
          "Para efeitos de candidatura, os projetos deverão apresentar data de estreia previamente agendada ou compromisso formal de apresentação pública, não sendo apoiados projetos que não prevejam apresentação futura. Os projetos selecionados ficam obrigados a mencionar o apoio da Associação em todos os materiais de comunicação e divulgação, incluindo folha de sala, cartazes, programas, redes sociais e demais suportes promocionais, devendo utilizar a designação oficial e identidade gráfica fornecida pela Associação.",
          "A seleção será efetuada pela Direção da Associação, tendo em consideração critérios de mérito artístico, viabilidade de execução, pertinência do projeto, calendarização da estreia e alinhamento com a missão cultural da Associação.",
          "A atribuição futura de Bolsas de Criação Coreográfica com apoio financeiro direto constitui um objetivo estratégico da Associação, ficando dependente da obtenção de financiamento específico e da respetiva deliberação da Direção, nos termos do Regulamento Interno. Estas bolsas integram a estratégia de incentivo à criação artística da Associação, promovendo oportunidades concretas de desenvolvimento autoral no território e contribuindo para a dinamização cultural contínua do concelho.",
          "A Academia promove um ambiente artístico de qualidade, seguro e colaborativo, valorizando a responsabilidade, o respeito e o bom convívio entre todos os intervenientes.",
        ],
      },
      {
        title: "Companhia de Dança Balletvita (Núcleo B)",
        paragraphs: [
          "A Companhia de Dança Balletvita iniciou o seu percurso artístico em 2025 com a realização do seu primeiro projeto coreográfico, Corpo. Caminho de Palavras, de Teresa Alves da Silva, com música original de Valter Fernandes. Este projeto envolveu nove alunos da Balletvita – Academia de Artes e contou com o apoio de diversas entidades, incluindo a Yellow Star Company, o Centro Cultural da Malaposta, a Câmara Municipal de Odivelas e a RTCP – Rede de Teatros e Cineteatros Portugueses.",
          "A Companhia foi criada com o objetivo de proporcionar aos alunos uma experiência próxima da realidade profissional do bailarino, permitindo-lhes compreender as exigências da carreira, desenvolver competências técnicas e artísticas e explorar o seu potencial na prática coreográfica.",
          "Este projeto marcou o arranque de uma estrutura de criação coreográfica contínua no concelho de Odivelas, assumindo-se como uma iniciativa pioneira, uma vez que não existem outras companhias de dança sediadas na região. Apesar da sua origem académica, a Companhia promove a prática artística de excelência e fortalece a ligação entre formação e experiência profissional.",
          "Em 2026, a Companhia estabelece uma parceria com o Projeto DOOR, de Margarida Belo Costa, coreógrafa convidada para o segundo projeto da Companhia. Trata-se de um espetáculo multidisciplinar que abrirá o segundo ciclo de apresentações, com estreia marcada para 2 de maio e segunda apresentação no dia 3 de maio, no Auditório Camões, em Lisboa.",
          "No ano civil de 2026, a Companhia de Dança Balletvita, em parceria com o Projeto DOOR, envolve diretamente 22 alunos em contexto de criação coreográfica, proporcionando uma experiência estruturada de formação em contexto artístico real. A Companhia tem atualmente dois espetáculos confirmados para 2026, encontrando-se em fase de prospeção de novas apresentações junto de escolas e equipamentos culturais do concelho, com o objetivo de ampliar a circulação artística e reforçar a presença da Associação no território.",
          "Para o ano de 2027, a Companhia contará, na sua nova criação, com o coreógrafo João Cardoso, cuja trajetória artística se tem vindo a afirmar no panorama artístico enquanto intérprete, professor e coreógrafo. Natural do concelho de Odivelas, iniciou os seus estudos de dança na Balletvita – Academia de Artes, mantendo uma ligação consistente ao território. Irá estender a sua parceria com o Projeto DOOR, atribuindo entre duas a três bolsas de entrada direta no 3.º projeto, promovendo a formação em contexto de trabalho para alunos do Ensino Artístico Especializado em Dança e projetos extracurriculares para alunos do Ensino Superior em Dança.",
        ],
      },
      {
        title: "Dança Desportiva (Núcleo C)",
        paragraphs: [
          "O Núcleo de Dança Desportiva surge da necessidade de valorizar, estruturar e dar visibilidade ao trabalho desenvolvido nesta área, reconhecendo o seu duplo contributo artístico e desportivo.",
          "A inclusão da Dança Desportiva na Balletvita – Academia de Artes é justificada pelo profissionalismo e dedicação da equipa técnica, em especial da treinadora Bárbara Ferrão, e das atletas, cujo trabalho consistente se reflete nos prémios e distinções alcançados nos últimos anos, demonstrando qualidade, rigor técnico e compromisso com a excelência.",
          "O núcleo integra atualmente 43 atletas federadas, com participação regular em competições organizadas pela FPDD, evidenciando uma estrutura desportiva ativa e consolidada no território. As atletas integradas neste núcleo desenvolvem um percurso de formação contínua e acompanhamento artístico-desportivo, visando a participação regular em competições federadas.",
          "A criação do núcleo permite enquadrar e valorizar os resultados alcançados, reforçando a representação institucional da dança desportiva enquanto prática artística com impacto cultural e promovendo o reconhecimento do esforço individual e coletivo das atletas, treinadores e equipa envolvente.",
          "Destaca-se a participação regular das atletas na Gala do Desporto do Município de Odivelas, para a qual têm sido convidadas a atuar de forma consecutiva nos últimos três anos, evidenciando o reconhecimento institucional do trabalho desenvolvido e reforçando a visibilidade pública da dança desportiva no concelho.",
          "O apoio permitirá mitigar os encargos associados a inscrições, deslocações, estadias e equipamentos, proporcionando melhores condições de participação em competições federadas e valorizando o percurso artístico-desportivo das atletas, assegurando que o seu esforço e dedicação se reflitam nos resultados e no reconhecimento institucional.",
        ],
      },
    ],
  },
  contactos: {
    title: "Contactos",
    lines: [
      "Pé Esquerdo — Associação Cultural",
      "Rua Cândido de Oliveira, n.º 2-A",
      "2620-135 Póvoa de Santo Adrião",
      "pesquerdoassociacaocultural@gmail.com",
      "NIPC: 518 672 727",
    ],
  },
} as const;

export const footerConfig = {
  heading: "Contactos",
  lines: [
    { text: "Pé Esquerdo — Associação Cultural", bold: true },
    { text: "Rua Cândido de Oliveira, n.º 2-A", bold: false },
    { text: "2620-135 Póvoa de Santo Adrião", bold: false },
    { text: "pesquerdoassociacaocultural@gmail.com", bold: false, link: "mailto:pesquerdoassociacaocultural@gmail.com" },
    { text: "NIPC: 518 672 727", bold: false },
  ],
} as const;

export const horariosPage = {
  intro:
    "As aulas decorrem de segunda a sábado, entre as 9h e as 22h. Consulta aqui os horários por modalidade ou dia da semana.",
  note: "Horários sujeitos a alterações",
  dayLabel: "Dia da Semana",
  modalidadeLabel: "Modalidade",
  modalidades: [
    {
      title: "Ballet",
      note: "",
      classes: [
        { name: "Ballet Iniciação (3 - 4 anos)", schedules: [{ days: "Terça e Quinta", time: "18h15 às 18h55", studio: "Balletvita 1" }] },
        {
          name: "Ballet Pré-Primário (5 - 6 anos)",
          schedules: [
            { days: "Terça e Quinta", time: "17h40 às 18h20", studio: "Balletvita 2" },
            { days: "Sábado", time: "11h00 às 11h40", studio: "Balletvita 1" },
          ],
        },
        {
          name: "Ballet Primário (7 - 8 anos)",
          schedules: [
            { days: "Terça e Quinta", time: "18h20 às 19h00", studio: "Balletvita 2" },
            { days: "Sábado", time: "11h40 às 12h20", studio: "Balletvita 1" },
          ],
        },
        { name: "Turma de Exame", schedules: [{ days: "Segunda e Quarta", time: "17h50 às 18h35", studio: "Balletvita 2" }] },
        { name: "Ballet Grau 1A", schedules: [{ days: "Segunda e Quarta", time: "19h00 às 19h50", studio: "Balletvita 1" }] },
        { name: "Ballet Grau 1B", schedules: [{ days: "Segunda e Quarta", time: "19h35 às 20h35", studio: "Balletvita 2" }] },
        { name: "Ballet Grau 2", schedules: [{ days: "Segunda e Quarta", time: "18h35 às 19h30", studio: "Balletvita 2" }] },
        { name: "Ballet Grau 3", schedules: [{ days: "Terça e Quinta", time: "19h00 às 20h00", studio: "Balletvita 2" }] },
        { name: "Ballet Grau 4", schedules: [{ days: "Terça e Quinta", time: "19h30 às 20h30", studio: "Balletvita 2" }] },
        { name: "Ballet Grau 6", schedules: [{ days: "", time: "Horário a definir", studio: "" }] },
        { name: "Ballet Adultos — Grau 1", schedules: [{ days: "Sábado", time: "10h00 às 10h50", studio: "Balletvita 1" }] },
        { name: "Ballet Adultos — Grau 2", schedules: [{ days: "Terça e Quinta", time: "20h30 às 22h00", studio: "Balletvita 2" }] },
        { name: "Barra de Chão e Flexibilidade — Grupo 1", schedules: [{ days: "Sexta", time: "18h30 às 19h15", studio: "Balletvita 2" }] },
        { name: "Barra de Chão e Flexibilidade — Grupo 2", schedules: [{ days: "Sexta", time: "19h15 às 20h00", studio: "Balletvita 2" }] },
      ],
    },
    {
      title: "Dança Contemporânea",
      note: "* Aulas de 1h30",
      classes: [
        { name: "Contemporâneo Juvenil 1", schedules: [{ days: "Terça e Quinta", time: "17h40 às 18h30", studio: "Balletvita 1" }] },
        { name: "Contemporâneo Juvenil 2", schedules: [{ days: "Terça e Quinta", time: "18h30 às 19h30", studio: "Balletvita 1" }] },
        { name: "Contemporâneo Intermédio", schedules: [{ days: "Terça e Quinta", time: "19h30 às 20h30", studio: "Balletvita 1" }] },
        { name: "Contemporâneo Avançado 1*", schedules: [{ days: "Terça e Quinta", time: "20h30 às 22h00", studio: "Balletvita 1" }] },
        {
          name: "Contemporâneo Avançado 2*",
          schedules: [
            { days: "Segunda", time: "20h00 às 21h30", studio: "Balletvita 1" },
            { days: "Sexta", time: "20h15 às 21h45", studio: "Balletvita 2" },
          ],
        },
      ],
    },
    {
      title: "Curso Vocacional",
      note: "",
      classes: [
        { name: "Vocacional 1 — Ballet", schedules: [{ days: "Segunda, Quarta e Sexta", time: "17h30 às 19h00", studio: "Balletvita 2" }] },
        {
          name: "Vocacional 1 — Contemporâneo",
          schedules: [
            { days: "Terça e Quinta", time: "17h00 às 18h15", studio: "Balletvita 1" },
            { days: "Sexta", time: "19h00 às 20h15", studio: "Balletvita 2" },
          ],
        },
        { name: "Vocacional 2 — Ballet", schedules: [{ days: "Terça e Quinta", time: "18h00 às 19h30", studio: "Balletvita 2" }] },
        { name: "Vocacional 2 — Contemporâneo", schedules: [{ days: "Segunda e Quarta", time: "19h00 às 20h30", studio: "Balletvita 2" }] },
        { name: "Vocacional 3 — Ballet", schedules: [{ days: "Segunda e Quarta", time: "20h30 às 22h00", studio: "Balletvita 2" }] },
      ],
    },
    {
      title: "Dança Criativa",
      note: "",
      classes: [
        { name: "Dança Criativa (até aos 5 anos)", schedules: [{ days: "Sexta", time: "17h40 às 18h20", studio: "Balletvita 2" }] },
      ],
    },
    {
      title: "Danças de Salão",
      note: "",
      classes: [
        { name: "Danças de Salão Juvenil", schedules: [{ days: "Segunda e Quarta", time: "17h40 às 18h30", studio: "Balletvita 1" }] },
        { name: "Danças de Salão Intermédio", schedules: [{ days: "Segunda e Quarta", time: "18h30 às 19h30", studio: "Centro Paroquial" }] },
        { name: "Danças de Salão Avançado", schedules: [{ days: "Segunda e Quarta", time: "19h30 às 20h30", studio: "Centro Paroquial" }] },
        {
          name: "Dança Social",
          schedules: [
            { days: "Segunda", time: "20h30 às 21h30", studio: "Centro Paroquial" },
            { days: "Quarta", time: "20h30 às 21h30", studio: "Balletvita 1" },
          ],
        },
        { name: "Dança Desportiva — Nível 1", schedules: [{ days: "Terça e Quinta", time: "18h00 às 19h50", studio: "Centro Paroquial" }] },
        { name: "Dança Desportiva — Nível 2", schedules: [{ days: "Terça e Quinta", time: "20h00 às 22h00", studio: "Centro Paroquial" }] },
      ],
    },
    {
      title: "Hip-Hop e K-Pop",
      note: "",
      classes: [
        {
          name: "Hip Hop Kids",
          schedules: [
            { days: "Sexta", time: "18h00 às 18h50", studio: "Balletvita 1" },
            { days: "Sábado", time: "10h00 às 10h50", studio: "Balletvita 1" },
          ],
        },
        { name: "Hip Hop 1", schedules: [{ days: "Quarta e Sexta", time: "19h00 às 20h00", studio: "Balletvita 1" }] },
        { name: "Hip Hop 2", schedules: [{ days: "Quarta e Sexta", time: "20h00 às 21h00", studio: "Balletvita 1" }] },
        {
          name: "Hip Hop 8",
          schedules: [
            { days: "Terça", time: "20h00 às 21h00", studio: "Balletvita 1" },
            { days: "Sexta", time: "18h00 às 19h00", studio: "Balletvita 1" },
          ],
        },
        { name: "K Pop 1", schedules: [{ days: "Segunda e Sexta", time: "19h00 às 19h50", studio: "Balletvita 1" }] },
        { name: "K Pop 2", schedules: [{ days: "Segunda e Sexta", time: "20h00 às 21h00", studio: "Balletvita 1" }] },
      ],
    },
    {
      title: "Manutenção Sénior",
      note: "",
      classes: [
        { name: "Manutenção Sénior", schedules: [{ days: "Segunda e Quarta", time: "9h15 às 10h00", studio: "Balletvita 1" }] },
      ],
    },
    {
      title: "Grupo de Teatro",
      note: "",
      classes: [
        { name: "Grupo Teatro 1", schedules: [{ days: "Sexta", time: "18h30 às 19h30", studio: "Balletvita 1" }] },
        { name: "Grupo Teatro 2", schedules: [{ days: "Sexta", time: "19h30 às 20h30", studio: "Balletvita 1" }] },
      ],
    },
    {
      title: "Yoga e Pilates",
      note: "",
      classes: [
        { name: "Yoga", schedules: [{ days: "Terça e Quinta", time: "20h15 às 21h15", studio: "Balletvita 2" }] },
        { name: "Pilates Manhã", schedules: [{ days: "Terça e Quinta", time: "9h15 às 10h00", studio: "Balletvita 1" }] },
        {
          name: "Pilates Tarde",
          schedules: [
            { days: "Terça e Quinta", time: "19h10 às 20h00", studio: "Balletvita 1" },
            { days: "Quinta", time: "20h00 às 20h50", studio: "Balletvita 1" },
          ],
        },
      ],
    },
  ],
} as const;

export const galeriaPage = {
  title: "EM PALCO",
  heading: "Últimos espetáculos",
  items: [
    { title: "Ser e nada mais...", image: "/images/carousel-1.jpg" },
    { title: "A Vendedora de Sonhos", image: "/images/carousel-2.jpg" },
    { title: "Quem conta um Conto", image: "/images/carousel-1.jpg" },
    { title: "Querido Diário", image: "/images/carousel-2.jpg" },
  ],
  fotografiasTitle: "Fotografias",
  fotografias: [
    "/images/carousel-1.jpg",
    "/images/carousel-2.jpg",
    "/images/banner1.jpg",
    "/images/card2.jpg",
    "/images/about-image.jpg",
    "/images/video-thumb.jpg",
    "/images/carousel-2.jpg",
    "/images/carousel-1.jpg",
    "/images/card2.jpg",
    "/images/banner1.jpg",
    "/images/video-thumb.jpg",
    "/images/about-image.jpg",
  ],
} as const;
