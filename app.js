// Coordonatele locațiilor din traseu: [latitudine, longitudine]
// Exemplu: [44.430, 26.093], // Nume locație
const coords = [
  [44.436, 26.091], // Parcul Cișmigiu (check-in pas 8)
  [44.439, 26.087], // La Cetate - Parcul Cișmigiu (check-in pas 9)
];

// Răspunsurile Liderului de buzunar.
// Cheile sunt textul introdus, cu MAJUSCULE și FĂRĂ DIACRITICE (inputul e normalizat la fel),
// sau coordonatele unei locații ("44.430, 26.093").
const answers = {
  // START -> Întrebarea 1
  "START": "Se spune că, într-o vreme când pe locul acesta nu era decât pământ și vânt, patru oameni s-au adunat și au rostit o dorință îndrăzneață: să ridice o casă. Nu o casă oarecare, ci una în care oricine, oricând, să poată spune „sunt acasă“.<br>Unul purta o haină de păstor, altul purta o haină de preot, al treilea cunoștea secretele cifrelor și ale fierului, iar al patrulea știa să transforme o idee în linii pe hârtie. Nimeni nu știa dacă va ține. Dar a ținut.<br>Ei au plecat mai departe, dar au lăsat în urmă o pecete a trecerii lor, ca nimeni să nu uite cine a pus prima piatră. Cei mai mulți trec pe lângă ea zilnic fără s-o vadă. Astăzi, voi sunteți cei care o vor găsi. Ce an este inscripționat?",

  // Răspuns 1 -> Întrebarea 2
  "1998": "Se spune că demult, lângă acel loc, oamenii se adunau să alunece pe gheață, printre râsete și patine ascuțite. Gheața s-a topit de mult, râsetele au tăcut, iar acum a rămas doar un loc gol, cu o poveste pe care o știu puțini. Acel loc stă aproape de piață, dar nu intră în ea. Merge alături, ca două drumuri paralele.<br>Dar povestea nu se oprește aici. Printre toate carele care trec pe acolo, unul singur e al vostru. Nu are copite, dar aleargă. Nu are aripi, dar vă poartă departe. Numele lui nu e scris cu litere, ci cu cifre. Când îl veți vedea oprindu-se, veți ști că drumul vostru a început cu adevărat.<br>Ieșiți pe poarta casei și porniți pe urmele celor care au plecat înaintea voastră.<br>Care este numele, în cifre?",

  // Răspuns 2 -> Întrebarea 3
  "368": "Veți călători printre treisprezece opriri, iar la ultima trebuie să coborâți. Numele ei nu vi-l spun direct, ci vi-l las ca pe o poveste: a fost odată un tânăr care a visat o țară întreagă, unită și liberă. A scris, a luptat și a trăit puțin, iar sfârșitul l-a găsit departe de casă. Astăzi, un bulevard lung îi poartă numele, iar autobuzul vostru se oprește chiar acolo. Când veți auzi acest nume, drumul vostru se încheie. Despre ce bulevard este vorba?",

  // Răspuns 3 -> Întrebarea 4
  "BD. NICOLAE BALCESCU": "Mai departe, orașul se schimbă. Clădirile se strâng una într-alta, străzile se îngustează, iar în vechime negustorii veneau aici cu mărfuri aduse de departe, din orașe ale căror nume au rămas în numele străzii. Undeva pe acolo, între ziduri bătrâne, stă ascunsă o casă a artelor, în care orașul își păstrează muzica, pictura și poveștile. Nu are nevoie de pancartă mare ca să fie găsită, doar de oameni suficient de curioși.",

  // Răspuns 4 -> Întrebarea 5
  "ARCUB": "Departe de aici, într-un colț de lume numit Catalonia, oameni care nu erau rude și nu erau bogați au făcut ceva neobișnuit. Nu și-au cumpărat fiecare câte o casă. Au hotărât să locuiască împreună și să construiască împreună, cu reguli puse în comun și cu spații împărțite.<br>Vă amintiți de cei patru care au ridicat casa de la începutul zilei? Nici ei nu au lucrat singuri. Fiecare a pus ceva din ce știa. Aici veți afla cum se poate face același lucru în alte părți ale lumii.",

  // Răspuns 5 -> Întrebarea 6
  "CATALONIA - LOCUIREA IN COLABORARE": "Se spune că în urmă cu aproape trei secole, un călugăr grec a ajuns în București, cu gânduri mai mari decât averea lui. Numele lui era legat de un loc din țara lui, iar de la acel nume a rămas până azi numele străzii și al locului pe care îl căutați. A ridicat o biserică mică, dar atât de frumoasă încât oamenii se opresc și acum să o privească.<br>Nu e departe de unde stați. Poate sunteți la câteva sute de pași. Dar nu o veți găsi dacă vă uitați doar în față. Ridicați ochii, căutați piatra sculptată și porți de lemn, și ascultați: uneori se aude un cântec vechi, fără instrumente.",

  // Răspuns 6 -> Întrebarea 7
  "BISERICA MANASTIRII \"STAVROPOLEOS\"": "Se spune că, pe vremea când orașul se schimba repede și strada devenise locul unde te arătai lumii, cineva a deschis un hotel. Pe atunci era printre cele mai luxoase din București, iar numele lui venea dintr-o țară cu ceață, ceai și regi. Nu era un nume românesc, dar a rămas. Hotelul nu a trăit prea mult. Numele însă a supraviețuit, dat unui drum îngust care leagă două străzi.<br>Nu e un drum pe care îl găsești de la prima privire. Mulți trec pe lângă el fără să știe că acolo se ascunde. Dar cine caută cu răbdare ajunge. Vă las trei lucruri pe care să le țineți minte: se află pe Calea Victoriei, nu e o stradă și nu e o piață, iar la capătul celălalt, strada se numește ca locul unde se adună cei mai învățați oameni ai țării.",

  // Răspuns 7 -> Întrebarea 8
  "PASAJUL ENGLEZ": "Nu v-am spus de la început, dar vă ascundeam un loc. Un loc unde frunzele sunt mai multe decât oamenii, unde apa stă liniștită între alei, iar orașul, pentru o clipă, își trage sufletul. Mulți bucureșteni îl numesc „grădina“ și nu mai spun altceva, pentru că știu amândoi despre ce vorbesc.<br>Numele lui începe cu o poveste: se spune că vine de la cuvântul pentru cel care avea grijă de o fântână. De la acea fântână a mai rămas doar numele. Mergeți acolo și întoarceți-vă acasă cu o poveste a voastră. Dati Check-in pe pod.",

  // Răspuns 8 (check-in Parcul Cișmigiu) -> Întrebarea 9
  "44.436, 26.091": "Se spune că, în mijlocul unei grădini făcute pentru plimbări liniștite, cineva a ridicat un loc care ar părea să aparțină altei epoci: ziduri, o poartă, poate un turn. Nu pentru a apăra ceva, pentru că grădina nu avea de ce să fie apărată. Poate pentru a face copiii să viseze, sau pentru a oferi oamenilor o mică poveste în care să intre.<br>Începutul acestei zile a fost o casă ridicată de patru oameni. Sfârșitul ei e o cetate din poveste, într-o grădină care a început de la o fântână. Cetatea vă așteaptă să o găsiți. Dati check-in.",

  // Răspuns 9 (check-in La Cetate) -> Final (10)
  "44.439, 26.087": "Locurile explorate au ceva în comun: există pentru că oamenii și-au ținut cuvântul și au muncit împreună.<br>Iar acum, în fața cetății, aflați de ce contează asta.<br>Departe de aici, în cetățile aliate ale Hringului, se răspândește un zvon. Krum, căpetenia care nu iubește nicio alianță pe care nu a făcut-o el, trimite mesageri din cetate în cetate. Peste tot șoptesc același lucru: „Nu vă încredeți în Hring. Alianțele lui nu valorează nimic, pentru că oamenii nu își țin înțelegerile.“<br>Unele cetăți au început să se îndoiască, și au un motiv: de multe ori, un cuvânt dat s-a uitat printre grijile zilei. Zvonul lui Krum nu se răspunde cu un alt zvon, nici cu o ceartă. Se răspunde cu fapte.<br>De aceea sunteți voi aici. Exploratorii merg înaintea celorlalți, văd ce se întâmplă la porți și duc vești adevărate. Misiunea voastră e să arătați, cetate cu cetate, că alianța Hringului încă are greutate.<br>Final - de poveste 🌸",

  "WRONG_LOCATION": "Nu sunteți unde trebuie.",
  "HELP": "Scrieți HELP 1 pentru a primi răspunsul la întrebarea 1.<br>La fel pentru 2, 3, ...<br>Folosiți la nevoie.",
  "HELP 1": "1998",
  "HELP 2": "368",
  "HELP 3": "Bd. Nicolae Bălcescu",
  "HELP 4": "ARCUB",
  "HELP 5": "Catalonia - Locuirea în colaborare",
  "HELP 6": "Biserica Mănăstirii \"Stavropoleos\"",
  "HELP 7": "Pasajul Englez",
  "HELP 8": "Mergeți în Parcul Cișmigiu, pe Podul Mare, și apăsați 📍 pentru check-in.",
  "HELP 9": "Mergeți la Cetatea din Parcul Cișmigiu și apăsați 📍 pentru check-in."
};

