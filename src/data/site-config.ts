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

export const modalidadesConfig = {
  title: "MODALIDADES PARA TODOS OS GOSTOS E IDADES",
  items: [
    { title: "Ballet Clássico", image: "/images/banner1.jpg" },
    { title: "Dança Contemporânea", image: "/images/card2.jpg" },
    { title: "Dança Social e de Salão", image: "/images/card2.jpg" },
  ],
  dropdownLabel: "Todas as Modalidades",
  schedule: "Aulas todas as semanas, de\nsegunda a sábado",
  scheduleCta: "Ver Horários",
} as const;

export const teachersConfig = {
  title: "CONHEÇA OS NOSSOS PROFESSORES",
  dropdownLabel: "Todos os Professores",
  leftImage: "/images/teacher-f.jpg",
  rightImage: "/images/teacher-m.jpg",
  ctaBandTitle:
    "Seja para seguir o sonho da dança ou por pura diversão, a Balletvita é o sitio ideal para toda a família.\nJunte-se a nós!",
  cta: "Marcar Aula Experimental",
} as const;

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
  heading: "Fale connosco, visite-nos e acompanhe-nos nas redes sociais",
  address: "Rua Major Mouzinho de Albuquerque, 12 Loja A\n2620-153 Póvoa de Santo Adrião",
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
