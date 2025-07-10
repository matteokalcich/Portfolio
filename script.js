document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// La tua "mappa" di traduzioni (qui solo IT, ma puoi caricare altre lingue da JSON esterni)
const translations = {
  it: {
    "menuAbout": "Chi sono",
    "menuProjects": "Progetti",
    "menuContact": "Contatti",
    "heroTitle": "Ciao, sono <span class='highlight'>Matteo Kalcich</span>",
    "heroText": "Sviluppatore freelance che trasforma idee in applicazioni e siti, concretizziamo insieme la tua idea, non lasciarla in testa.",
    "ctaButton": "Contattami ora 🚀",
    "aboutTitle": "Chi sono",
    "aboutText": "Sono uno sviluppatore freelance appassionato di tecnologia, sempre alla ricerca di soluzioni creative e nuove sfide. Amo trasformare idee in prodotti digitali eleganti e funzionali, curando ogni dettaglio e offrendo un’esperienza utente memorabile.",
    "projectsTitle": "I miei progetti",
    "project1": "Un social dedicato al mondo cinofilo, sviluppato in Flutter con backend Wordpress e GraphQL, che permette agli amanti dei cani di connettersi e trovare strutture pet-friendly vicino a loro.",
    "project2": "Una chat peer-to-peer in stile WhatsApp Web con messaggistica istantanea via WebSocket e chiamate audio/video integrate tramite WebRTC, interfaccia moderna e compatibilità cross-device.",
    "skillsTitle": "Linguaggi che conosco",
    "skill1": "Strutturo e stilo interfacce responsive e moderne, creando siti web veloci e accessibili.",
    "skill2": "Creo interattività dinamica, animazioni fluide e logiche front-end robuste con React e Vanilla JS.",
    "skill3": "Sviluppo web app performanti con componenti riutilizzabili e gestione stati scalabile.",
    "skill4": "Creo app mobile cross-platform con interfacce eleganti e logiche complesse con GraphQL e Firebase.",
    "skill5": "Costruisco backend leggeri e API RESTful, con gestione database MySQL e dashboard personalizzate.",
    "skill6": "Progetto e gestisco database MySQL strutturati, ottimizzando relazioni e query per app e siti.",
    "skill7": "Sviluppo backend, socket server e logiche di networking con gestione WebSocket.",
    "contactTitle": "Contattami",
    "contactText": "Hai un’idea che vuoi trasformare in realtà? Scrivimi sul form seguente o utilizza i miei contatti diretti:",
    "formName": "Il tuo nome",
    "formEmail": "La tua email",
    "formMessage": "Il tuo messaggio",
    "formButton": "Invia ✉️"
  },
  // Aggiungi qui altre lingue come 'en'...
  en: {
    "menuAbout": "About",
    "menuProjects": "Projects",
    "menuContact": "Contact",
    "heroTitle": "Hi, I'm <span class='highlight'>Matteo Kalcich</span>",
    "heroText": "Freelance developer turning ideas into websites and apps, let's make your idea real.",
    "ctaButton": "Contact me now 🚀",
    "aboutTitle": "About me",
    "aboutText": "I am a freelance developer passionate about technology, always seeking creative solutions and new challenges. I love turning ideas into elegant and functional digital products, paying attention to every detail and providing memorable user experiences.",
    "projectsTitle": "My projects",
    "project1": "A social platform dedicated to dog lovers, developed in Flutter with Wordpress backend and GraphQL, allowing dog owners to connect and find pet-friendly places nearby.",
    "project2": "A peer-to-peer chat styled like WhatsApp Web with instant messaging via WebSocket and integrated audio/video calls using WebRTC, featuring a modern interface and cross-device compatibility.",
    "skillsTitle": "Languages I know",
    "skill1": "I build and style responsive and modern interfaces, creating fast and accessible websites.",
    "skill2": "I create dynamic interactivity, smooth animations, and robust front-end logic with React and Vanilla JS.",
    "skill3": "I develop high-performance web apps with reusable components and scalable state management.",
    "skill4": "I create cross-platform mobile apps with elegant interfaces and complex logic using GraphQL and Firebase.",
    "skill5": "I build lightweight backends and RESTful APIs with MySQL database management and custom dashboards.",
    "skill6": "I design and manage structured MySQL databases, optimizing relationships and queries for apps and sites.",
    "skill7": "I develop backends, socket servers, and networking logic with WebSocket management.",
    "contactTitle": "Contact me",
    "contactText": "Have an idea you want to turn into reality? Write me through the form below or use my direct contacts:",
    "formName": "Your name",
    "formEmail": "Your email",
    "formMessage": "Your message",
    "formButton": "Send ✉️"
  }
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.it;

  // Traduci testo con data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      // Usa innerHTML se ci sono tag (es. span)
      el.innerHTML = dict[key];
    }
  });

  // Traduci placeholder con data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

// Al caricamento pagina, imposta lingua di default italiana
document.addEventListener("DOMContentLoaded", () => {
  const langSwitcher = document.getElementById("languageSwitcher");

  // Applica traduzione iniziale
  applyTranslations(langSwitcher.value);

  // Cambia lingua al cambio selezione
  langSwitcher.addEventListener("change", e => {
    applyTranslations(e.target.value);
  });
});
