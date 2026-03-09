const storageKey = "neuros-language";
const formspreePlaceholder = "https://formspree.io/f/your-form-id";

const texts = {
  de: {
    pageTitle: "neurOS | Ein freundlicheres Betriebssystem für ADHS-Gehirne",
    metaDescription:
      "neurOS ist eine Wellness- und Community-Plattform für erwachsene ADHS-Gehirne: App, Tools, Community und Wissen für mehr Struktur im Alltag.",
    heroEyebrow: "neurOS",
    heroTitle: "Ein freundlicheres Betriebssystem\nfür ADHS-Gehirne.",
    heroSubtitle: "App. Tools. Community. Wissen.\nGebaut von jemandem der es selbst braucht.",
    heroCta: "Auf die Warteliste →",
    heroSecondary: "Oder erstmal stöbern ↓",
    ecosystemKicker: "Was hier entsteht",
    ecosystemTitle: "Ein Dach für Alltag, Tools und ehrliche Begleitung.",
    cards: [
      {
        icon: "🧠",
        title: "Die App",
        copy:
          "Morgens 3 Sachen. Abends was du geschafft hast. Kleine Begleiter die mit dir wachsen. Kein Streak-Druck.",
        status: "→ Bald verfügbar",
      },
      {
        icon: "🔧",
        title: "Micro-Tools",
        copy: "Fokus-Check, Tagesplaner, Brain Dump. Direkt nutzbar. Kein Account nötig.",
        status: "→ Bald verfügbar",
      },
      {
        icon: "👥",
        title: "Community",
        copy: "Ein Ort für Leute deren Gehirn anders tickt. Ehrlich, ohne Guru-Vibes.",
        status: "→ Bald verfügbar",
      },
    ],
    numbersKicker: "Warum das wichtig ist",
    numbersSource:
      "Quellen: DGPPN, Bundesärztekammer. Schätzungen für Erwachsene mit ADHS in Deutschland.",
    stats: [
      {
        value: "2-3 Mio",
        target: 2500000,
        format: "millions",
        description: "Erwachsene mit ADHS in Deutschland. Die meisten ohne passende Tools.",
      },
      {
        value: "0",
        target: 0,
        format: "zero",
        description: "Deutschsprachige ADHS-Apps. Null. Keine einzige.",
      },
      {
        value: "6-12 Monate",
        target: 12,
        format: "range",
        description: "Wartezeit auf eine ADHS-Diagnose. Unikliniken haben Aufnahmestopp.",
      },
    ],
    toolKicker: "Micro-Tool Teaser",
    toolTitle: "Wie ADHS-fähig ist dein Tag gerade?",
    toolCopy: "3 kurze Fragen. Ein ehrlicher Tipp. Kein Account. Keine E-Mail.",
    toolIntroText: "3 kurze Fragen. Ein ehrlicher Tipp. Kein Account. Keine E-Mail.",
    toolStart: "Fokus-Check starten",
    toolStepLabel: "Frage {current} von {total}",
    toolResultKicker: "Dein ehrlicher Tipp",
    toolResultFollowup: "Willst du solche Tools täglich? neurOS baut genau das.",
    toolResultCta: "Auf die Warteliste →",
    toolRestart: "Nochmal machen ↺",
    brainKicker: "Micro-Tool",
    brainTitle: "Alles raus aus dem Kopf.",
    brainCopy:
      "Schreib alles auf was dich gerade beschäftigt. Wir sortieren es für dich. Kein Account. Nichts wird gespeichert.",
    brainInputLabel: "Was geht dir gerade durch den Kopf?",
    brainPlaceholder:
      "Was geht dir gerade durch den Kopf? Einfach losschreiben... Jeder Gedanke in eine neue Zeile.",
    brainSort: "Sortieren →",
    brainFollowup:
      "Sieht schon sortierter aus, oder? In der neurOS-App macht das eine KI — noch genauer, noch schneller.",
    brainCta: "Auf die Warteliste →",
    brainRestart: "Nochmal machen ↺",
    brainEmpty: "Schreib erst ein paar Gedanken auf. Eine Zeile reicht schon für den Anfang.",
    brainCategories: {
      tasks: "🎯 Tasks",
      ideas: "💡 Ideen",
      worries: "🌧️ Sorgen",
      notes: "📝 Notizen",
    },
    appKicker: "Ein Blick in die App",
    appTitle: "So fühlt sich neurOS an.",
    appCopy: "Noch in Entwicklung. Aber schon nutzbar.",
    appNote: "Kein Streak-Druck. Kein schlechtes Gewissen. Nur ein ruhiger Start und ein ehrliches Ende.",
    appCta: "Auf die Warteliste →",
    appScreens: [
      {
        screenLabel: "Morgen-Screen",
        greeting: "Guten Morgen, Max 👋",
        date: "Mittwoch, 12. März",
        heading: "Deine Top 3 für heute:",
        items: [
          { mark: "☐", text: "Steuererklärung abschicken" },
          { mark: "☐", text: "neurOS Homepage deployen" },
          { mark: "☐", text: "20 Min spazieren gehen" },
        ],
        accent: "Lumino ist wach und motiviert 🌟",
        footer: "",
        button: "",
      },
      {
        screenLabel: "Abend-Screen",
        greeting: "Wie war dein Tag? 🌙",
        date: "",
        heading: "Geschafft heute:",
        items: [
          { mark: "✅", text: "Steuererklärung abschicken" },
          { mark: "✅", text: "neurOS Homepage deployen" },
          { mark: "☐", text: "20 Min spazieren → auf morgen schieben?" },
        ],
        accent: "Lumino hat sich gefreut 🌟",
        footer: "+12 XP verdient",
        button: "Gute Nacht, bis morgen",
      },
    ],
    founderKicker: "Wer steckt dahinter?",
    founderTitle: "Ich hab vor einem Jahr rausgefunden, dass mein Gehirn anders tickt.",
    founderCopy: "Seitdem baue ich das, was mir immer gefehlt hat.",
    founderHighlight: "Kein Guru. Kein Plan. Nur Anfang.",
    founderCta: "Folg mir auf X → @neuro_pilot",
    faqKicker: "Häufige Fragen",
    faqTitle: "Gute Fragen. Ehrliche Antworten.",
    faqItems: [
      {
        question: "Ist neurOS eine Therapie-App?",
        answer:
          "Nein. neurOS ist eine Wellness- und Lifestyle-App. Wir helfen dir, deinen Alltag besser zu strukturieren — aber wir ersetzen keine Therapie, keine Diagnose und keine ärztliche Behandlung. Wenn du professionelle Hilfe brauchst, such dir bitte einen Arzt oder Therapeuten.",
      },
      {
        question: "Was kostet neurOS?",
        answer:
          "Aktuell: nichts. Die Basis-App und die Micro-Tools bleiben kostenlos. Später wird es Premium-Features geben (z.B. erweiterte KI-Analysen, Community-Bereich) — aber es wird immer eine kostenlose Version geben.",
      },
      {
        question: "Wann kommt die App?",
        answer:
          "Die App existiert bereits als Prototyp. Beta-Zugang bekommst du über die Warteliste. Wir bauen in Echtzeit und teilen Updates offen auf X (@neuro_pilot).",
      },
      {
        question: "Muss ich eine ADHS-Diagnose haben?",
        answer:
          "Nein. neurOS ist für alle die das Gefühl haben, ihr Gehirn tickt etwas anders. Ob diagnostiziert, vermutet, oder einfach neugierig — du bist willkommen.",
      },
      {
        question: "Wer baut das?",
        answer:
          "Eine Person mit ADHS, unterstützt von KI. Kein Startup mit 50 Mitarbeitern. Kein VC-Geld. Ein Mensch der baut was ihm selbst gefehlt hat. Mehr auf X: @neuro_pilot.",
      },
      {
        question: "Werden meine Daten gespeichert?",
        answer:
          "Die Micro-Tools auf der Website speichern nichts — alles passiert in deinem Browser und wird danach vergessen. Die App nutzt localStorage auf deinem Gerät. Deine Daten gehören dir.",
      },
    ],
    waitlistKicker: "Waitlist",
    waitlistTitle: "neurOS entsteht gerade. Offen. Ehrlich. In Echtzeit.",
    benefits: [
      "Updates wenn neue Tools live gehen",
      "Beta-Zugang zur App",
      "Kein Spam. Versprochen. Ein ADHS-Gehirn schreibt keine Newsletter-Serie.",
    ],
    emailLabel: "Deine E-Mail",
    emailPlaceholder: "du@beispiel.de",
    personaLabel: "Ich bin...",
    personaPlaceholder: "Bitte auswählen",
    personaOptions: [
      "ADHS-Betroffene/r",
      "Vermute ADHS",
      "Angehörige/r",
      "Einfach neugierig",
    ],
    waitlistSubmit: "Auf die Liste →",
    formNote: "Kein Spam. Versprochen. Ein ADHS-Gehirn schreibt keine Newsletter-Serie.",
    formSuccess: "Du bist dabei! Wir melden uns. (Wahrscheinlich nicht pünktlich. Du weißt ja. ADHS.)",
    footerTitle: "neurOS — Ein anderes Betriebssystem für andere Gehirne.",
    footerSignature: "Kein Guru. Kein Plan. Nur Anfang. 🧠⚡",
    footerTools: "Tools · Bald verfügbar",
    footerBlog: "Blog · Bald verfügbar",
    footerCommunity: "Community · Bald verfügbar",
    footerContact: "Kontakt · Bald verfügbar",
    footerX: "X (@neuro_pilot)",
    questions: [
      {
        key: "mind",
        title: "Wie fühlt sich dein Kopf gerade an?",
        answers: [
          { value: "foggy", label: "Nebelig" },
          { value: "restless", label: "Unruhig" },
          { value: "overloaded", label: "Überladen" },
          { value: "okay", label: "Eigentlich ok" },
        ],
      },
      {
        key: "load",
        title: "Was steht heute an?",
        answers: [
          { value: "too_much", label: "Viel zu viel" },
          { value: "some", label: "Ein paar Sachen" },
          { value: "nothing", label: "Nichts konkretes" },
          { value: "unknown", label: "Weiß ich nicht" },
        ],
      },
      {
        key: "sleep",
        title: "Wie hast du geschlafen?",
        answers: [
          { value: "bad", label: "Schlecht" },
          { value: "okay", label: "Ok" },
          { value: "good", label: "Gut" },
        ],
      },
    ],
    results: {
      grace_one_thing: {
        title: "Heute braucht dein Gehirn Gnade, nicht mehr Druck.",
        body:
          "Schreib EINE Sache auf, die heute wirklich zählt. Nur eine. Den Rest darf heute jemand anderes erledigen. Oder niemand.",
      },
      braindump_then_three: {
        title: "Die Energie ist da. Sie springt nur überall hin.",
        body:
          "Nimm dir 10 Minuten für einen Brain Dump. Alles raus. Dann pick genau 3 Sachen. Nicht 12. Nicht vielleicht. Drei.",
      },
      overwhelm_alarm: {
        title: "Overwhelm-Alarm erkannt.",
        body:
          "Atme 3 Mal tief ein. Dann frag dich: Welche EINE Sache hätte heute den größten Effekt, wenn sie erledigt ist? Mach nur die zuerst.",
      },
      momentum_day: {
        title: "Guter Tag erwischt.",
        body:
          "Nutze die Klarheit für das Projekt, das du seit Wochen vor dir herschiebst. Nicht alles. Genau das eine, das dir schon zu lange im Nacken sitzt.",
      },
      prune_and_start: {
        title: "Du hast Energie. Der Tag ist nur zu voll.",
        body:
          "Streich erst 30 Prozent von der Liste. Dann starte mit der kleinsten sinnvollen Aufgabe, die dich in Bewegung bringt. Momentum schlägt Perfektion.",
      },
      gentle_reset: {
        title: "Heute klingt nach weichem Neustart.",
        body:
          "Kein klarer Plan ist auch ein Signal. Trink Wasser, beweg dich 5 Minuten und schreib dann 3 mögliche nächste Schritte auf. Einer davon reicht.",
      },
      externalize_noise: {
        title: "Dein Kopf ist laut. Mach ihn sichtbar.",
        body:
          "Hol alles aus dem Kopf auf Papier oder in Notizen. Danach setz dir einen Timer auf 12 Minuten und fang mit der nervigsten Mini-Sache an.",
      },
      sort_maybe_later: {
        title: "Du bist nicht faul. Es ist einfach gerade viel.",
        body:
          "Teile alles in drei Spalten: Muss heute. Wäre gut. Nicht heute. Erst wenn 'Muss heute' kurz ist, darf irgendwas anderes Aufmerksamkeit bekommen.",
      },
      low_battery_day: {
        title: "Heute ist eher Energiesparmodus.",
        body:
          "Mach den Tag kleiner. Licht an, Wasser trinken, Körper kurz wecken und dann eine winzige Aufgabe wählen, die in unter 10 Minuten fertig ist.",
      },
      protect_good_day: {
        title: "Nicht schlecht. Nur leicht fragil.",
        body:
          "Wenn der Kopf okay ist, schütze das. Starte nicht mit Nachrichten oder Chaos. Mach zuerst 20 ruhige Minuten an etwas, das dir später Luft verschafft.",
      },
      use_open_space: {
        title: "Freiraum kann kippen. Oder helfen.",
        body:
          "Wenn heute nichts Konkretes ansteht, bau dir freiwillig Struktur: ein kleiner Block für Ordnung, einer für etwas Schönes, einer für Erholung.",
      },
      next_step_only: {
        title: "Du musst nicht den ganzen Tag lösen.",
        body:
          "Finde nur den nächsten klaren Schritt. So klein, dass Widerstand peinlich wirkt. Danach schaust du weiter. Jetzt zählt nur der Einstieg.",
      },
    },
  },
  en: {
    pageTitle: "neurOS | A friendlier operating system for ADHD brains",
    metaDescription:
      "neurOS is a wellness and community platform for adult ADHD brains: app, tools, community, and knowledge for a more structured everyday life.",
    heroEyebrow: "neurOS",
    heroTitle: "A friendlier operating system\nfor ADHD brains.",
    heroSubtitle: "App. Tools. Community. Knowledge.\nBuilt by someone who needs it himself.",
    heroCta: "Join the waitlist →",
    heroSecondary: "Or explore first ↓",
    ecosystemKicker: "What’s being built here",
    ecosystemTitle: "One roof for everyday structure, tools, and honest support.",
    cards: [
      {
        icon: "🧠",
        title: "The App",
        copy:
          "3 things in the morning. What you achieved in the evening. Little companions that grow with you. No streak pressure.",
        status: "→ Coming soon",
      },
      {
        icon: "🔧",
        title: "Micro-Tools",
        copy: "Focus check, daily planner, brain dump. Use directly. No account needed.",
        status: "→ Coming soon",
      },
      {
        icon: "👥",
        title: "Community",
        copy: "A place for people whose brains work differently. Honest, no guru vibes.",
        status: "→ Coming soon",
      },
    ],
    numbersKicker: "Why this matters",
    numbersSource:
      "Sources: DGPPN, German Medical Association. Estimates for adults with ADHD in Germany.",
    stats: [
      {
        value: "2-3M",
        target: 2500000,
        format: "millions",
        description: "Adults with ADHD in Germany. Most without proper tools.",
      },
      {
        value: "0",
        target: 0,
        format: "zero",
        description: "German-language ADHD apps. Zero. Not a single one.",
      },
      {
        value: "6-12 months",
        target: 12,
        format: "range",
        description: "Wait time for an ADHD diagnosis. University clinics have stopped accepting patients.",
      },
    ],
    toolKicker: "Micro-Tool teaser",
    toolTitle: "How ADHD-friendly does your day feel right now?",
    toolCopy: "3 short questions. One honest tip. No account. No email.",
    toolIntroText: "3 short questions. One honest tip. No account. No email.",
    toolStart: "Start the focus check",
    toolStepLabel: "Question {current} of {total}",
    toolResultKicker: "Your honest tip",
    toolResultFollowup: "Want tools like this every day? That’s exactly what neurOS is building.",
    toolResultCta: "Join the waitlist →",
    toolRestart: "Try again ↺",
    brainKicker: "Micro-Tool",
    brainTitle: "Get everything out of your head.",
    brainCopy:
      "Write down everything on your mind. We'll sort it for you. No account. Nothing is saved.",
    brainInputLabel: "What's going through your head right now?",
    brainPlaceholder:
      "What's going through your head right now? Just start writing... Each thought on a new line.",
    brainSort: "Sort →",
    brainFollowup:
      "Looks more sorted already, right? In the neurOS app, AI does this — even more accurately, even faster.",
    brainCta: "Join the waitlist →",
    brainRestart: "Try again ↺",
    brainEmpty: "Write down a few thoughts first. One line is enough to start.",
    brainCategories: {
      tasks: "🎯 Tasks",
      ideas: "💡 Ideas",
      worries: "🌧️ Worries",
      notes: "📝 Notes",
    },
    appKicker: "A look inside the app",
    appTitle: "This is what neurOS feels like.",
    appCopy: "Still in development. But already usable.",
    appNote: "No streak pressure. No guilt. Just a calm start and an honest ending.",
    appCta: "Join the waitlist →",
    appScreens: [
      {
        screenLabel: "Morning screen",
        greeting: "Good morning, Max 👋",
        date: "Wednesday, March 12",
        heading: "Your top 3 for today:",
        items: [
          { mark: "☐", text: "Send off tax return" },
          { mark: "☐", text: "Deploy neurOS homepage" },
          { mark: "☐", text: "20 min walk" },
        ],
        accent: "Lumino is awake and motivated 🌟",
        footer: "",
        button: "",
      },
      {
        screenLabel: "Evening screen",
        greeting: "How was your day? 🌙",
        date: "",
        heading: "Done today:",
        items: [
          { mark: "✅", text: "Send off tax return" },
          { mark: "✅", text: "Deploy neurOS homepage" },
          { mark: "☐", text: "20 min walk → move to tomorrow?" },
        ],
        accent: "Lumino was happy 🌟",
        footer: "+12 XP earned",
        button: "Good night, see you tomorrow",
      },
    ],
    founderKicker: "Who’s behind this?",
    founderTitle: "A year ago I found out my brain works differently.",
    founderCopy: "Since then I've been building what I always needed.",
    founderHighlight: "No guru. No plan. Just a beginning.",
    founderCta: "Follow me on X → @neuro_pilot",
    faqKicker: "FAQ",
    faqTitle: "Good questions. Honest answers.",
    faqItems: [
      {
        question: "Is neurOS a therapy app?",
        answer:
          "No. neurOS is a wellness and lifestyle app. We help you structure your daily life better — but we don't replace therapy, diagnosis, or medical treatment. If you need professional help, please reach out to a doctor or therapist.",
      },
      {
        question: "How much does neurOS cost?",
        answer:
          "Currently: nothing. The base app and micro-tools will remain free. Later there will be premium features (e.g., advanced AI analytics, community access) — but there will always be a free version.",
      },
      {
        question: "When will the app be available?",
        answer:
          "The app already exists as a prototype. You can get beta access through the waitlist. We build in real time and share updates openly on X (@neuro_pilot).",
      },
      {
        question: "Do I need an ADHD diagnosis?",
        answer:
          "No. neurOS is for anyone who feels their brain works a little differently. Whether diagnosed, suspected, or just curious — you're welcome.",
      },
      {
        question: "Who’s building this?",
        answer:
          "One person with ADHD, supported by AI. Not a startup with 50 employees. No VC money. One human building what they always needed. More on X: @neuro_pilot.",
      },
      {
        question: "Is my data being stored?",
        answer:
          "The micro-tools on the website store nothing — everything happens in your browser and is forgotten after. The app uses localStorage on your device. Your data belongs to you.",
      },
    ],
    waitlistKicker: "Waitlist",
    waitlistTitle: "neurOS is being built right now. Openly. Honestly. In real time.",
    benefits: [
      "Updates when new tools go live",
      "Beta access to the app",
      "No spam. Promise. An ADHD brain doesn't write newsletter series.",
    ],
    emailLabel: "Your email",
    emailPlaceholder: "you@example.com",
    personaLabel: "I am...",
    personaPlaceholder: "Please choose",
    personaOptions: ["Living with ADHD", "Suspect ADHD", "Family/friend", "Just curious"],
    waitlistSubmit: "Join the list →",
    formNote: "No spam. Promise. An ADHD brain doesn't write newsletter series.",
    formSuccess: "You're in! We'll be in touch. (Probably not on time. You know. ADHD.)",
    footerTitle: "neurOS — A different operating system for different brains.",
    footerSignature: "No guru. No plan. Just a beginning. 🧠⚡",
    footerTools: "Tools · Coming soon",
    footerBlog: "Blog · Coming soon",
    footerCommunity: "Community · Coming soon",
    footerContact: "Contact · Coming soon",
    footerX: "X (@neuro_pilot)",
    questions: [
      {
        key: "mind",
        title: "How does your head feel right now?",
        answers: [
          { value: "foggy", label: "Foggy" },
          { value: "restless", label: "Restless" },
          { value: "overloaded", label: "Overloaded" },
          { value: "okay", label: "Actually okay" },
        ],
      },
      {
        key: "load",
        title: "What’s on your plate today?",
        answers: [
          { value: "too_much", label: "Way too much" },
          { value: "some", label: "A few things" },
          { value: "nothing", label: "Nothing specific" },
          { value: "unknown", label: "I have no idea" },
        ],
      },
      {
        key: "sleep",
        title: "How did you sleep?",
        answers: [
          { value: "bad", label: "Bad" },
          { value: "okay", label: "Okay" },
          { value: "good", label: "Good" },
        ],
      },
    ],
    results: {
      grace_one_thing: {
        title: "Your brain needs grace today, not more discipline.",
        body:
          "Write down ONE thing that truly matters today. Just one. The rest can be done by someone else. Or by no one.",
      },
      braindump_then_three: {
        title: "The energy is there. It’s just bouncing everywhere.",
        body:
          "Take 10 minutes for a brain dump. Everything out. Then pick exactly 3 things. Not 12. Not maybe. Three.",
      },
      overwhelm_alarm: {
        title: "Overwhelm alarm is going off.",
        body:
          "Take 3 slow breaths. Then ask: what is the ONE thing that would change the feel of today if it got done? Start there and keep the rest parked.",
      },
      momentum_day: {
        title: "You caught a good day.",
        body:
          "Use the clarity for the project you’ve been avoiding for weeks. Not everything. Just the one that’s been sitting on your shoulders the longest.",
      },
      prune_and_start: {
        title: "You have energy. The day is just overbooked.",
        body:
          "Cut 30 percent from the list first. Then start with the smallest useful task that gets you moving. Momentum beats perfection.",
      },
      gentle_reset: {
        title: "This sounds like a soft reset kind of day.",
        body:
          "No clear plan is a signal too. Drink water, move for 5 minutes, then write down 3 possible next steps. One of them is enough.",
      },
      externalize_noise: {
        title: "Your head is loud. Make it visible.",
        body:
          "Get everything out of your head onto paper or notes. Then set a 12-minute timer and begin with the most annoying tiny task.",
      },
      sort_maybe_later: {
        title: "You’re not lazy. It’s just a lot right now.",
        body:
          "Split everything into three columns: must today, would be nice, not today. Only when 'must today' is short does anything else get attention.",
      },
      low_battery_day: {
        title: "Today is more power-saving mode than performance mode.",
        body:
          "Make the day smaller. Turn on the lights, drink water, wake up your body a bit, then choose one tiny task that can be finished in under 10 minutes.",
      },
      protect_good_day: {
        title: "Not bad. Just a little fragile.",
        body:
          "If your head feels okay, protect that. Don’t start with messages or chaos. Start with 20 quiet minutes on something that gives future-you breathing room.",
      },
      use_open_space: {
        title: "Open space can drift. Or help.",
        body:
          "If nothing specific is planned today, build some structure on purpose: one small block for order, one for something enjoyable, one for recovery.",
      },
      next_step_only: {
        title: "You do not have to solve the whole day.",
        body:
          "Find only the next clear step. So small that resistance looks a little silly. After that, decide again. Right now the entrance matters.",
      },
    },
  },
};

