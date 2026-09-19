/*
 * Nexara – Charakter-Datenbank (Grundgerüst)
 * Namen und Bilder sind echt. Bio/Tagline/Szenarien sind Platzhalter
 * (siehe i18n-Schlüssel char_bio_placeholder / char_scenario_placeholder_*)
 * und werden ersetzt, sobald die echten Texte vorliegen.
 */
const NEXARA_CHARACTERS = {
  adrian:    { name: "Adrian" },
  aelith:    { name: "Aelith" },
  aisha:     { name: "Aisha" },
  amara:     { name: "Amara" },
  ashton:    { name: "Ashton" },
  boreas:    { name: "Boreas" },
  brynhild:  { name: "Brynhild" },
  calliope:  { name: "Calliope" },
  cassian:   { name: "Cassian" },
  deniz:     { name: "Deniz" },
  diego:     { name: "Diego" },
  elias:     { name: "Elias" },
  emma:      { name: "Emma" },
  fenrion:   { name: "Fenrion" },
  finn:      { name: "Finn" },
  isla:      { name: "Isla" },
  kai:       { name: "Kai" },
  kenji:     { name: "Kenji" },
  lena:      { name: "Lena" },
  lotta:     { name: "Lotta" },
  luca:      { name: "Luca" },
  lyra:      { name: "Lyra" },
  marina:    { name: "Marina" },
  max:       { name: "Max" },
  mei:       { name: "Mei" },
  milan:     { name: "Milan" },
  nova:      { name: "Nova" },
  nyx:       { name: "Nyx" },
  otto:      { name: "Otto" },
  pip:       { name: "Pip" },
  priya:     { name: "Priya" },
  rowan:     { name: "Rowan" },
  seraphina: { name: "Seraphina" },
  sofia:     { name: "Sofia" },
  tariq:     { name: "Tariq" },
  thalassa:  { name: "Thalassa" },
  torvin:    { name: "Torvin" },
  viktor:    { name: "Viktor" },
  yuki:      { name: "Yuki" },
  zara:      { name: "Zara" },
};

function nexaraCharacterImg(slug) {
  return "assets/" + slug + ".webp";
}
