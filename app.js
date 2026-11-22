// Coordonatele locațiilor din traseu: [latitudine, longitudine]
// Exemplu: [44.430, 26.093], // Nume locație
const coords = [
];

// Răspunsurile Liderului de buzunar.
// Cheile sunt textul introdus (cu majuscule) sau coordonatele unei locații ("44.430, 26.093").
const answers = {
  "START": "Bun venit! Aici începe aventura.",
  "WRONG_LOCATION": "Nu sunteți unde trebuie.",
  "HELP": "Scrieți HELP 1 pentru a primi răspunsul la întrebarea 1.<br>La fel pentru 2, 3, ...<br>Folosiți la nevoie."
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

function getResult(key) {
  key = key.toUpperCase().trim();
  key = gasestePereche(key, coords);

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