const resultRules = [
  {
    id: "grace_one_thing",
    match: { mind: ["foggy"], load: ["too_much"], sleep: ["bad"] },
  },
  {
    id: "braindump_then_three",
    match: { mind: ["restless"], load: ["some"], sleep: ["okay"] },
  },
  {
    id: "overwhelm_alarm",
    match: { mind: ["overloaded"], load: ["too_much"], sleep: ["bad", "okay"] },
  },
  {
    id: "momentum_day",
    match: { mind: ["okay"], load: ["some"], sleep: ["good"] },
  },
  {
    id: "prune_and_start",
    match: { mind: ["okay"], load: ["too_much"], sleep: ["good", "okay"] },
  },
  {
    id: "gentle_reset",
    match: { mind: ["foggy"], load: ["nothing", "unknown"], sleep: ["bad", "okay", "good"] },
  },
  {
    id: "externalize_noise",
    match: { mind: ["restless"], load: ["too_much", "unknown"], sleep: ["bad", "okay", "good"] },
  },
  {
    id: "sort_maybe_later",
    match: { mind: ["overloaded"], load: ["some", "nothing", "unknown"], sleep: ["good", "okay"] },
  },
  {
    id: "low_battery_day",
    match: { mind: ["foggy", "restless", "overloaded"], load: ["some", "nothing", "unknown", "too_much"], sleep: ["bad"] },
  },
  {
    id: "protect_good_day",
    match: { mind: ["okay"], load: ["some", "unknown"], sleep: ["bad", "okay"] },
  },
  {
    id: "use_open_space",
    match: { mind: ["okay", "restless"], load: ["nothing"], sleep: ["good", "okay"] },
  },
  {
    id: "next_step_only",
    match: { mind: ["foggy", "restless", "overloaded", "okay"], load: ["too_much", "some", "nothing", "unknown"], sleep: ["bad", "okay", "good"] },
  },
];

