/* ============================================
   neurOS Landing Page — script.js
   Language switcher, Focus Check, Animations
   ============================================ */

// --- Bilingual Texts ---
const texts = {
  de: {
    // Nav
    nav_logo: 'neur<span>OS</span>',

    // Hero
    hero_label: 'Für ADHS-Gehirne gebaut',
    hero_title: 'Ein freundlicheres\nBetriebssystem.',
    hero_subtitle: 'App. Tools. Community. Wissen.\nGebaut von jemandem, der es selbst braucht.',
    hero_cta: 'Auf die Warteliste →',
    hero_explore: 'Sieh neurOS in Aktion ↓',

    // Cards
    cards_title: 'Was hier entsteht',
    card1_title: 'Die App',
    card1_text: 'Morgens 3 Sachen. Abends was du geschafft hast. Kleine Begleiter die mit dir wachsen. Kein Streak-Druck.',
    card1_badge: '→ Bald verfügbar',
    card2_title: 'Micro-Tools',
    card2_text: 'Fokus-Check, Tagesplaner, Brain Dump. Direkt nutzbar. Kein Account nötig.',
    card2_badge: '→ Bald verfügbar',
    card3_title: 'Community',
    card3_text: 'Ein Ort für Leute deren Gehirn anders tickt. Ehrlich, ohne Guru-Vibes.',
    card3_badge: '→ Bald verfügbar',

    // Tools section
    tools_title: 'Probier\'s aus',
    tools_subtitle: 'Zwei kleine Werkzeuge. Kein Login. Kein Bullshit.',

    // Brain Dump Demo
    bd_title: 'Brain Dump',
    bd_subtitle: 'Was neurOS mit deinem Kopfchaos macht',
    bd_btn_text: 'neurOS sortiert →',
    bd_sorting_text: 'neurOS bringt Ordnung rein',
    bd_outro: 'Du musst nicht alles sofort lösen. Nur das Nächste sehen.',
    bd_reset_text: 'Nochmal ↺',
    bd_label_now: 'Jetzt',
    bd_label_later: 'Später',
    bd_label_noise: 'Kopfrauschen',
    bd_tab_0: 'Überfordert',
    bd_tab_1: 'Offene Loops',
    bd_tab_2: 'Gedankensalat',
    bd_scenarios: [
      {
        chips: [
          'Einkaufen', 'Arzttermin verschieben', 'Kind abholen',
          'ich schaff das nicht', 'Steuererklärung', 'Sport?!',
          'Wäsche seit 3 Tagen', 'alles zu viel'
        ],
        noise: [3, 7],
        now: ['Kind abholen', 'Arzttermin verschieben', 'Einkaufen'],
        later: ['Steuererklärung', 'Wäsche machen'],
        headnoise: ['Ich schaff das nicht — doch, eins nach dem anderen', 'Alles zu viel — ist es nicht, fühlt sich nur so an', 'Sport? Vielleicht morgen.']
      },
      {
        chips: [
          'Rückruf Werkstatt', 'Paket zurückschicken', 'Mail von gestern',
          'Zahnarzt Termin machen', 'Projekt-Update schreiben',
          'hab ich das abgeschlossen?', 'Rechnung bezahlen'
        ],
        noise: [5],
        now: ['Rückruf Werkstatt', 'Mail von gestern beantworten', 'Rechnung bezahlen'],
        later: ['Paket zurückschicken', 'Zahnarzt Termin machen', 'Projekt-Update schreiben'],
        headnoise: ['Hab ich das abgeschlossen? — Check die Liste, nicht den Kopf.']
      },
      {
        chips: [
          'neue App-Idee', 'was wollte ich googeln?', 'Podcast nachhören',
          'warum bin ich hier reingegangen?', 'Geburtstag planen',
          'Buch weiterlesen', 'Fenster putzen', 'Ohrwurm seit Montag'
        ],
        noise: [1, 3, 7],
        now: ['Geburtstag planen — Datum checken', 'Podcast nachhören'],
        later: ['App-Idee festhalten', 'Buch weiterlesen', 'Fenster putzen'],
        headnoise: ['Was wollte ich googeln? — Kommt wieder.', 'Warum bin ich hier reingegangen? — Klassiker.', 'Ohrwurm? Lass ihn.']
      }
    ],

    // Focus Check
    tool_title: 'Fokus-Check',
    tool_subtitle: 'Wie ADHS-fähig ist dein Tag gerade?',
    tool_desc: '3 kurze Fragen. Ein ehrlicher Tipp. Kein Account. Keine E-Mail.',
    tool_start: 'Los geht\'s',

    fc_q1: 'Wie fühlt sich dein Kopf gerade an?',
    fc_q1_opts: ['Nebelig', 'Unruhig', 'Überladen', 'Eigentlich ok'],
    fc_q2: 'Was steht heute an?',
    fc_q2_opts: ['Viel zu viel', 'Ein paar Sachen', 'Nichts konkretes', 'Weiß ich nicht'],
    fc_q3: 'Wie hast du geschlafen?',
    fc_q3_opts: ['Schlecht', 'Ok', 'Gut'],

    fc_results: {
      // [head][day][sleep] — head: 0=Nebelig,1=Unruhig,2=Überladen,3=Ok — day: 0=Viel,1=Paar,2=Nichts,3=Weißnicht — sleep: 0=Schlecht,1=Ok,2=Gut
      '0_0_0': 'Dein Gehirn braucht gerade Gnade, nicht Disziplin. Schreib EINE Sache auf die heute wirklich zählt. Nur eine. Den Rest darf heute jemand anderes erledigen — oder niemand.',
      '0_0_1': 'Nebel plus Überlastung — kein gutes Duo. Trink erstmal was, beweg dich 5 Minuten. Dann: Was ist die kleinste Sache auf der Liste die du in 10 Minuten erledigen kannst? Fang damit an.',
      '0_0_2': 'Gut geschlafen aber trotzdem Nebel? Dein Gehirn braucht Anlaufzeit. Gib dir 30 Minuten ohne Druck, dann greif dir die wichtigste Aufgabe.',
      '0_1_0': 'Nebel + wenig Schlaf, aber machbarer Tag. Sei nett zu dir. Mach die einfachsten Sachen zuerst — kleine Erfolgserlebnisse heben den Nebel.',
      '0_1_1': 'Leichter Nebeltag. Nicht ideal, nicht schlimm. Starte mit einer klaren Liste: Was sind die 3 Sachen die heute wirklich dran sind? Alles andere darf warten.',
      '0_1_2': 'Ausgeschlafen aber nebelig — das kennt man. Der Nebel lichtet sich meist nach der ersten erledigten Aufgabe. Pick dir eine kleine, starte einfach.',
      '0_2_0': 'Nebel, nichts los, schlecht geschlafen. Das ist ein Selbstfürsorge-Tag. Mach was dir gut tut. Die Welt dreht sich auch ohne deine Produktivität weiter.',
      '0_2_1': 'Entspannter Tag, leichter Nebel. Perfekt für die Sache die du seit Wochen aufschiebst — aber ohne Druck. Wenn nichts geht, ist das auch ok.',
      '0_2_2': 'Nebelig aber entspannt und ausgeschlafen? Guter Tag für kreative Sachen. Der Nebel kann manchmal neue Ideen freisetzen. Lass dich treiben.',
      '0_3_0': 'Nebel und keine Ahnung was ansteht — plus wenig Schlaf. Schritt 1: Aufschreiben was im Kopf rumschwirrt. Schritt 2: Die 1 wichtigste Sache markieren. Schritt 3: Nur die machen.',
      '0_3_1': 'Du weißt nicht was ansteht und der Kopf ist nebelig. Brain Dump: 5 Minuten alles aufschreiben was dir einfällt. Dann sortieren. Klarheit kommt durchs Aufschreiben.',
      '0_3_2': 'Ausgeschlafen aber nebelig und planlos? Perfekter Moment für einen Brain Dump. Schreib alles auf, dann such dir die eine Sache raus die dich am meisten entlastet.',

      '1_0_0': 'Unruhig, zu viel zu tun, schlecht geschlafen — Overwhelm-Alarm. Atme 3x tief ein. Dann: Was ist die EINE Sache die du heute schaffen musst? Fokus nur darauf.',
      '1_0_1': 'Die Energie springt und die Liste ist lang. Schreib alles auf (Brain Dump), dann pick die 3 wichtigsten. Timer auf 25 Minuten, eine Aufgabe. Pause. Repeat.',
      '1_0_2': 'Unruhig aber ausgeschlafen mit vollem Tag? Die Energie ist da — kanalisier sie. Nimm dir 10 Minuten, schreib alles auf was in deinem Kopf ist, dann pick die 3 wichtigsten Sachen.',
      '1_1_0': 'Unruhige Energie + wenig Schlaf. Gefährliche Kombi für impulsive Entscheidungen. Mach heute nur was auf der Liste steht. Keine neuen Projekte anfangen.',
      '1_1_1': 'Machbarer Tag, unruhiger Kopf. Klassiker. Body Doubling kann helfen — ruf jemanden an oder setz dich in ein Café. Manchmal reicht fremde Anwesenheit um den Fokus zu finden.',
      '1_1_2': 'Gut geschlafen, ein paar Sachen zu tun, aber unruhig? Beweg dich erstmal — Spaziergang, Stretching, irgendwas. Dann setz dich ran. Die Unruhe legt sich oft nach 15 Minuten Fokus.',
      '1_2_0': 'Unruhig aber nichts zu tun und schlecht geschlafen? Dein Körper sagt dir was. Ruh dich aus. Wenn die Unruhe bleiben will: Bewegung hilft mehr als Bildschirmzeit.',
      '1_2_1': 'Unruhige Energie ohne konkreten Plan. Nutze das: Was ist das Ding das du ewig vor dir herschiebst? Diese rastlose Energie könnte genau richtig dafür sein.',
      '1_2_2': 'Ausgeschlafen, unruhig, frei — das ist Potenzial. Schnapp dir das Projekt das du seit Wochen vor dir herschiebst. Die Unruhe wird zu Produktivität wenn du sie lässt.',
      '1_3_0': 'Unruhig, planlos, müde — zappelig und orientierungslos. Stopp. Trink Wasser. Iss was. Dann 5 Minuten aufschreiben was im Kopf ist. Die Basics zuerst.',
      '1_3_1': 'Du weißt nicht was ansteht und bist unruhig? Das ist dein Gehirn das nach Struktur schreit. 5 Minuten Brain Dump, dann die 3 wichtigsten Sachen raussuchen.',
      '1_3_2': 'Ausgeschlafen, unruhig, keine Ahnung was los ist — mach einen Brain Dump. Schreib 5 Minuten alles auf. Die Klarheit kommt durchs Sortieren.',

      '2_0_0': 'Overwhelm-Alarm. Atme 3x tief ein. Dann: Was ist die EINE Sache die — wenn du sie heute schaffst — den Tag gerettet hat? Mach nur die.',
      '2_0_1': 'Überladen mit vollem Tag. Dein Gehirn screamed nach Ordnung. Schritt 1: Alles aufschreiben. Schritt 2: Priorisieren. Schritt 3: Nur Top 3. Rest streichen.',
      '2_0_2': 'Gut geschlafen aber komplett überladen? Dein Kopf hat über Nacht zu viel gesammelt. Brain Dump: Alles raus auf Papier. Dann priorisieren. Die Energie vom Schlaf nutzen.',
      '2_1_0': 'Überladen bei wenig Schlaf — sei vorsichtig mit dir. Reduzier den Tag auf das absolute Minimum. Was MUSS heute passieren? Nur das.',
      '2_1_1': 'Kopf voll, machbarer Tag. Schreib alles auf was dich belastet — auch die Sachen die nicht auf der To-Do-Liste stehen. Manchmal ist der Kopf voll von Sorgen, nicht von Aufgaben.',
      '2_1_2': 'Ausgeschlafen aber Kopf zu voll? Strukturier den Tag: Morgen die wichtigste Aufgabe, Nachmittag den Rest. Abends Brain Dump für morgen. So leerst du den Kopf Stück für Stück.',
      '2_2_0': 'Überladen obwohl nichts ansteht? Schlecht geschlafen? Das ist emotionaler Overwhelm. Schreib auf was dich belastet — nicht To-Dos, sondern Gefühle und Gedanken.',
      '2_2_1': 'Kopf voll, Tag leer. Das Überladene kommt von innen, nicht von außen. Gönn dir was Schönes und lass die Gedanken ziehen. Morgen sieht die Welt anders aus.',
      '2_2_2': 'Ausgeschlafen, nix zu tun, aber Kopf explodiert? Brain Dump. Alles raus. Dann sortieren: Was davon ist real, was ist ADHS-Kopfkino?',
      '2_3_0': 'Überladen, planlos, müde — Triple Threat. Heute ist nicht dein Tag und das ist ok. Eine Sache erledigen, dann Feierabend für den Kopf.',
      '2_3_1': 'Kopf voll und du weißt nicht wohin damit? Schritt 1: Alles aufschreiben. Wirklich alles. Schritt 2: Durchatmen. Schritt 3: Die 1 wichtigste Sache markieren.',
      '2_3_2': 'Ausgeschlafen aber überladen und planlos? Der Schlaf gibt dir die Kraft heute aufzuräumen. Brain Dump: Alles raus, dann sortieren.',

      '3_0_0': 'Ok im Kopf aber voller Tag + wenig Schlaf? Nutze die mentale Klarheit solange sie da ist. Die wichtigste Aufgabe JETZT anpacken, bevor die Müdigkeit kommt.',
      '3_0_1': 'Guter Kopf, voller Tag. Solide Ausgangslage. Mach eine kurze Prioliste und arbeite sie von oben nach unten ab. Heute wird was geschafft.',
      '3_0_2': 'Guter Tag erwischt! Klarer Kopf, ausgeschlafen, voller Tag — das ist dein Power-Tag. Die schwierigste Aufgabe zuerst, den Rest erledigst du im Flow.',
      '3_1_0': 'Kopf ok, machbarer Tag, wenig Schlaf. Ganz ok! Aber tank nicht über. Erledige was ansteht und gönn dir heute Abend früh Ruhe.',
      '3_1_1': 'Solider Tag. Klarer Kopf, machbare Liste. Nichts Besonderes nötig — einfach loslegen. Manchmal sind die normalen Tage die besten.',
      '3_1_2': 'Guter Tag erwischt! Nutze die Klarheit: Was ist das Projekt das du seit Wochen vor dir herschiebst? Heute ist der Tag dafür.',
      '3_2_0': 'Kopf klar, nix los, schlecht geschlafen — ruh dich aus. Oder: Nutze die mentale Klarheit für Planung. Was steht diese Woche an? Vorausdenken wenn der Kopf es zulässt.',
      '3_2_1': 'Klarer Kopf und freier Tag? Seltene Kombi. Tu was dir Spaß macht — oder nimm dir das eine Projekt vor das immer liegen bleibt.',
      '3_2_2': 'Jackpot-Tag. Ausgeschlafen, klarer Kopf, keine Verpflichtungen. Mach was Kreatives. Oder das Ding das du seit 3 Monaten aufschiebst. Dein Gehirn ist ready.',
      '3_3_0': 'Kopf ok, kein Plan, müde — mach dir einen einfachen Plan für den Tag und halte dich dran. Nichts Wildes, nur Struktur.',
      '3_3_1': 'Klarer Kopf aber keine Ahnung was ansteht? 5 Minuten Brainstorm: Was müsste diese Woche passieren? Pick 1-2 Sachen für heute.',
      '3_3_2': 'Ausgeschlafen, klarer Kopf, kein Plan — der perfekte Moment um mal in Ruhe zu planen. Was sind deine Ziele diese Woche? Schreib sie auf.',
    },

    fc_result_cta: 'Willst du solche Tools täglich? neurOS baut genau das.',
    fc_result_waitlist: 'Auf die Warteliste →',
    fc_result_restart: 'Nochmal machen ↺',

    // About
    about_title: 'Wer steckt dahinter?',
    about_text: 'Ich hab vor einem Jahr rausgefunden, dass mein Gehirn anders tickt. Seitdem baue ich das, was mir immer gefehlt hat.',
    about_highlight: 'Kein Guru. Kein Plan. Nur Anfang.',
    about_cta: 'Folg mir auf X →',

    // Waitlist
    waitlist_intro: 'neurOS entsteht gerade. Offen. Ehrlich. In Echtzeit.',
    waitlist_email_placeholder: 'Deine E-Mail',
    waitlist_select_label: 'Ich bin...',
    waitlist_select_opts: ['ADHS-Betroffene/r', 'Vermute ADHS', 'Angehörige/r', 'Einfach neugierig'],
    waitlist_btn: 'Auf die Liste →',
    waitlist_perks_title: 'Was du bekommst:',
    waitlist_perk1: '→ Updates wenn neue Tools live gehen',
    waitlist_perk2: '→ Beta-Zugang zur App',
    waitlist_perk3: 'Kein Spam. Versprochen. Ein ADHS-Gehirn schreibt keine Newsletter-Serie.',
    waitlist_thanks: 'Du bist dabei! Wir melden uns.\n(Wahrscheinlich nicht pünktlich. Du weißt ja. ADHS.)',

    // Footer
    footer_brand: 'neurOS — Ein anderes Betriebssystem für andere Gehirne.',
    footer_tools: 'Tools',
    footer_blog: 'Blog',
    footer_community: 'Community',
    footer_contact: 'Kontakt',
    footer_tagline: '„Kein Guru. Kein Plan. Nur Anfang." 🧠⚡',
  },

  en: {
    nav_logo: 'neur<span>OS</span>',

    hero_label: 'Built for ADHD brains',
    hero_title: 'A friendlier\noperating system.',
    hero_subtitle: 'App. Tools. Community. Knowledge.\nBuilt by someone who needs it himself.',
    hero_cta: 'Join the waitlist →',
    hero_explore: 'See neurOS in action ↓',

    cards_title: 'What\'s being built',
    card1_title: 'The App',
    card1_text: '3 things in the morning. What you achieved in the evening. Little companions that grow with you. No streak pressure.',
    card1_badge: '→ Coming soon',
    card2_title: 'Micro-Tools',
    card2_text: 'Focus check, daily planner, brain dump. Use directly. No account needed.',
    card2_badge: '→ Coming soon',
    card3_title: 'Community',
    card3_text: 'A place for people whose brains work differently. Honest, no guru vibes.',
    card3_badge: '→ Coming soon',

    // Tools section
    tools_title: 'Try it out',
    tools_subtitle: 'Two small tools. No login. No BS.',

    // Brain Dump Demo
    bd_title: 'Brain Dump',
    bd_subtitle: 'What neurOS does with your mental chaos',
    bd_btn_text: 'neurOS sorts it →',
    bd_sorting_text: 'neurOS brings order',
    bd_outro: 'You don\'t have to solve everything now. Just see the next step.',
    bd_reset_text: 'Again ↺',
    bd_label_now: 'Now',
    bd_label_later: 'Later',
    bd_label_noise: 'Mental noise',
    bd_tab_0: 'Overwhelmed',
    bd_tab_1: 'Open loops',
    bd_tab_2: 'Thought soup',
    bd_scenarios: [
      {
        chips: [
          'Groceries', 'Reschedule doctor', 'Pick up kid',
          'I can\'t do this', 'Tax return', 'Exercise?!',
          'Laundry since 3 days', 'too much'
        ],
        noise: [3, 7],
        now: ['Pick up kid', 'Reschedule doctor', 'Groceries'],
        later: ['Tax return', 'Do laundry'],
        headnoise: ['I can\'t do this — yes you can, one thing at a time', 'Too much — it\'s not, just feels like it', 'Exercise? Maybe tomorrow.']
      },
      {
        chips: [
          'Call back mechanic', 'Return package', 'Yesterday\'s email',
          'Book dentist', 'Write project update',
          'did I finish that?', 'Pay bill'
        ],
        noise: [5],
        now: ['Call back mechanic', 'Reply to yesterday\'s email', 'Pay bill'],
        later: ['Return package', 'Book dentist', 'Write project update'],
        headnoise: ['Did I finish that? — Check the list, not your head.']
      },
      {
        chips: [
          'new app idea', 'what did I want to google?', 'catch up on podcast',
          'why did I walk in here?', 'plan birthday',
          'keep reading book', 'clean windows', 'earworm since Monday'
        ],
        noise: [1, 3, 7],
        now: ['Plan birthday — check date', 'Catch up on podcast'],
        later: ['Write down app idea', 'Keep reading book', 'Clean windows'],
        headnoise: ['What did I want to google? — It\'ll come back.', 'Why did I walk in here? — Classic.', 'Earworm? Let it be.']
      }
    ],

    tool_title: 'Focus Check',
    tool_subtitle: 'How ADHD-ready is your day right now?',
    tool_desc: '3 short questions. One honest tip. No account. No email.',
    tool_start: 'Let\'s go',

    fc_q1: 'How does your head feel right now?',
    fc_q1_opts: ['Foggy', 'Restless', 'Overloaded', 'Actually ok'],
    fc_q2: 'What\'s on your plate today?',
    fc_q2_opts: ['Way too much', 'A few things', 'Nothing specific', 'No idea'],
    fc_q3: 'How did you sleep?',
    fc_q3_opts: ['Badly', 'Ok', 'Well'],

    fc_results: {
      '0_0_0': 'Your brain needs grace right now, not discipline. Write down ONE thing that truly matters today. Just one. The rest can be someone else\'s problem — or no one\'s.',
      '0_0_1': 'Fog plus overload — not a great combo. Drink something first, move for 5 minutes. Then: What\'s the smallest thing on your list you can do in 10 minutes? Start there.',
      '0_0_2': 'Slept well but still foggy? Your brain needs warm-up time. Give yourself 30 minutes pressure-free, then tackle the most important task.',
      '0_1_0': 'Fog + bad sleep, but manageable day. Be kind to yourself. Do the easiest things first — small wins lift the fog.',
      '0_1_1': 'Light fog day. Not ideal, not terrible. Start with a clear list: What are the 3 things that actually need to happen today? Everything else can wait.',
      '0_1_2': 'Well-rested but foggy — classic. The fog usually lifts after the first completed task. Pick a small one, just start.',
      '0_2_0': 'Foggy, nothing to do, slept badly. This is a self-care day. Do what feels good. The world keeps spinning without your productivity.',
      '0_2_1': 'Relaxed day, light fog. Perfect for that thing you\'ve been putting off — but no pressure. If nothing works, that\'s ok too.',
      '0_2_2': 'Foggy but relaxed and well-rested? Good day for creative stuff. The fog can sometimes unlock new ideas. Let yourself drift.',
      '0_3_0': 'Foggy, no plan, bad sleep. Step 1: Write down what\'s floating in your head. Step 2: Mark the 1 most important thing. Step 3: Only do that one.',
      '0_3_1': 'No idea what\'s on and your head is foggy? Brain dump: 5 minutes, write everything down. Then sort. Clarity comes through writing.',
      '0_3_2': 'Well-rested but foggy and planless? Perfect moment for a brain dump. Write everything down, then pick the one thing that gives you the most relief.',

      '1_0_0': 'Restless, too much to do, slept badly — overwhelm alert. Breathe deeply 3 times. Then: What\'s the ONE thing you need to get done today? Focus only on that.',
      '1_0_1': 'The energy is bouncing and the list is long. Write everything down (brain dump), then pick the 3 most important. Timer to 25 minutes, one task. Break. Repeat.',
      '1_0_2': 'Restless but well-rested with a full day? The energy is there — channel it. Take 10 minutes, write down everything in your head, then pick the 3 most important things.',
      '1_1_0': 'Restless energy + bad sleep. Dangerous combo for impulsive decisions. Only do what\'s already on your list today. No starting new projects.',
      '1_1_1': 'Manageable day, restless mind. Classic. Body doubling can help — call someone or sit in a café. Sometimes someone else\'s presence is enough to find focus.',
      '1_1_2': 'Slept well, a few things to do, but restless? Move first — walk, stretch, something. Then sit down to work. Restlessness often fades after 15 minutes of focus.',
      '1_2_0': 'Restless but nothing to do and slept badly? Your body is telling you something. Rest. If the restlessness stays: movement helps more than screen time.',
      '1_2_1': 'Restless energy without a concrete plan. Use it: What\'s the thing you\'ve been putting off forever? This restless energy might be perfect for it.',
      '1_2_2': 'Well-rested, restless, free — that\'s potential. Grab that project you\'ve been avoiding for weeks. Restlessness becomes productivity when you let it.',
      '1_3_0': 'Restless, planless, tired — fidgety and disoriented. Stop. Drink water. Eat something. Then 5 minutes writing down what\'s in your head. Basics first.',
      '1_3_1': 'No idea what\'s on and you\'re restless? That\'s your brain screaming for structure. 5-minute brain dump, then pick the 3 most important things.',
      '1_3_2': 'Well-rested, restless, no clue what\'s up — do a brain dump. Write for 5 minutes. Clarity comes through sorting.',

      '2_0_0': 'Overwhelm alert. Breathe deeply 3 times. Then: What\'s the ONE thing that — if you get it done today — saves the day? Just do that one.',
      '2_0_1': 'Overloaded with a full day. Your brain is screaming for order. Step 1: Write everything down. Step 2: Prioritize. Step 3: Only top 3. Delete the rest.',
      '2_0_2': 'Slept well but completely overloaded? Your mind collected too much overnight. Brain dump: get it all on paper. Then prioritize. Use the energy from sleep.',
      '2_1_0': 'Overloaded on bad sleep — be careful with yourself. Reduce the day to the absolute minimum. What MUST happen today? Only that.',
      '2_1_1': 'Head full, manageable day. Write down everything that weighs on you — including things not on the to-do list. Sometimes the head is full of worries, not tasks.',
      '2_1_2': 'Well-rested but head too full? Structure the day: morning for the most important task, afternoon for the rest. Evening brain dump for tomorrow.',
      '2_2_0': 'Overloaded but nothing to do? Slept badly? That\'s emotional overwhelm. Write down what\'s bothering you — not to-dos, but feelings and thoughts.',
      '2_2_1': 'Head full, day empty. The overload comes from inside, not outside. Treat yourself to something nice and let the thoughts pass. Tomorrow looks different.',
      '2_2_2': 'Well-rested, nothing to do, but head exploding? Brain dump. Get it all out. Then sort: What\'s real, what\'s ADHD mind-cinema?',
      '2_3_0': 'Overloaded, planless, tired — triple threat. Today is not your day and that\'s ok. Get one thing done, then clock out mentally.',
      '2_3_1': 'Head full and you don\'t know where to put it? Step 1: Write it all down. Really all of it. Step 2: Breathe. Step 3: Mark the 1 most important thing.',
      '2_3_2': 'Well-rested but overloaded and planless? Sleep gave you the strength to clean up today. Brain dump: get it all out, then sort.',

      '3_0_0': 'Ok in the head but full day + bad sleep? Use the mental clarity while it lasts. Tackle the most important task NOW, before tiredness hits.',
      '3_0_1': 'Clear head, full day. Solid starting point. Make a quick priority list and work it top to bottom. Today you\'ll get stuff done.',
      '3_0_2': 'Good day ahead! Clear head, well-rested, full schedule — this is your power day. Hardest task first, you\'ll cruise through the rest.',
      '3_1_0': 'Head ok, manageable day, bad sleep. Not bad! But don\'t overdo it. Get what needs doing done and give yourself early rest tonight.',
      '3_1_1': 'Solid day. Clear head, manageable list. Nothing special needed — just start. Sometimes the normal days are the best ones.',
      '3_1_2': 'Good day ahead! Use the clarity: What\'s that project you\'ve been putting off for weeks? Today\'s the day.',
      '3_2_0': 'Clear head, nothing to do, slept badly — rest up. Or: use the mental clarity for planning. What\'s coming up this week?',
      '3_2_1': 'Clear head and free day? Rare combo. Do something fun — or tackle that one thing that always gets postponed.',
      '3_2_2': 'Jackpot day. Well-rested, clear head, no obligations. Do something creative. Or that thing you\'ve been putting off for 3 months. Your brain is ready.',
      '3_3_0': 'Head ok, no plan, tired — make a simple plan for the day and stick to it. Nothing wild, just structure.',
      '3_3_1': 'Clear head but no idea what\'s on? 5-minute brainstorm: What needs to happen this week? Pick 1-2 things for today.',
      '3_3_2': 'Well-rested, clear head, no plan — perfect moment to plan in peace. What are your goals this week? Write them down.',
    },

    fc_result_cta: 'Want tools like this daily? neurOS is building exactly that.',
    fc_result_waitlist: 'Join the waitlist →',
    fc_result_restart: 'Try again ↺',

    about_title: 'Who\'s behind this?',
    about_text: 'A year ago I found out my brain works differently. Since then I\'ve been building what I always needed.',
    about_highlight: 'No guru. No plan. Just a beginning.',
    about_cta: 'Follow me on X →',

    waitlist_intro: 'neurOS is being built right now. Openly. Honestly. In real time.',
    waitlist_email_placeholder: 'Your email',
    waitlist_select_label: 'I am...',
    waitlist_select_opts: ['Living with ADHD', 'Suspect ADHD', 'Family/friend', 'Just curious'],
    waitlist_btn: 'Join the list →',
    waitlist_perks_title: 'What you get:',
    waitlist_perk1: '→ Updates when new tools go live',
    waitlist_perk2: '→ Beta access to the app',
    waitlist_perk3: 'No spam. Promise. An ADHD brain doesn\'t write newsletter series.',
    waitlist_thanks: 'You\'re in! We\'ll be in touch.\n(Probably not on time. You know. ADHD.)',

    footer_brand: 'neurOS — A different operating system for different brains.',
    footer_tools: 'Tools',
    footer_blog: 'Blog',
    footer_community: 'Community',
    footer_contact: 'Contact',
    footer_tagline: '"No guru. No plan. Just a beginning." 🧠⚡',
  }
};

