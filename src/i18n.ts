import { createContext, useContext } from "react";

export type Language = "en" | "de" | "tr" | "ro";
export type ProjectKey =
  | "opusElite"
  | "cryptPulse"
  | "codeCoach"
  | "kinfusion"
  | "kinosmetics"
  | "flavorFusion"
  | "hiPex"
  | "omegaServers"
  | "gothamBooks";

export const languages: ReadonlyArray<{
  code: Language;
  flag: string;
  name: string;
}> = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "tr", flag: "🇹🇷", name: "Türkçe" },
  { code: "ro", flag: "🇷🇴", name: "Română" },
];

export const translations = {
  en: {
    meta: {
      title: "Baris Ekin Isik — Software Engineer",
      description:
        "Portfolio of Baris Ekin Isik — a product-minded software engineer crafting precise, polished web experiences.",
    },
    header: {
      homeLabel: "Baris Ekin Isik — Home",
      menu: "Menu",
      close: "Close",
      languageLabel: "Choose language",
      enableNight: "Activate night mode",
      enableDay: "Activate day mode",
      nav: ["Profile", "Expertise", "Work", "Story"],
      contact: "Let’s talk",
    },
    home: {
      hero: {
        eyebrow: "Software engineer · Aachen, Germany",
        titleLead: "Digital products,",
        titleAccent: "composed with intent.",
        lede:
          "I design and engineer polished web experiences where precise systems meet tactile interaction.",
        workAction: "Explore selected work",
        contactAction: "Start a conversation",
        portraitLabel: "Portrait of Baris Ekin Isik",
        availability: "Available for working-student roles",
        scroll: "Scroll",
        scrollLabel: "Scroll to profile",
      },
      profile: {
        label: "01 · Profile",
        note: "Engineering with a product instinct.",
        statementLead: "The best digital work feels ",
        statementAccent: "inevitable",
        statementTail: " — clear in purpose, exact in execution, and effortless to use.",
        paragraphs: [
          "I’m a computer science student and full-stack developer building thoughtful products with TypeScript, React, Next.js, Node.js, and modern data systems.",
          "My work moves comfortably from interface detail to application architecture. I care about the invisible parts too: performance, accessibility, maintainable systems, and the small decisions that make a product feel considered.",
        ],
        more: "More about my path",
        metrics: [
          { value: "5+", label: "Years building independently" },
          { value: "1.5+", label: "Years professional experience" },
          { value: "360°", label: "Product thinking, frontend to backend" },
        ],
      },
      expertise: {
        title: "Expertise",
        note: "A small, sharp toolkit — used deeply.",
        stackLabel: "Technology stack",
        items: [
          {
            title: "Product-minded engineering",
            description: "From early product logic to production-ready React and Next.js systems.",
          },
          {
            title: "Interface & interaction",
            description: "Responsive, accessible interfaces with motion that supports the experience.",
          },
          {
            title: "Backend & data",
            description: "Node.js APIs, authentication, SQL and NoSQL data built for clarity and scale.",
          },
        ],
      },
      work: {
        label: "03 · Selected work",
        note: "Interfaces with atmosphere and purpose.",
        projects: {
          opusElite: {
            category: "Luxury tailoring · Full-stack commerce",
            description:
              "A cinematic tailoring experience built around craft, restraint, and the ritual of choosing something made to last.",
          },
          cryptPulse: {
            category: "Crypto analytics · Product build",
            description:
              "A focused market intelligence experience that makes live crypto data feel clear and immediate.",
          },
          codeCoach: {
            category: "Learning platform · Full stack",
            description:
              "A guided coding environment designed to turn practice into visible, motivating progress.",
          },
          kinfusion: {
            category: "Artisan coffee · Frontend",
            description:
              "A composed coffee-house experience built around ritual, provenance, and an editorial sense of calm.",
          },
          kinosmetics: {
            category: "Luxury beauty · Experience design",
            description:
              "A soft, immersive shopping concept built around confident art direction and frictionless browsing.",
          },
          flavorFusion: {
            category: "Contemporary dining · Interface design",
            description:
              "A cinematic restaurant experience where restrained interaction lets the ingredients and atmosphere lead.",
          },
          hiPex: {
            category: "Digital concept · Frontend",
            description:
              "A private-estates concept shaped by cinematic imagery, restrained typography, and quietly confident interaction.",
          },
          omegaServers: {
            category: "Cloud security · Frontend",
            description:
              "A high-trust infrastructure concept that turns complex cloud protection into a precise, confident product experience.",
          },
          gothamBooks: {
            category: "Editorial commerce · Full stack",
            description:
              "A cinematic independent-bookshop experience that pairs atmospheric storytelling with a complete digital catalogue.",
          },
        },
      },
      story: {
        label: "04 · Story",
        note: "Curiosity became a craft.",
        title: "It started with the shortest path home.",
        paragraphs: [
          "In high school, an IT teacher drew Dijkstra’s algorithm on a smartboard. The route it found between two points was the exact route I walked home every day. I needed to understand how that was possible — and I never really stopped.",
          "Since then, I’ve contributed to production work including Cinemo’s corporate contact experience, built complete products of my own, and learned to treat technology as both an engineering discipline and a creative medium.",
          "Away from the screen, I write and produce music in Cubase and FL Studio. The same instinct carries across both practices: listen closely, remove what is unnecessary, and make every layer earn its place.",
        ],
      },
      contactBand: {
        eyebrow: "Have a role, project, or idea?",
        titleLead: "Let’s make something",
        titleAccent: "remarkable.",
        link: "Start a conversation",
        linkLabel: "Open contact page",
      },
    },
    projectCard: {
      websitePreview: "website preview",
      projectInterface: "project interface",
      pause: "Pause",
      preview: "Preview",
      pauseLabel: "Pause preview",
      playLabel: "Play preview",
      stack: "technology stack",
      signature: "Build signature",
      visit: "Visit project",
      visitLabel: "Visit",
    },
    contact: {
      hero: {
        eyebrow: "Contact · New business · Opportunities",
        titleLead: "Good work starts with",
        titleAccent: "a real conversation.",
        description:
          "Have a working-student role, a product that needs clarity, or an idea worth shaping? Tell me where you are and where you want to go.",
      },
      direct: "Direct",
      basedIn: "Based in",
      location: "Aachen, Germany",
      responseTime: "Response time",
      responseValue: "Usually within 48 hours",
      languages: "Languages",
      languageValue: "English · German · Turkish · Romanian",
      form: {
        eyebrow: "Send a note",
        title: "What can we create together?",
        nameLabel: "01 · Your name",
        namePlaceholder: "Name",
        emailLabel: "02 · Email address",
        emailPlaceholder: "you@company.com",
        projectLabel: "03 · I’m reaching out about",
        selectPlaceholder: "Select one",
        options: [
          "A working-student opportunity",
          "A full-time role",
          "A freelance project",
          "A collaboration",
          "Something else",
        ],
        messageLabel: "04 · Tell me a little more",
        messagePlaceholder: "A few words about the role, project, or idea…",
        send: "Send message",
        sending: "Sending…",
        success: "Thank you — your message is on its way.",
        error: "Something went wrong. Please email me directly instead.",
      },
    },
    footer: {
      lineOne: "Thoughtful systems.",
      lineTwo: "Quietly bold experiences.",
      cv: "Curriculum Vitae",
      location: "Aachen, Germany · 50.7753° N",
      backToTop: "Back to top ↑",
    },
    notFound: {
      eyebrow: "A beautiful wrong turn",
      titleLead: "This page has",
      titleAccent: "left the room.",
      description: "The address may have changed, but the way back is simple.",
      action: "Return home",
    },
  },
  de: {
    meta: {
      title: "Baris Ekin Isik — Softwareentwickler",
      description:
        "Portfolio von Baris Ekin Isik — produktorientierter Softwareentwickler für präzise, hochwertige Web-Erlebnisse.",
    },
    header: {
      homeLabel: "Baris Ekin Isik — Startseite",
      menu: "Menü",
      close: "Schließen",
      languageLabel: "Sprache wählen",
      enableNight: "Nachtmodus aktivieren",
      enableDay: "Tagmodus aktivieren",
      nav: ["Profil", "Expertise", "Projekte", "Werdegang"],
      contact: "Kontakt",
    },
    home: {
      hero: {
        eyebrow: "Softwareentwickler · Aachen, Deutschland",
        titleLead: "Digitale Produkte,",
        titleAccent: "mit Absicht komponiert.",
        lede:
          "Ich konzipiere und entwickle hochwertige Web-Erlebnisse, in denen präzise Systeme auf spürbare Interaktion treffen.",
        workAction: "Ausgewählte Projekte",
        contactAction: "Gespräch beginnen",
        portraitLabel: "Porträt von Baris Ekin Isik",
        availability: "Verfügbar für Werkstudentenstellen",
        scroll: "Scrollen",
        scrollLabel: "Zum Profil scrollen",
      },
      profile: {
        label: "01 · Profil",
        note: "Engineering mit Produktinstinkt.",
        statementLead: "Die beste digitale Arbeit wirkt ",
        statementAccent: "unvermeidlich",
        statementTail: " — klar im Zweck, präzise in der Umsetzung und mühelos in der Nutzung.",
        paragraphs: [
          "Ich studiere Informatik und entwickle als Full-Stack-Developer durchdachte Produkte mit TypeScript, React, Next.js, Node.js und modernen Datensystemen.",
          "Meine Arbeit reicht souverän vom Interface-Detail bis zur Anwendungsarchitektur. Auch die unsichtbaren Aspekte sind mir wichtig: Performance, Barrierefreiheit, wartbare Systeme und jene kleinen Entscheidungen, durch die sich ein Produkt wirklich durchdacht anfühlt.",
        ],
        more: "Mehr über meinen Weg",
        metrics: [
          { value: "5+", label: "Jahre eigenständige Entwicklung" },
          { value: "1,5+", label: "Jahre Berufserfahrung" },
          { value: "360°", label: "Produktdenken, vom Frontend bis zum Backend" },
        ],
      },
      expertise: {
        title: "Expertise",
        note: "Ein fokussiertes Toolkit — mit Tiefe eingesetzt.",
        stackLabel: "Technologie-Stack",
        items: [
          {
            title: "Produktorientiertes Engineering",
            description: "Von der ersten Produktlogik bis zu produktionsreifen React- und Next.js-Systemen.",
          },
          {
            title: "Interface & Interaktion",
            description: "Responsive, barrierefreie Interfaces mit Bewegung, die das Erlebnis unterstützt.",
          },
          {
            title: "Backend & Daten",
            description: "Node.js-APIs, Authentifizierung sowie SQL- und NoSQL-Daten für Klarheit und Skalierung.",
          },
        ],
      },
      work: {
        label: "03 · Ausgewählte Projekte",
        note: "Interfaces mit Atmosphäre und Sinn.",
        projects: {
          opusElite: {
            category: "Luxus-Schneiderei · Full-Stack-Commerce",
            description:
              "Ein filmisches Schneidererlebnis rund um Handwerk, Zurückhaltung und das Ritual, etwas Dauerhaftes zu wählen.",
          },
          cryptPulse: {
            category: "Krypto-Analyse · Produktentwicklung",
            description:
              "Eine fokussierte Marktübersicht, die Live-Kryptodaten klar und unmittelbar erfassbar macht.",
          },
          codeCoach: {
            category: "Lernplattform · Full Stack",
            description:
              "Eine geführte Coding-Umgebung, die Übung in sichtbaren, motivierenden Fortschritt verwandelt.",
          },
          kinfusion: {
            category: "Manufaktur-Kaffee · Frontend",
            description:
              "Ein ruhiges Kaffeehaus-Erlebnis, geprägt von Ritual, Herkunft und redaktioneller Gelassenheit.",
          },
          kinosmetics: {
            category: "Luxus-Beauty · Experience Design",
            description:
              "Ein sanftes, immersives Shopping-Konzept mit selbstbewusster Art Direction und mühelosem Browsing.",
          },
          flavorFusion: {
            category: "Zeitgenössische Gastronomie · Interface Design",
            description:
              "Ein filmisches Restauranterlebnis, bei dem zurückhaltende Interaktion Zutaten und Atmosphäre wirken lässt.",
          },
          hiPex: {
            category: "Digitales Konzept · Frontend",
            description:
              "Ein Private-Estates-Konzept, geprägt von filmischer Bildsprache, reduzierter Typografie und souveräner Interaktion.",
          },
          omegaServers: {
            category: "Cloud-Sicherheit · Frontend",
            description:
              "Ein vertrauensstarkes Infrastrukturkonzept, das komplexen Cloud-Schutz in ein präzises Produkterlebnis übersetzt.",
          },
          gothamBooks: {
            category: "Editorial Commerce · Full Stack",
            description:
              "Ein filmisches Erlebnis für eine unabhängige Buchhandlung, das atmosphärisches Storytelling mit einem vollständigen Katalog verbindet.",
          },
        },
      },
      story: {
        label: "04 · Werdegang",
        note: "Aus Neugier wurde Handwerk.",
        title: "Es begann mit dem kürzesten Heimweg.",
        paragraphs: [
          "In der Oberstufe zeichnete ein Informatiklehrer Dijkstras Algorithmus auf ein Smartboard. Die Route zwischen zwei Punkten war genau der Weg, den ich jeden Tag nach Hause ging. Ich musste verstehen, wie das möglich war — und habe damit eigentlich nie aufgehört.",
          "Seitdem habe ich an produktiven Projekten mitgewirkt, darunter Cinemos Corporate-Contact-Erlebnis, eigene vollständige Produkte entwickelt und gelernt, Technologie zugleich als Ingenieursdisziplin und kreatives Medium zu begreifen.",
          "Abseits des Bildschirms schreibe und produziere ich Musik in Cubase und FL Studio. Derselbe Instinkt verbindet beide Bereiche: genau hinhören, Überflüssiges entfernen und jede Ebene ihren Platz verdienen lassen.",
        ],
      },
      contactBand: {
        eyebrow: "Eine Rolle, ein Projekt oder eine Idee?",
        titleLead: "Lassen Sie uns etwas",
        titleAccent: "Besonderes schaffen.",
        link: "Gespräch beginnen",
        linkLabel: "Kontaktseite öffnen",
      },
    },
    projectCard: {
      websitePreview: "Website-Vorschau",
      projectInterface: "Projektoberfläche",
      pause: "Pause",
      preview: "Vorschau",
      pauseLabel: "Vorschau pausieren",
      playLabel: "Vorschau abspielen",
      stack: "Technologie-Stack",
      signature: "Technische Signatur",
      visit: "Projekt ansehen",
      visitLabel: "Öffnen",
    },
    contact: {
      hero: {
        eyebrow: "Kontakt · Neue Projekte · Chancen",
        titleLead: "Gute Arbeit beginnt mit",
        titleAccent: "einem echten Gespräch.",
        description:
          "Haben Sie eine Werkstudentenstelle, ein Produkt, das Klarheit braucht, oder eine Idee, die Form annehmen soll? Erzählen Sie mir, wo Sie stehen und wohin Sie möchten.",
      },
      direct: "Direkt",
      basedIn: "Standort",
      location: "Aachen, Deutschland",
      responseTime: "Antwortzeit",
      responseValue: "In der Regel innerhalb von 48 Stunden",
      languages: "Sprachen",
      languageValue: "Englisch · Deutsch · Türkisch · Rumänisch",
      form: {
        eyebrow: "Nachricht senden",
        title: "Was können wir gemeinsam schaffen?",
        nameLabel: "01 · Ihr Name",
        namePlaceholder: "Name",
        emailLabel: "02 · E-Mail-Adresse",
        emailPlaceholder: "sie@unternehmen.de",
        projectLabel: "03 · Es geht um",
        selectPlaceholder: "Bitte auswählen",
        options: [
          "Eine Werkstudentenstelle",
          "Eine Vollzeitstelle",
          "Ein Freelance-Projekt",
          "Eine Zusammenarbeit",
          "Etwas anderes",
        ],
        messageLabel: "04 · Erzählen Sie mir mehr",
        messagePlaceholder: "Ein paar Worte zur Rolle, zum Projekt oder zur Idee…",
        send: "Nachricht senden",
        sending: "Wird gesendet…",
        success: "Vielen Dank — Ihre Nachricht ist unterwegs.",
        error: "Etwas ist schiefgelaufen. Schreiben Sie mir bitte direkt per E-Mail.",
      },
    },
    footer: {
      lineOne: "Durchdachte Systeme.",
      lineTwo: "Leise, mutige Erlebnisse.",
      cv: "Lebenslauf",
      location: "Aachen, Deutschland · 50,7753° N",
      backToTop: "Nach oben ↑",
    },
    notFound: {
      eyebrow: "Ein schöner Umweg",
      titleLead: "Diese Seite hat",
      titleAccent: "den Raum verlassen.",
      description: "Die Adresse hat sich vielleicht geändert, doch der Rückweg ist einfach.",
      action: "Zur Startseite",
    },
  },
  tr: {
    meta: {
      title: "Baris Ekin Isik — Yazılım Mühendisi",
      description:
        "Baris Ekin Isik’in portfolyosu — hassas ve rafine web deneyimleri üreten ürün odaklı yazılım mühendisi.",
    },
    header: {
      homeLabel: "Baris Ekin Isik — Ana sayfa",
      menu: "Menü",
      close: "Kapat",
      languageLabel: "Dil seçin",
      enableNight: "Gece modunu aç",
      enableDay: "Gündüz modunu aç",
      nav: ["Profil", "Uzmanlık", "Projeler", "Hikâye"],
      contact: "Konuşalım",
    },
    home: {
      hero: {
        eyebrow: "Yazılım mühendisi · Aachen, Almanya",
        titleLead: "Dijital ürünler,",
        titleAccent: "niyetle tasarlanan.",
        lede:
          "Hassas sistemlerin dokunsal etkileşimle buluştuğu, rafine web deneyimleri tasarlıyor ve geliştiriyorum.",
        workAction: "Seçili projeleri keşfet",
        contactAction: "Bir sohbet başlat",
        portraitLabel: "Baris Ekin Isik portresi",
        availability: "Çalışan öğrenci pozisyonlarına açık",
        scroll: "Kaydır",
        scrollLabel: "Profile kaydır",
      },
      profile: {
        label: "01 · Profil",
        note: "Ürün içgüdüsüyle mühendislik.",
        statementLead: "En iyi dijital işler ",
        statementAccent: "kaçınılmaz",
        statementTail: " hissettirir — amacı net, uygulaması kusursuz ve kullanımı zahmetsizdir.",
        paragraphs: [
          "Bilgisayar bilimi öğrencisi ve full-stack geliştirici olarak TypeScript, React, Next.js, Node.js ve modern veri sistemleriyle özenli ürünler geliştiriyorum.",
          "Çalışmalarım arayüz detayından uygulama mimarisine rahatça uzanıyor. Görünmeyen kısımları da önemsiyorum: performans, erişilebilirlik, sürdürülebilir sistemler ve bir ürünü gerçekten düşünülmüş hissettiren küçük kararlar.",
        ],
        more: "Yolculuğum hakkında daha fazlası",
        metrics: [
          { value: "5+", label: "Yıl bağımsız geliştirme" },
          { value: "1,5+", label: "Yıl profesyonel deneyim" },
          { value: "360°", label: "Frontend’den backend’e ürün düşüncesi" },
        ],
      },
      expertise: {
        title: "Uzmanlık",
        note: "Küçük ve keskin bir araç seti — derinlemesine kullanılır.",
        stackLabel: "Teknoloji yığını",
        items: [
          {
            title: "Ürün odaklı mühendislik",
            description: "İlk ürün mantığından üretime hazır React ve Next.js sistemlerine.",
          },
          {
            title: "Arayüz & etkileşim",
            description: "Deneyimi destekleyen hareketlerle duyarlı ve erişilebilir arayüzler.",
          },
          {
            title: "Backend & veri",
            description: "Netlik ve ölçek için Node.js API’leri, kimlik doğrulama, SQL ve NoSQL verileri.",
          },
        ],
      },
      work: {
        label: "03 · Seçili projeler",
        note: "Atmosferi ve amacı olan arayüzler.",
        projects: {
          opusElite: {
            category: "Lüks terzilik · Full-stack ticaret",
            description:
              "Zanaat, sadelik ve kalıcı bir parça seçme ritüeli etrafında kurulan sinematik bir terzilik deneyimi.",
          },
          cryptPulse: {
            category: "Kripto analitiği · Ürün geliştirme",
            description:
              "Canlı kripto verilerini net ve anında anlaşılır kılan odaklı bir piyasa zekâsı deneyimi.",
          },
          codeCoach: {
            category: "Öğrenme platformu · Full stack",
            description:
              "Pratiği görünür ve motive edici ilerlemeye dönüştürmek için tasarlanmış rehberli bir kodlama ortamı.",
          },
          kinfusion: {
            category: "Butik kahve · Frontend",
            description:
              "Ritüel, köken ve editoryal bir sakinlik duygusu üzerine kurulu dengeli bir kahvehane deneyimi.",
          },
          kinosmetics: {
            category: "Lüks güzellik · Deneyim tasarımı",
            description:
              "Kendinden emin sanat yönetimi ve akıcı gezinme etrafında kurulan yumuşak, sürükleyici bir alışveriş konsepti.",
          },
          flavorFusion: {
            category: "Çağdaş gastronomi · Arayüz tasarımı",
            description:
              "Ölçülü etkileşimin malzemeleri ve atmosferi öne çıkardığı sinematik bir restoran deneyimi.",
          },
          hiPex: {
            category: "Dijital konsept · Frontend",
            description:
              "Sinematik görseller, ölçülü tipografi ve sessizce kendinden emin etkileşimle biçimlenen özel mülkler konsepti.",
          },
          omegaServers: {
            category: "Bulut güvenliği · Frontend",
            description:
              "Karmaşık bulut korumasını hassas ve güven veren bir ürün deneyimine dönüştüren yüksek güvenli altyapı konsepti.",
          },
          gothamBooks: {
            category: "Editoryal ticaret · Full stack",
            description:
              "Atmosferik hikâye anlatımını eksiksiz bir dijital katalogla birleştiren sinematik bağımsız kitapçı deneyimi.",
          },
        },
      },
      story: {
        label: "04 · Hikâye",
        note: "Merak bir zanaata dönüştü.",
        title: "Her şey eve giden en kısa yolla başladı.",
        paragraphs: [
          "Lisede bir bilişim öğretmeni akıllı tahtaya Dijkstra algoritmasını çizdi. İki nokta arasında bulduğu rota, her gün eve yürüdüğüm yolun aynısıydı. Bunun nasıl mümkün olduğunu anlamam gerekiyordu — ve aslında hiç durmadım.",
          "O zamandan beri Cinemo’nun kurumsal iletişim deneyimi dahil üretim projelerine katkıda bulundum, kendi eksiksiz ürünlerimi geliştirdim ve teknolojiyi hem bir mühendislik disiplini hem de yaratıcı bir mecra olarak görmeyi öğrendim.",
          "Ekrandan uzakta Cubase ve FL Studio’da müzik yazıp üretiyorum. Aynı içgüdü iki pratiği de birleştiriyor: dikkatle dinlemek, gereksiz olanı çıkarmak ve her katmanın yerini hak etmesini sağlamak.",
        ],
      },
      contactBand: {
        eyebrow: "Bir pozisyon, proje ya da fikriniz mi var?",
        titleLead: "Birlikte",
        titleAccent: "olağanüstü bir şey yapalım.",
        link: "Bir sohbet başlat",
        linkLabel: "İletişim sayfasını aç",
      },
    },
    projectCard: {
      websitePreview: "web sitesi önizlemesi",
      projectInterface: "proje arayüzü",
      pause: "Duraklat",
      preview: "Önizle",
      pauseLabel: "Önizlemeyi duraklat",
      playLabel: "Önizlemeyi oynat",
      stack: "teknoloji yığını",
      signature: "Teknik imza",
      visit: "Projeyi ziyaret et",
      visitLabel: "Ziyaret et",
    },
    contact: {
      hero: {
        eyebrow: "İletişim · Yeni işler · Fırsatlar",
        titleLead: "İyi işler",
        titleAccent: "gerçek bir sohbetle başlar.",
        description:
          "Bir çalışan öğrenci pozisyonunuz, netlik kazanması gereken bir ürününüz ya da şekillenmeye değer bir fikriniz mi var? Nerede olduğunuzu ve nereye ulaşmak istediğinizi anlatın.",
      },
      direct: "Doğrudan",
      basedIn: "Konum",
      location: "Aachen, Almanya",
      responseTime: "Yanıt süresi",
      responseValue: "Genellikle 48 saat içinde",
      languages: "Diller",
      languageValue: "İngilizce · Almanca · Türkçe · Romence",
      form: {
        eyebrow: "Bir not gönderin",
        title: "Birlikte ne yaratabiliriz?",
        nameLabel: "01 · Adınız",
        namePlaceholder: "Ad",
        emailLabel: "02 · E-posta adresi",
        emailPlaceholder: "siz@sirket.com",
        projectLabel: "03 · İletişim konusu",
        selectPlaceholder: "Birini seçin",
        options: [
          "Çalışan öğrenci fırsatı",
          "Tam zamanlı pozisyon",
          "Freelance proje",
          "İş birliği",
          "Başka bir konu",
        ],
        messageLabel: "04 · Biraz daha anlatın",
        messagePlaceholder: "Pozisyon, proje veya fikir hakkında birkaç kelime…",
        send: "Mesajı gönder",
        sending: "Gönderiliyor…",
        success: "Teşekkürler — mesajınız yola çıktı.",
        error: "Bir sorun oluştu. Lütfen doğrudan e-posta gönderin.",
      },
    },
    footer: {
      lineOne: "Özenli sistemler.",
      lineTwo: "Sessizce cesur deneyimler.",
      cv: "Özgeçmiş",
      location: "Aachen, Almanya · 50,7753° K",
      backToTop: "Yukarı dön ↑",
    },
    notFound: {
      eyebrow: "Güzel bir yanlış dönüş",
      titleLead: "Bu sayfa",
      titleAccent: "odayı terk etti.",
      description: "Adres değişmiş olabilir; geri dönüş yolu ise çok basit.",
      action: "Ana sayfaya dön",
    },
  },
  ro: {
    meta: {
      title: "Baris Ekin Isik — Inginer software",
      description:
        "Portofoliul lui Baris Ekin Isik — inginer software orientat spre produs, creator de experiențe web precise și rafinate.",
    },
    header: {
      homeLabel: "Baris Ekin Isik — Acasă",
      menu: "Meniu",
      close: "Închide",
      languageLabel: "Alege limba",
      enableNight: "Activează modul de noapte",
      enableDay: "Activează modul de zi",
      nav: ["Profil", "Expertiză", "Proiecte", "Poveste"],
      contact: "Să vorbim",
    },
    home: {
      hero: {
        eyebrow: "Inginer software · Aachen, Germania",
        titleLead: "Produse digitale,",
        titleAccent: "compuse cu intenție.",
        lede:
          "Proiectez și dezvolt experiențe web rafinate, în care sistemele precise întâlnesc interacțiunea tactilă.",
        workAction: "Descoperă proiectele selectate",
        contactAction: "Începe o conversație",
        portraitLabel: "Portretul lui Baris Ekin Isik",
        availability: "Disponibil pentru roluri de student angajat",
        scroll: "Derulează",
        scrollLabel: "Derulează la profil",
      },
      profile: {
        label: "01 · Profil",
        note: "Inginerie cu instinct de produs.",
        statementLead: "Cea mai bună muncă digitală pare ",
        statementAccent: "inevitabilă",
        statementTail: " — clară în scop, exactă în execuție și simplă în utilizare.",
        paragraphs: [
          "Sunt student la informatică și dezvoltator full-stack, construind produse atent gândite cu TypeScript, React, Next.js, Node.js și sisteme moderne de date.",
          "Munca mea trece firesc de la detaliul de interfață la arhitectura aplicației. Îmi pasă și de părțile invizibile: performanță, accesibilitate, sisteme ușor de întreținut și micile decizii care fac un produs să pară cu adevărat bine gândit.",
        ],
        more: "Mai multe despre parcursul meu",
        metrics: [
          { value: "5+", label: "Ani de dezvoltare independentă" },
          { value: "1,5+", label: "Ani de experiență profesională" },
          { value: "360°", label: "Gândire de produs, de la frontend la backend" },
        ],
      },
      expertise: {
        title: "Expertiză",
        note: "Un set restrâns și precis de instrumente — folosit în profunzime.",
        stackLabel: "Tehnologii",
        items: [
          {
            title: "Inginerie orientată spre produs",
            description: "De la logica inițială a produsului la sisteme React și Next.js pregătite pentru producție.",
          },
          {
            title: "Interfață & interacțiune",
            description: "Interfețe responsive și accesibile, cu mișcare care susține experiența.",
          },
          {
            title: "Backend & date",
            description: "API-uri Node.js, autentificare și date SQL sau NoSQL construite pentru claritate și scalare.",
          },
        ],
      },
      work: {
        label: "03 · Proiecte selectate",
        note: "Interfețe cu atmosferă și scop.",
        projects: {
          opusElite: {
            category: "Croitorie de lux · Comerț full-stack",
            description:
              "O experiență cinematografică de croitorie construită în jurul măiestriei, discreției și ritualului de a alege ceva durabil.",
          },
          cryptPulse: {
            category: "Analiză crypto · Dezvoltare de produs",
            description:
              "O experiență concentrată de analiză a pieței, care face datele crypto în timp real clare și imediate.",
          },
          codeCoach: {
            category: "Platformă educațională · Full stack",
            description:
              "Un mediu ghidat de programare, conceput să transforme practica în progres vizibil și motivant.",
          },
          kinfusion: {
            category: "Cafea artizanală · Frontend",
            description:
              "O experiență echilibrată de cafenea, construită în jurul ritualului, originii și unei liniști editoriale.",
          },
          kinosmetics: {
            category: "Frumusețe de lux · Design de experiență",
            description:
              "Un concept delicat și captivant de cumpărături, susținut de o direcție artistică sigură și navigare fluidă.",
          },
          flavorFusion: {
            category: "Gastronomie contemporană · Design de interfață",
            description:
              "O experiență cinematografică de restaurant, în care interacțiunea discretă lasă ingredientele și atmosfera să conducă.",
          },
          hiPex: {
            category: "Concept digital · Frontend",
            description:
              "Un concept de proprietăți private modelat prin imagini cinematografice, tipografie reținută și interacțiune calmă.",
          },
          omegaServers: {
            category: "Securitate cloud · Frontend",
            description:
              "Un concept de infrastructură bazat pe încredere, care transformă protecția cloud complexă într-o experiență precisă și sigură.",
          },
          gothamBooks: {
            category: "Comerț editorial · Full stack",
            description:
              "O experiență cinematografică de librărie independentă, care îmbină povestea atmosferică cu un catalog digital complet.",
          },
        },
      },
      story: {
        label: "04 · Poveste",
        note: "Curiozitatea a devenit meșteșug.",
        title: "Totul a început cu cel mai scurt drum spre casă.",
        paragraphs: [
          "În liceu, un profesor de informatică a desenat algoritmul lui Dijkstra pe o tablă inteligentă. Traseul găsit între două puncte era exact drumul pe care mergeam zilnic acasă. Trebuia să înțeleg cum era posibil — și, de fapt, nu m-am mai oprit.",
          "De atunci, am contribuit la proiecte de producție, inclusiv experiența corporate de contact Cinemo, am construit produse complete și am învățat să privesc tehnologia atât ca disciplină inginerească, cât și ca mediu creativ.",
          "Departe de ecran, scriu și produc muzică în Cubase și FL Studio. Același instinct unește ambele practici: să ascult atent, să elimin ce este inutil și să fac fiecare strat să își merite locul.",
        ],
      },
      contactBand: {
        eyebrow: "Ai un rol, un proiect sau o idee?",
        titleLead: "Să creăm ceva",
        titleAccent: "remarcabil.",
        link: "Începe o conversație",
        linkLabel: "Deschide pagina de contact",
      },
    },
    projectCard: {
      websitePreview: "previzualizare site",
      projectInterface: "interfață proiect",
      pause: "Pauză",
      preview: "Previzualizare",
      pauseLabel: "Pune previzualizarea pe pauză",
      playLabel: "Redă previzualizarea",
      stack: "tehnologii utilizate",
      signature: "Semnătură tehnică",
      visit: "Vizitează proiectul",
      visitLabel: "Vizitează",
    },
    contact: {
      hero: {
        eyebrow: "Contact · Proiecte noi · Oportunități",
        titleLead: "Munca bună începe cu",
        titleAccent: "o conversație reală.",
        description:
          "Ai un rol pentru un student angajat, un produs care are nevoie de claritate sau o idee care merită conturată? Spune-mi unde te afli și unde vrei să ajungi.",
      },
      direct: "Direct",
      basedIn: "Locație",
      location: "Aachen, Germania",
      responseTime: "Timp de răspuns",
      responseValue: "De obicei în maximum 48 de ore",
      languages: "Limbi",
      languageValue: "Engleză · Germană · Turcă · Română",
      form: {
        eyebrow: "Trimite un mesaj",
        title: "Ce putem crea împreună?",
        nameLabel: "01 · Numele tău",
        namePlaceholder: "Nume",
        emailLabel: "02 · Adresa de e-mail",
        emailPlaceholder: "tu@companie.ro",
        projectLabel: "03 · Motivul mesajului",
        selectPlaceholder: "Alege o opțiune",
        options: [
          "O oportunitate pentru student angajat",
          "Un rol full-time",
          "Un proiect freelance",
          "O colaborare",
          "Altceva",
        ],
        messageLabel: "04 · Spune-mi puțin mai mult",
        messagePlaceholder: "Câteva cuvinte despre rol, proiect sau idee…",
        send: "Trimite mesajul",
        sending: "Se trimite…",
        success: "Mulțumesc — mesajul tău este pe drum.",
        error: "A apărut o problemă. Te rog să îmi scrii direct prin e-mail.",
      },
    },
    footer: {
      lineOne: "Sisteme atent gândite.",
      lineTwo: "Experiențe discret îndrăznețe.",
      cv: "Curriculum Vitae",
      location: "Aachen, Germania · 50,7753° N",
      backToTop: "Înapoi sus ↑",
    },
    notFound: {
      eyebrow: "Un ocol frumos",
      titleLead: "Această pagină",
      titleAccent: "a părăsit încăperea.",
      description: "Este posibil ca adresa să se fi schimbat, dar drumul înapoi este simplu.",
      action: "Înapoi acasă",
    },
  },
} as const;