const brainDumpMatchers = {
  idea:
    /\b(könnte|koennte|vielleicht|was wäre wenn|was waere wenn|idee|maybe|idea|what if|could)\b/i,
  worry:
    /\b(angst|sorge|stress|nervt|problem|worried|afraid|anxious|overwhelm|deadline)\b/i,
  task:
    /\b(muss|sollte|erledigen|machen|kaufen|anrufen|schreiben|fertig|termin|need to|should|must|do|call|buy|finish)\b/i,
  startsWithVerb:
    /^(anrufen|schreiben|machen|kaufen|erledigen|planen|zahlen|buchen|organisieren|sortieren|reply|send|call|buy|finish|book|pay|plan|organize|write|do)\b/i,
};

const state = {
  lang: "de",
  stepIndex: -1,
  answers: {},
  statsAnimated: false,
  brainDumpMode: "input",
  brainDumpBuckets: null,
  faqOpen: 0,
};

let revealObserver;
let statsObserver;
let parallaxNodes = [];
let parallaxEnabled = false;
let parallaxTicking = false;

const elements = {
  heroEyebrow: document.getElementById("hero-eyebrow"),
  heroTitle: document.getElementById("hero-title"),
  heroSubtitle: document.getElementById("hero-subtitle"),
  heroCta: document.getElementById("hero-cta"),
  heroSecondary: document.getElementById("hero-secondary"),
  ecosystemKicker: document.getElementById("ecosystem-kicker"),
  ecosystemTitle: document.getElementById("ecosystem-title"),
  featureCards: document.getElementById("feature-cards"),
  numbersKicker: document.getElementById("numbers-kicker"),
  statsGrid: document.getElementById("stats-grid"),
  numbersSource: document.getElementById("numbers-source"),
  toolKicker: document.getElementById("tool-kicker"),
  toolTitle: document.getElementById("tool-title"),
  toolCopy: document.getElementById("tool-copy"),
  toolIntroText: document.getElementById("tool-intro-text"),
  toolStart: document.getElementById("tool-start"),
  toolProgressBar: document.getElementById("tool-progress-bar"),
  toolIntro: document.getElementById("tool-intro"),
  toolQuestion: document.getElementById("tool-question"),
  toolStep: document.getElementById("tool-step"),
  toolQuestionTitle: document.getElementById("tool-question-title"),
  toolAnswers: document.getElementById("tool-answers"),
  toolResult: document.getElementById("tool-result"),
  toolResultKicker: document.getElementById("tool-result-kicker"),
  toolResultTitle: document.getElementById("tool-result-title"),
  toolResultText: document.getElementById("tool-result-text"),
  toolResultFollowup: document.getElementById("tool-result-followup"),
  toolResultCta: document.getElementById("tool-result-cta"),
  toolRestart: document.getElementById("tool-restart"),
  brainKicker: document.getElementById("brain-kicker"),
  brainTitle: document.getElementById("brain-title"),
  brainCopy: document.getElementById("brain-copy"),
  brainInputLabel: document.getElementById("brain-input-label"),
  brainInput: document.getElementById("brain-input"),
  brainSort: document.getElementById("brain-sort"),
  brainInputView: document.getElementById("brain-input-view"),
  brainResult: document.getElementById("brain-result"),
  brainGrid: document.getElementById("brain-grid"),
  brainFollowup: document.getElementById("brain-followup"),
  brainCta: document.getElementById("brain-cta"),
  brainRestart: document.getElementById("brain-restart"),
  appKicker: document.getElementById("app-kicker"),
  appTitle: document.getElementById("app-title"),
  appCopy: document.getElementById("app-copy"),
  appPreviewTrack: document.getElementById("app-preview-track"),
  appNote: document.getElementById("app-note"),
  appCta: document.getElementById("app-cta"),
  founderKicker: document.getElementById("founder-kicker"),
  founderTitle: document.getElementById("founder-title"),
  founderCopy: document.getElementById("founder-copy"),
  founderHighlight: document.getElementById("founder-highlight"),
  founderCta: document.getElementById("founder-cta"),
  faqKicker: document.getElementById("faq-kicker"),
  faqTitle: document.getElementById("faq-title"),
  faqList: document.getElementById("faq-list"),
  waitlistKicker: document.getElementById("waitlist-kicker"),
  waitlistTitle: document.getElementById("waitlist-title"),
  benefitList: document.getElementById("benefit-list"),
  emailLabel: document.getElementById("email-label"),
  emailInput: document.getElementById("email"),
  personaLabel: document.getElementById("persona-label"),
  personaSelect: document.getElementById("persona"),
  waitlistSubmit: document.getElementById("waitlist-submit"),
  formNote: document.getElementById("form-note"),
  formSuccess: document.getElementById("form-success"),
  formLanguage: document.getElementById("form-language"),
  metaOgTitle: document.getElementById("meta-og-title"),
  metaOgDescription: document.getElementById("meta-og-description"),
  metaOgImage: document.getElementById("meta-og-image"),
  metaOgUrl: document.getElementById("meta-og-url"),
  metaTwitterTitle: document.getElementById("meta-twitter-title"),
  metaTwitterDescription: document.getElementById("meta-twitter-description"),
  metaTwitterImage: document.getElementById("meta-twitter-image"),
  footerTitle: document.getElementById("footer-title"),
  footerSignature: document.getElementById("footer-signature"),
  footerTools: document.getElementById("footer-tools"),
  footerBlog: document.getElementById("footer-blog"),
  footerCommunity: document.getElementById("footer-community"),
  footerContact: document.getElementById("footer-contact"),
  footerX: document.getElementById("footer-x"),
  langButtons: Array.from(document.querySelectorAll(".lang-button")),
  waitlistForm: document.getElementById("waitlist-form"),
};

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored && texts[stored]) {
      return stored;
    }
  } catch {
    return navigator.language && navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
  }

  return navigator.language && navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
}

