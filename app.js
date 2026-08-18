let chosenValue = null;
let teams = ["Senju 🌳", "Uzumaki 🦊", "Uchiha 👁️"];
let teamColors = ["Brown", "Orange", "DarkSlateBlue"]

window.onload = () => {
  const buttonsContainer = document.getElementById("buttons");
  const chosenLabel = document.getElementById("chosenLabel");
  const mainContainer = document.getElementById("mainContainer");
  const buttonSelection = document.getElementById("buttonSelection");

  // Creează cele 3 butoane
  for (let i = 0; i < 3; i++) {
    let btn = document.createElement("button");
    btn.textContent = teams[i];
	btn.style.backgroundColor = teamColors[i];
    btn.addEventListener("click", () => {
      chosenValue = teams[i];
      chosenLabel.textContent = "Echipa: " + chosenValue;
      chosenLabel.style.color = teamColors[i];

      // Ascundem selecția butoanelor
      buttonSelection.style.display = "none";

      // Afișăm containerul principal
      mainContainer.style.display = "block";
    });
    buttonsContainer.appendChild(btn);
  }
};

// Function to handle the button click
function handleButtonClick() {
  const inputText = document.getElementById('inputText').value; // Get the value from the input
  const resultDiv = document.getElementById('result'); // Get the result div
  
  var result;
  if (chosenValue == teams[0]){
	result = getResult_Team1(inputText);
  }
  else if (chosenValue == teams[1]){
	result = getResult_Team2(inputText);
  }
  else if (chosenValue == teams[2]){
	result = getResult_Team3(inputText);
  }
  
  resultDiv.innerHTML = result; // Display the result
}

// Add an event listener to the button
document.getElementById('submitButton').addEventListener('click', handleButtonClick);

document.getElementById('inputText').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleButtonClick();
  }
});