export type Translation = (typeof translations)[Language];

const supportedLanguages = new Set<Language>(languages.map(({ code }) => code));
const storageKey = "bei-language";

const isLanguage = (value: string | null | undefined): value is Language =>
  Boolean(value && supportedLanguages.has(value as Language));

export const languageFromUrl = () => {
  if (typeof window === "undefined") return null;
  const candidate = new URLSearchParams(window.location.search).get("lang")?.toLowerCase();
  return isLanguage(candidate) ? candidate : null;
};

export const initialLanguage = (): Language => {
  const urlLanguage = languageFromUrl();
  if (urlLanguage) return urlLanguage;

  try {
    const storedLanguage = window.localStorage.getItem(storageKey);
    if (isLanguage(storedLanguage)) return storedLanguage;
  } catch {
    // Storage can be unavailable in privacy-focused browsing modes.
  }

  const browserLanguage = window.navigator.language.split("-")[0].toLowerCase();
  return isLanguage(browserLanguage) ? browserLanguage : "en";
};

export const updateLanguageUrl = (language: Language) => {
  const url = new URL(window.location.href);
  if (language === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", language);
  }
  window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
};

export const localizedPath = (path: string, language: Language, hash = "") =>
  `${path}${language === "en" ? "" : `?lang=${language}`}${hash}`;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const persistLanguage = (language: Language) => {
  try {
    window.localStorage.setItem(storageKey, language);
  } catch {
    // The active language still works for the current session.
  }
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
