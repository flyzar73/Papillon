
export const defaultTabs = [
  {
    tab: "Home",
    label: "Accueil",
    description: "L'essentiel de Papillon",
    icon: require("@/../assets/lottie/tab_home.json"),
    enabled: true,
    installed: true,
  },
  {
    tab: "Lessons",
    label: "Cours",
    description: "Consulte ton emploi du temps",
    icon: require("@/../assets/lottie/tab_calendar.json"),
    enabled: true,
  },
  {
    tab: "Homeworks",
    label: "Devoirs",
    description: "Organise ton travail à faire",
    icon: require("@/../assets/lottie/tab_book_2.json"),
    enabled: true,
  },
  {
    tab: "Grades",
    label: "Notes",
    description: "Tes dernières notes et moyennes",
    icon: require("@/../assets/lottie/tab_chart.json"),
    enabled: true,
  },
  {
    tab: "News",
    label: "Actualités",
    description: "Les dernières actualités de ton école",
    icon: require("@/../assets/lottie/tab_news.json"),
    enabled: true,
  },
  {
    tab: "Attendance",
    label: "Vie scolaire",
    description: "Tes absences, retards et sanctions",
    icon: require("@/../assets/lottie/tab_check.json"),
    enabled: true,
  },
  {
    tab: "Discussions",
    label: "Discussions",
    description: "Ta messagerie scolaire",
    icon: require("@/../assets/lottie/tab_chat.json"),
    enabled: true,
  },
  {
    tab: "Menu",
    label: "Cantine",
    description: "Consulte les repas à venir",
    icon: require("@/../assets/lottie/tab_pizza.json"),
    enabled: true,
  },
  {
    tab: "Evaluation",
    label: "Compétences",
    description: "Vos compétences et évaluations",
    icon: require("@/../assets/lottie/tab_evaluations.json"),
    enabled: true,
  }
] as const;