function getResult_Team1(key) {
	key = key.toUpperCase().trim();
	
	const answers = {
    "START": "Clanul Senju a fost dintotdeauna asociat cu pădurile și cu puterea de a face viața să crească acolo unde nimic altceva nu ar rezista.<br><br>Hashirama Senju, primul Hokage, putea ridica păduri întregi cu o singură mișcare a mâinii, o putere pe care urmașii lui au folosit-o mereu pentru a vindeca.<br><br>Se spune că fragmentul Senju din Sigiliu a fost ascuns acolo unde clanul vostru și-a lăsat cea mai clară amprentă: un loc unde natura a crescut, tăcută și răbdătoare, peste ceva ce cândva a fost dur și rece ca fierul.<br><br>Localizați-vă în fața sediului Hokage-ului.",
	"44.430, 26.093": "Task1",
	"ANS1": "Drumul vostru începe la Sala Eroilor, locul unde Satul Frunzei își cinstește prima generație de shinobi, cei care au pus piatra de temelie a satului. Trei căi se despart de aici, sub pământ, ca trei chakre diferite pornind din același nucleu. Bătrânii clanului spuneau că, dacă asculți cu atenție liniștea de-acolo, mai poți încă simți ecoul primului jurământ de pace dintre Senju și Uchiha.<br><br>Localizați-vă la prima intrare pe care o întâlniți.",
	"44.434, 26.076": "Task2",
	"ANS2": "De la Sala Eroilor, la 2 stații de metrou, ajungeți la Academia satului, locul unde tinerii shinobi învață jutsu: automatică și sigilare, științele elementelor, mecanica chakrei. Se spune că, sub podeaua Academiei, dorm creaturi de acum milioane de ani, ale căror rămășițe hrănesc pădurile ce vor crește cândva la suprafață.<br><br>Localizați-vă la ieșirea din întuneric.",
	"44.434, 26.055": "Task3",
	"ANS3": "Mergeți acolo unde se află dovada vie a puterii clanului vostru: o linie de fier abandonată de oameni, peste care natura a crescut din nou, fir cu fir, dovadă că viața învinge mereu. Fragmentul Senju e ascuns undeva de-a lungul acestei linii vechi, sub podeaua de lemn care încă păstrează, cu credință, forma șinelor de altădată.<br><br>Localizați-vă acolo unde cei mai rapizi shinobi parcurg cursa pe teren accidentat.",
	"44.431, 26.041": "Task4",
	"ANS4": "Cu fragmentul în siguranță, chiar și shinobii Senju au nevoie de puteri refăcute. Un vechi aliat al clanului ține un mic stand chiar la marginea pădurii de lujeri, unde pâinea caldă și pizza sunt oferite oricărui shinobi obosit care cere frumos.<br><br>Localizați-vă în fața standului.",
	"44.434, 26.035": "Task5",
	"ANS5": "Cu fragmentul Senju bine ascuns în raniță, drumul vostru se îndreaptă spre marginea satului, spre arena examenelor Chunin, parcul din buclă, locul unde cele trei clanuri se vor întâlni din nou.<br><br>Localizați-vă în amfiteatru.",
	"44.420, 26.032": "Când toate cele trei echipe ajung la arenă, fragmentele Senju, Uzumaki și Uchiha sunt puse cap la cap, pentru prima dată de multă vreme. Sigiliul celor Trei Clanuri se reface, iar pentru o clipă, toți cei prezenți simt liniștea unui sat care, în sfârșit, nu mai are nimic de dovedit unul altuia.<br><br>Hokage-ul declară misiunea încheiată, iar sărbătoarea de după e la fel de importantă ca misiunea însăși.<br><br>Întrebarea rămâne: Luca, Petru sau Matei?"
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getResult_Team2(key) {
	key = key.toUpperCase().trim();
	
	const answers = {
    "START": "Clanul Uzumaki nu s-a născut în Konoha. Strămoșii voștri au venit din Satul Vârtejului, distrus cu mult timp în urmă de cei care se temeau de puterea sigiliilor Uzumaki.<br><br>Puținii supraviețuitori au găsit refugiu în Konoha, aduși de o alianță veche și de firele roșii de chakră care leagă clanul vostru de cel al Senju.<br><br>Se spune că, în primii ani, o regină necunoscută majorității shinobilor a oferit clanului vostru un loc sigur, în semn de recunoștință eternă, Uzumaki și-au lăsat cel mai prețios sigiliu chiar în preajma ei.<br><br>Localizați-vă în fața sediului Hokage-ului.",
	"44.430, 26.093": "Task1",
	"ANS1": "Nu orice regină a acceptat să apere un clan de shinobi refugiați fără să pună întrebări. Această regină a făcut-o, și satul i-a păstrat memoria într-o piață care îi poartă numele până azi. Pentru clanul Uzumaki, locul acesta e mai mult decât o intersecție de străzi, e începutul unei prietenii mai vechi decât satul însuși.<br><br>Localizați-vă în centrul pieței.",
	"44.421, 26.090": "Task2",
	"ANS2": "Regina i-a oferit clanului Uzumaki un refugiu secret: un palat elegant, cu candelabre și grădini întinse, unde sigiliile puteau fi desenate în liniște completă, ferite de ochii curioșilor din sat. Se spune că, undeva în apropierea acestui palat, mai există și azi urme din vechiul vârtej Uzumaki, gravate discret într-un colț de fier forjat sau de piatră sculptată.",
	"44.421, 26.086": "Task3",
	"44.421, 26.087": "Task3",
	"ANS3": "De la palat, drumul Uzumaki continuă spre o grădină liniștită, numită după un scriitor visător. Aici, se spune, ultimele runde ale sigiliului vostru au fost desenate în nisip. Până și acum a rămas întipărită forma sigiliului în pământ: 3 cercuri concentrice.<br><br>Localizați-vă lângă apă.",
	"44.414, 26.069": "Task4",
	"44.415, 26.069": "Task4",
	"ANS4": "Chiar și clanul cu cea mai mare rezistență din tot satul are nevoie, la un moment dat, de o gustare caldă. Un mic covrigar din cartierul Ghencea a fost, generații la rând, un prieten discret al clanului Uzumaki. Și încă mai știe rețeta secretă a unui covrig care \"vindecă orice oboseală de shinobi\".<br><br>Localizați-vă în fața simigeriei.",
	"44.415, 26.045": "Task5",
	"ANS5": "Cu fragmentul Uzumaki bine ascuns, ultimul drum al vostru duce spre marginea satului, spre arena examenelor Chunin, parcul din buclă. Locul stabilit de generații pentru reunirea celor trei clanuri.<br><br>Localizați-vă în amfiteatru.",
	"44.420, 26.032": "Când toate cele trei echipe ajung la arenă, fragmentele Senju, Uzumaki și Uchiha sunt puse cap la cap, pentru prima dată de multă vreme. Sigiliul celor Trei Clanuri se reface, iar pentru o clipă, toți cei prezenți simt liniștea unui sat care, în sfârșit, nu mai are nimic de dovedit unul altuia.<br><br>Hokage-ul declară misiunea încheiată, iar sărbătoarea de după e la fel de importantă ca misiunea însăși.<br><br>Întrebarea rămâne: Luca, Petru sau Matei?"
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getResult_Team3(key) {
	key = key.toUpperCase().trim();
	
	const answers = {
    "START": "Clanul Uchiha a fost mereu asociat cu eleganța și puterea din umbră, shinobi care se mișcă prin cele mai select locuri ale satului fără să atragă vreo privire, și care pot vedea prin orice iluzie cu ajutorul Sharingan-ului. În vremurile de glorie ale satului, Uchiha conducea garda militară a Konohei, poliția shinobilor, cei care vegheau ordinea. Se spune că ultimul fragment al Sigiliului, cel al clanului vostru, a fost ascuns cu mult timp în urmă într-un loc special: ascunzătoarea cea mai mare Uchiha, o sală de imagini, unde genjutsu-ul este cel mai puternic.<br><br>Localizați-vă în fața sediului Hokage-ului.",
	"44.430, 26.093": "Task1",
	"ANS1": "Un shinobi Uchiha nu se ascunde neapărat în umbră. Cel mai bun loc pentru a trece neobservat e adesea cel mai select. Misiunea voastră începe la un hotel, chiar lângă reședința conducerii satului, unde un vechi membru al clanului ar fi lăsat primul indiciu, ascuns în privirea nimănui.<br><br>Localizați-vă în fața îngerului.",
	"44.425, 26.077": "Task2",
	"ANS2": "De la hotel, drumul duce spre locul unde disciplina Uchiha s-a născut cu generații în urmă, când clanul vostru conducea garda de ordine a Konohei. Pereții de-acolo încă poartă, în decor, amprenta acelor vremuri: forme geometrice riguroase, culori de uniformă, imagini cu monumentele shinobilor de altădată.<br><br>Poziționați-vă în fața celor trei.",
	"44.430, 26.066": "Task3",
	"ANS3": "De la Academie, drumul duce spre o piață mare de comerț, unde informațiile circulă la fel de rapid ca mărfurile. Shinobii Uchiha și-au folosit mereu rețeaua de informatori pentru a afla exact ce au nevoie, exact atunci când au nevoie. Aici găsim o altă ascunzătoare Uchiha, cu un glob uriaș care să reprezinte puterea Sharingan-ului.<br><br>Poziționați-vă la Far.",
	"44.429, 26.053": "Task4",
	"ANS4": "Cu puterile refăcute, ultimul indiciu vă poartă spre un loc special pentru clanul vostru: o veche sală unde imagini se mișcau pe un ecran uriaș, ca un genjutsu proiectat pentru tot satul să-l vadă, voluntar și fascinat. Sala a fost abandonată multă vreme, dar acum e în plină renaștere. Fragmentul Uchiha e păzit chiar acolo, de o iluzie care poate fi spartă doar de cineva cu Sharingan-ul activat.<br><br>Poziționați-vă în fața sălii.",
	"44.424, 26.045": "Task5",
	"ANS5": "Cu ultimul fragment în mână, clanul Uchiha închide cercul. Misiunea se termină la marginea satului, spre arena examenelor Chunin, parcul din buclă. Acolo unde toate cele trei clanuri se vor întâlni din nou, fără rivalitate veche, doar cu un singur scop comun.<br><br>Localizați-vă în amfiteatru.",
	"44.420, 26.032": "Când toate cele trei echipe ajung la arenă, fragmentele Senju, Uzumaki și Uchiha sunt puse cap la cap, pentru prima dată de multă vreme. Sigiliul celor Trei Clanuri se reface, iar pentru o clipă, toți cei prezenți simt liniștea unui sat care, în sfârșit, nu mai are nimic de dovedit unul altuia.<br><br>Hokage-ul declară misiunea încheiată, iar sărbătoarea de după e la fel de importantă ca misiunea însăși.<br><br>Întrebarea rămâne: Luca, Petru sau Matei?"
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getLocation() {
    if (!navigator.geolocation) {
        document.getElementById("coordinates").textContent =
            "Geolocația nu este suportată de acest browser.";
        return;
    }
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const coordinates = `${lat.toFixed(3)}, ${lon.toFixed(3)}`;
			document.getElementById('inputText').value = coordinates;
        },
        function(error) {
            alert("Nu am putut obține locația.");
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}