// --- State ---
let currentLang = 'de';
let fcAnswers = [];

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  // Detect browser language
  const browserLang = navigator.language || navigator.languages?.[0] || 'de';
  const savedLang = localStorage.getItem('neurOS-lang');
  if (savedLang) {
    currentLang = savedLang;
  } else {
    currentLang = browserLang.startsWith('de') ? 'de' : 'en';
  }

  applyLanguage();
  initScrollAnimations();
  initBrainDumpDemo();
  initFocusCheck();
  initWaitlistForm();
  initLangSwitch();
});

// --- Language ---
function initLangSwitch() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('neurOS-lang', currentLang);
      applyLanguage();
    });
  });
}

function applyLanguage() {
  const t = texts[currentLang];

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Hero
  setText('hero-label', t.hero_label);
  setText('hero-title', t.hero_title);
  setText('hero-subtitle', t.hero_subtitle);
  setText('hero-cta', t.hero_cta);
  setText('hero-explore', t.hero_explore);

  // Cards
  setText('cards-title', t.cards_title);
  setText('card1-title', t.card1_title);
  setText('card1-text', t.card1_text);
  setText('card1-badge', t.card1_badge);
  setText('card2-title', t.card2_title);
  setText('card2-text', t.card2_text);
  setText('card2-badge', t.card2_badge);
  setText('card3-title', t.card3_title);
  setText('card3-text', t.card3_text);
  setText('card3-badge', t.card3_badge);

  // Tools section
  setText('tools-title', t.tools_title);
  setText('tools-subtitle', t.tools_subtitle);

  // Brain Dump Demo
  setText('bd-title', t.bd_title);
  setText('bd-subtitle', t.bd_subtitle);
  setText('bd-btn-text', t.bd_btn_text);
  setText('bd-sorting-text', t.bd_sorting_text);
  setText('bd-outro', t.bd_outro);
  setText('bd-reset-text', t.bd_reset_text);
  setText('bd-tab-0', t.bd_tab_0);
  setText('bd-tab-1', t.bd_tab_1);
  setText('bd-tab-2', t.bd_tab_2);

  // Re-render current scenario chips if in chaos state
  if (bdState === 'chaos') {
    renderBDScenario(currentBDScenario);
  }

  // Focus Check
  setText('tool-title', t.tool_title);
  setText('tool-subtitle', t.tool_subtitle);
  setText('tool-note', t.tool_desc);
  setText('tool-start', t.tool_start);

  // Focus Check questions (re-render if active)
  setText('fc-result-cta', t.fc_result_cta);
  setText('fc-result-waitlist', t.fc_result_waitlist);
  setText('fc-result-restart', t.fc_result_restart);

  // About
  setText('about-title', t.about_title);
  setText('about-text', t.about_text);
  setText('about-highlight', t.about_highlight);
  setText('about-cta', t.about_cta);

  // Waitlist
  setText('waitlist-intro', t.waitlist_intro);
  const emailInput = document.getElementById('waitlist-email');
  if (emailInput) emailInput.placeholder = t.waitlist_email_placeholder;
  // Update select
  const select = document.getElementById('waitlist-select');
  if (select) {
    const opts = select.querySelectorAll('option');
    if (opts[0]) opts[0].textContent = t.waitlist_select_label;
    t.waitlist_select_opts.forEach((text, i) => {
      if (opts[i + 1]) opts[i + 1].textContent = text;
    });
  }
  setText('waitlist-btn', t.waitlist_btn);
  setText('waitlist-perks-title', t.waitlist_perks_title);
  setText('waitlist-perk1', t.waitlist_perk1);
  setText('waitlist-perk2', t.waitlist_perk2);
  setText('waitlist-perk3', t.waitlist_perk3);

  // Footer
  setText('footer-brand', t.footer_brand);
  setText('footer-tools', t.footer_tools);
  setText('footer-blog', t.footer_blog);
  setText('footer-community', t.footer_community);
  setText('footer-contact', t.footer_contact);
  setText('footer-tagline', t.footer_tagline);

  // Re-render active focus check question
  renderCurrentFCState();

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  // Support newlines
  if (text && text.includes('\n')) {
    el.innerHTML = text.replace(/\n/g, '<br>');
  } else {
    el.textContent = text;
  }
}