function setLanguage(lang) {
  state.lang = texts[lang] ? lang : "de";
  try {
    localStorage.setItem(storageKey, state.lang);
  } catch {
    // Ignore storage restrictions and keep the current session state only.
  }
  document.documentElement.lang = state.lang;
  document.title = texts[state.lang].pageTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", texts[state.lang].metaDescription);
  }

  renderStaticContent();
  renderCards();
  renderStats();
  renderPersonaOptions();
  renderFocusCheck();
  renderBrainDump();
  renderAppPreview();
  renderFaq();
  syncLanguageButtons();
  if (elements.formLanguage) {
    elements.formLanguage.value = state.lang;
  }
  updateSocialMeta();
  setupStatsObserver();
}

function updateSocialMeta() {
  const copy = texts[state.lang];
  const pageUrl = new URL("./", window.location.href).href;
  const imageUrl = new URL("./social-preview.svg", window.location.href).href;

  if (elements.metaOgTitle) {
    elements.metaOgTitle.setAttribute("content", copy.pageTitle);
  }
  if (elements.metaOgDescription) {
    elements.metaOgDescription.setAttribute("content", copy.metaDescription);
  }
  if (elements.metaOgImage) {
    elements.metaOgImage.setAttribute("content", imageUrl);
  }
  if (elements.metaOgUrl) {
    elements.metaOgUrl.setAttribute("content", pageUrl);
  }
  if (elements.metaTwitterTitle) {
    elements.metaTwitterTitle.setAttribute("content", copy.pageTitle);
  }
  if (elements.metaTwitterDescription) {
    elements.metaTwitterDescription.setAttribute("content", copy.metaDescription);
  }
  if (elements.metaTwitterImage) {
    elements.metaTwitterImage.setAttribute("content", imageUrl);
  }
}

