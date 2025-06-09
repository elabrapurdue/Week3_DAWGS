const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

function showInfo() {
    let userInput = document.querySelector("#petNum").value;
    let petIndex = parseInt(userInput) - 1;

    if (isNaN(petIndex) || petIndex < 0 || petIndex >= petsData.length) {
        document.querySelector(".selectedPetInfo").textContent = "Please enter a valid number between 1 and " + petsData.length + ".";
        return;
    }

    let pet = petsData[petIndex];
    let petType = (pet.breed === "Persian") ? "cat" :
                  (pet.breed.includes("Python")) ? "snake" :
                  (pet.breed.includes("dog") || pet.breed.includes("Dalmation") || pet.breed.includes("Corgi")) ? "dog" :
                  "pet";

    let message = `${pet.petName} the ${petType} is ${pet.age} years old. This ${petType} weighs ${pet.weightInKilos} kilos and is a ${pet.breed} breed.`;
    document.querySelector(".selectedPetInfo").textContent = message;
}
