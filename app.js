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
	showResult(inputText);
}

function showResult(inputText){
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

function getResult_Team1(key) {
	key = key.toUpperCase().trim();
	
	const coords = [
	  [44.478, 26.118], // FAN Courier Test
	  [44.430, 26.093], // SEH
	  [44.434, 26.076], // Metrou Eroilor
	  [44.434, 26.055], // Metrou Poli
	  [44.431, 26.041], // Parcul liniei - Pumptrack
	  [44.434, 26.035], // Luca Lujerului
	  [44.420, 26.032] // Amfiteatru DTR
	]
	
	key = gasestePereche(key, coords);
	
	const answers = {
	"44.478, 26.118": "FAN COURIER",
    "START": "Clanul Senju a fost dintotdeauna asociat cu pădurile și cu puterea de a face viața să crească acolo unde nimic altceva nu ar rezista.<br><br>Hashirama Senju, primul Hokage, putea ridica păduri întregi cu o singură mișcare a mâinii, o putere pe care urmașii lui au folosit-o mereu pentru a vindeca.<br><br>Se spune că fragmentul Senju din Sigiliu a fost ascuns acolo unde clanul vostru și-a lăsat cea mai clară amprentă: un loc unde natura a crescut, tăcută și răbdătoare, peste ceva ce cândva a fost dur și rece ca fierul.<br><br>Localizați-vă în fața sediului Hokage-ului.",
	"44.430, 26.093": "Pentru ce foloseau urmașii lui Hashirama puterea lui?<br>(substantiv)",
	"VINDECARE": "Drumul vostru începe la Sala Eroilor, locul unde Satul Frunzei își cinstește prima generație de shinobi, cei care au pus piatra de temelie a satului. Trei căi se despart de aici, sub pământ, ca trei chakre diferite pornind din același nucleu. Bătrânii clanului spuneau că, dacă asculți cu atenție liniștea de-acolo, mai poți încă simți ecoul primului jurământ de pace dintre Senju și Uchiha.<br><br>Localizați-vă la prima intrare pe care o întâlniți.",
	"44.434, 26.076": "Ce animale sunt afișate alături de prima generație de shinobi?",
	"CAI": "De la Sala Eroilor ajungeți la școala satului, locul unde tinerii shinobi învață jutsu: automatică și sigilare, științele elementelor, mecanica chakrei. Se spune că, sub podeaua școlii, dorm creaturi de acum milioane de ani, ale căror rămășițe hrănesc pădurile ce vor crește cândva la suprafață.<br><br>Localizați-vă la ieșirea din întuneric.",
	"44.434, 26.055": "La ce facultate a universității credeți că sunt cei mai pricepuți membrii clanului Senju?<br>(denumirea completă)",
	"FACULTATEA DE INGINERIE MEDICALA": "Mergeți acolo unde se află dovada vie a puterii clanului vostru: o linie de fier abandonată de oameni, peste care natura a crescut din nou, fir cu fir, dovadă că viața învinge mereu. Fragmentul Senju e ascuns undeva de-a lungul acestei linii vechi, sub podeaua de lemn care încă păstrează, cu credință, forma șinelor de altădată.<br><br>Localizați-vă acolo unde cei mai rapizi shinobi se întrec pe două roți.",
	"44.431, 26.041": "Ce formă geometrică au foișoarele de lângă traseu?",
	"OCTOGON": "Cu fragmentul în siguranță, chiar și shinobii Senju au nevoie de puteri refăcute. Un vechi aliat al clanului ține un mic stand chiar la marginea pădurii de lujeri, unde pâine fericită, haiducească sau picantă sunt oferite oricărui shinobi obosit care cere frumos.<br><br>Localizați-vă în fața standului.",
	"44.434, 26.035": "Opriți-vă la Luca și luați-vă fiecare ceva bun. După ce ați terminat, răspundeți cu 'YUM YUM'.",
	"YUM YUM": "Cu fragmentul Senju bine ascuns în raniță, drumul vostru se îndreaptă spre marginea satului, spre arena examenelor Chunin, parcul din buclă, locul unde cele trei clanuri se vor întâlni din nou.<br><br>Localizați-vă în amfiteatru.",
	"44.420, 26.032": "Când toate cele trei echipe ajung la arenă, fragmentele Senju, Uzumaki și Uchiha sunt puse cap la cap, pentru prima dată de multă vreme. Sigiliul celor Trei Clanuri se reface, iar pentru o clipă, toți cei prezenți simt liniștea unui sat care, în sfârșit, nu mai are nimic de dovedit unul altuia.<br><br>Hokage-ul declară misiunea încheiată, iar sărbătoarea de după e la fel de importantă ca misiunea însăși.",
	"WRONG_LOCATION": "Nu sunteți unde trebuie."
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getResult_Team2(key) {
	key = key.toUpperCase().trim();
	
	const coords = [
	  [44.430, 26.093], // SEH
	  [44.421, 26.090], // Pta Regina Maria
	  [44.421, 26.086], // Palatul Bragadiru
	  [44.414, 26.069], // Parcul Sebastian
	  [44.415, 26.045], // Matei Ghencea
	  [44.420, 26.032] // Amfiteatru DTR
	]
	
	key = gasestePereche(key, coords);
	
	const answers = {
    "START": "Clanul Uzumaki nu s-a născut în Konoha. Strămoșii voștri au venit din Satul Vârtejului, distrus cu mult timp în urmă de cei care se temeau de puterea sigiliilor Uzumaki.<br><br>Puținii supraviețuitori au găsit refugiu în Konoha, aduși de o alianță veche și de firele roșii de chakră care leagă clanul vostru de cel al Senju.<br><br>Se spune că, în primii ani, o regină necunoscută majorității shinobilor a oferit clanului vostru un loc sigur, în semn de recunoștință eternă, Uzumaki și-au lăsat cel mai prețios sigiliu chiar în preajma ei.<br><br>Localizați-vă în fața sediului Hokage-ului.",
	"44.430, 26.093": "Care clan din Konoha vă este înrudit?",
	"SENJU": "Nu orice regină a acceptat să apere un clan de shinobi refugiați fără să pună întrebări. Această regină a făcut-o, și satul i-a păstrat memoria într-o piață care îi poartă numele până azi. Pentru clanul Uzumaki, locul acesta e mai mult decât o intersecție de străzi, e începutul unei prietenii mai vechi decât satul însuși.<br><br>Localizați-vă în centrul pieței.",
	"44.421, 26.090": "Care este suma numerelor tramvaielor care trec prin această piață?",
	"109": "Regina i-a oferit clanului Uzumaki un refugiu secret: un palat elegant, care îi poartă numele, cu candelabre și grădini întinse, unde sigiliile puteau fi desenate în liniște completă, ferite de ochii curioșilor din sat. Se spune că cei doi îngeri de deasupra palatului țin ascuns vârtejul Uzumaki, gravat discret, acesta se afișează numai celor mai loiali Uzumaki.<br><br>Localizați-vă în fața intrării.",
	"44.421, 26.086": "Cum o cheamă pe regină?",
	"BRAGADIRU": "De la palat, drumul Uzumaki continuă spre o grădină liniștită, numită după un scriitor visător. Aici, se spune, ultimele runde ale sigiliului vostru au fost desenate în nisip înainte de primul mare război shinobi. Până și acum a rămas întipărită forma sigiliului în pământ: 3 cercuri concentrice.<br><br>Localizați-vă lângă apă.",
	"44.414, 26.069": "Observați că din centrul sigiliului pleacă 6 raze, dar războiul shinobi a întrerupt desenul când nu s-au desenat decât 5 raze. Ce se află în capătul razei neterminate?",
	"BISERICA PENTICOSTALA FILADELFIA": "Chiar și clanul cu cea mai mare rezistență din tot satul are nevoie, la un moment dat, de o gustare caldă. Un mic covrigar din cartierul Ghencea a fost, generații la rând, un prieten discret al clanului Uzumaki. Și încă mai știe rețeta secretă a unui covrig care te face să zici MMMMM.<br><br>Localizați-vă în fața simigeriei.",
	"44.415, 26.045": "Opriți-vă la Matei și luați-vă fiecare ceva bun. După ce ați terminat, răspundeți cu 'MMMMM'.",
	"MMMMM": "Cu fragmentul Uzumaki bine ascuns, ultimul drum al vostru duce spre marginea satului, spre arena examenelor Chunin, parcul din buclă. Locul stabilit de generații pentru reunirea celor trei clanuri.<br><br>Localizați-vă în amfiteatru.",
	"44.420, 26.032": "Când toate cele trei echipe ajung la arenă, fragmentele Senju, Uzumaki și Uchiha sunt puse cap la cap, pentru prima dată de multă vreme. Sigiliul celor Trei Clanuri se reface, iar pentru o clipă, toți cei prezenți simt liniștea unui sat care, în sfârșit, nu mai are nimic de dovedit unul altuia.<br><br>Hokage-ul declară misiunea încheiată, iar sărbătoarea de după e la fel de importantă ca misiunea însăși.",
	"WRONG_LOCATION": "Nu sunteți unde trebuie."
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getResult_Team3(key) {
	key = key.toUpperCase().trim();
	
	const coords = [
	  [44.430, 26.093], // SEH
	  [44.425, 26.077], // Marriott
	  [44.430, 26.066], // Academia militara
	  [44.429, 26.053], // Paul Afi
	  [44.424, 26.045], // Favorit
	  [44.420, 26.032] // Amfiteatru DTR
	]
	
	key = gasestePereche(key, coords);
	
	const answers = {
    "START": "Clanul Uchiha a fost mereu asociat cu eleganța și puterea din umbră, shinobi care se mișcă prin cele mai select locuri ale satului fără să atragă vreo privire, și care pot vedea prin orice iluzie cu ajutorul Sharingan-ului.<br><br>În vremurile de glorie ale satului, Uchiha conducea garda militară a Konohei, poliția shinobilor, cei care vegheau ordinea.<br><br>Se spune că ultimul fragment al Sigiliului, cel al clanului vostru, a fost ascuns cu mult timp în urmă într-un loc special: ascunzătoarea cea mai mare Uchiha, o sală de imagini, unde genjutsu-ul este cel mai puternic.<br><br>Localizați-vă în fața sediului Hokage-ului.",
	"44.430, 26.093": "Ce instituție shinobi conducea clanul vostru?",
	"POLITIA": "Un shinobi Uchiha nu se ascunde neapărat în umbră. Misiunea voastră începe la cea mai luxoasă ascunzătoare Uchiha, un hotel, chiar lângă reședința conducerii satului, unde un vechi membru al clanului ar fi lăsat primul indiciu, ascuns în privirea nimănui.<br><br>Localizați-vă în fața îngerului.",
	"44.425, 26.077": "Ce creatură simbolizează eleganța, protecția și calitatea ascunzătorii?<br>(articulat hotărât)",
	"GRIFONUL": "De la hotel, drumul duce spre locul unde disciplina Uchiha s-a născut cu generații în urmă, când clanul vostru conducea garda de ordine a Konohei. Pereții de-acolo încă poartă, în decor, amprenta acelor vremuri: forme geometrice riguroase, culori de uniformă, imagini cu monumentele shinobilor de altădată.<br><br>Poziționați-vă în fața celor trei.",
	"44.430, 26.066": "Care este ideologia pe care Uchiha NU o susține?",
	"FASCISMUL": "De la Academie, drumul duce spre o piață mare de comerț, unde informațiile circulă la fel de rapid ca mărfurile. Shinobii Uchiha și-au folosit mereu rețeaua de informatori pentru a afla exact ce au nevoie, exact atunci când au nevoie. Aici găsim o altă ascunzătoare Uchiha, cu un glob uriaș care să reprezinte puterea Sharingan-ului.<br><br>Poziționați-vă la Far.",
	"44.429, 26.053": "Opriți-vă la Paul și luați-vă fiecare ceva bun. După ce ați terminat, răspundeți cu 'MIAM!'.",
	"MIAM!": "Cu puterile refăcute, ultimul indiciu vă poartă spre un loc special pentru clanul vostru: o veche sală unde imagini se mișcau pe un ecran uriaș, ca un genjutsu proiectat pentru tot satul să-l vadă, voluntar și fascinat. Sala a fost abandonată multă vreme, dar acum e în plină renaștere. Fragmentul Uchiha e păzit chiar acolo, de o iluzie care poate fi spartă doar de cineva cu Sharingan-ul activat.<br><br>Poziționați-vă în fața sălii.",
	"44.424, 26.045": "Ascunse sub pământ sunt proiecții genjutsu. Ce găsiți în interiorul Sharingan-urilor?",
	"NUMERE": "Cu ultimul fragment în mână, clanul Uchiha închide cercul. Misiunea se termină la marginea satului, spre arena examenelor Chunin, parcul din buclă. Acolo unde toate cele trei clanuri se vor întâlni din nou, fără rivalitate veche, doar cu un singur scop comun.<br><br>Localizați-vă în amfiteatru.",
	"44.420, 26.032": "Când toate cele trei echipe ajung la arenă, fragmentele Senju, Uzumaki și Uchiha sunt puse cap la cap, pentru prima dată de multă vreme. Sigiliul celor Trei Clanuri se reface, iar pentru o clipă, toți cei prezenți simt liniștea unui sat care, în sfârșit, nu mai are nimic de dovedit unul altuia.<br><br>Hokage-ul declară misiunea încheiată, iar sărbătoarea de după e la fel de importantă ca misiunea însăși.",
	"WRONG_LOCATION": "Nu sunteți unde trebuie."
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
			showResult(coordinates);
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