// --- Scroll Animations ---
function initScrollAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --- Focus Check ---
let fcStep = -1; // -1 = start screen, 0-2 = questions, 3 = result

function initFocusCheck() {
  document.getElementById('fc-start-btn')?.addEventListener('click', () => {
    fcStep = 0;
    fcAnswers = [];
    renderCurrentFCState();
  });

  document.getElementById('fc-restart-btn')?.addEventListener('click', () => {
    fcStep = -1;
    fcAnswers = [];
    renderCurrentFCState();
  });
}

function renderCurrentFCState() {
  const t = texts[currentLang];
  const startEl = document.getElementById('fc-start');
  const questionEl = document.getElementById('fc-question');
  const resultEl = document.getElementById('fc-result');

  if (!startEl || !questionEl || !resultEl) return;

  // Hide all
  startEl.classList.remove('active');
  questionEl.classList.remove('active');
  resultEl.classList.remove('active');

  if (fcStep === -1) {
    // Start screen
    startEl.classList.add('active');
    return;
  }

  if (fcStep >= 0 && fcStep <= 2) {
    // Question
    questionEl.classList.add('active');

    const questions = [
      { text: t.fc_q1, opts: t.fc_q1_opts },
      { text: t.fc_q2, opts: t.fc_q2_opts },
      { text: t.fc_q3, opts: t.fc_q3_opts },
    ];
    const q = questions[fcStep];

    // Update progress dots
    const dots = questionEl.querySelectorAll('.fc-dot');
    dots.forEach((dot, i) => {
      dot.classList.remove('active', 'done');
      if (i < fcStep) dot.classList.add('done');
      if (i === fcStep) dot.classList.add('active');
    });

    // Question text
    const qText = questionEl.querySelector('.fc-question-text');
    if (qText) qText.textContent = q.text;

    // Options
    const optContainer = questionEl.querySelector('.fc-options');
    if (optContainer) {
      optContainer.innerHTML = '';
      q.opts.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'fc-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
          fcAnswers.push(i);
          fcStep++;
          renderCurrentFCState();
        });
        optContainer.appendChild(btn);
      });
    }
    return;
  }

  if (fcStep === 3) {
    // Result
    resultEl.classList.add('active');
    const key = `${fcAnswers[0]}_${fcAnswers[1]}_${fcAnswers[2]}`;
    const resultText = t.fc_results[key] || t.fc_results['0_1_1'];
    const resultTextEl = resultEl.querySelector('.fc-result-text');
    if (resultTextEl) resultTextEl.textContent = resultText;
  }
}