function renderStaticContent() {
  const copy = texts[state.lang];
  elements.heroEyebrow.textContent = copy.heroEyebrow;
  elements.heroTitle.innerHTML = copy.heroTitle.replace("\n", "<br />");
  elements.heroSubtitle.innerHTML = copy.heroSubtitle.replace("\n", "<br />");
  elements.heroCta.textContent = copy.heroCta;
  elements.heroSecondary.textContent = copy.heroSecondary;
  elements.ecosystemKicker.textContent = copy.ecosystemKicker;
  elements.ecosystemTitle.textContent = copy.ecosystemTitle;
  elements.numbersKicker.textContent = copy.numbersKicker;
  elements.numbersSource.textContent = copy.numbersSource;
  elements.toolKicker.textContent = copy.toolKicker;
  elements.toolTitle.textContent = copy.toolTitle;
  elements.toolCopy.textContent = copy.toolCopy;
  elements.toolIntroText.textContent = copy.toolIntroText;
  elements.toolStart.textContent = copy.toolStart;
  elements.toolResultKicker.textContent = copy.toolResultKicker;
  elements.toolResultFollowup.textContent = copy.toolResultFollowup;
  elements.toolResultCta.textContent = copy.toolResultCta;
  elements.toolRestart.textContent = copy.toolRestart;
  elements.brainKicker.textContent = copy.brainKicker;
  elements.brainTitle.textContent = copy.brainTitle;
  elements.brainCopy.textContent = copy.brainCopy;
  elements.brainInputLabel.textContent = copy.brainInputLabel;
  elements.brainInput.placeholder = copy.brainPlaceholder;
  elements.brainSort.textContent = copy.brainSort;
  elements.brainFollowup.textContent = copy.brainFollowup;
  elements.brainCta.textContent = copy.brainCta;
  elements.brainRestart.textContent = copy.brainRestart;
  elements.appKicker.textContent = copy.appKicker;
  elements.appTitle.textContent = copy.appTitle;
  elements.appCopy.textContent = copy.appCopy;
  elements.appNote.textContent = copy.appNote;
  elements.appCta.textContent = copy.appCta;
  elements.founderKicker.textContent = copy.founderKicker;
  elements.founderTitle.textContent = copy.founderTitle;
  elements.founderCopy.textContent = copy.founderCopy;
  elements.founderHighlight.textContent = copy.founderHighlight;
  elements.founderCta.textContent = copy.founderCta;
  elements.faqKicker.textContent = copy.faqKicker;
  elements.faqTitle.textContent = copy.faqTitle;
  elements.waitlistKicker.textContent = copy.waitlistKicker;
  elements.waitlistTitle.textContent = copy.waitlistTitle;
  elements.emailLabel.textContent = copy.emailLabel;
  elements.emailInput.placeholder = copy.emailPlaceholder;
  elements.personaLabel.textContent = copy.personaLabel;
  elements.waitlistSubmit.textContent = copy.waitlistSubmit;
  elements.formNote.textContent = copy.formNote;
  elements.footerTitle.textContent = copy.footerTitle;
  elements.footerSignature.textContent = copy.footerSignature;
  elements.footerTools.textContent = copy.footerTools;
  elements.footerBlog.textContent = copy.footerBlog;
  elements.footerCommunity.textContent = copy.footerCommunity;
  elements.footerContact.textContent = copy.footerContact;
  elements.footerX.textContent = copy.footerX;

  elements.benefitList.innerHTML = copy.benefits.map((benefit) => `<li>${benefit}</li>`).join("");

  if (!elements.formSuccess.hidden) {
    elements.formSuccess.textContent = copy.formSuccess;
  }
}

