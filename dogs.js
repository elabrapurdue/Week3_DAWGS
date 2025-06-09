const allDogs = [
    { dogName: "Abby", breed: "SharPei", age: 7 },
    { dogName: "Akino", breed: "Husky", age: 5 },
    { dogName: "Barney", breed: "Pit Bull", age: 3 },
    { dogName: "Charlie", breed: "Beagle", age: 6 },
    { dogName: "Daisy", breed: "Labrador", age: 8 },
    { dogName: "Ella", breed: "Golden Retriever", age: 4 },
    { dogName: "Frankie", breed: "Bulldog", age: 9 },
    { dogName: "Ginger", breed: "Terrier", age: 2 },
    { dogName: "Harley", breed: "Boxer", age: 10 },
    { dogName: "Izzy", breed: "Corgi", age: 5 }
];

function filterDogs() {
    const minAge = parseInt(document.getElementById("minAge").value);
    const selectedDogs = [];

    allDogs.forEach(dog => {
        if (dog.age > minAge) {
            selectedDogs.push(dog);
        }
    });

    const area = document.querySelector(".resultArea");
    if (selectedDogs.length === 0) {
        area.innerHTML = "<p>No dogs found older than " + minAge + " years.</p>";
        return;
    }

    // Format display
    let resultHTML = "<h2>Dogs older than " + minAge + ":</h2><ul>";
    selectedDogs.forEach(dog => {
        resultHTML += `<li><strong>${dog.dogName}</strong> — ${dog.breed}, ${dog.age} years old</li>`;
    });
    resultHTML += "</ul>";

    area.innerHTML = resultHTML;
}
