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
    "Nasceu da paixão pela dança e pelo ensino artístico. Com uma equipa de professores qualificados e experientes, oferecemos aulas adaptadas a diferentes idades e níveis, promovendo o desenvolvimento artístico, físico e pessoal de cada aluno.",
  image: "/images/about-image.jpg",
  anniversary:
    "Em setembro de 2026, a Balletvita celebra 19 anos de atividade, um percurso construído com alunos, famílias, professores e todos aqueles que fizeram parte da história da escola.",
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
      { title: "Estúdio 1", address: "Rua Major Mouzinho de Albuquerque 12 loja A", image: "/images/about-image.jpg" },
      { title: "Estúdio 2", address: "Rua Cândido de Oliveira 2 A", image: "/images/video-thumb.jpg" },
    ],
  },
} as const;

export const modalidadesConfig = {
  title: "MODALIDADES PARA TODOS OS GOSTOS E IDADES",
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
  },
  {
    slug: "danca-contemporanea",
    title: "Dança Contemporânea",
    image: "/images/card2.jpg",
    paragraphs: [
      "A Dança Contemporânea explora a liberdade de movimento, a criatividade e a expressão pessoal, cruzando diferentes técnicas num ambiente de experimentação e descoberta.",
    ],
    idadeMinima: "Idade mínima: 6 anos",
  },
  {
    slug: "danca-social-e-de-salao",
    title: "Dança Social e de Salão",
    image: "/images/card2.jpg",
    paragraphs: [
      "A Dança Social e de Salão convida a dançar em par, com alegria e cumplicidade: valsas, tangos, kizombas e muito mais, para todos os níveis e ocasiões.",
    ],
    idadeMinima: "Idade mínima: 10 anos",
  },
  {
    slug: "pilates",
    title: "Pilates",
    image: "/images/card2.jpg",
    paragraphs: [
      "O Pilates fortalece o corpo de forma equilibrada, melhorando a flexibilidade, o alinhamento e a consciência corporal, ideal como complemento de qualquer prática.",
    ],
    idadeMinima: "Para todas as idades",
  },
  {
    slug: "yoga",
    title: "Yoga",
    image: "/images/card2.jpg",
    paragraphs: [
      "O Yoga une corpo e mente através de posturas, respiração e relaxamento, promovendo o bem-estar físico e emocional a qualquer ritmo de vida.",
    ],
    idadeMinima: "Para todas as idades",
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
    homeLabel: "BALLET/ DANÇA CRIATIVA",
    image: "/images/teacher-f.jpg",
    bio: [
      "Ana Corista é diretora artística e pedagógica da Balletvita - Academia de Artes, instituição que fundou em 2007 e onde coordena o Departamento de Técnica de Dança Clássica, acumulando funções de docência e orientação pedagógica.",
      "É licenciada em Dança, ramo de Educação, pela Faculdade de Motricidade Humana, e detentora do Certificate in Ballet Teaching Studies pela Royal Academy of Dance.",
      "Ao longo do seu percurso tem desenvolvido um trabalho continuado na formação técnica e artística em Dança Clássica, Dança Criativa, Barra de Chão e Pilates, colaborando com diversas instituições no âmbito da formação artística e pedagógica.",
      "É membro fundador da Pé Esquerdo - Associação Cultural, onde assume um papel ativo na estruturação de projetos artísticos e na promoção da dança enquanto prática artística, educativa e cultural.",
      "A sua atividade centra-se na formação artística, na mediação cultural e no desenvolvimento de públicos, contribuindo para a qualificação de jovens praticantes e intérpretes e para o fortalecimento do tecido cultural local no concelho de Odivelas.",
    ],
    modalidades: [
      { title: "Ballet", slug: "ballet-classico" },
      { title: "Dança", slug: "danca-contemporanea" },
      { title: "Social", slug: "danca-social-e-de-salao" },
    ],
  },
  {
    slug: "noah-almeida",
    name: "Noah Almeida",
    role: "Professor de Dança",
    homeLabel: "HIP-HOP",
    image: "/images/teacher-m.jpg",
    bio: [
      "Noah Almeida é professor de dança na Balletvita - Academia de Artes, dedicando-se ao ensino de diferentes linguagens da dança, com particular destaque para o hip-hop.",
      "Partilha a sua experiência com entusiasmo, incentivando cada aluno a evoluir e a gostar de dançar, num ambiente de respeito e criatividade.",
    ],
    modalidades: [
      { title: "Dança", slug: "danca-contemporanea" },
      { title: "Ballet", slug: "ballet-classico" },
    ],
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
  headingTeal: "Ser aluno\nda Balletvita é...",
  headingWhite: "Inscrevi o meu filho/a na Balletvita...",
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
    { src: "/images/social-1.png", alt: "Facebook", href: "https://facebook.com" },
    { src: "/images/social-2.png", alt: "Instagram", href: "https://instagram.com" },
  ],
} as const;