function renderCards() {
  const copy = texts[state.lang];
  elements.featureCards.innerHTML = copy.cards
    .map(
      (card) => `
        <article class="feature-card reveal">
          <div class="card-icon" aria-hidden="true">${card.icon}</div>
          <h3 class="card-title">${card.title}</h3>
          <p class="card-copy">${card.copy}</p>
          <p class="card-status">${card.status}</p>
        </article>
      `,
    )
    .join("");

  observeReveals(elements.featureCards.querySelectorAll(".reveal"));
}

function renderStats() {
  const copy = texts[state.lang];
  elements.statsGrid.innerHTML = copy.stats
    .map(
      (item, index) => `
        <article class="stat-card">
          <div
            class="stat-value${state.statsAnimated && item.format === "zero" ? " is-zero-pop" : ""}"
            data-target="${item.target}"
            data-final="${item.value}"
            data-format="${item.format}"
            data-index="${index}"
          >
            ${state.statsAnimated ? item.value : ""}
          </div>
          <p class="stat-description">${item.description}</p>
        </article>
      `,
    )
    .join("");
}

function renderBrainDump() {
  const copy = texts[state.lang];
  const hasResult = state.brainDumpMode === "result" && state.brainDumpBuckets;

  elements.brainInputView.hidden = hasResult;
  elements.brainResult.hidden = !hasResult;

  if (!hasResult) {
    elements.brainGrid.innerHTML = "";
    return;
  }

  const categories = ["tasks", "ideas", "worries", "notes"];
  const visibleCards = categories.filter((key) => state.brainDumpBuckets[key].length > 0);

  elements.brainGrid.innerHTML = visibleCards
    .map((key, index) => {
      const items = state.brainDumpBuckets[key];
      return `
        <article class="feature-card brain-dump-card" style="animation-delay:${index * 100}ms">
          <h3 class="brain-dump-card-title">${copy.brainCategories[key]} (${items.length})</h3>
          <ul class="brain-dump-list">
            ${items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `;
    })
    .join("");
}

