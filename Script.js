let student = [
  { id: "1", name: "sumaira" },
  { id: "2", name: "sumairawis" },
  { id: "3", name: "sumairajsos" },
  { id: "4", name: "sumairaioop" },
  { id: "5", name: "sumairauuii" },
];

const resule = student.map((curr) => {
  return curr.name;
});

// Find the div where the names will be displayed
const studentNamesDiv = document.getElementById("studentNames");

// Display the names on the screen
studentNamesDiv.innerHTML = resule.join("<br>");
