 // ===== Full Website Translation =====
  // =====ترجمة الموقع بالكامل =====

const langBtn = document.getElementById("lang-toggle");

//==== The translation in English ====
//==== الترجمة إلى الإنجليزية ====

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navEducation: "Education",
    navProjects: "Projects",
    navMyServices: "My Services",
    navNumbers: "Numbers",
    navMyJourney: "My Journey",
    navCurrentlyLearning: "Learning",
    navContact: "Contact",

    heroTitle: "Hamdi  Al-Luqmani",
    heroSubtitle: "Computer Science | Full-Stack Web Developer",
    heroDesc:"Crafting digital experiences with passion.",
    hero1Desc: "I transform complex ideas into simple, elegant digital solutions. Dedicated to building scalable web applications with a user-centric approach.",
    hero2Desc: "A web developer specialized in full-stack application development, with a focus on clean code and unforgettable user experiences.",
    heroBtn1: "View CV", 
    heroBtn2: "Contact",

    aboutTitle: "About Me",
    about1Text: " I am a full-stack web developer graduated with a diploma from Taibah University (2026).   I specialize in crafting high-performance, user-centric web applications.",
    about2Text: " An ambitious young man with experience in developing web applications, where I have designed the user interface and programmed the application using HTML, CSS, and JavaScript. I have a strong ability to work within teams, which helps me provide innovative solutions to complex technical problems. In addition,  I have applied project management principles to organize tasks and achieve timelines efficiently. I seek to join a leading company that provides me with the opportunity for professional development and growth.",
    about3Text: " My journey is driven by a passion for solving complex problems through clean code and modern design.  I don't just build websites; I create digital experiences that are fast, secure, and scalable.",
    about4Text: "Full-Stack Ready",
    about5Text: "Problem Solver",
    
    skillsTitle: "Technical Skills",
    softskillslabel:"Personal skills",
    skillWebProg: "Web Programming",
    skillUIDesign: "UI Design",
    skillProjectMgmt: "Project Management",
    skillTroubleshoot: "Troubleshooting",
    skillDBMgmt: "Database Management",
    skillTeamwork: "Teamwork",
    skillCompApps: "Computer Applications",
    skillWebDev: "Web Development",
    skillCustOrient: "Customer Orientation",
    skillCollab: "Collaborative Skills",
    skillProblemSolving: "Problem Solving",
    skillTimeManagement: "Time Management",

    educationTitle: "Education",
    education1text: "Taibah University",
    education2text: "Computer Science and Information Diploma in (full-stack web developer)",
    education3text: "Graduation Year: 2026",
    education4text: "Expert student",
    education5text: "Focusing on Software Engineering, Data Structures, and Modern Web Technologies.",

    projectsTitle: " Featured Projects",
    projects1text: "personal website",
    projects2text: "A professional personal website built with HTML, CSS, and JS to showcase my skills and journey.",
    projects3text: "View Project",
    projects4text: "To-Do Web App",
    projects5text: "A functional task management app using JavaScript and LocalStorage for data persistence.",
    projects6text: "View Project",
    projects7text: "Blog CMS",
    projects8text: "A Content Management System for blogs developed with PHP and SQL for dynamic content.",
    projects9text: "View Project",

    MyServicestitle:"My Services",
    MyServices1text:"Web Development",
    MyServices2text:"Building responsive, fast, and modern websites using the latest technologies.",
    MyServices3text:"UI/UX Design",
    MyServices4text:"Translating designs into clean, semantic, and maintainable code with great user experience.",
    MyServices5text:"Backend Solutions",
    MyServices6text:"Developing robust server-side logic and database management systems for scalable apps.",
    serviceWPTitle: "WordPress Solutions",
    serviceWPDesc: "Customizing themes and plugins to create powerful, easy-to-manage websites.",
    serviceSEOTitle: "SEO Optimization",
    serviceSEODesc: "Improving your site visibility on search engines to drive organic traffic.",
    serviceConsultTitle: "Tech Consulting",
    serviceConsultDesc: "Providing expert advice on the best technologies to scale your business effectively.",
    serviceShopTitle: "E-commerce Stores",
    serviceShopDesc: "Building secure and scalable online stores to boost your sales effectively.",
    serviceSupportTitle: "Technical Support",
    serviceSupportDesc: "Providing ongoing maintenance and support to ensure your site runs smoothly.",
    serviceSecurityTitle: "Cybersecurity",
    serviceSecurityDesc: "Implementing advanced security protocols to protect your website from cyber threats and data breaches.",
    contactCtaText: "For services, please contact me",

    Numberstitle:"My Achievements in numbers",
    Numbers1text:" Completed Projects ",
    Numbers2text:"Years of Learning ",
    Numbers3text:"Technology skills ",
    Numbers4text:"Happy Clients",

    MyJourneytitle:"My Journey",
    MyJourney1text:"The Spark",
    MyJourney2text:"Started my journey into the world of programming with Python and JavaScript.",
    MyJourney3text:"Web Specialization",
    MyJourney4text:"Focused on Frontend and Backend technologies to build full-stack apps.",
    MyJourney5text:"Graduation",
    MyJourney6text:"Graduating from Taibah University as a Computer Science | As a full-stack web developer.",

   CurrentlyLearningtitle:"Currently Learning",
   CurrentlyLearning1text:"Mastering Hooks, Context API & Redux",
   CurrentlyLearning2text:"Building Restful APIs & MongoDB Integration",

    contactTitle: "Get In Touch",
    contact1text:"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    contact2text: "If you have any questions or want to work together, feel free to reach out!",
    contactmessage:"Send a Message",

    footerdesc: "Crafting digital experiences with passion.",
    footerCopy: " Hamdi Al-Luqmani. All rights reserved. © 2026 ",
    footerstatus: "Available for hire",

    footertitle:"Quick Links",
    footerhome:"Home",
    footerabout:"About",
    footerskills:"Skills",
    footereducation:"Education",
    footerprojects:"Projects",

    Connecttitle:"Connect",


  },