// --- Brain Dump Demo ---
let bdState = 'chaos'; // chaos | sorting | clarity
let currentBDScenario = 0;

function initBrainDumpDemo() {
  const startBtn = document.getElementById('bd-start-btn');
  const resetBtn = document.getElementById('bd-reset-btn');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (bdState !== 'chaos') return;
      startBrainDumpSort();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetBrainDump();
    });
  }

  // Scenario tab clicks
  document.querySelectorAll('.bd-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      if (bdState !== 'chaos') return;
      const idx = parseInt(tab.dataset.scenario);
      if (idx === currentBDScenario) return;
      currentBDScenario = idx;
      document.querySelectorAll('.bd-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderBDScenario(idx);
    });
  });

  // Render initial scenario
  renderBDScenario(0);
}

function renderBDScenario(idx) {
  const t = texts[currentLang];
  const scenario = t.bd_scenarios[idx];
  if (!scenario) return;

  const chipsContainer = document.getElementById('bd-chips');
  if (!chipsContainer) return;

  chipsContainer.innerHTML = '';
  scenario.chips.forEach((chipText, i) => {
    const span = document.createElement('span');
    span.className = 'bd-chip';
    if (scenario.noise.includes(i)) {
      span.classList.add('noise');
    }
    span.textContent = chipText;
    span.style.animationDelay = (0.05 + i * 0.07) + 's';
    chipsContainer.appendChild(span);
  });
}

