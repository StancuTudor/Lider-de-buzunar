let chosenValue = null;
let teams = ["Nara", "Uzumaki", "Uchiha"];
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
  
  resultDiv.textContent = result; // Display the result
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
    "SALUT": "Bună!",
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getResult_Team2(key) {
	key = key.toUpperCase().trim();
	
	const answers = {
    "SALUT": "Bună!",
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getResult_Team3(key) {
	key = key.toUpperCase().trim();
	
	const answers = {
    "SALUT": "Bună!",
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

            const coordinates = `${lat}, ${lon}`;
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