// Variante acceptate pentru aceleași răspunsuri
const aliases = {
  "NICOLAE BALCESCU": "BD. NICOLAE BALCESCU",
  "BD NICOLAE BALCESCU": "BD. NICOLAE BALCESCU",
  "BULEVARDUL NICOLAE BALCESCU": "BD. NICOLAE BALCESCU",
  "BALCESCU": "BD. NICOLAE BALCESCU",
  "LOCUIREA IN COLABORARE": "CATALONIA - LOCUIREA IN COLABORARE",
  "CATALONIA LOCUIREA IN COLABORARE": "CATALONIA - LOCUIREA IN COLABORARE",
  "STAVROPOLEOS": "BISERICA MANASTIRII \"STAVROPOLEOS\"",
  "BISERICA STAVROPOLEOS": "BISERICA MANASTIRII \"STAVROPOLEOS\"",
  "MANASTIREA STAVROPOLEOS": "BISERICA MANASTIRII \"STAVROPOLEOS\"",
  "BISERICA MANASTIRII STAVROPOLEOS": "BISERICA MANASTIRII \"STAVROPOLEOS\""
};

// Trimite textul din câmp
function handleButtonClick() {
  const inputText = document.getElementById('inputText').value;
  showResult(inputText);
}

function showResult(inputText) {
  document.getElementById('result').innerHTML = getResult(inputText);
}

