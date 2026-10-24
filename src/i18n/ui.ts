export type SupportedLang = "en" | "uz" | "ru";

export const languages: Record<SupportedLang, string> = {
  en: "English",
  uz: "O'zbekcha",
  ru: "Русский",
};

export const defaultLang: SupportedLang = "en";

export interface ServiceItem {
  code: string;
  title: string;
  summary: string;
  tagline: string;
  icon: "database" | "brain" | "api" | "bot" | "zap" | "chart";
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const ui = {
  en: {
    siteTitle: "Dastonbek | Backend Engineering, ERP & AI Automation",
    siteDescription: "Backend Software Engineer & AI Automation Specialist based in Tashkent, Uzbekistan. Core stack: Python, FastAPI, PostgreSQL. High-demand services in ERP maintenance, AI agents, Telegram ecosystems, and database optimization.",
    keywords: "FastAPI developer Tashkent, Python backend engineer Uzbekistan, ERP maintenance Uzbekistan, AI automation Tashkent, Telegram bot development Uzbekistan, PostgreSQL database optimization, B2B software engineering, business automation",
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      status: "> erp_ai_optimizer --status: available_for_projects",
      headline: "I make manufacturing and B2B systems run faster.",
      subheadline: "Backend Engineer & AI Automation Specialist based in Tashkent, Uzbekistan (Python, FastAPI, PostgreSQL). I build high-performance APIs, automate corporate workflows with AI, and eliminate bottlenecks in production ERPs.",
      stack: "// core_stack: [Python, FastAPI, PostgreSQL, SQLAlchemy, AI_Agents]",
      domain: "// domain: [Manufacturing, Logistics, B2B_Telegram, Enterprise_ERP]",
      ctaPrimary: "Discuss Your Project",
      ctaSecondary: "Explore Services",
    },
    servicesSection: {
      badge: "> services --list",
      title: "In-Demand Services",
      subtitle: "// software engineering & enterprise AI",
    },
    services: [
      {
        code: "01",
        title: "ERP & Manufacturing Automation",
        summary: "End-to-end ERP maintenance, 1C / payment gateway sync, and workflow automation for manufacturing & logistics.",
        tagline: "Core Operations",
        icon: "database",
        details: [
          "Legacy ERP stabilization, bug resolution, and modular refactoring",
          "Warehouse, contracts, and financial accounting module synchronization",
          "Integration with fiscal systems and local gateways (Didox, Click, Payme)",
          "Granular role-based access control (RBAC) and audit trails for financial safety",
        ],
      },
      {
        code: "02",
        title: "Enterprise AI & LLM Agents",
        summary: "Context-aware AI agents, document retrieval (RAG), and generative workflows integrated into internal tools.",
        tagline: "Intelligent Systems",
        icon: "brain",
        details: [
          "RAG search over internal corporate policies, contracts, and knowledge bases",
          "Automated customer intake and inquiry classification with Claude & Gemini",
          "Autonomous agentic workflows replacing repetitive clerical operations",
          "Voice message transcription and unstructured data extraction for CRM/ERP",
        ],
      },
      {
        code: "03",
        title: "High-Performance Backend & APIs",
        summary: "Scalable, secure, and asynchronous REST APIs built with Python, FastAPI, and robust schema validation.",
        tagline: "Fast & Resilient",
        icon: "api",
        details: [
          "High-throughput asynchronous services designed for concurrent peak loads",
          "Strict Pydantic schema validation & automated interactive OpenAPI docs",
          "OAuth2 / JWT token authentication, rate limiting, and webhook security",
          "Production containerization with Docker and automated deployment pipelines",
        ],
      },
      {
        code: "04",
        title: "B2B Telegram Bot Ecosystems",
        summary: "High-load Telegram bots connected directly to ERP & databases for instant client ordering and CRM sync.",
        tagline: "Regional Advantage",
        icon: "bot",
        details: [
          "24/7 automated wholesale order intake, catalog search, and invoice issuance",
          "Direct bidirectional synchronization with PostgreSQL databases & ERPs",
          "Real-time management alerts, approval triggers, and emergency notifications",
          "AI conversational assistance inside Telegram for natural product discovery",
        ],
      },
      {
        code: "05",
        title: "Database Optimization & Tuning",
        summary: "Deep PostgreSQL and MySQL query tuning, eliminating deadlocks and cutting response latency by ~50%.",
        tagline: "Speed & Scalability",
        icon: "zap",
        details: [
          "In-depth slow query log analysis and heavy execution path diagnosis",
          "Composite index engineering and table partition restructuring",
          "Resolving N+1 query bottlenecks in SQLAlchemy / Django ORM",
          "Connection pool tuning, lock reduction, and high-load stress testing",
        ],
      },
      {
        code: "06",
        title: "Data Pipelines & Executive BI",
        summary: "Automated ETL pipelines and live executive dashboards, replacing fragile manual spreadsheets for leadership.",
        tagline: "Actionable Insights",
        icon: "chart",
        details: [
          "Automated cross-module financial and inventory reconciliation",
          "Elimination of manual Excel reporting delays and spreadsheet errors",
          "Real-time KPI metric calculation and automated Telegram digest summaries",
          "Scheduled cron worker pipelines with robust failure alerting",
        ],
      },
    ] as ServiceItem[],
    projectsSection: {
      badge: "> case_studies",
      title: "Selected Systems & ROI",
      all: "See all projects",
      roiLabel: "[Business Impact • ROI]",
      caseStudyBadge: "Case Study",
    },
    workSection: {
      badge: "> track_record",
      title: "Production Experience",
      all: "See full history",
    },
    blogSection: {
      badge: "> technical_notes",
      title: "Architecture & Insights",
      all: "See all articles",
    },
    faqSection: {
      badge: "> faq --answers",
      title: "Frequently Asked Questions",
      subtitle: "// transparency & collaboration",
    },
    faq: [
      {
        question: "What software development and AI services do you provide in Tashkent and globally?",
        answer: "I specialize in custom backend development (Python, FastAPI, PostgreSQL), production ERP system maintenance & performance optimization, enterprise AI/LLM integration (RAG, Claude, Gemini), automated Telegram bot ecosystems, and automated data pipelines for manufacturing, logistics, and B2B companies.",
      },
      {
        question: "How do you fix and speed up slow ERP or database systems?",
        answer: "I conduct a thorough audit of your PostgreSQL/MySQL slow query logs, database indexes, and ORM usage (SQLAlchemy/Django). By restructuring heavy queries, adding targeted composite indexes, and refactoring business logic, I typically reduce API latency and database load by 50% or more without business disruption.",
      },
      {
        question: "Why are AI-powered Telegram bots valuable for businesses in Uzbekistan?",
        answer: "In Uzbekistan and Central Asia, Telegram is the primary channel for business communication and customer interaction. Connecting an AI-driven Telegram bot directly to your backend or ERP enables 24/7 automated order processing, instant inventory lookups, and intelligent customer support, reducing manual operator labor by up to 80%.",
      },
      {
        question: "Can you modernize an existing legacy codebase without rewriting everything from scratch?",
        answer: "Yes. I use an incremental refactoring strategy: isolating critical bottlenecks, resolving existing bugs, introducing type-safe modular endpoints with FastAPI, and securing database migrations. This ensures your existing production operations continue running seamlessly while technical debt is eliminated.",
      },
      {
        question: "How can we start working together and what is the process?",
        answer: "We begin with a brief 30-minute discovery consultation where we discuss your system bottlenecks or project goals. I then provide an actionable technical proposal with clear milestones, deliverables, and estimated ROI. Reach out via email (yakubovdastonbek@gmail.com) or Telegram (@dyakubov).",
      },
    ] as FAQItem[],
    contactSection: {
      badge: "> contact",
      title: "Let's Connect",
      desc: "Have a project in mind, an ERP bottleneck to troubleshoot, or need custom backend/AI automation? Reach out directly via email or Telegram.",
    },
    footerCTA: {
      badge: "System Audit & Technical Discovery",
      headline: "Struggling with a slow ERP or manual reporting bottlenecks? Let's fix it.",
      subheadline: "Direct review of your slow query logs, database schema, and backend architecture.",
      button: "Let's Talk",
    },
  },
  uz: {
    siteTitle: "Dastonbek | Backend Dasturlash, ERP va Sun'iy Intellekt",
    siteDescription: "Toshkentdagi Backend Dasturchi va Sun'iy Intellekt (AI) bo'yicha mutaxassis. Asosiy stek: Python, FastAPI, PostgreSQL. ERP tizimlarini qo'llab-quvvatlash, AI agentlar, Telegram botlar va ma'lumotlar bazasini optimallashtirish xizmatlari.",
    keywords: "FastAPI dasturchi Toshkent, Python backend mutaxassis O'zbekiston, ERP tizimlari Toshkent, sun'iy intellekt biznesda, Telegram bot yaratish O'zbekiston, PostgreSQL optimallashtirish, biznesni avtomatlashtirish, B2B tizimlar",
    nav: {
      home: "Asosiy",
      services: "Xizmatlar",
      projects: "Loyihalar",
      contact: "Bog'lanish",
    },
    hero: {
      status: "> erp_ai_optimizatsiya --holat: buyurtmalar_uchun_ochiq",
      headline: "Ishlab chiqarish va B2B tizimlari tezligini oshiraman.",
      subheadline: "Toshkentdagi Backend Dasturchi va Sun'iy Intellekt mutaxassisi (Python, FastAPI, PostgreSQL). Yuqori tezlikdagi API-lar yarataman, AI yordamida korxona jarayonlarini avtomatlashtiraman va ERP tizimlari yuklamasini kamaytiraman.",
      stack: "// asosiy_texnologiyalar: [Python, FastAPI, PostgreSQL, SQLAlchemy, AI_Agentlar]",
      domain: "// sohalar: [Ishlab_Chiqarish, Logistika, B2B_Telegram, Korporativ_ERP]",
      ctaPrimary: "Loyihani Muhokama Qilish",
      ctaSecondary: "Xizmatlarni Ko'rish",
    },
    servicesSection: {
      badge: "> xizmatlar --royxat",
      title: "Talab Yuqori Xizmatlar",
      subtitle: "// dasturiy ta'minot va korporativ AI",
    },
    services: [
      {
        code: "01",
        title: "ERP va Ishlab Chiqarishni Avtomatlashtirish",
        summary: "Ishlab chiqarish, ombor va logistika korxonalari uchun ERP tizimlarini to'liq qo'llab-quvvatlash va integratsiya qilish.",
        tagline: "Asosiy Jarayonlar",
        icon: "database",
        details: [
          "Mavjud ERP tizimlarini barqarorlashtirish, xatolarni bartaraf etish va refaktoring",
          "Ombor, shartnomalar va buxgalteriya modullari o'rtasida uzluksiz ma'lumot almashinuvi",
          "Fiskal xizmatlar va mahalliy to'lov tizimlari integratsiyasi (Didox, Soliq, Click, Payme)",
          "Nozik moliyaviy ma'lumotlar xavfsizligi va ruxsatlar tizimi (RBAC) nazorati",
        ],
      },
      {
        code: "02",
        title: "Korporativ Sun'iy Intellekt va LLM Agentlar",
        summary: "Kompaniya ichki hujjatlari bo'yicha aqlli qidiruv (RAG) va mijozlarga 24/7 javob beruvchi AI agentlar.",
        tagline: "Aqlli Tizimlar",
        icon: "brain",
        details: [
          "Ichki korporativ hujjatlar, qoidalar va shartnomalar bo'yicha AI qidiruv tizimi (RAG)",
          "Claude va Gemini orqali mijozlar murojaatlarini avtomatik saralash va tahlil qilish",
          "Xodimlarning bir xil takrorlanuvchi mexanik ishlarini avtomatlashtiruvchi AI oqimlari",
          "Ovozli xabarlarni matnga o'girish va ularni CRM/ERP tizimiga avtomatik kiritish",
        ],
      },
      {
        code: "03",
        title: "Yuqori Tezlikdagi Backend va API-lar",
        summary: "Python, FastAPI va PostgreSQL asosida xavfsiz, yuqori yuklamalarga chidamli asinxron backend arxitekturasi.",
        tagline: "Tezkor va Ishonchli",
        icon: "api",
        details: [
          "Bir vaqtning o'zida minglab so'rovlarni uzluksiz qayta ishlovchi asinxron arxitektura",
          "Pydantic orqali qat'iy ma'lumot tekshiruvi va avtomatik interaktiv OpenAPI hujjatlar",
          "OAuth2 / JWT tokenlar, xavfsiz webhooklar va so'rovlar limitini (rate limiting) boshqarish",
          "Docker konteynerizatsiyasi va serverlarga avtomatlashtirilgan CI/CD joylashtirish",
        ],
      },
      {
        code: "04",
        title: "B2B Telegram Bot Ekotizimlari",
        summary: "ERP va ma'lumotlar bazasiga ulangan, buyurtmalarni avtomatik qabul qiluvchi yuqori yuklamali Telegram botlar.",
        tagline: "Mahalliy Afzallik",
        icon: "bot",
        details: [
          "Ulgurji buyurtmalarni 24/7 avtomatik qabul qilish, narxlar va hisob-faktura shakllantirish",
          "PostgreSQL va ERP tizimlari bilan real vaqt rejimida ikki tomonlama sinxronizatsiya",
          "Rahbariyat uchun tezkor xabarnomalar, tasdiqlash tugmalari va tizim ogohlantirishlari",
          "Mijozlarning erkin so'rovlarini tushunuvchi sun'iy intellekt (AI) yordamchisi",
        ],
      },
      {
        code: "05",
        title: "Ma'lumotlar Bazasi va SQL Optimallashtirish",
        summary: "PostgreSQL va MySQL so'rovlarini chuqur optimallashtirish, qotishlarni yo'qotish va tezlikni ~50% oshirish.",
        tagline: "Tezlik va Masshtab",
        icon: "zap",
        details: [
          "Sekin so'rovlar jurnali (slow query log) tahlili va eng og'ir operatsiyalarni aniqlash",
          "Murakkab kompozit indekslar yaratish va jadvallar strukturasini qayta loyihalash",
          "SQLAlchemy va Django ORM dagi N+1 so'rovlar muammolarini bartaraf etish",
          "Ulanishlar hovuzini (connection pooling) sozlash va server resurslarini tejash",
        ],
      },
      {
        code: "06",
        title: "Hisobotlarni Avtomatlashtirish va BI",
        summary: "Qo'lda to'ldiriladigan xatolarga moyil Excel jadvallari o'rniga rahbariyat uchun real vaqt tahliliy ko'rsatkichlari.",
        tagline: "Aniq Tahlillar",
        icon: "chart",
        details: [
          "Moliya, ombor va to'lov qoldiqlarini avtomatik tekshiruvchi ma'lumotlar oqimi",
          "Qo'lda to'ldiriladigan jadvallardagi xatoliklar va hisobot kechikishlariga chek qo'yish",
          "Rahbariyat uchun asosiy biznes ko'rsatkichlari (KPI) va Telegram orqali kunlik hisobotlar",
          "Rejali cron vazifalari va nosozliklar haqida tezkor ogohlantirish tizimi",
        ],
      },
    ] as ServiceItem[],
    projectsSection: {
      badge: "> amaliy_loyihalar",
      title: "Tanlangan Tizimlar va Natijalar",
      all: "Barcha loyihalar",
      roiLabel: "[Natija • ROI]",
      caseStudyBadge: "Amaliy Keys",
    },
    workSection: {
      badge: "> tajriba",
      title: "Ishlab Chiqarishdagi Tajriba",
      all: "To'liq tarix",
    },
    blogSection: {
      badge: "> maqolalar",
      title: "Arxitektura va Maqolalar",
      all: "Barcha maqolalar",
    },
    faqSection: {
      badge: "> savol_javob",
      title: "Ko'p Beriladigan Savollar",
      subtitle: "// shaffoflik va hamkorlik",
    },
    faq: [
      {
        question: "Toshkentda va global miqyosda qanday dasturlash va AI xizmatlarini ko'rsatasiz?",
        answer: "Men ishlab chiqarish, logistika va B2B korxonalari uchun maxsus backend (Python, FastAPI, PostgreSQL), ERP tizimlarini qo'llab-quvvatlash va tezlashtirish, sun'iy intellekt (RAG, Claude, Gemini) integratsiyasi, B2B Telegram botlar va tahliliy hisobotlarni avtomatlashtirish bo'yicha xizmatlar ko'rsataman.",
      },
      {
        question: "Sekin ishlayotgan ERP yoki ma'lumotlar bazasini qanday tezlashtirasiz?",
        answer: "Tizimning PostgreSQL/MySQL sekin so'rovlar jurnali (slow query logs), indekslar va ORM ulanishlarini tahlil qilaman. Og'ir so'rovlarni qayta yozish, indekslarni to'g'ri o'rnatish va kodni modullashtirish orqali tizim tezligini 50% gacha oshiraman va server yuklamasini kamaytiraman.",
      },
      {
        question: "O'zbekiston biznesi uchun AI bilan ishlovchi Telegram botlar nega zarur?",
        answer: "O'zbekistonda Telegram biznes va mijozlar o'rtasidagi asosiy aloqa vositasi hisoblanadi. Telegram botni to'g'ridan-to'g'ri backend va ERP tizimiga ulash orqali buyurtmalarni 24/7 qabul qilish, ombor qoldiqlarini bir zumda bilish va mijozlarga sun'iy intellekt yordamida tezkor javob berish mumkin, bu esa operatorlar ishini 80% gacha kamaytiradi.",
      },
      {
        question: "Mavjud eski tizimni to'xtatib qo'ymasdan yangilash mumkinmi?",
        answer: "Ha. Tizimni noldan qayta yozmasdan bosqichma-bosqich modernizatsiya qilaman: sekin ishlayotgan qismlarni aniqlab optimallashtirish, xatolarni tuzatish va FastAPI orqali yangi ishonchli modullar qo'shish orqali biznesingiz to'xtab qolmasligini ta'minlayman.",
      },
      {
        question: "Hamkorlikni qanday boshlaymiz va jarayon qanday kechadi?",
        answer: "Hamkorlikni 30 daqiqalik bepul texnik konsultatsiyadan boshlaymiz: tizimingizdagi muammolar yoki yangi loyiha talablarini muhokama qilamiz. Shundan so'ng aniq muddat, bosqichlar va kutilayotgan natijalar ko'rsatilgan rejani taqdim etaman. Email yoki Telegram (@dyakubov) orqali bog'lanishingiz mumkin.",
      },
    ] as FAQItem[],
    contactSection: {
      badge: "> aloqa",
      title: "Bog'lanish",
      desc: "Yangi loyihangiz bormi, ERP tizimingiz sekin ishlayaptimi yoki jarayonlarni avtomatlashtirish kerakmi? Men bilan to'g'ridan-to'g'ri email yoki Telegram orqali bog'laning.",
    },
    footerCTA: {
      badge: "Tizim Auditi va Texnik Tahlil",
      headline: "Sekin ishlaydigan ERP yoki hisobotlardagi qiyinchiliklardan charchadingizmi? Keling, hal qilamiz.",
      subheadline: "Sekin SQL so'rovlar jurnali, baza tuzilmasi va backend arxitekturasini bepul tahlil qilish.",
      button: "Bog'lanish",
    },
  },
  ru: {
    siteTitle: "Дастонбек | Бэкенд-разработка, ERP и Автоматизация с ИИ",
    siteDescription: "Бэкенд-разработчик и специалист по автоматизации бизнеса с ИИ в Ташкенте. Стек: Python, FastAPI, PostgreSQL. Поддержка ERP, разработка умных Telegram-ботов, внедрение LLM и оптимизация баз данных.",
    keywords: "FastAPI разработчик Ташкент, Python бэкенд инженер Узбекистан, разработка ERP Ташкент, внедрение ИИ Узбекистан, создание Telegram ботов Ташкент, оптимизация PostgreSQL, автоматизация бизнеса, B2B системы",
    nav: {
      home: "Главная",
      services: "Услуги",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      status: "> erp_ai_optimizer --статус: открыт_для_проектов",
      headline: "Ускоряю работу производственных и B2B систем.",
      subheadline: "Бэкенд-разработчик и специалист по ИИ-автоматизации в Ташкенте (Python, FastAPI, PostgreSQL). Разрабатываю высоконагруженные API, внедряю ИИ в бизнес-процессы и устраняю узкие места в ERP-системах предприятий.",
      stack: "// стек: [Python, FastAPI, PostgreSQL, SQLAlchemy, AI_Agents]",
      domain: "// сферы: [Производство, Логистика, B2B_Telegram, Корпоративные_ERP]",
      ctaPrimary: "Обсудить Проект",
      ctaSecondary: "Все Услуги",
    },
    servicesSection: {
      badge: "> услуги --список",
      title: "Востребованные Услуги",
      subtitle: "// разработка ПО и корпоративный ИИ",
    },
    services: [
      {
        code: "01",
        title: "Автоматизация ERP и Производства",
        summary: "Комплексная поддержка ERP, синхронизация складов и интеграция с 1С и платежными шлюзами для промышленности.",
        tagline: "Ключевые Процессы",
        icon: "database",
        details: [
          "Стабилизация legacy-систем, устранение критических багов и модульный рефакторинг",
          "Синхронизация данных между модулями производства, складов и бухгалтерии",
          "Интеграция с фискальными сервисами и платежными системами (Didox, Soliq, Click, Payme)",
          "Разграничение прав доступа (RBAC) и полный аудит-лог финансовых операций",
        ],
      },
      {
        code: "02",
        title: "Корпоративный ИИ и LLM-Агенты",
        summary: "Умные ассистенты, поиск по корпоративным документам (RAG) и генеративные ИИ-процессы для оптимизации затрат.",
        tagline: "Интеллектуальные Системы",
        icon: "brain",
        details: [
          "Внедрение RAG-поиска по регламентам, базам знаний и договорам компании",
          "Автоматическая квалификация лидов и обработка входящих запросов на Claude и Gemini",
          "Автономные ИИ-агенты, заменяющие рутинную ручную работу бэк-офиса",
          "Распознавание голосовых сообщений и структурирование данных для CRM и ERP",
        ],
      },
      {
        code: "03",
        title: "Высоконагруженный Бэкенд и API",
        summary: "Разработка масштабируемых и отказоустойчивых асинхронных REST API на Python, FastAPI и PostgreSQL.",
        tagline: "Скорость и Надежность",
        icon: "api",
        details: [
          "Асинхронные микросервисы, рассчитанные на высокие пиковые нагрузки",
          "Строгая типизация с Pydantic и автодокументация интерактивного OpenAPI",
          "Безопасная аутентификация по OAuth2 / JWT, вебхуки и защита от перегрузок",
          "Контейнеризация в Docker и настройка надежного развертывания на Linux VPS",
        ],
      },
      {
        code: "04",
        title: "Экосистемы B2B Telegram-Ботов",
        summary: "Высоконагруженные Telegram-боты, подключенные к ERP и базам данных для круглосуточных заказов и CRM.",
        tagline: "Региональный Драйвер",
        icon: "bot",
        details: [
          "Автоматический прием оптовых заказов 24/7, проверка остатков и выставление счетов",
          "Двусторонняя онлайн-синхронизация с базами данных PostgreSQL и ERP",
          "Уведомления руководству в реальном времени, кнопки согласования и мониторинг",
          "ИИ-консультант внутри Telegram, понимающий свободные запросы клиентов",
        ],
      },
      {
        code: "05",
        title: "Оптимизация Баз Данных и SQL",
        summary: "Глубокая оптимизация запросов PostgreSQL и MySQL, устранение дедлоков и сокращение времени отклика до 50%.",
        tagline: "Масштабируемость",
        icon: "zap",
        details: [
          "Анализ логов медленных запросов (slow query logs) и узких мест выполнения",
          "Проектирование составных индексов и переработка структуры таблиц",
          "Устранение проблемы N+1 запросов в ORM SQLAlchemy и Django",
          "Тюнинг пула соединений (connection pooling) и снижение нагрузки на CPU",
        ],
      },
      {
        code: "06",
        title: "Пайплайны Данных и BI для Руководства",
        summary: "Автоматизированные пайплайны и управленческие дашборды, заменяющие ненадежные ручные Excel-таблицы.",
        tagline: "Данные для Решений",
        icon: "chart",
        details: [
          "Автоматическая сквозная сверка финансовых и складских проводок",
          "Исключение человеческих ошибок и задержек при формировании отчетности",
          "Расчет ключевых метрик (KPI) в реальном времени и ежедневные сводки в Telegram",
          "Надежные cron-пайплайны с системой мгновенного оповещения об ошибках",
        ],
      },
    ] as ServiceItem[],
    projectsSection: {
      badge: "> кейсы",
      title: "Реализованные Проекты и ROI",
      all: "Все проекты",
      roiLabel: "[Бизнес-эффект • ROI]",
      caseStudyBadge: "Кейс",
    },
    workSection: {
      badge: "> опыт",
      title: "Опыт в Продакшене",
      all: "Вся история",
    },
    blogSection: {
      badge: "> статьи",
      title: "Архитектура и Статьи",
      all: "Все статьи",
    },
    faqSection: {
      badge: "> частые_вопросы",
      title: "Часто Задаваемые Вопросы",
      subtitle: "// прозрачность и подход",
    },
    faq: [
      {
        question: "Какие услуги по разработке ПО и ИИ вы предоставляете в Ташкенте и удаленно?",
        answer: "Я специализируюсь на разработке масштабируемого бэкенда (Python, FastAPI, PostgreSQL), поддержке и ускорении ERP-систем, интеграции корпоративного ИИ (RAG, Claude, Gemini), создании умных Telegram-ботов для B2B и автоматизации управленческой отчетности.",
      },
      {
        question: "Как вы ускоряете медленно работающие ERP и базы данных?",
        answer: "Я провожу детальный аудит логов медленных запросов PostgreSQL/MySQL, используемых индексов и ORM (SQLAlchemy/Django). За счет переработки тяжелых запросов, добавления составных индексов и оптимизации бизнес-логики время отклика сокращается в среднем на 50% без остановки рабочих процессов.",
      },
      {
        question: "Зачем бизнесу в Узбекистане нужны умные Telegram-боты с ИИ?",
        answer: "В Узбекистане и СНГ Telegram является главным каналом коммуникации и продаж. Подключение Telegram-бота с ИИ напрямую к бэкенду или ERP позволяет круглосуточно принимать заказы, проверять остатки на складе и отвечать клиентам, снижая нагрузку на операторов до 80%.",
      },
      {
        question: "Можно ли модернизировать существующую систему без переписывания с нуля?",
        answer: "Да. Я использую поэтапную модернизацию: нахожу узкие места, устраняю накопившиеся баги, выношу критическую логику в надежные микромодули на FastAPI и настраиваю безопасные миграции. Это позволяет развивать систему без остановки текущего бизнеса.",
      },
      {
        question: "Как начать сотрудничество и как строится рабочий процесс?",
        answer: "Мы начинаем с 30-минутной первичной консультации, где обсуждаем текущие технические проблемы или требования к новому проекту. Затем я формирую четкий план с этапами, сроками и ожидаемым результатом. Напишите мне на почту или в Telegram (@dyakubov).",
      },
    ] as FAQItem[],
    contactSection: {
      badge: "> контакты",
      title: "Контакты",
      desc: "Планируете проект, хотите устранить «узкие места» в текущей ERP или автоматизировать процессы с помощью ИИ? Напишите мне на почту или в Telegram.",
    },
    footerCTA: {
      badge: "Технический Аудит и Оценка",
      headline: "ERP работает медленно, а отчеты формируются вручную? Давайте это исправим.",
      subheadline: "Прямой аудит логов медленных запросов, структуры БД и бэкенд-архитектуры.",
      button: "Обсудить Задачу",
    },
  },
} as const;

export function getTranslations(lang: SupportedLang) {
  return ui[lang] || ui[defaultLang];
}

export function getNavLinks(lang: SupportedLang) {
  const t = getTranslations(lang);
  const prefix = lang === "en" ? "" : `/${lang}`;
  return [
    { NAME: t.nav.home, HREF: prefix || "/" },
    { NAME: t.nav.services, HREF: `${prefix}#services` },
    { NAME: t.nav.projects, HREF: `${prefix}/projects` },
    { NAME: t.nav.contact, HREF: `${prefix}#contact` },
  ];
}

export function getFAQ(lang: SupportedLang) {
  const t = getTranslations(lang);
  return t.faq;
}