function renderBDResults(idx) {
  const t = texts[currentLang];
  const scenario = t.bd_scenarios[idx];
  if (!scenario) return;

  const resultsContainer = document.getElementById('bd-results');
  if (!resultsContainer) return;

  resultsContainer.innerHTML = '';

  // NOW card
  const nowCard = document.createElement('div');
  nowCard.className = 'bd-result-card bd-card-now';
  nowCard.innerHTML = '<div class="bd-card-label">' + t.bd_label_now + '</div><ul class="bd-card-list">' +
    scenario.now.map(item => '<li>' + item + '</li>').join('') + '</ul>';
  resultsContainer.appendChild(nowCard);

  // LATER card
  const laterCard = document.createElement('div');
  laterCard.className = 'bd-result-card bd-card-later';
  laterCard.innerHTML = '<div class="bd-card-label">' + t.bd_label_later + '</div><ul class="bd-card-list">' +
    scenario.later.map(item => '<li>' + item + '</li>').join('') + '</ul>';
  resultsContainer.appendChild(laterCard);

  // NOISE card
  const noiseCard = document.createElement('div');
  noiseCard.className = 'bd-result-card bd-card-noise';
  noiseCard.innerHTML = '<div class="bd-card-label">' + t.bd_label_noise + '</div><ul class="bd-card-list">' +
    scenario.headnoise.map(item => '<li>' + item + '</li>').join('') + '</ul>';
  resultsContainer.appendChild(noiseCard);
}