document.getElementById('submitButton').addEventListener('click', handleButtonClick);

document.getElementById('inputText').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleButtonClick();
  }
});

function gasestePereche(inputStr, perechi) {
  // Verificăm formatul: două numere separate de virgulă (cu spații opționale)
  const match = inputStr.match(/^\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*$/);

  if (!match) {
    // Formatul nu e corect
    return inputStr;
  }

  const x0 = parseFloat(match[1]);
  const y0 = parseFloat(match[2]);

  for (const [x, y] of perechi) {
    if (Math.abs(x - x0) + Math.abs(y - y0) <= 0.002) {
      return `${x.toFixed(3)}, ${y.toFixed(3)}`;
    }
  }

  // Nu s-a găsit nicio pereche
  return "WRONG_LOCATION";
}

// Majuscule, fără diacritice, ghilimele „“ unificate, spații multiple comasate
function normalizeaza(text) {
  return text
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[„“”]/g, '"')
    .toUpperCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function getResult(key) {
  key = normalizeaza(key);
  key = gasestePereche(key, coords);
  key = aliases[key] || key;

  // Returnează răspunsul corespunzător sau mesajul implicit
  return answers[key] || "Nu știu să răspund.";
}

function getLocation() {
  if (!navigator.geolocation) {
    alert("Geolocația nu este suportată de acest browser.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const coordinates = `${lat.toFixed(3)}, ${lon.toFixed(3)}`;
      showResult(coordinates);
    },
    function (error) {
      alert("Nu am putut obține locația.");
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}