function renderAppPreview() {
  const copy = texts[state.lang];
  elements.appPreviewTrack.innerHTML = copy.appScreens
    .map(
      (screen, screenIndex) => `
        <article class="phone-mockup">
          <div class="phone-frame">
            <div class="phone-notch" aria-hidden="true"></div>
            <div class="phone-screen">
              <p class="tool-step phone-chip" style="transition-delay:${80 + screenIndex * 120}ms">${screen.screenLabel}</p>
              <div>
                <p class="phone-chip" style="transition-delay:${120 + screenIndex * 120}ms">${screen.greeting}</p>
                ${screen.date ? `<p class="phone-date" style="transition-delay:${170 + screenIndex * 120}ms">${screen.date}</p>` : ""}
              </div>
              <div>
                <h3 class="phone-heading" style="transition-delay:${220 + screenIndex * 120}ms">${screen.heading}</h3>
                <ul class="phone-list">
                  ${screen.items
                    .map(
                      (item, itemIndex) => `
                        <li class="phone-list-item" style="transition-delay:${280 + screenIndex * 120 + itemIndex * 70}ms">
                          <span class="phone-check">${item.mark}</span>
                          <span>${item.text}</span>
                        </li>
                      `,
                    )
                    .join("")}
                </ul>
              </div>
              <div class="phone-accent phone-badge" style="transition-delay:${520 + screenIndex * 120}ms">${screen.accent}</div>
              ${screen.footer ? `<p class="phone-footer phone-xp" style="transition-delay:${580 + screenIndex * 120}ms">${screen.footer}</p>` : ""}
              ${screen.button ? `<div class="phone-button" style="transition-delay:${640 + screenIndex * 120}ms">${screen.button}</div>` : ""}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFaq() {
  const copy = texts[state.lang];
  elements.faqList.innerHTML = copy.faqItems
    .map((item, index) => {
      const isOpen = index === state.faqOpen;
      return `
        <article class="faq-item${isOpen ? " is-open" : ""}">
          <h3>
            <button
              class="faq-question"
              type="button"
              data-faq-index="${index}"
              aria-expanded="${String(isOpen)}"
              aria-controls="faq-answer-${index}"
              id="faq-question-${index}"
            >
              <span>${item.question}</span>
              <span class="faq-icon" aria-hidden="true">${isOpen ? "−" : "+"}</span>
            </button>
          </h3>
          <div
            class="faq-answer-wrap"
            id="faq-answer-${index}"
            role="region"
            aria-labelledby="faq-question-${index}"
          >
            <div class="faq-answer">
              <p>${item.answer}</p>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPersonaOptions() {
  const copy = texts[state.lang];
  const currentValue = elements.personaSelect.value;
  elements.personaSelect.innerHTML = `
    <option value="" disabled selected>${copy.personaPlaceholder}</option>
    ${copy.personaOptions.map((option) => `<option value="${option}">${option}</option>`).join("")}
  `;

  if (copy.personaOptions.includes(currentValue)) {
    elements.personaSelect.value = currentValue;
  } else {
    elements.personaSelect.value = "";
  }
}

function syncLanguageButtons() {
  elements.langButtons.forEach((button) => {
    const isActive = button.dataset.lang === state.lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderFocusCheck() {
  const copy = texts[state.lang];
  const questions = copy.questions;

  if (state.stepIndex < 0) {
    elements.toolProgressBar.style.width = "0%";
    elements.toolIntro.hidden = false;
    elements.toolQuestion.hidden = true;
    elements.toolResult.hidden = true;
    return;
  }

  if (state.stepIndex < questions.length) {
    const question = questions[state.stepIndex];
    const progress = ((state.stepIndex + 1) / questions.length) * 100;

    elements.toolProgressBar.style.width = `${progress}%`;
    elements.toolIntro.hidden = true;
    elements.toolQuestion.hidden = false;
    elements.toolResult.hidden = true;
    elements.toolStep.textContent = copy.toolStepLabel
      .replace("{current}", String(state.stepIndex + 1))
      .replace("{total}", String(questions.length));
    elements.toolQuestionTitle.textContent = question.title;
    elements.toolAnswers.innerHTML = question.answers
      .map(
        (answer) => `
          <button class="answer-button" type="button" data-value="${answer.value}">
            ${answer.label}
          </button>
        `,
      )
      .join("");

    Array.from(elements.toolAnswers.querySelectorAll(".answer-button")).forEach((button) => {
      button.addEventListener("click", () => handleAnswer(question.key, button.dataset.value));
    });

    return;
  }

  const result = getResultCopy();
  elements.toolProgressBar.style.width = "100%";
  elements.toolIntro.hidden = true;
  elements.toolQuestion.hidden = true;
  elements.toolResult.hidden = false;
  elements.toolResultTitle.textContent = result.title;
  elements.toolResultText.textContent = result.body;
}

function handleAnswer(key, value) {
  state.answers[key] = value;
  state.stepIndex += 1;
  renderFocusCheck();
}

function startFocusCheck() {
  state.answers = {};
  state.stepIndex = 0;
  renderFocusCheck();
}

function restartFocusCheck() {
  state.answers = {};
  state.stepIndex = -1;
  renderFocusCheck();
}

function getResultCopy() {
  const matchedRule = resultRules.find((rule) =>
    Object.entries(rule.match).every(([key, accepted]) => accepted.includes(state.answers[key])),
  );
  const ruleId = matchedRule ? matchedRule.id : "next_step_only";
  return texts[state.lang].results[ruleId];
}

function setupStatsObserver() {
  if (statsObserver) {
    statsObserver.disconnect();
  }

  const section = document.getElementById("numbers");
  if (!section || state.statsAnimated) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    state.statsAnimated = true;
    renderStats();
    return;
  }

  statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !state.statsAnimated) {
          state.statsAnimated = true;
          animateStats();
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 },
  );

  statsObserver.observe(section);
}

function animateStats() {
  const statValues = Array.from(elements.statsGrid.querySelectorAll(".stat-value"));
  statValues.forEach((element, index) => {
    const target = Number(element.dataset.target);
    const finalText = element.dataset.final || "";
    const format = element.dataset.format || "range";

    if (format === "zero") {
      window.setTimeout(() => {
        element.textContent = finalText;
        element.classList.add("is-zero-pop");
      }, 240 + index * 120);
      return;
    }

    const duration = 1200 + index * 120;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const current = target * (1 - Math.pow(1 - progress, 3));
      element.textContent = formatAnimatedStat(current, format);

      if (progress < 1) {
        requestAnimationFrame(tick);
        return;
      }

      element.textContent = finalText;
    }

    requestAnimationFrame(tick);
  });
}

function formatAnimatedStat(value, format) {
  if (format === "millions") {
    return new Intl.NumberFormat(state.lang === "de" ? "de-DE" : "en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 1,
    }).format(value);
  }

  return String(Math.max(0, Math.round(value)));
}