function startBrainDumpSort() {
  bdState = 'sorting';
  const chaos = document.getElementById('bd-chaos');
  const sorting = document.getElementById('bd-sorting');
  const clarity = document.getElementById('bd-clarity');
  const trigger = document.getElementById('bd-trigger');
  const btn = document.getElementById('bd-start-btn');
  const tabs = document.querySelector('.bd-tabs');

  if (btn) btn.disabled = true;
  if (trigger) trigger.style.display = 'none';
  if (tabs) tabs.style.pointerEvents = 'none';

  // Fade out chaos chips
  if (chaos) {
    chaos.style.transition = 'opacity 0.5s ease';
    chaos.style.opacity = '0';
  }

  setTimeout(() => {
    if (chaos) {
      chaos.classList.remove('active');
      chaos.style.opacity = '';
      chaos.style.transition = '';
    }
    if (sorting) sorting.classList.add('active');

    // After sorting animation, show clarity
    setTimeout(() => {
      if (sorting) sorting.classList.remove('active');

      // Render results for current scenario
      renderBDResults(currentBDScenario);

      if (clarity) {
        clarity.classList.add('active');
        // Re-trigger card animations
        clarity.querySelectorAll('.bd-result-card').forEach(card => {
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = '';
        });
      }
      bdState = 'clarity';
    }, 1800);
  }, 600);
}