//==== The translation In Arabic ====
//==== الترجمة إلى العربي  ====

  ar: {
    navHome: "الرئيسية",
    navAbout: "عني",
    navSkills: "المهارات",
    navEducation: "التعليم",
    navProjects: "المشاريع",
    navMyServices: "خدماتي",
    navNumbers: "الأرقام",
    navMyJourney: "رحلتي",
    navCurrentlyLearning: "أتعلم حالياً",
    navContact: "التواصل",

    heroTitle: "حمدي اللقماني",
    heroSubtitle: "علوم حاسب | مطور ويب متكامل",
    heroDesc:"صناعة تجارب رقمية بشغف وإتقان.",
    hero1Desc: "أحول الأفكار المعقدة إلى حلول رقمية بسيطة وأنيقة. متخصص في بناء تطبيقات ويب قابلة للتوسع مع التركيز التام على تجربة المستخدم.",
    hero2Desc: "مطور ويب  متخصص في تطوير التطبيقات الشاملة (Full-Stack)، مع التركيز على الكود النظيف وتجارب المستخدم التي لا تُنسى.",
    heroBtn1: "عرض السيرة", 
    heroBtn2: "تواصل معي",

    aboutTitle: "نبذة عني",
    about1Text: "أنا مطور ويب متكامل  حاصل على درجة الدبلوم من جامعة طيبة (2026). أتخصص في تطوير تطبيقات ويب عالية الأداء ومركزة على المستخدم.",
    about2Text: "شاب طموح يمتلك خبرة في تطوير تطبيقات الويب، حيث قمت بتصميم واجهة المستخدم وبرمجة التطبيق باستخدام HTML CSS .Javascript أتمتع بقدرة قوية على العمل ضمن فرق ، مما يساعدني في تقديم حلول مبتكرة لمشكلات تقنية معقدة. بالإضافة إلى ذلك،قمت بتطبيق مبادئ إدارة المشاريع لتنظيم المهام وتحقيق الأهداف الزمنية بكفاءة.أسعى للانضمام إلى شركة رائدة تتيح لي فرصة التطور والنمو المهني.",
    about3Text: "رحلتي مدفوعة بشغف لحل المشكلات المعقدة من خلال كود نظيف وتصميم حديث. لا أقوم ببناء المواقع الإلكترونية فقط؛ بل أبتكر تجارب رقمية تكون سريعة وآمنة وقابلة للتوسع.",
    about4Text: "جاهز للعمل كمطور متكامل",
    about5Text: "محلّل المشاكل",

    skillsTitle: "المهارات التقنية",
    softskillslabel:" المهارات الشخصية ",
    skillWebProg: "برمجة الويب",
    skillUIDesign: "تصميم واجهة المستخدم",
    skillProjectMgmt: "إدارة المشاريع",
    skillTroubleshoot: "استكشاف الأخطاء",
    skillDBMgmt: "إدارة قواعد البيانات",
    skillTeamwork: "العمل الجماعي",
    skillCompApps: "الإلمام بتطبيقات الحاسوب",
    skillWebDev: "تطوير الويب",
    skillCustOrient: "توجيه العملاء",
    skillCollab: "مهارات العمل الجماعي",
    skillProblemSolving: "حل المشكلات",
    skillTimeManagement: "إدارة الوقت",  

    educationTitle: "التعليم",
    education1text: "جامعة طيبة",
    education2text: "   علوم الحاسب و المعلومات الدبلوم في تخصص (مطور الويب المتكامل)",
    education3text: "سنة التخرج: 2026 ",
    education4text: "طالب خبير",
    education5text: "التركيز على هندسة البرمجيات، هياكل البيانات، وتقنيات الويب الحديثة.",

    projectsTitle: "المشاريع المستقبلية",
    projects1text: "موقع شخصي",
    projects2text: "موقع شخصي احترافي تم بناؤه باستخدام HTML وCSS وJS لعرض مهاراتي ورحلتي.",
    projects3text: "عرض المشروع ",
    projects4text: "تطبيق ويب للمهام",
    projects5text: "تطبيق إدارة مهام وظيفي باستخدام JavaScript وLocalStorage لحفظ البيانات.",
    projects6text: "عرض المشروع",
    projects7text: "نظام إدارة محتوى المدونات",
    projects8text: "نظام لإدارة المحتوى للمدونات تم تطويره باستخدام PHP و SQL للمحتوى الديناميكي.",
    projects9text: "عرض المشروع",

    MyServicestitle:"خدماتي",
    MyServices1text:"تطوير الويب",
    MyServices2text:"بناء مواقع ويب سريعة، متجاوبة، وحديثة باستخدام أحدث التقنيات.",
    MyServices3text:"تصميم واجهة وتجربة المستخدم",
    MyServices4text:"تحويل التصاميم إلى كود نظيف ودلالي وقابل للصيانة مع تقديم تجربة مستخدم رائعة.",
    MyServices5text:"حلول الخوادم الخلفية",
    MyServices6text:"تطوير منطق خادمي قوي وأنظمة إدارة قواعد البيانات لتطبيقات قابلة للتوسع.",
    serviceWPTitle: "حلول وردبريس",
    serviceWPDesc: "تخصيص القوالب والإضافات لإنشاء مواقع قوية وسهلة الإدارة.",
    serviceSEOTitle: "تحسين محركات البحث",
    serviceSEODesc: "تحسين ظهور موقعك في نتائج البحث لزيادة عدد الزوار بشكل طبيعي.",
    serviceConsultTitle: "استشارات تقنية",
    serviceConsultDesc: "تقديم نصائح الخبراء حول أفضل التقنيات لتطوير أعمالك بشكل فعال.",
    serviceShopTitle: "المتاجر الإلكترونية",
    serviceShopDesc: "بناء متاجر إلكترونية آمنة وقابلة للتوسع لزيادة مبيعاتك بفعالية.",
    serviceSupportTitle: "الدعم الفني",
    serviceSupportDesc: "تقديم الصيانة والدعم المستمر لضمان عمل موقعك بأفضل أداء.",
    serviceSecurityTitle: "الأمن السيبراني",
    serviceSecurityDesc: "تطبيق بروتوكولات أمان متقدمة لحماية موقعك من التهديدات السيبرانية واختراق البيانات.",
    contactCtaText: "للحصول على الخدمات، الرجاء التواصل معي",

    Numberstitle:"إنجازاتي بي الارقام ",
    Numbers1text:"المشاريع المكتملة ",
    Numbers2text:"سنوات  التعلم ",
    Numbers3text:" المهرات  التكنولوجيا ",
    Numbers4text:"عملاء سعداء",

    MyJourneytitle:"رحلتي",
    MyJourney1text:"بدأت",
    MyJourney2text:"بدأت رحلتي في عالم البرمجة باستخدام بايثون و JavaScript.",
    MyJourney3text:"تخصص الويب",
    MyJourney4text:"التركيز على تقنيات الواجهة الأمامية والخلفية لبناء تطبيقات متكاملة.",
    MyJourney5text:"التخرج",
    MyJourney6text:"التخرج من جامعة طيبة في علوم الحاسوب | كمطور ويب متكامل.",

   CurrentlyLearningtitle:" أتعلم حاليا",
   CurrentlyLearning1text:"إتقان الـ Hooks و Context API و Redux",
   CurrentlyLearning2text:"بناء واجهات برمجة التطبيقات RESTful وتكامل MongoDB",

    contactTitle: "تواصل معي",
    contact1text:"أنا دائمًا منفتح على مناقشة المشاريع الجديدة، الأفكار الإبداعية، أو الفرص لأكون جزءًا من اراكم.", 
    contact2text: "إذا كان لديك أي أسئلة أو رغبت في التعاون، لا تتردد في التواصل معي!",
    contactmessage: "أرسل رسالة",

    footerdesc: "صناعة تجارب رقمية بشغف وإتقان.",
    footerCopy: " حمدي اللقماني. جميع الحقوق محفوظة. © 2026 ",
    footerstatus: "متاح للعمل الحر",
       
    footertitle:"روابط سريعة",
    footerhome:"الرئيسية",
    footerabout:"عني",
    footerskills:"المهارات",
    footereducation:"التعليم",
    footerprojects:"المشاريع",

    Connecttitle:"تواصل",
   
  }
};

