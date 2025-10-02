let chosenValue = null;
let teams = ["Lupișori", "Temerari 5-6", "Temerari 7-8", "Exploratori", "Seniori"];

window.onload = () => {
  const buttonsContainer = document.getElementById("buttons");
  const chosenLabel = document.getElementById("chosenLabel");
  const mainContainer = document.getElementById("mainContainer");
  const buttonSelection = document.getElementById("buttonSelection");

  // Creează cele 5 butoane
  for (let i = 0; i < 5; i++) {
    let btn = document.createElement("button");
    btn.textContent = teams[i];
    btn.addEventListener("click", () => {
      chosenValue = teams[i];
      chosenLabel.textContent = "Echipa: " + chosenValue;

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
	result = getResult_Lupisori(inputText);
  }
  else if (chosenValue == teams[1]){
	result = getResult_Temerari56(inputText);
  }
  else if (chosenValue == teams[2]){
	result = getResult_Temerari78(inputText);
  }
  else if (chosenValue == teams[3]){
	result = getResult_Exploratori(inputText);
  }
  else if (chosenValue == teams[4]){
	result = getResult_Seniori(inputText);
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

function getResult_Lupisori(key) {
	key = key.toUpperCase().trim();
	
	const answers = {
    "SALUT": "Bună, lupișorule!",
	"INSULA BROWNSEA": "Care lider s-a tuns chel vara aceasta?",
	"MIHNEA": "Super! Acum du-te la Andreea și spune-i liderul + răspunsul la întrebarea anterioară",
	"ALAMUT": "Care lider practică karate de performanță?",
	"BIANCA": "Super! Acum du-te la Alex și spune-i liderul + răspunsul la întrebarea anterioară",
	"22 FEBRUARIE": "Cărui lider îi place foarte mult culoarea mov?",
	"ANDREEA": "Super! Acum du-te la Erika și spune-i liderul + răspunsul la întrebarea anterioară",
	"YETI": "Care lider este actor?",
	"IONCI": "Super! Acum du-te la Laura și spune-i liderul + răspunsul la întrebarea anterioară",
	"GATA ORICAND": "Care lider a avut cel mai lung păr?",
	"FLORENTINA": "Super! Acum du-te la Elena și spune-i liderul + răspunsul la întrebarea anterioară",
	"DUMINICA": "Care lider este șeful de centru?",
	"LEO": "Super! Acum du-te la Tudor și spune-i liderul + răspunsul la întrebarea anterioară",
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getResult_Temerari56(key) {
	key = key.toUpperCase().trim();
	
	const answers = {
    "SALUT": "Bună, temerarule!",
	"INSULA BROWNSEA": "Care lider vorbește portugheză?",
	"TAVI": "Super! Acum du-te la Alex și spune-i liderul + răspunsul la întrebarea anterioară",
	"FLOAREA DE CRIN": "Care lider este înscris la doctorat?",
	"INGRID": "Super! Acum du-te la Andreea și spune-i liderul + răspunsul la întrebarea anterioară",
	"CARTEA JUNGLEI": "Cărui lider îi rimează numele de familie cu sunetul raței?",
	"DIANA": "Super! Acum du-te la Erika și spune-i liderul + răspunsul la întrebarea anterioară",
	"YETI": "Care lider ar putea fi opera scriitorului Constantin Chiriță?",
	"ALEX": "Super! Acum du-te la Laura și spune-i liderul + răspunsul la întrebarea anterioară",
	"ALAMUT": "Super! Din păcate această întrebare nu are vreun lider alocat. Mergi mai departe!",
	"DUMINICA": "Care lider este șeful de centru?",
	"LEO": "Super! Acum du-te la Tudor și spune-i liderul + răspunsul la întrebarea anterioară",
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getResult_Temerari78(key) {
	key = key.toUpperCase().trim();
	
	const answers = {
    "SALUT": "Bună, temerarule!",
	"ECATERINA TEODOROIU": "Care lider a lucrat la toate cele 4 ramuri?",
	"RAZVAN": "Super! Acum du-te la Laura și spune-i liderul + răspunsul la întrebarea anterioară",
	"SCOUTING FOR BOYS": "Care este cel mai tânăr lider din centru?",
	"ANDREEA": "Super! Acum du-te la Alex și spune-i liderul + răspunsul la întrebarea anterioară",
	"FLOAREA DE CRIN": "Care lider are cel mai comun nume de familie din România?",
	"LAURA": "Super! Acum du-te la Erika și spune-i liderul + răspunsul la întrebarea anterioară",
	"CHILE": "Care lider a venit cu mașina în campul de lupișori vara aceasta?",
	"GEORGIANA": "Super! Acum du-te la Andreea și spune-i liderul + răspunsul la întrebarea anterioară",
	"22 FEBRUARIE": "Ce lider băiat au întâlnit pentru prima dată temerarii în camp?",
	"GABI": "Super! Acum du-te la Elena și spune-i liderul + răspunsul la întrebarea anterioară",
	"DUMINICA": "Care lider este șeful de centru?",
	"LEO": "Super! Acum du-te la Tudor și spune-i liderul + răspunsul la întrebarea anterioară",
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getResult_Exploratori(key) {
	key = key.toUpperCase().trim();
	
	const answers = {
    "SALUT": "Bună, exploratorule!",
	"ECATERINA TEODOROIU": "Cărui lider îi place mult matematica?",
	"TUDOR": "Super! Acum du-te la Laura și spune-i liderul + răspunsul la întrebarea anterioară",
	"FLOAREA DE CRIN": "Care lider va pleca în Polonia cu Erasmus?",
	"MIRUNA": "Super! Acum du-te la Erika și spune-i liderul + răspunsul la întrebarea anterioară",
	"CHILE": "Cărui lider îi rimează numele cu al unui animal lider de la lupișori?",
	"ERIKA": "Super! Acum du-te la Andreea și spune-i liderul + răspunsul la întrebarea anterioară",
	"CARTEA JUNGLEI": "Care lider are numerele la mașină BMA?",
	"ADI": "Super! Acum du-te la Elena și spune-i liderul + răspunsul la întrebarea anterioară",
	"YETI": "Care lider are o cicatrice sub ochi?",
	"ELENA": "Super! Acum du-te la Alex și spune-i liderul + răspunsul la întrebarea anterioară",
	"DUMINICA": "Care lider este șeful de centru?",
	"LEO": "Super! Acum du-te la Tudor și spune-i liderul + răspunsul la întrebarea anterioară",
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}

function getResult_Seniori(key) {
	key = key.toUpperCase().trim();
	
	const answers = {
    "SALUT": "Bună, seniorule!",
	"ECATERINA TEODOROIU": "Care lider face parte dintr-o echipă internațională?",
	"ANCA": "Super! Acum du-te la Laura și spune-i liderul + răspunsul la întrebarea anterioară",
	"CARTEA JUNGLEI": "Care lider are cel mai puțin păr în cap?",
	"EMI": "Super! Acum du-te la Elena și spune-i liderul + răspunsul la întrebarea anterioară",
	"FLOAREA DE CRIN": "Super! Din păcate această întrebare nu are vreun lider alocat. Mergi mai departe!",
	"CHILE": "Super! Din păcate această întrebare nu are vreun lider alocat. Mergi mai departe!",
	"YETI": "Super! Din păcate această întrebare nu are vreun lider alocat. Mergi mai departe!",
	"DUMINICA": "Care lider este șeful de centru?",
	"LEO": "Super! Acum du-te la Tudor și spune-i liderul + răspunsul la întrebarea anterioară",
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Nu știu să răspund.";
}