function resetBrainDump() {
  bdState = 'chaos';
  const chaos = document.getElementById('bd-chaos');
  const clarity = document.getElementById('bd-clarity');
  const trigger = document.getElementById('bd-trigger');
  const btn = document.getElementById('bd-start-btn');
  const tabs = document.querySelector('.bd-tabs');

  if (clarity) clarity.classList.remove('active');
  if (trigger) trigger.style.display = '';
  if (btn) btn.disabled = false;
  if (tabs) tabs.style.pointerEvents = '';

  // Re-render chips for current scenario
  renderBDScenario(currentBDScenario);

  if (chaos) {
    chaos.classList.add('active');
  }
}

// --- Waitlist Form ---
function initWaitlistForm() {
  const form = document.getElementById('waitlist-form');
  const formContent = document.getElementById('waitlist-form-content');
  const thanks = document.getElementById('waitlist-thanks');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = texts[currentLang];
    if (formContent) formContent.style.display = 'none';
    const perks = document.getElementById('waitlist-perks');
    if (perks) perks.style.display = 'none';
    if (thanks) {
      thanks.classList.add('active');
      const thanksText = document.getElementById('waitlist-thanks-text');
      if (thanksText) {
        thanksText.innerHTML = t.waitlist_thanks.replace(/\n/g, '<br>');
      }
    }
  });
}