//==== Definition of all the DIs ====
//==== تعريف جميع الـ DIs ====


function applyLanguage(lang) {

  document.body.classList.add("fade");

  setTimeout(() => {
const loader = document.getElementById("lang-loader");
loader.classList.add("active");setTimeout(() => {
  loader.classList.remove("active");
}, 1500);
    const t = translations[lang];

   document.getElementById("nav-home").innerHTML = `<i class="fas fa-home"></i> ${t.navHome}`;
    document.getElementById("nav-about").innerHTML = `<i class="fas fa-user"></i> ${t.navAbout}`;
    document.getElementById("nav-skills").innerHTML = `<i class="fas fa-code"></i> ${t.navSkills}`;
    document.getElementById("nav-education").innerHTML = `<i class="fas fa-graduation-cap"></i> ${t.navEducation}`;
    document.getElementById("nav-projects").innerHTML = `<i class="fas fa-project-diagram"></i> ${t.navProjects}`;
    document.getElementById("nav-my-services").innerHTML = `<i class="fas fa-concierge-bell"></i> ${t.navMyServices}`;
    document.getElementById("nav-numbers").innerHTML = `<i class="fas fa-chart-line"></i> ${t.navNumbers}`;
    document.getElementById("nav-my-journey").innerHTML = `<i class="fas fa-route"></i> ${t.navMyJourney}`;
    document.getElementById("nav-currently-learning").innerHTML = `<i class="fas fa-book-reader"></i> ${t.navCurrentlyLearning}`;
    document.getElementById("nav-contact").innerHTML = `<i class="fas fa-envelope"></i> ${t.navContact}`;

    document.getElementById("heroBtn1").textContent = t.heroBtn1;
    document.getElementById("heroBtn2").textContent = t.heroBtn2;
    document.getElementById("hero-title").textContent = t.heroTitle;
    document.getElementById("hero-subtitle").textContent = t.heroSubtitle;
    document.getElementById("hero-desc").textContent = t.heroDesc;
    document.getElementById("hero-1Desc").textContent = t.hero1Desc;
    document.getElementById("hero-2Desc").textContent = t.hero2Desc;

    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about-1text").textContent = t.about1Text;
    document.getElementById("about-2text").textContent = t.about2Text;
    document.getElementById("about-3text").textContent = t.about3Text;
    document.getElementById("about-4text").textContent = t.about4Text;
    document.getElementById("about-5text").textContent = t.about5Text;

    document.getElementById("skills-title").textContent = t.skillsTitle;
    document.getElementById("soft-skills-label").textContent = t.softskillslabel;
    document.getElementById("skill-web-prog").textContent = t.skillWebProg;
    document.getElementById("skill-ui-design").textContent = t.skillUIDesign;
    document.getElementById("skill-project-mgmt").textContent = t.skillProjectMgmt;
    document.getElementById("skill-troubleshoot").textContent = t.skillTroubleshoot;
    document.getElementById("skill-db-mgmt").textContent = t.skillDBMgmt;
    document.getElementById("skill-teamwork").textContent = t.skillTeamwork;
    document.getElementById("skill-comp-apps").textContent = t.skillCompApps;
    document.getElementById("skill-web-dev").textContent = t.skillWebDev;
    document.getElementById("skill-cust-orient").textContent = t.skillCustOrient;
    document.getElementById("skill-collab").textContent = t.skillCollab;

    
    document.getElementById("education-title").textContent = t.educationTitle;
    document.getElementById("education-1text").textContent = t.education1text;
    document.getElementById("education-2text").textContent = t.education2text;
    document.getElementById("education-3text").textContent = t.education3text;
    document.getElementById("education-4text").textContent = t.education4text;
    document.getElementById("education-5text").textContent = t.education5text;

  document.getElementById("projects-title").textContent = t.projectsTitle;
  document.getElementById("projects-1text").textContent = t.projects1text;
  document.getElementById("projects-2text").textContent = t.projects2text;
  document.getElementById("projects-3text").textContent = t.projects3text;
  document.getElementById("projects-4text").textContent = t.projects4text;
  document.getElementById("projects-5text").textContent = t.projects5text;
  document.getElementById("projects-6text").textContent = t.projects6text;
  document.getElementById("projects-7text").textContent = t.projects7text;
  document.getElementById("projects-8text").textContent = t.projects8text;
  document.getElementById("projects-9text").textContent = t.projects9text;

  document.getElementById("MyServices-title").textContent = t.MyServicestitle;
  document.getElementById("MyServices-1text").textContent = t.MyServices1text;
  document.getElementById("MyServices-2text").textContent = t.MyServices2text;
  document.getElementById("MyServices-3text").textContent = t.MyServices3text;
  document.getElementById("MyServices-4text").textContent = t.MyServices4text;
  document.getElementById("MyServices-5text").textContent = t.MyServices5text;
  document.getElementById("MyServices-6text").textContent = t.MyServices6text;
  document.getElementById("service-wp-title").textContent = t.serviceWPTitle;
  document.getElementById("service-wp-desc").textContent = t.serviceWPDesc;
  document.getElementById("service-seo-title").textContent = t.serviceSEOTitle;
  document.getElementById("service-seo-desc").textContent = t.serviceSEODesc;
  document.getElementById("service-consulting-title").textContent = t.serviceConsultTitle;
  document.getElementById("service-consulting-desc").textContent = t.serviceConsultDesc;
  document.getElementById("service-shop-title").textContent = t.serviceShopTitle;
  document.getElementById("service-shop-desc").textContent = t.serviceShopDesc;
  document.getElementById("service-support-title").textContent = t.serviceSupportTitle;
  document.getElementById("service-support-desc").textContent = t.serviceSupportDesc;
  document.getElementById("service-security-title").textContent = t.serviceSecurityTitle;
  document.getElementById("service-security-desc").textContent = t.serviceSecurityDesc;
  document.getElementById("contact-cta-text").textContent = t.contactCtaText;
  document.getElementById("skill-problem-solving").textContent = t.skillProblemSolving;
  document.getElementById("skill-time-management").textContent = t.skillTimeManagement;

  document.getElementById("Numbers-title").textContent = t.Numberstitle;
  document.getElementById("Numbers-1text").textContent = t.Numbers1text;
  document.getElementById("Numbers-2text").textContent = t.Numbers2text;
  document.getElementById("Numbers-3text").textContent = t.Numbers3text;
  document.getElementById("Numbers-4text").textContent = t.Numbers4text;

    document.getElementById("Myjourney-title").textContent = t.MyJourneytitle;
    document.getElementById("MyJourney-1text").textContent = t.MyJourney1text;
    document.getElementById("MyJourney-2text").textContent = t.MyJourney2text;
    document.getElementById("MyJourney-3text").textContent = t.MyJourney3text;
    document.getElementById("MyJourney-4text").textContent = t.MyJourney4text;
    document.getElementById("MyJourney-5text").textContent = t.MyJourney5text;
    document.getElementById("MyJourney-6text").textContent = t.MyJourney6text;

    document.getElementById("CurrentlyLearning-title").textContent = t.CurrentlyLearningtitle;
    document.getElementById("CurrentlyLearning-1text").textContent = t.CurrentlyLearning1text;
    document.getElementById("CurrentlyLearning-2text").textContent = t.CurrentlyLearning2text;


    document.getElementById("contact-title").textContent = t.contactTitle;
    document.getElementById("contact-1text").textContent = t.contact1text;
    document.getElementById("contact-2text").textContent = t.contact2text;
    document.getElementById("contact-message").textContent = t.contactmessage;

   
    document.getElementById("footer-desc").textContent = t.footerdesc;
    document.getElementById("footer-copy").textContent = t.footerCopy;
    document.getElementById("footer-status").textContent = t.footerstatus;

    document.getElementById("footer-title").textContent = t.footertitle;
    document.getElementById("footer-home").textContent = t.footerhome;
    document.getElementById("footer-about").textContent = t.footerabout;
    document.getElementById("footer-skills").textContent = t.footerskills;
    document.getElementById("footer-education").textContent = t.footereducation;
    document.getElementById("footer-projects").textContent = t.footerprojects;

    document.getElementById("Connect-title").textContent = t.Connecttitle;



//==== Switch the translation button from Arabic to English ====
//==== قم بتغيير زر الترجمة من العربية إلى الإنجليزية ====


    localStorage.setItem("language", lang);

    document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    if (lang === "ar") {
      document.body.classList.add("rtl");
      langBtn.textContent = "🌐 EN";
    } else {
      document.body.classList.remove("rtl");
      langBtn.textContent = "🌐 AR";
    }

    document.body.classList.remove("fade");

  }, 200);
}


//==== On Click ====
//==== عند النقر ====

langBtn.addEventListener("click", () => {
  const currentLang = localStorage.getItem("language") || "en";
  const newLang = currentLang === "en" ? "ar" : "en";
  applyLanguage(newLang);
});

//==== On Page Load ====
//==== عند تحميل الصفحة ====

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  applyLanguage(savedLang);
});

 // ===== Hamburger Menu =====
  // ===== قائمة الهمبرغر=====

const checkbox = document.getElementById("checkbox");
const navLinks = document.querySelector(".nav-links");

if (checkbox && navLinks) {

  checkbox.addEventListener("change", () => {
    navLinks.classList.toggle("show", checkbox.checked);
  });

}


