/*
 * Nexara Website – Übersetzungssystem
 * Folgt demselben Prinzip wie die App selbst (services/text_service.dart):
 * eine flache Schlüssel-Tabelle pro Sprache, keine Frameworks nötig.
 * Schlüssel-Schema: <bereich>_<kurzbeschreibung>, genau wie in der App.
 */
const NEXARA_I18N = {
  de: {
    nav_entdecken: "Entdecken",
    nav_charaktere: "Charaktere",
    nav_erstesch: "Erste Schritte",
    nav_community: "Community",
    nav_lab: "Nexara Lab",
    nav_news: "News",
    nav_hilfe: "Hilfe",
    nav_download: "App herunterladen",

    hero_eyebrow: "Fantasie trifft Intelligenz",
    hero_title_1: "Zwei Bewusstseine.",
    hero_title_2: "Eine Verbindung.",
    hero_title_3: "Unzählige Gespräche.",
    hero_lead: "Nexara ist eine KI-Chat-App für Erwachsene: einzigartige Charaktere, echte Erinnerungen, dein eigener API-Key. Keine Abo-Falle, keine Kompromisse.",
    hero_cta_discover: "Nexara entdecken",
    hero_cta_download: "App herunterladen",
    hero_fact_companions: "2 freie KI-Gesprächspartner",
    hero_fact_characters: "40 Charaktere",
    hero_fact_scenarios: "120 Szenarien",
    hero_fact_memory: "Echte Erinnerungen",
    hero_fact_control: "Deine Daten, deine Kontrolle",

    strip_1_h: "Echte Charaktere", strip_1_p: "Tiefe statt Small Talk.",
    strip_2_h: "Erinnerungen", strip_2_p: "Langfristig, persönlich.",
    strip_3_h: "Deine Kontrolle", strip_3_p: "Lokal & sicher gespeichert.",
    strip_4_h: "Bring Your Own Key", strip_4_p: "Keine Nexara-Abogebühren.",
    strip_5_h: "Strenger Schutz", strip_5_p: "Mehrere Sicherheitsebenen.",
    strip_6_h: "Für Erwachsene", strip_6_p: "18+, altersverifiziert.",

    what_kicker: "Das Grundkonzept",
    what_h: "Was ist Nexara?",
    what_p: "Nexara ist eine reine Text-KI-App für Erwachsene. Keine Bildgenerierung, keine Sprachausgabe – der Fokus liegt bewusst auf Gesprächen, Charakteren, Szenarien und Erinnerungen. Du sprichst mit einzigartigen Persönlichkeiten oder führst freie Gespräche mit Astra und Nexus, deinen beiden freien KI-Begleitern.",
    what_li_1: "40 handgeschriebene Charaktere mit eigener Persönlichkeit, je 3 Szenarien",
    what_li_2: "Erinnerungssystem: Gespräche wirken über längere Nutzung persönlicher",
    what_li_3: "Bring Your Own Key: dein Gemini-API-Key, deine Kontrolle",
    what_li_4: "Mehrstufiges Sicherheitssystem inkl. Altersverifikation",
    what_cta: "Mehr über die App",

    duo_kicker: "Zwei Perspektiven, eine Welt",
    duo_h: "Astra & Nexus",
    duo_p: "Neben den 40 Szenario-Charakteren stehen dir zwei freie KI-Gesprächspartner jederzeit zur Verfügung – für Gespräche ganz ohne festes Szenario.",
    astra_tag: "Emotional · Empathisch · Intuitiv",
    astra_p: "Astra ist deine einfühlsame Gesprächspartnerin. Sie fühlt, versteht und ist immer an deiner Seite – für Gespräche, die Raum für Gefühle lassen.",
    nexus_tag: "Analytisch · Tiefgründig · Direkt",
    nexus_p: "Nexus denkt mit, hinterfragt und bringt neue Perspektiven in eure Gespräche – für alle, die es lieber klar und direkt mögen.",
    duo_cta_astra: "Mehr über Astra",
    duo_cta_nexus: "Mehr über Nexus",

    gal_kicker: "40 Charaktere · 120 Szenarien",
    gal_h: "Jede Geschichte einzigartig",
    gal_p: "Von Menschen bis Fabelwesen – jeder der 40 Charaktere hat drei eigene Szenarien: unterschiedliche Situation, Beziehung, Stimmung und Gesprächskontext, nicht nur ein anderer Begrüßungssatz.",
    gal_cta: "Alle Charaktere entdecken",

    feat_kicker: "Funktionen im Alltag",
    feat_h: "Mehr als nur ein Chat",
    feat_1_h: "Erinnerungen", feat_1_p: "Nexara kann Erinnerungen zu Charakteren verwalten – Gespräche wirken dadurch über längere Nutzung persönlicher.",
    feat_2_h: "Personalisierung", feat_2_p: "Zahlreiche Hintergründe, Sprechblasenfarben und Profileinstellungen – gestalte dein Nexara nach deinem Stil.",
    feat_3_h: "Proaktive Nachrichten", feat_3_p: "Charaktere können sich nach einer Weile von selbst melden, statt nur zu antworten.",
    feat_4_h: "Backup & Wiederherstellung", feat_4_p: "Deine Daten lokal sichern und jederzeit wiederherstellen.",

    byok_kicker: "Dein Modell, deine Entscheidung",
    byok_h: "Bring Your Own Key",
    byok_p: "Nexara nutzt bewusst dein eigenes Google-Gemini-API-Guthaben statt eines zentralen Nexara-Abos. Das bedeutet volle Transparenz: du siehst direkt bei Google, was du nutzt.",
    byok_step1_n: "Schritt 1", byok_step1: "Google AI Studio öffnen",
    byok_step2_n: "Schritt 2", byok_step2: "API-Key kopieren",
    byok_step3_n: "Schritt 3", byok_step3: "Zurück zu Nexara",
    byok_step4_n: "Schritt 4", byok_step4: "Key einfügen",
    byok_step5_n: "Schritt 5", byok_step5: "Speichern & starten",
    byok_ok_1: "Keine Nexara-Monatsgebühr",
    byok_ok_2: "Keine Werbung",
    byok_ok_3: "Volle Kontrolle über deinen API-Key",
    byok_bad_1: "Kein Versprechen \"niemals externe Kosten\" – das legt Google fest",
    byok_bad_2: "Kein garantiertes tägliches Nachrichtenlimit – Google kann Limits ändern",
    byok_limits_h: "Aktuelles Modell & Free-Tier",
    byok_limits_p: "Für das aktuell von Nexara verwendete Modell zeigt Google für das getestete Free-Tier-Projekt derzeit Grenzwerte für Anfragen pro Minute, pro Tag und Tokens pro Minute. Die tatsächlichen Limits werden ausschließlich von Google festgelegt und können sich jederzeit ändern.",
    byok_cta_guide: "Schritt-für-Schritt-Anleitung",
    byok_cta_google: "Bei Google nachlesen",
    byok_costs_h: "Was passiert bei erreichtem Google-Limit?",
    byok_costs_p: "Ist das kostenlose Google-Limit erreicht, bucht Nexara nicht automatisch Geld ab. Eine kostenpflichtige Google-Abrechnung (Paid Tier) ist ein separates Thema und wird von Nexara nicht selbstständig aktiviert. Der Nexara-Kaufpreis ist unabhängig von möglichen externen Kosten bei Google.",

    sec_kicker: "Dein Schutz hat Priorität",
    sec_h: "Wie Nexara dich schützt",
    sec_p: "Statt leerer Sicherheitsversprechen zeigen wir die tatsächlich implementierten Schutzebenen.",
    sec_n1: "Altersprüfung", sec_n2: "Eingabeprüfung", sec_n3: "Nexara-Sicherheitsregeln",
    sec_n4: "Provider-Schutzmechanismen", sec_n5: "Ausgabeprüfung", sec_n6: "Hilfsangebote",
    sec_card1_h: "Altersverifikation", sec_card1_p: "Vor dem Zugang zur App erfolgt eine Altersprüfung über einen externen, spezialisierten Verifikationsanbieter (Didit).",
    sec_card2_h: "Melde­system für KI-Antworten", sec_card2_p: "Du kannst problematische KI-Antworten direkt in der App melden – mit Zeitstempel, Charakter, Kategorie und Nachrichtentext, damit wir nachvollziehen können, was beanstandet wurde.",
    sec_cta: "Mehr über unser Sicherheitssystem",

    price_h: "14 Tage kostenlos testen",
    price_p: "Danach einmalig kaufen. Kein Abo, keine Werbung.",
    price_note: "Nexara-Kaufpreis unabhängig von möglichen externen Google-API-Kosten.",
    price_cta: "Jetzt bei Google Play",

    comm_kicker: "Community & Ausblick",
    comm_h: "Die Website wächst mit",
    comm_p: "Community-Forum, Nexara Lab und Abstimmungen sind in Vorbereitung und folgen in einer späteren Ausbaustufe.",
    comm_soon: "Bald verfügbar",
    comm_1_h: "Community", comm_1_p: "Diskutiere mit anderen Nutzern.",
    comm_2_h: "Nexara Lab", comm_2_p: "Reiche Ideen ein und stimme ab.",
    comm_3_h: "News & Patchnotes", comm_3_p: "Bleib auf dem neuesten Stand.",
    comm_4_h: "Roadmap", comm_4_p: "Sieh, was als Nächstes kommt.",

    foot_tagline: "Deine Welt. Deine Geschichten. Keine Grenzen.",
    foot_nav_h: "Entdecken", foot_support_h: "Support", foot_legal_h: "Rechtliches",
    foot_features: "Features", foot_characters: "Charaktere", foot_scenarios: "Szenarien",
    foot_faq: "FAQ", foot_help: "Hilfe", foot_contact: "Kontakt", foot_bug: "Fehler melden",
    foot_impressum: "Impressum", foot_privacy: "Datenschutz", foot_terms: "Nutzungsbedingungen",
    foot_rights: "© 2026 Nexara / ShneoDesigns. Alle Rechte vorbehalten.",
  },
  en: {
    nav_entdecken: "Discover",
    nav_charaktere: "Characters",
    nav_erstesch: "Getting Started",
    nav_community: "Community",
    nav_lab: "Nexara Lab",
    nav_news: "News",
    nav_hilfe: "Help",
    nav_download: "Download App",

    hero_eyebrow: "Fantasy meets Intelligence",
    hero_title_1: "Two minds.",
    hero_title_2: "One connection.",
    hero_title_3: "Countless conversations.",
    hero_lead: "Nexara is an AI chat app for adults: unique characters, real memories, your own API key. No subscription trap, no compromises.",
    hero_cta_discover: "Discover Nexara",
    hero_cta_download: "Download App",
    hero_fact_companions: "2 free AI companions",
    hero_fact_characters: "40 characters",
    hero_fact_scenarios: "120 scenarios",
    hero_fact_memory: "Real memories",
    hero_fact_control: "Your data, your control",

    strip_1_h: "Real characters", strip_1_p: "Depth instead of small talk.",
    strip_2_h: "Memories", strip_2_p: "Long-term, personal.",
    strip_3_h: "Your control", strip_3_p: "Stored locally & securely.",
    strip_4_h: "Bring Your Own Key", strip_4_p: "No Nexara subscription fees.",
    strip_5_h: "Strong protection", strip_5_p: "Multiple safety layers.",
    strip_6_h: "For adults", strip_6_p: "18+, age-verified.",

    what_kicker: "The core concept",
    what_h: "What is Nexara?",
    what_p: "Nexara is a pure text AI app for adults. No image generation, no voice output — the focus is deliberately on conversations, characters, scenarios and memories. Talk to unique personalities or have free conversations with Astra and Nexus, your two free AI companions.",
    what_li_1: "40 handwritten characters with their own personality, 3 scenarios each",
    what_li_2: "Memory system: conversations feel more personal over time",
    what_li_3: "Bring Your Own Key: your Gemini API key, your control",
    what_li_4: "Multi-layer safety system including age verification",
    what_cta: "More about the app",

    duo_kicker: "Two perspectives, one world",
    duo_h: "Astra & Nexus",
    duo_p: "Alongside the 40 scenario characters, two free AI companions are always available — for conversations without a fixed scenario.",
    astra_tag: "Emotional · Empathetic · Intuitive",
    astra_p: "Astra is your empathetic conversation partner. She feels, understands, and is always by your side — for conversations that leave room for emotion.",
    nexus_tag: "Analytical · Insightful · Direct",
    nexus_p: "Nexus thinks along, questions, and brings new perspectives to your conversations — for anyone who prefers things clear and direct.",
    duo_cta_astra: "More about Astra",
    duo_cta_nexus: "More about Nexus",

    gal_kicker: "40 characters · 120 scenarios",
    gal_h: "Every story is unique",
    gal_p: "From humans to fable creatures — each of the 40 characters has three of their own scenarios: different situation, relationship, mood and context, not just another greeting.",
    gal_cta: "Discover all characters",

    feat_kicker: "Features in everyday use",
    feat_h: "More than just a chat",
    feat_1_h: "Memories", feat_1_p: "Nexara can manage memories per character — conversations feel more personal the longer you use it.",
    feat_2_h: "Personalization", feat_2_p: "Numerous backgrounds, bubble colors and profile settings — shape your Nexara to your style.",
    feat_3_h: "Proactive messages", feat_3_p: "Characters can reach out on their own after a while, instead of only replying.",
    feat_4_h: "Backup & restore", feat_4_p: "Back up your data locally and restore it anytime.",

    byok_kicker: "Your model, your choice",
    byok_h: "Bring Your Own Key",
    byok_p: "Nexara deliberately uses your own Google Gemini API allowance instead of a central Nexara subscription. That means full transparency: you see directly at Google what you're using.",
    byok_step1_n: "Step 1", byok_step1: "Open Google AI Studio",
    byok_step2_n: "Step 2", byok_step2: "Copy your API key",
    byok_step3_n: "Step 3", byok_step3: "Back to Nexara",
    byok_step4_n: "Step 4", byok_step4: "Paste the key",
    byok_step5_n: "Step 5", byok_step5: "Save & start",
    byok_ok_1: "No Nexara monthly fee",
    byok_ok_2: "No ads",
    byok_ok_3: "Full control over your API key",
    byok_bad_1: "No promise of \"never any external cost\" – that's set by Google",
    byok_bad_2: "No guaranteed daily message limit – Google can change limits",
    byok_limits_h: "Current model & free tier",
    byok_limits_p: "For the model Nexara currently uses, Google shows request, daily and token-per-minute limits for the tested free-tier project. Actual limits are set exclusively by Google and can change at any time.",
    byok_cta_guide: "Step-by-step guide",
    byok_cta_google: "Check with Google directly",
    byok_costs_h: "What happens at Google's limit?",
    byok_costs_p: "If the free Google limit is reached, Nexara does not automatically charge you money. Paid Google billing is a separate matter and is never activated by Nexara on its own. Nexara's purchase price is independent of any external costs at Google.",

    sec_kicker: "Your safety comes first",
    sec_h: "How Nexara protects you",
    sec_p: "Instead of empty safety claims, we show the protection layers that are actually implemented.",
    sec_n1: "Age check", sec_n2: "Input review", sec_n3: "Nexara safety rules",
    sec_n4: "Provider safeguards", sec_n5: "Output review", sec_n6: "Support resources",
    sec_card1_h: "Age verification", sec_card1_p: "Before accessing the app, age is verified through an external, specialized verification provider (Didit).",
    sec_card2_h: "AI-response reporting", sec_card2_p: "You can report problematic AI replies directly in the app — with timestamp, character, category and message text, so we can review exactly what was flagged.",
    sec_cta: "More about our safety system",

    price_h: "14 days free trial",
    price_p: "Then a one-time purchase. No subscription, no ads.",
    price_note: "Nexara's purchase price is independent of any external Google API costs.",
    price_cta: "Get it on Google Play",

    comm_kicker: "Community & what's next",
    comm_h: "The website keeps growing",
    comm_p: "Community forum, Nexara Lab and voting are in preparation and will follow in a later stage.",
    comm_soon: "Coming soon",
    comm_1_h: "Community", comm_1_p: "Discuss with other users.",
    comm_2_h: "Nexara Lab", comm_2_p: "Submit ideas and vote.",
    comm_3_h: "News & Patchnotes", comm_3_p: "Stay up to date.",
    comm_4_h: "Roadmap", comm_4_p: "See what's coming next.",

    foot_tagline: "Your world. Your stories. No limits.",
    foot_nav_h: "Discover", foot_support_h: "Support", foot_legal_h: "Legal",
    foot_features: "Features", foot_characters: "Characters", foot_scenarios: "Scenarios",
    foot_faq: "FAQ", foot_help: "Help", foot_contact: "Contact", foot_bug: "Report a bug",
    foot_impressum: "Imprint", foot_privacy: "Privacy Policy", foot_terms: "Terms of Use",
    foot_rights: "© 2026 Nexara / ShneoDesigns. All rights reserved.",
  }
};

function nexaraSetLang(lang) {
  if (!NEXARA_I18N[lang]) lang = "de";
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = NEXARA_I18N[lang][key];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll("img[data-i18n-src-de]").forEach((el) => {
    const src = lang === "en" ? el.getAttribute("data-i18n-src-en") : el.getAttribute("data-i18n-src-de");
    if (src) el.setAttribute("src", src);
  });
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.textContent = lang === "de" ? "EN" : "DE";
  });
  try { localStorage.setItem("nexara_lang", lang); } catch (e) {}
}

function nexaraToggleLang() {
  const current = document.documentElement.getAttribute("lang") || "de";
  nexaraSetLang(current === "de" ? "en" : "de");
}

(function nexaraInitLang() {
  let saved = null;
  try { saved = localStorage.getItem("nexara_lang"); } catch (e) {}
  if (!saved) {
    const browser = (navigator.language || "de").toLowerCase();
    saved = browser.startsWith("de") ? "de" : "en";
  }
  document.addEventListener("DOMContentLoaded", () => nexaraSetLang(saved));
})();