function sortBrainDumpLines(lines) {
  return lines.reduce(
    (buckets, line) => {
      const normalized = line.trim().toLowerCase();

      if (!normalized) {
        return buckets;
      }

      if (brainDumpMatchers.idea.test(normalized)) {
        buckets.ideas.push(line.trim());
        return buckets;
      }

      if (brainDumpMatchers.worry.test(normalized)) {
        buckets.worries.push(line.trim());
        return buckets;
      }

      if (brainDumpMatchers.startsWithVerb.test(normalized) || brainDumpMatchers.task.test(normalized)) {
        buckets.tasks.push(line.trim());
        return buckets;
      }

      buckets.notes.push(line.trim());
      return buckets;
    },
    { tasks: [], ideas: [], worries: [], notes: [] },
  );
}

function runBrainDump() {
  const lines = elements.brainInput.value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    elements.brainInput.setCustomValidity(texts[state.lang].brainEmpty);
    elements.brainInput.reportValidity();
    window.setTimeout(() => elements.brainInput.setCustomValidity(""), 1000);
    return;
  }

  state.brainDumpBuckets = sortBrainDumpLines(lines);
  state.brainDumpMode = "result";
  renderBrainDump();
}

function resetBrainDump() {
  state.brainDumpMode = "input";
  state.brainDumpBuckets = null;
  elements.brainInput.value = "";
  renderBrainDump();
  elements.brainInput.focus();
}

function toggleFaq(index) {
  state.faqOpen = state.faqOpen === index ? -1 : index;
  renderFaq();
}

function setupParallax() {
  parallaxNodes = Array.from(document.querySelectorAll("[data-parallax]"));
  updateParallaxMode();
  window.addEventListener("scroll", requestParallaxFrame, { passive: true });
  window.addEventListener("resize", updateParallaxMode);
}

function updateParallaxMode() {
  parallaxEnabled = window.innerWidth > 768 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!parallaxEnabled) {
    parallaxNodes.forEach((node) => {
      if (node.classList.contains("orb")) {
        node.style.setProperty("--parallax-offset", "0px");
      } else {
        node.style.transform = "translateY(0px)";
      }
    });
    return;
  }

  requestParallaxFrame();
}

function requestParallaxFrame() {
  if (!parallaxEnabled || parallaxTicking) {
    return;
  }

  parallaxTicking = true;
  requestAnimationFrame(() => {
    const scrollY = window.scrollY;

    parallaxNodes.forEach((node) => {
      const factor = Number(node.dataset.parallax || 0);
      const offset = scrollY * factor * 0.25;

      if (node.classList.contains("orb")) {
        node.style.setProperty("--parallax-offset", `${offset}px`);
      } else {
        node.style.transform = `translateY(${offset}px)`;
      }
    });

    parallaxTicking = false;
  });
}

function setupRevealObserver() {
  const revealed = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealed.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
  );

  observeReveals(revealed);
}

function observeReveals(nodes) {
  nodes.forEach((element) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("is-visible");
      return;
    }

    if (revealObserver && !element.classList.contains("is-visible")) {
      revealObserver.observe(element);
    }
  });
}

function setupEvents() {
  elements.langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const smoothAnchor = document.getElementById("hero-secondary");
  if (smoothAnchor) {
    smoothAnchor.addEventListener("click", (event) => {
      const targetId = smoothAnchor.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  elements.toolStart.addEventListener("click", startFocusCheck);
  elements.toolRestart.addEventListener("click", restartFocusCheck);
  elements.brainSort.addEventListener("click", runBrainDump);
  elements.brainRestart.addEventListener("click", resetBrainDump);
  elements.brainInput.addEventListener("input", () => elements.brainInput.setCustomValidity(""));

  elements.faqList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-faq-index]");
    if (!button) {
      return;
    }

    toggleFaq(Number(button.dataset.faqIndex));
  });

  elements.waitlistForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!elements.waitlistForm.reportValidity()) {
      return;
    }

    const endpoint = elements.waitlistForm.dataset.formspreeEndpoint || elements.waitlistForm.action;
    const payload = {
      email: elements.emailInput.value,
      persona: elements.personaSelect.value,
      _subject: "neurOS Waitlist",
      _language: state.lang,
    };

    if (!endpoint || endpoint === formspreePlaceholder) {
      elements.formSuccess.hidden = false;
      elements.formSuccess.textContent =
        state.lang === "de"
          ? "Fast fertig: Trag nur noch deine echte Formspree-URL in index.html ein, dann werden Eintraege versendet."
          : "Almost done: add your real Formspree URL in index.html and submissions will be delivered.";
      return;
    }

    elements.waitlistSubmit.disabled = true;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      elements.formSuccess.hidden = false;
      elements.formSuccess.textContent = texts[state.lang].formSuccess;
      elements.waitlistForm.reset();
      elements.personaSelect.value = "";
      if (elements.formLanguage) {
        elements.formLanguage.value = state.lang;
      }
    } catch {
      elements.formSuccess.hidden = false;
      elements.formSuccess.textContent =
        state.lang === "de"
          ? "Das Senden hat gerade nicht geklappt. Versuch es gleich nochmal."
          : "Submitting did not work right now. Please try again in a moment.";
    } finally {
      elements.waitlistSubmit.disabled = false;
    }
  });

  document.querySelectorAll("[data-placeholder='true']").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });
}

setupRevealObserver();
setupEvents();
setupParallax();
setLanguage(getInitialLanguage());