export const associationConfig = {
  logo: "/images/assoc-logo.png",
  title: "A Pé esquerdo é...",
  text:
    "Uma associação cultural sem fins lucrativos, fundada pela Balletvita – Academia de Artes e por Ana Corista¹, sediada no concelho de Odivelas. Assume-se como uma estrutura com atividade contínua e estruturada na área da dança desportiva e da criação coreográfica, oferecendo oportunidades formativas e culturais de excelência a crianças, jovens e adultos.",
  text2:
    "A Associação dedica-se à promoção da dança enquanto prática artística, cultural e desportiva, desenvolvendo formação artística regular, projetos de criação coreográfica, ações de mediação cultural e participação em contextos competitivos, com especial enfoque na dança desportiva.",
  cta: "Saber Mais",
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
  dayLabel: "Dia da Semana",
  days: [
    {
      label: "2ª Feira",
      schedule: [
        { time: "09h15", classes: "Manutenção Sénior" },
        { time: "17h30", classes: "Ballet vocacional 1, Contemporâneo Vocacional 2" },
        { time: "17h40", classes: "Dança salão juvenil" },
        { time: "18h30", classes: "Ballet pré-primário, Ballet primário, Danças de salão int." },
        { time: "19h00", classes: "BDC, Ballet Vocacional 2" },
        { time: "19h15", classes: "Ballet Grau 1A" },
        { time: "19h20", classes: "Ballet Grau 2" },
        { time: "19h30", classes: "Dança Salão Avançado" },
        { time: "20h00", classes: "Contemporâneo Avançado 2" },
        { time: "20h30", classes: "Dança social, Ballet Vocacional 3" },
      ],
    },
    {
      label: "3ª Feira",
      schedule: [
        { time: "09h15", classes: "Manutenção Sénior" },
        { time: "17h30", classes: "Ballet vocacional 1, Contemporâneo Vocacional 2" },
        { time: "18h30", classes: "Ballet pré-primário, Ballet primário, Danças de salão int." },
        { time: "19h15", classes: "Ballet Grau 1A" },
        { time: "19h20", classes: "Ballet Grau 2" },
        { time: "20h00", classes: "Contemporâneo Avançado 2" },
      ],
    },
    {
      label: "4ª Feira",
      schedule: [
        { time: "09h15", classes: "Manutenção Sénior" },
        { time: "17h30", classes: "Ballet vocacional 1, Contemporâneo Vocacional 2" },
        { time: "17h40", classes: "Dança salão juvenil" },
        { time: "18h30", classes: "Ballet pré-primário, Ballet primário, Danças de salão int." },
        { time: "19h00", classes: "BDC, Ballet Vocacional 2" },
        { time: "19h15", classes: "Ballet Grau 1A" },
        { time: "19h20", classes: "Ballet Grau 2" },
        { time: "19h30", classes: "Dança Salão Avançado" },
        { time: "20h00", classes: "Contemporâneo Avançado 2" },
        { time: "20h30", classes: "Dança social, Ballet Vocacional 3" },
      ],
    },
    {
      label: "5ª Feira",
      schedule: [
        { time: "09h15", classes: "Manutenção Sénior" },
        { time: "17h30", classes: "Ballet vocacional 1, Contemporâneo Vocacional 2" },
        { time: "18h30", classes: "Ballet pré-primário, Ballet primário, Danças de salão int." },
        { time: "19h15", classes: "Ballet Grau 1A" },
        { time: "19h20", classes: "Ballet Grau 2" },
        { time: "20h00", classes: "Contemporâneo Avançado 2" },
      ],
    },
    {
      label: "6ª Feira",
      schedule: [
        { time: "09h15", classes: "Manutenção Sénior" },
        { time: "17h30", classes: "Ballet vocacional 1, Contemporâneo Vocacional 2" },
        { time: "17h40", classes: "Dança salão juvenil" },
        { time: "18h30", classes: "Ballet pré-primário, Ballet primário, Danças de salão int." },
        { time: "19h00", classes: "BDC, Ballet Vocacional 2" },
        { time: "19h15", classes: "Ballet Grau 1A" },
        { time: "19h20", classes: "Ballet Grau 2" },
        { time: "19h30", classes: "Dança Salão Avançado" },
        { time: "20h00", classes: "Contemporâneo Avançado 2" },
        { time: "20h30", classes: "Dança social, Ballet Vocacional 3" },
      ],
    },
    {
      label: "Sábado",
      schedule: [
        { time: "10h00", classes: "Ballet pré-primário" },
        { time: "11h00", classes: "Ballet primário" },
        { time: "12h00", classes: "Dança criativa" },
      ],
    },
  ],
  modalidadeLabel: "Modalidade",
  modalidades: [
    {
      title: "Ballet Clássico (Vocacional)",
      levels: [
        { name: "Vocacional 1", horario: "2ª e 4ª (17h30), 6ª (19h)" },
        { name: "Vocacional 2", horario: "2ª e 4ª (19h00)" },
        { name: "Vocacional 3", horario: "2ª e 4ª (20h30)" },
      ],
    },
    {
      title: "Dança Contemporânea",
      levels: [
        { name: "Contemporâneo Avançado 2", horario: "2ª e 4ª (20h00)" },
        { name: "Contemporâneo Vocacional 2", horario: "2ª e 4ª (17h30)" },
      ],
    },
    {
      title: "Dança Social e de Salão",
      levels: [
        { name: "Danças de salão int.", horario: "2ª e 4ª (18h30)" },
        { name: "Dança Salão Avançado", horario: "2ª e 4ª (19h30)" },
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
    { title: "Fotografias", image: "/images/carousel-1.jpg" },
  ],
} as const;
